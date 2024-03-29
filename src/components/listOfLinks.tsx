'use client'

import { supabase } from '@/services/supabase.conect'
import { type Database } from '@/types/supabase.database'
import { useEffect, useState } from 'react'
import { FaCopy, FaRegCheckCircle } from 'react-icons/fa'
import { useToast } from './ui/use-toast'
import { Toaster } from './ui/toaster'

export function ListOfLinks () {
  const { toast } = useToast()
  const [links, setLinks] = useState<Array<Database['public']['Tables']['TEMPORARY_PUBLIC_SHORTENER']['Row']> | null>(null)

  useEffect(() => {
    const aa = async () => {
      const { data } = await supabase
        .from('TEMPORARY_PUBLIC_SHORTENER')
        .select('*')

      setLinks(data)
    }

    aa()
  }, [])

  return (
    <div className="overflow-x-auto max-h-96 flex flex-col gap-8">
      <Toaster />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Linkk original
            </th>
            <th scope="col" className="px-6 py-3">
              Link acortado
            </th>
            <th scope="col" className="px-6 py-3">
              Acción
            </th>
          </tr>
        </thead>
        <tbody>
          {links?.map(link => (
            <tr key={link.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="max-w-xs truncate px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {link.original_link}
              </th>
              <td className="px-6 py-4">
                {link.link_shortened}
              </td>
              <td className="px-6 py-4">
                <button onClick={() => {
                  toast({
                    variant: 'succes',
                    title: 'CIPIADO',
                    description: <><FaRegCheckCircle className="text-xl" /> Copiado al portapapeles!</>
                  })
                }} className="py-2 px-4 bg-gradient-to-tr from-fuchsia-600 to-rose-600 text-white dark:from-indigo-600 dark:to-purple-600 rounded-lg shadow hover:scale-105 transition">
                  <FaCopy />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
