import { supabase } from '@/services/supabase.conect'
import { NextResponse } from 'next/server'
import { type ShortenedLinkTypes } from '../../../types/supabase'

export async function GET (req: Request) {
  try {
    const { pathname } = new URL(req.url)

    const id = pathname.replace('/', '')

    const { data: dataSelect, error: errorSelect }: { data: ShortenedLinkTypes | null, error: any } = await supabase
      .from('TEMPORARY_PUBLIC_SHORTENER')
      .select()
      .eq('shortId', id)
      .maybeSingle()

    if (errorSelect ?? !dataSelect) throw new Error()

    return NextResponse.redirect(dataSelect.original_link)
  } catch (err) {
    return NextResponse.json({ message: 'Internal server error' })
  }
}

export async function POST (req: Request) {
  try {
    return NextResponse.json({ message: 'Succes' })
  } catch (err) {
    return NextResponse.json({ message: 'Internal server error' })
  }
}
