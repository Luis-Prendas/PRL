import { FaCopy } from 'react-icons/fa'
import { type ShortenedLinkTypes } from '../../../types/supabase'
import { supabase } from '@/services/supabase.conect'

export default async function ListOfLinksPage () {
  const listOfLinks = await supabase
    .from('TEMPORARY_PUBLIC_SHORTENER')
    .select('*')
    .then(
      async ({ data }) =>
        await (data as unknown as Promise<ShortenedLinkTypes[]>)
    )

  return (
    <article className="flex flex-col justify-center items-center gap-8">
      <h2 className='dark:text-white font-bold text-6xl text-slate-950'>Lista de links acortados 🚀</h2>
      <table className="text-sm text-left dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-slate-200 dark:bg-gray-800">
              Link Original
            </th>
            <th scope="col" className="px-6 py-3">
              Link Acortado
            </th>
            <th scope="col" className="px-6 py-3 bg-slate-200 dark:bg-gray-800">
              Veces usado
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Id
            </th>
            <th scope="col" className="px-6 py-3 bg-slate-200 dark:bg-gray-800">
              Copiar
            </th>
          </tr>
        </thead>
        <tbody>
          {listOfLinks.map(link => (
            <tr key={link.id} className="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" className="max-w-xs truncate px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-slate-200 dark:text-white dark:bg-gray-800">
                {link.original_link}
              </th>
              <td className="px-6 py-4">
                {link.link_shortened}
              </td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-slate-200 dark:text-white dark:bg-gray-800">
                {link.used}
              </th>
              <td className="px-6 py-4">
                {link.shortId}
              </td>
              <td className="px-6 py-4 bg-slate-200 dark:bg-gray-800 flex justify-center items-center">
                <button>
                  <FaCopy className='text-2xl dark:text-white dark:hover:text-slate-400 transition text-slate-600 hover:text-slate-950' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  )
}
