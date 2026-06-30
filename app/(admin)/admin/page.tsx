'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Stats {
  blogs: number
  projects: number
  careers: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ blogs: 0, projects: 0, careers: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/api/blog').then((r) => r.json()),
      fetch('/api/project').then((r) => r.json()),
      fetch('/api/career').then((r) => r.json()),
    ]).then(([blogs, projects, careers]) => {
      setStats({
        blogs: blogs.data?.length || 0,
        projects: projects.data?.length || 0,
        careers: careers.data?.length || 0,
      })
    }).finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/admin/blogs" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <p className="text-3xl font-bold text-gray-900">{stats.blogs}</p>
            <p className="text-gray-500 mt-1">Blog Posts</p>
          </Link>
          <Link href="/admin/projects" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <p className="text-3xl font-bold text-gray-900">{stats.projects}</p>
            <p className="text-gray-500 mt-1">Projects</p>
          </Link>
          <Link href="/admin/careers" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <p className="text-3xl font-bold text-gray-900">{stats.careers}</p>
            <p className="text-gray-500 mt-1">Careers</p>
          </Link>
        </div>
      )}
    </div>
  )
}
