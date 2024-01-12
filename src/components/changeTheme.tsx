'use client'

import { useTheme } from 'next-themes'
import { FaCloudMoon } from 'react-icons/fa'

export function ChangeTheme () {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <>
      {resolvedTheme === 'dark'
        ? (
          <FaCloudMoon onClick={() => { setTheme('light') }} className='cursor-pointer text-2xl opacity-30 hover:opacity-100 hover:scale-105 transition dark:text-slate-200' />
          )
        : (
          <FaCloudMoon onClick={() => { setTheme('dark') }} className='cursor-pointer text-2xl opacity-30 hover:opacity-100 hover:scale-105 transition dark:text-slate-200' />
          )}
    </>
  )
}
