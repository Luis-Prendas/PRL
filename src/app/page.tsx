"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"
import { GifsTypes } from "../../types/supabase"

export default function Home() {
  const [input, setInput] = useState('')
  const [data, setData] = useState<GifsTypes | null>(null)

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

  return (
    <main className='w-full pt-40 flex justify-center items-center flex-col gap-8'>
      <form onSubmit={handleSubmit}>
        <input className="text-black" type="text" placeholder='https://www.example.com' value={input} onChange={(e) => setInput(e.target.value)} />
      </form>
      <section className="flex flex-col justify-center items-center gap-6">
        {!data ? null : (
          <>
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="text-amber-800 bg-amber-200 py-2 px-4 rounded-full">
                Original link
              </span>
              <Link href={data.original_link} target="_blank">
                {data.original_link}
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <span className="text-amber-800 bg-amber-200 py-2 px-4 rounded-full">
                Shortened link
              </span>
              <Link href={data.link_shortened} target="_blank">
                {data.link_shortened}
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  )
}
