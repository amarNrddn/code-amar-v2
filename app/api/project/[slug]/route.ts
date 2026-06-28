import { NextResponse } from 'next/server'
import { getProjectBySlug, updateProject, deleteProject, deleteFeaturesByProjectId, deleteTechstacksByProjectId, createFeature, createTechstack } from '@/lib/api'

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const data = await getProjectBySlug(params.slug)
  if (!data) {
    return NextResponse.json({ statusCode: 404, message: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ statusCode: 200, message: 'Success', data })
}

export async function PUT(request: Request, { params }: { params: { slug: string } }) {
  try {
    const body = await request.json()
    const { features, techstacks, ...projectData } = body

    const existing = await getProjectBySlug(params.slug)
    if (!existing) {
      return NextResponse.json({ statusCode: 404, message: 'Not found' }, { status: 404 })
    }

    const data = await updateProject(params.slug, projectData)

    if (features || techstacks) {
      await deleteFeaturesByProjectId(existing.id)
      await deleteTechstacksByProjectId(existing.id)

      if (features?.length) {
        for (const f of features) {
          await createFeature(f.title, f.description, existing.id)
        }
      }
      if (techstacks?.length) {
        for (const t of techstacks) {
          await createTechstack(t, existing.id)
        }
      }
    }

    return NextResponse.json({ statusCode: 200, message: 'Updated', data })
  } catch (error: any) {
    return NextResponse.json({ statusCode: 500, message: error.message }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { slug: string } }) {
  try {
    await deleteProject(params.slug)
    return NextResponse.json({ statusCode: 200, message: 'Deleted' })
  } catch (error: any) {
    return NextResponse.json({ statusCode: 500, message: error.message }, { status: 500 })
  }
}
