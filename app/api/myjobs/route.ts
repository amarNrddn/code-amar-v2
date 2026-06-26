import { NextResponse } from 'next/server'
import { getBios, createMyJobs } from '@/lib/api'

export async function GET() {
  const data = await getBios()
  return NextResponse.json({ statusCode: 200, message: 'Success', data })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { jobs, city, about } = body
    const data = await createMyJobs(jobs, city, about)
    return NextResponse.json({ statusCode: 201, message: 'Success', data })
  } catch (error: any) {
    return NextResponse.json({ statusCode: 500, message: error.message }, { status: 500 })
  }
}
