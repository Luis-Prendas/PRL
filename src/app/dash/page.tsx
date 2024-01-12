import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import { MdContentCut } from 'react-icons/md'
import { FaLinkSlash } from 'react-icons/fa6'
import { FaEye } from 'react-icons/fa'

export default function ApplicationPage () {
  return (
    <>
      <article className="flex flex-col gap-8 items-center">
        <IoRocketOutline className='text-8xl text-slate-400' />
        <h2 className='dark:text-white text-4xl font-bold text-slate-950'>¡Vamos a crear tu enlace!</h2>
        <div className='flex gap-8'>
          <Link
            href='/'
            className="flex items-center gap-2 py-2 px-4 bg-gradient-to-tr from-fuchsia-600 to-rose-600 text-white rounded-lg shadow hover:scale-105 transition dark:from-indigo-600 dark:to-purple-600"
          ><MdContentCut /> Acortar</Link>
          <Link
            href='/'
            className="flex items-center gap-2 py-2 px-4 bg-gradient-to-tr from-fuchsia-600 to-rose-600 text-white rounded-lg shadow hover:scale-105 transition dark:from-indigo-600 dark:to-purple-600"
          ><FaLinkSlash /> Desacortar</Link>
        </div>
        <div className='flex gap-4 flex-col items-center'>
          <h2 className='dark:text-white font-bold text-2xl text-slate-950'>Lista de links acortados</h2>
          <Link
            href='/list'
            className="flex items-center gap-2 py-2 px-4 bg-gradient-to-tr from-fuchsia-600 to-rose-600 text-white rounded-lg shadow hover:scale-105 transition dark:from-indigo-600 dark:to-purple-600"
          ><FaEye /> Ver todos</Link>
        </div>
      </article>

    </>
  )
}
