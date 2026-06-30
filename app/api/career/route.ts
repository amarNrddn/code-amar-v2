import { NextResponse } from 'next/server'
import { getAllCareers, createCareer } from '@/lib/api'

export async function GET() {
  const data = await getAllCareers()
  return NextResponse.json({ statusCode: 200, message: 'Success', data })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const career = await createCareer(body)
    return NextResponse.json({ statusCode: 201, message: 'Success', data: career })
  } catch (error: any) {
    return NextResponse.json({ statusCode: 500, message: error.message }, { status: 500 })
  }
}
