import { NextResponse } from 'next/server'
import { createFeature } from '@/lib/api'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = await createFeature(body.title, body.description, body.projectId)
    return NextResponse.json({ statusCode: 201, message: 'Success', data })
  } catch (error: any) {
    return NextResponse.json({ statusCode: 500, message: error.message }, { status: 500 })
  }
}
