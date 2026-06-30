'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface CareerItem {
  id: string
  title: string
  slug: string
  period: string
  createdAt: string
}

export default function AdminCareers() {
  const [careers, setCareers] = useState<CareerItem[]>([])
  const [loading, setLoading] = useState(true)

  const fetchCareers = () => {
    setLoading(true)
    fetch('/api/career')
      .then((r) => r.json())
      .then((data) => setCareers(data.data || []))
      .finally(() => setLoading(false))
  }

  useEffect(() => { fetchCareers() }, [])

  const handleDelete = async (slug: string) => {
    if (!confirm('Hapus career ini?')) return
    try {
      await fetch(`/api/career/${slug}`, { method: 'DELETE' })
      fetchCareers()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Careers</h1>
        <Link href="/admin/careers/new" className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm hover:bg-gray-800">
          + New Career
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : careers.length === 0 ? (
        <p className="text-gray-500">Belum ada career.</p>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {careers.map((career) => (
            <div key={career.id} className="flex items-center justify-between px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50">
              <div>
                <p className="font-medium text-sm">{career.title || 'Untitled'}</p>
                <p className="text-xs text-gray-400">{career.slug} &middot; {career.period} &middot; {new Date(career.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="flex gap-2">
                <Link href={`/admin/careers/${career.slug}/edit`} className="px-3 py-1 text-xs bg-gray-100 rounded-md hover:bg-gray-200">Edit</Link>
                <button onClick={() => handleDelete(career.slug)} className="px-3 py-1 text-xs bg-red-50 text-red-500 rounded-md hover:bg-red-100">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
