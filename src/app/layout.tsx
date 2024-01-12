import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/nav'
import { Provider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PRL',
  description: '¡Bienvenido a nuestro servicio de acortador de enlaces! Simplificamos tus URLs largas en enlaces más compactos y fáciles de compartir. Con nuestra herramienta rápida y fácil de usar, puedes generar enlaces acortados con un solo clic. Además, mantén un seguimiento de la actividad de tus enlaces gracias a nuestras estadísticas detalladas. Aprovecha la conveniencia y eficiencia al compartir enlaces con nuestro servicio de acortador. ¡Comienza a simplificar tus enlaces hoy mismo!',
  icons: [
    {
      url: '/logo.svg',
      href: '/logo.svg'
    }
  ]
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} text-neutral-500 bg-slate-100 flex items-center flex-col dark:bg-slate-950`}>
        <Provider>
          <header className='w-full'>
            <Nav />
          </header>
          <main className='h-full flex items-center flex-col gap-8 pt-20'>
            {children}
          </main>
          <footer className='p-4'>
            <p className='text-sm max-w-xs md:max-w-2xl text-center text-balance'>
              Este servicio de acortado de enlaces está hecho por hobby y tiene la finalidad de simplificar la compartición de URL. No me hago responsable del contenido de los enlaces acortados ni respaldo sus destinos.
            </p>
          </footer>
        </Provider>
      </body>
    </html>
  )
}
