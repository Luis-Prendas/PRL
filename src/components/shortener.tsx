'use client'

import { type FormEvent, useState } from 'react'
import { ShortenedLink } from './shortenedLink'
import { Pill } from './pill'
import { Spinner } from './spinner'
import { FaRegCheckCircle } from 'react-icons/fa'
import { CgDanger } from 'react-icons/cg'
import copy from 'clipboard-copy'
import { type Database } from '@/types/supabase.database'

export function Shortener () {
  const [input, setInput] = useState('')
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<Database['public']['Tables']['TEMPORARY_PUBLIC_SHORTENER']['Row'] | null>(null)
  const [copied, setCopied] = useState<boolean>(false)
  const [loading, setLoadind] = useState<boolean>(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoadind(true)
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
      setError(false)
    } else {
      setError(true)
    }
    setLoadind(false)
  }

  const handleCopyToClipboard = (textToCopy: string) => {
    void copy(textToCopy)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-4 justify-center items-center">
        <input className="text-black dark:text-white py-2 px-4 rounded-lg w-52 md:w-96 shadow hover:scale-105 transition border border-neutral-300" type="text" placeholder='https://www.example.com' value={input} onChange={(e) => { setInput(e.target.value) }} />
        <button type="submit" className="w-32 py-2 px-4 bg-gradient-to-tr from-fuchsia-600 to-rose-600 text-white rounded-lg shadow hover:scale-105 transition dark:from-indigo-600 dark:to-purple-600">Acortar</button>
      </form>
      <section className='flex flex-col gap-8'>
        {(data != null) && <ShortenedLink data={data} handleCopyToClipboard={handleCopyToClipboard} />}
        {copied && <Pill variantType="success" className='absolute top-6 right-6'><FaRegCheckCircle className="text-xl" /> Copiado al portapapeles!</Pill>}
        {error && <Pill variantType="danger" className='absolute top-6 right-6'><CgDanger className="text-2xl" /> Revisa el enlace e inténtalo de nuevo.</Pill>}
        {loading && <Spinner />}
      </section>
    </>
  )
}
