import { createClient } from '@supabase/supabase-js'

const PROYECT_URL_SUPABASE = process.env.NEXT_PROYECT_URL_SUPABASE ?? ''
const ANON_PUBLIC_KEY_SUPABASE = process.env.NEXT_ANON_PUBLIC_KEY_SUPABASE ?? ''

export const supabase = createClient(PROYECT_URL_SUPABASE, ANON_PUBLIC_KEY_SUPABASE)