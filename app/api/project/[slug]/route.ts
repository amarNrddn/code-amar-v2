import { NextResponse } from 'next/server'
import { getProjectBySlug } from '@/lib/api'

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const data = await getProjectBySlug(params.slug)
  if (!data) {
    return NextResponse.json({ statusCode: 404, message: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ statusCode: 200, message: 'Success', data })
}
