import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    const supabase = createClient(supabaseUrl, supabaseKey)

    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ statusCode: 400, message: 'No file provided' }, { status: 400 })
    }

    const ext = file.name.split('.').pop() || 'png'
    const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`
    const buffer = Buffer.from(await file.arrayBuffer())

    const { error: uploadError } = await supabase.storage
      .from('thumbnails')
      .upload(filename, buffer, {
        contentType: file.type,
        cacheControl: '31536000',
        upsert: false,
      })

    if (uploadError) {
      if (uploadError.message?.includes('Bucket not found')) {
        const { error: createError } = await supabase.storage.createBucket('thumbnails', {
          public: true,
        })
        if (createError) {
          return NextResponse.json({
            statusCode: 500,
            message: 'Gagal buat bucket: ' + createError.message,
          }, { status: 500 })
        }

        const { error: retryError } = await supabase.storage
          .from('thumbnails')
          .upload(filename, buffer, {
            contentType: file.type,
            cacheControl: '31536000',
            upsert: false,
          })

        if (retryError) {
          return NextResponse.json({ statusCode: 500, message: 'Upload gagal: ' + retryError.message }, { status: 500 })
        }
      } else {
        return NextResponse.json({ statusCode: 500, message: 'Upload gagal: ' + uploadError.message }, { status: 500 })
      }
    }

    return NextResponse.json({ statusCode: 200, data: { filename } })
  } catch (e) {
    console.error('Upload error:', e)
    return NextResponse.json({ statusCode: 500, message: 'Upload failed: ' + (e instanceof Error ? e.message : 'unknown') }, { status: 500 })
  }
}
