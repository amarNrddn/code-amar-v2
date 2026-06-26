import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { data, error } = await supabase
      .from('Bios')
      .update(body)
      .eq('id', params.id)
      .select()
      .single()

    if (error) throw error
    return NextResponse.json({ statusCode: 200, message: 'Success', data })
  } catch (error: any) {
    return NextResponse.json({ statusCode: 500, message: error.message }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { error: aboutError } = await supabase
      .from('Abouts')
      .delete()
      .eq('bioId', params.id)

    if (aboutError) throw aboutError

    const { error: bioError } = await supabase
      .from('Bios')
      .delete()
      .eq('id', params.id)

    if (bioError) throw bioError

    return NextResponse.json({ statusCode: 200, message: 'Data berhasil dihapus' })
  } catch (error: any) {
    return NextResponse.json({ statusCode: 500, message: error.message }, { status: 500 })
  }
}
