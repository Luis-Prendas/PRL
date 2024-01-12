import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { supabase } from '@/services/supabase.conect'
import { type Database } from '@/types/supabase.database'

interface State {
  links: Array<Database['public']['Tables']['TEMPORARY_PUBLIC_SHORTENER']['Row']> | null
  loadLinks: () => void
}

export const useLinks = create<State>()(devtools(persist((set, get) => {
  return {
    links: [],

    loadLinks: async () => {
      const { data } = await supabase
        .from('TEMPORARY_PUBLIC_SHORTENER')
        .select()
      set({ links: data }, false, 'LOADLINKS')
    }
  }
}, {
  name: 'links'
})))
