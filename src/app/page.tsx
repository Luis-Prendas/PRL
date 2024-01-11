"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"
import { GifsTypes } from "../../types/supabase"
import { FaCopy } from "react-icons/fa"
import { FaExternalLinkSquareAlt } from "react-icons/fa"
import copy from 'clipboard-copy'

export default function Home() {
  const [input, setInput] = useState('')
  const [data, setData] = useState<GifsTypes | null>(null)
  const [copied, setCopied] = useState<boolean>(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const response = await fetch(`api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ originalLink: input }),
    });

    const res = await response.json() as GifsTypes

    setData(res)
  }

  const handleCopyToClipboard  = (textToCopy: string) => {
    copy(textToCopy)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <main className='w-full h-full flex items-center flex-col gap-8'>
      <form onSubmit={handleSubmit} className="flex gap-4 justify-center items-center">
        <input className="text-black py-2 px-4 rounded-lg w-72 md:w-96 shadow-lg hover:scale-105 transition border border-neutral-300" type="text" placeholder='https://www.example.com' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" className="w-32 py-2 px-4 bg-gradient-to-tr from-fuchsia-600 to-rose-600 text-white rounded-lg shadow-lg hover:scale-105 transition">Acortar</button>
      </form>
      <section className="flex flex-col justify-center items-center gap-4 text-center">

        {!data ? null : (
          <div className="flex justify-center items-center gap-4">
            <input value={data.link_shortened} className="text-black py-2 px-4 rounded-lg w-72 md:w-96 shadow-lg hover:scale-105 transition border border-neutral-300" readOnly />
            <div className="flex gap-4 text-2xl">
              <button onClick={() => handleCopyToClipboard(data.link_shortened)} className="w-12 py-2 px-4 pr-10 bg-gradient-to-tr from-fuchsia-600 to-rose-600 text-white rounded-lg shadow-lg hover:scale-105 transition">
                <FaCopy />
              </button>
              <Link href={data.link_shortened} target="_blank" className="w-12 py-2 px-4 pr-10 bg-gradient-to-tr from-fuchsia-600 to-rose-600 text-white rounded-lg shadow-lg hover:scale-105 transition">
                <FaExternalLinkSquareAlt />
              </Link>
            </div>
          </div>
        )}
      </section>
      {copied && <p>Copiado al portapapeles!</p>}
    </main>
  )
}
