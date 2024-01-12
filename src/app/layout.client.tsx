'use client'
import { useThemes } from '@/store/themes'

export function LayoutClient ({ children }: { children: React.ReactNode }) {
  const theme = useThemes(state => state.theme)

  return (
    <html lang="es" className={theme ? 'dark' : ''}>
      {children}
    </html>
  )
}
