'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import CareerForm from '../../CareerForm'

export default function EditCareer() {
  const { slug } = useParams<{ slug: string }>()
  const router = useRouter()
  const [career, setCareer] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch(`/api/career/${slug}`)
      .then((r) => r.json())
      .then((data) => setCareer(data.data))
      .finally(() => setLoading(false))
  }, [slug])

  const handleSave = async (data: Record<string, any>) => {
    setSaving(true)
    try {
      const res = await fetch(`/api/career/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (result.statusCode === 200) {
        router.push('/admin/careers')
      } else {
        alert('Error: ' + (result.message || 'Unknown'))
      }
    } catch (e) {
      alert('Error saving career')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="flex justify-center py-12"><div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" /></div>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Career</h1>
      <CareerForm onSave={handleSave} saving={saving} initial={career} />
    </div>
  )
}
