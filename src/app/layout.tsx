import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { FaLinkSlash } from "react-icons/fa6"
import { siteConfig } from '../../config/site'

const NEXT_LINK = process.env.NEXT_LINK

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: [
    {
      url: '/logo.svg',
      href: '/logo.svg'
    }
  ],
  openGraph: {
    title: 'PRL - Acortador de links!',
    url: NEXT_LINK,
    siteName: 'PRL',
    images: [
      {
        url: `${NEXT_LINK}api/og?title=PRL`, // Dynamic og route
        width: 800,
        height: 600,
      },
      {
        url: `${NEXT_LINK}api/og?title=PRL`, // Dynamic og route
        width: 1800,
        height: 1600,
        alt: 'PLR - Acortador de links coptura'
      },
    ],
    locale: 'es_CR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRL',
    description: siteConfig.description,
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: [`${NEXT_LINK}api/og?title=PRL`], // Must be an absolute URL
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} text-neutral-700 pt-28 bg-slate-100 flex items-center flex-col gap-8`}>
        <nav className='bg-white shadow absolute top-0 left-0 w-full flex justify-center p-4'>
          <div className='w-full max-w-screen-lg flex justify-between items-center'>
            <h1 className='hover:scale-105 transition md:text-3xl text-xl font-semibold py-2 px-4 bg-gradient-to-tr from-fuchsia-600 to-rose-600 text-white rounded-lg shadow'>
              <Link href='/'>
                PRL
              </Link>
            </h1>
            <ul className='flex gap-4 justify-center items-center'>
              <li>
                <Link href='https://github.com/Luis-Prendas' target='_blank'>
                  <FaGithub className='text-3xl opacity-30 hover:opacity-100 hover:scale-105 transition' />
                </Link>
              </li>
              <li>
                <Link href='https://www.linkedin.com/in/luisprendasdev/' target='_blank'>
                  <FaLinkedin className='text-3xl opacity-30 hover:opacity-100 hover:scale-105 transition' />
                </Link>
              </li>
              <li>
                <Link href='mailto:luisprendas.dev@gmail.com' target='_blank'>
                  <SiGmail className='text-3xl opacity-30 hover:opacity-100 hover:scale-105 transition' />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='flex items-center justify-center flex-col gap-4 md:gap-6'>
          <div className='flex gap-2 px-4 pb-3 pt-4 items-center border shadow bg-gradient-to-r from-emerald-100 to-sky-100 text-sky-600 rounded-full uppercase'>
            <FaLinkSlash /> <h1>Acortador de links</h1>
          </div>
          <h2 className=' text-3xl md:text-6xl text-center font-medium'>
            Código Abierto y Gratis
          </h2>
          <div className='text-3xl md:text-6xl bg-gradient-to-r shadow from-emerald-400 to-sky-500 text-white rounded-md px-4 pb-2 pt-3'>
            Pruébalo Ahora!
          </div>
        </div>
        {children}
        <footer className='text-sm mb-6 text-neutral-500 max-w-xs md:max-w-2xl text-center'>
          <p>
            Este servicio de acortado de enlaces está hecho por hobby y tiene la finalidad de simplificar la compartición de URL. No me hago responsable del contenido de los enlaces acortados ni respaldo sus destinos.
          </p>
        </footer>
      </body>
    </html>
  )
}
