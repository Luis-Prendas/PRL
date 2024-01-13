import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { ChangeTheme } from './changeTheme'

export function Nav () {
  return (
    <nav className='flex justify-center bg-white shadow w-full p-4 dark:bg-transparent'>
      <div className='w-full max-w-screen-lg flex justify-between items-center'>
        <h1 className='hover:scale-105 transition text-2xl font-semibold py-2 px-4 bg-gradient-to-tr from-fuchsia-600 to-rose-600 text-white rounded-lg shadow dark:from-indigo-600 dark:to-purple-600'>
          <Link href='/'>
            PRL
          </Link>
        </h1>
        <ul className='flex gap-4 justify-center items-center'>
          <li>
            <Link href='https://github.com/Luis-Prendas/PRL' target='_blank'>
              <FaGithub className='text-2xl opacity-30 hover:opacity-100 hover:scale-105 transition dark:text-slate-200' />
            </Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/luisprendasdev/' target='_blank'>
              <FaLinkedin className='text-2xl opacity-30 hover:opacity-100 hover:scale-105 transition dark:text-slate-200' />
            </Link>
          </li>
          <li>
            <Link href='mailto:luisprendas.dev@gmail.com' target='_blank'>
              <SiGmail className='text-2xl opacity-30 hover:opacity-100 hover:scale-105 transition dark:text-slate-200' />
            </Link>
          </li>
          <li className='ml-8'>
            <ChangeTheme />
          </li>
        </ul>
      </div>
    </nav>
  )
}
