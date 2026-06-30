'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CareerForm from '../CareerForm'

export default function NewCareer() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)

  const handleSave = async (data: Record<string, any>) => {
    setSaving(true)
    try {
      const res = await fetch('/api/career', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (result.statusCode === 201) {
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

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">New Career</h1>
      <CareerForm onSave={handleSave} saving={saving} />
    </div>
  )
}
