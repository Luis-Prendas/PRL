import { type Database } from '@/types/supabase.database'
import Link from 'next/link'
import { FaCopy, FaExternalLinkSquareAlt } from 'react-icons/fa'

type HandleCopyToClipboard = (arg1: string) => void

export function ShortenedLink ({ data, handleCopyToClipboard }: { data: Database['public']['Tables']['TEMPORARY_PUBLIC_SHORTENER']['Row'], handleCopyToClipboard: HandleCopyToClipboard }) {
  return (
    <section className="flex justify-center items-center gap-4 text-center">
      <input value={data.link_shortened} className="text-black dark:text-white py-2 px-4 rounded-lg w-52 md:w-96 shadow hover:scale-105 transition border border-neutral-300" readOnly />
      <div className="flex gap-4 text-2xl">
        <button onClick={() => { handleCopyToClipboard(data.link_shortened) }} className="w-12 py-2 px-4 pr-10 bg-gradient-to-tr from-fuchsia-600 to-rose-600 text-white rounded-lg dark:from-indigo-600 dark:to-purple-600 shadow hover:scale-105 transition">
          <FaCopy />
        </button>
        <Link href={data.link_shortened} target="_blank" className="w-12 py-2 px-4 pr-10 bg-gradient-to-tr from-fuchsia-600 to-rose-600 text-white rounded-lg dark:from-indigo-600 dark:to-purple-600 shadow hover:scale-105 transition">
          <FaExternalLinkSquareAlt />
        </Link>
      </div>
    </section>
  )
}
