import { supabase } from '@/services/supabase.conect';
import { NextResponse } from 'next/server';

const NEXT_LINK = process.env.NEXT_LINK

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url, NEXT_LINK)
    const id = searchParams.get('id')

    // const { data: dataSelect, error: errorSelect } = await supabase
    // .from('TEMPORARY_PUBLIC_SHORTENER')
    // .select()
    // .eq('shortId', id)
    // .maybeSingle()

    // if (errorSelect || !dataSelect) throw new Error()

    return NextResponse.json({ id: id })

    // return NextResponse.redirect(dataSelect.original_link, {
    //   status: 307,
    //   headers: {
    //     'Cache-Control': 'no-store, max-age=0',
    //     'Expires': '0',
    //     'Pragma': 'no-cache',
    //   },
    // });
    
  } catch (err) {
    return NextResponse.json({ message: 'Internal server error' })
  }
}