"use client"

import { FormEvent, useState } from "react"
import { GifsTypes } from "../../types/supabase"
import copy from 'clipboard-copy'
import { CgDanger } from "react-icons/cg"
import { FaRegCheckCircle } from "react-icons/fa";
import { Spinner } from "@/components/spinner"
import { Pill } from "@/components/pill"
import { ShortenedLink } from "@/components/shortenedLink"

export default function Home() {
  const [input, setInput] = useState('')
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<GifsTypes | null>(null)
  const [copied, setCopied] = useState<boolean>(false)
  const [loading, setLoadind] = useState<boolean>(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoadind(true)
    const response = await fetch(`api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ originalLink: input }),
    });

    const res = await response.json() as GifsTypes

    if (res.link_shortened) {
      setData(res)
      setError(false)
    } else {
      setError(true)
    }
    setLoadind(false)
  }

  const handleCopyToClipboard = (textToCopy: string) => {
    copy(textToCopy)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <main className='w-full h-full flex items-center flex-col gap-8'>
      <form onSubmit={handleSubmit} className="flex gap-4 justify-center items-center">
        <input className="text-black py-2 px-4 rounded-lg w-52 md:w-96 shadow hover:scale-105 transition border border-neutral-300" type="text" placeholder='https://www.example.com' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" className="w-32 py-2 px-4 bg-gradient-to-tr from-fuchsia-600 to-rose-600 text-white rounded-lg shadow hover:scale-105 transition">Acortar</button>
      </form>
      {data && <ShortenedLink data={data} handleCopyToClipboard={handleCopyToClipboard} />}
      {copied && <Pill variantType="success"><FaRegCheckCircle className="text-xl" /> Copiado al portapapeles!</Pill>}
      {error && <Pill variantType="danger"><CgDanger className="text-2xl" /> Revisa el enlace e inténtalo de nuevo.</Pill>}
      {loading && <Spinner />}
    </main>
  )
}
