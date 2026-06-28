import { NextResponse } from 'next/server'
import { createProject, getAllProjects, createFeature, createTechstack } from '@/lib/api'

export async function GET() {
  const data = await getAllProjects()
  return NextResponse.json({ statusCode: 200, message: 'Success', data })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { features, techstacks, ...projectData } = body

    const project = await createProject(projectData)

    if (features?.length) {
      for (const f of features) {
        await createFeature(f.title, f.description, project.id)
      }
    }
    if (techstacks?.length) {
      for (const t of techstacks) {
        await createTechstack(t, project.id)
      }
    }

    return NextResponse.json({ statusCode: 201, message: 'Success', data: project })
  } catch (error: any) {
    return NextResponse.json({ statusCode: 500, message: error.message }, { status: 500 })
  }
}
