import { NextResponse } from 'next/server'
import { createProject, getAllProjects } from '@/lib/api'

export async function GET() {
  const data = await getAllProjects()
  return NextResponse.json({ statusCode: 200, message: 'Success', data })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const project = await createProject(body)
    return NextResponse.json({ statusCode: 201, message: 'Success', data: project })
  } catch (error: any) {
    return NextResponse.json({ statusCode: 500, message: error.message }, { status: 500 })
  }
}
