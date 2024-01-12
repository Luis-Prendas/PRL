import { Pill } from '@/components/pill'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import { FaRegStar } from 'react-icons/fa'
import { MdContentCut } from 'react-icons/md'

export default function Home () {
  return (
    <>
      <article className='flex items-center flex-col gap-8'>
        <Pill variantType='amber'>
          <MdContentCut /> <h1>Enlaces ilimitados y slugs personalizados</h1>
        </Pill>
        <h2 className='text-5xl bg-gradient-to-r shadow from-emerald-400 to-sky-500 text-white rounded-md px-4 pb-4 pt-3 font-medium dark:from-green-600 dark:to-indigo-600'>
          ¡Acorta tus links gratis y rápido!
        </h2>
        <p className='max-w-xs md:max-w-2xl text-center text-balance'>
          Hagamos que compartirlos sea más fácil que nunca. Simplifica tus URL sin perder la esencia de tu mensaje. Ya no te preocupes por enlaces largos que ocupan espacio y se ven poco atractivos. Con esta herramienta de acortamiento de enlaces, compártelas de manera concisa. ¡Haz que tu experiencia en línea sea más sencilla y efectiva, acorta tus enlaces ahora mismo!
        </p>
        <div className='flex gap-8'>
          <Link href='/dash' className='flex items-center gap-2 dark:text-white dark:hover:text-slate-300 transition text-slate-950 hover:text-slate-600'>
            <IoRocketOutline /> Usar la herramienta
          </Link>
          <Link href='https://github.com/Luis-Prendas/PRL' target='_blank' className='flex items-center gap-2 dark:text-white dark:hover:text-slate-300 transition text-slate-950 hover:text-slate-600'>
            <FaRegStar /> Estrella en GitHub
          </Link>
        </div>
      </article>
    </>
  )
}
