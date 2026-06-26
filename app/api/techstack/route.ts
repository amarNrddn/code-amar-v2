import { NextResponse } from 'next/server'
import { createTechstack } from '@/lib/api'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = await createTechstack(body.techstack, body.projectId)
    return NextResponse.json({ statusCode: 201, message: 'Success', data })
  } catch (error: any) {
    return NextResponse.json({ statusCode: 500, message: error.message }, { status: 500 })
  }
}
