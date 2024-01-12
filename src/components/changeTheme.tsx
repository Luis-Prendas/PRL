'use client'

import { useThemes } from '@/store/themes'
import { FaCloudMoon } from 'react-icons/fa'

export function ChangeTheme () {
  const changeTheme = useThemes(state => state.changeTheme)
  return (
    <FaCloudMoon onClick={() => { changeTheme() }} className='cursor-pointer text-2xl opacity-30 hover:opacity-100 hover:scale-105 transition dark:text-slate-200' />
  )
}
