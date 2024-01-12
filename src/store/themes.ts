import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

interface State {
  theme: boolean
  changeTheme: () => void
}

export const useThemes = create<State>()(devtools(persist((set, get) => {
  return {
    theme: true,

    changeTheme: () => {
      const { theme } = get()
      set({ theme: !theme }, false, 'CHANGETHEME')
    }
  }
}, {
  name: 'themes'
})))
