'use client'

import { type FormEvent, useState } from 'react'
import { ShortenedLink } from './shortenedLink'
import copy from 'clipboard-copy'
import { type Database } from '@/types/supabase.database'
import { useToast } from './ui/use-toast'
import { Toaster } from './ui/toaster'
import { CgDanger } from 'react-icons/cg'
import { FaRegCheckCircle } from 'react-icons/fa'

export function Shortener () {
  const { toast } = useToast()
  const [input, setInput] = useState<string>('')
  const [data, setData] = useState<Database['public']['Tables']['TEMPORARY_PUBLIC_SHORTENER']['Row'] | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const response = await fetch('api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ originalLink: input })
    })

    const res = await response.json() as Database['public']['Tables']['TEMPORARY_PUBLIC_SHORTENER']['Row']

    if (res.link_shortened !== undefined) {
      setData(res)
    } else {
      toast({
        variant: 'destructive',
        title: 'ERROR',
        description: <><CgDanger className="text-2xl" /> Revisa el enlace e inténtalo de nuevo.</>
      })
    }
  }

  const handleCopyToClipboard = (textToCopy: string) => {
    copy(textToCopy)
    toast({
      variant: 'succes',
      title: 'CIPIADO',
      description: <><FaRegCheckCircle className="text-xl" /> Copiado al portapapeles!</>
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-4 justify-center items-center">
        <input className="text-black dark:text-white py-2 px-4 rounded-lg w-52 md:w-96 shadow hover:scale-105 transition border border-neutral-300" type="text" placeholder='https://www.example.com' value={input} onChange={(e) => { setInput(e.target.value) }} />
        <button type="submit" className="w-32 py-2 px-4 bg-gradient-to-tr from-fuchsia-600 to-rose-600 text-white rounded-lg shadow hover:scale-105 transition dark:from-indigo-600 dark:to-purple-600">Acortar</button>
      </form>
      <section className='flex flex-col gap-8'>
        {(data != null) && <ShortenedLink data={data} handleCopyToClipboard={handleCopyToClipboard} />}
        <Toaster />
      </section>
    </>
  )
}
