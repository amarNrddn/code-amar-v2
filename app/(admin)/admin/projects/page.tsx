'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface ProjectItem {
  id: string
  title: string
  slug: string
  createdAt: string
}

export default function AdminProjects() {
  const [projects, setProjects] = useState<ProjectItem[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProjects = () => {
    setLoading(true)
    fetch('/api/project')
      .then((r) => r.json())
      .then((data) => setProjects(data.data || []))
      .finally(() => setLoading(false))
  }

  useEffect(() => { fetchProjects() }, [])

  const handleDelete = async (slug: string) => {
    if (!confirm('Delete this project?')) return
    try {
      await fetch(`/api/project/${slug}`, { method: 'DELETE' })
      fetchProjects()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Link href="/admin/projects/new" className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm hover:bg-gray-800">
          + New Project
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : projects.length === 0 ? (
        <p className="text-gray-500">No projects yet.</p>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {projects.map((project) => (
            <div key={project.id} className="flex items-center justify-between px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50">
              <div>
                <p className="font-medium text-sm">{project.title || 'Untitled'}</p>
                <p className="text-xs text-gray-400">{project.slug} &middot; {new Date(project.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="flex gap-2">
                <Link href={`/admin/projects/${project.slug}/edit`} className="px-3 py-1 text-xs bg-gray-100 rounded-md hover:bg-gray-200">Edit</Link>
                <button onClick={() => handleDelete(project.slug)} className="px-3 py-1 text-xs bg-red-50 text-red-500 rounded-md hover:bg-red-100">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
