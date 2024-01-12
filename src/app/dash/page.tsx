import { IoRocketOutline } from 'react-icons/io5'
import { ListOfLinks } from '@/components/listOfLinks'
import { Shortener } from '@/components/shortener'

export default function ApplicationPage () {
  return (
    <>
      <article className="flex flex-col gap-8 items-center">
        <IoRocketOutline className='text-8xl text-slate-400' />
        <h2 className='dark:text-white text-4xl font-bold text-slate-950'>¡Vamos a crear tu enlace!</h2>
      </article>
      <article className='flex flex-col gap-8'>
        <Shortener />
      </article>
      <article className='flex gap-4 flex-col items-center'>
        <h2 className='dark:text-white font-bold text-2xl text-slate-950'>Lista de links acortados</h2>
        <ListOfLinks />
      </article>
    </>
  )
}
