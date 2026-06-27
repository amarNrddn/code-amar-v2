'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ProjectForm from '../ProjectForm'

export default function NewProject() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)

  const handleSave = async (data: Record<string, any>) => {
    setSaving(true)
    try {
      const res = await fetch('/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (result.statusCode === 201) {
        router.push('/admin/projects')
      } else {
        alert('Error: ' + (result.message || 'Unknown'))
      }
    } catch (e) {
      alert('Error saving project')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">New Project</h1>
      <ProjectForm onSave={handleSave} saving={saving} />
    </div>
  )
}
