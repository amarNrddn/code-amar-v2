import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ statusCode: 400, message: 'No file provided' }, { status: 400 })
    }

    const ext = file.name.split('.').pop() || 'png'
    const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`

    const buffer = Buffer.from(await file.arrayBuffer())

    const { data: buckets } = await supabaseAdmin.storage.listBuckets()
    const bucketExists = buckets?.some((b) => b.name === 'thumbnails')

    if (!bucketExists) {
      const { error: createError } = await supabaseAdmin.storage.createBucket('thumbnails', {
        public: true,
      })
      if (createError) {
        console.error('Create bucket error:', createError)
        return NextResponse.json({ statusCode: 500, message: 'Failed to create bucket: ' + createError.message }, { status: 500 })
      }
    }

    const { error: uploadError } = await supabaseAdmin.storage
      .from('thumbnails')
      .upload(filename, buffer, {
        contentType: file.type,
        cacheControl: '31536000',
        upsert: false,
      })

    if (uploadError) {
      console.error('Supabase upload error:', uploadError)
      return NextResponse.json({ statusCode: 500, message: uploadError.message }, { status: 500 })
    }

    return NextResponse.json({ statusCode: 200, data: { filename } })
  } catch (e) {
    console.error('Upload error:', e)
    return NextResponse.json({ statusCode: 500, message: 'Upload failed' }, { status: 500 })
  }
}
