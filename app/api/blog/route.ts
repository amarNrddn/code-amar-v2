import { NextResponse } from 'next/server'
import { createBlog, getAllBlogs } from '@/lib/api'

export async function GET() {
  const data = await getAllBlogs()
  return NextResponse.json({ statusCode: 200, message: 'Success', data })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const blog = await createBlog(body)
    return NextResponse.json({ statusCode: 201, message: 'Success', data: blog })
  } catch (error: any) {
    return NextResponse.json({ statusCode: 500, message: error.message }, { status: 500 })
  }
}
