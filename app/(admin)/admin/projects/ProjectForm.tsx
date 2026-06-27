'use client'

import { useState } from 'react'

interface Props {
  initial?: Record<string, any>
  onSave: (data: Record<string, any>) => void
  saving: boolean
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''

const textFields = [
  { key: 'title', label: 'Title', type: 'text' },
  { key: 'slug', label: 'Slug', type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea' },
  { key: 'linksourcode', label: 'Source Code URL', type: 'text' },
  { key: 'introduction', label: 'Introduction', type: 'textarea' },
  { key: 'clone', label: 'Clone Command', type: 'text' },
  { key: 'install', label: 'Install Command', type: 'text' },
  { key: 'run', label: 'Run Command', type: 'text' },
]

const ProjectForm = ({ initial, onSave, saving }: Props) => {
  const [form, setForm] = useState<Record<string, any>>(() => {
    const base: Record<string, any> = {}
    textFields.forEach((f) => { base[f.key] = '' })
    base.thumbnail = initial?.thumbnail || ''
    if (initial) textFields.forEach((f) => { base[f.key] = initial[f.key] || '' })
    return base
  })

  const [techstacks, setTechstacks] = useState<string[]>(() => {
    if (initial?.techstacks) return initial.techstacks.map((t: any) => (typeof t === 'string' ? t : t.techstack))
    return []
  })
  const [features, setFeatures] = useState<{ title: string; description: string }[]>(() => {
    if (initial?.features) return initial.features.map((f: any) => ({ title: f.title || '', description: f.description || '' }))
    return []
  })
  const [uploading, setUploading] = useState(false)
  const [thumbnailPreview, setThumbnailPreview] = useState<string>(
    initial?.thumbnail ? `${supabaseUrl}/storage/v1/object/public/thumbnails/${initial.thumbnail}` : ''
  )

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const body = new FormData()
      body.append('file', file)

      const res = await fetch('/api/upload', { method: 'POST', body })
      const result = await res.json()

      if (result.statusCode === 200) {
        const filename = result.data.filename
        setForm({ ...form, thumbnail: filename })
        setThumbnailPreview(`${supabaseUrl}/storage/v1/object/public/thumbnails/${filename}`)
      } else {
        alert('Upload failed: ' + (result.message || 'Unknown error'))
      }
    } catch (err) {
      alert('Upload error')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ ...form, techstacks, features })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {textFields.map((f) => (
          <div key={f.key} className={f.type === 'textarea' ? 'col-span-2' : ''}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
            {f.type === 'textarea' ? (
              <textarea
                value={form[f.key]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm min-h-[80px]"
              />
            ) : (
              <input
                type="text"
                value={form[f.key]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            )}
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail</label>
        {thumbnailPreview && (
          <div className="mb-2">
            <img src={thumbnailPreview} alt="Thumbnail preview" className="w-48 h-32 object-cover rounded-md border border-gray-200" />
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          disabled={uploading}
          className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-gray-900 file:text-white hover:file:bg-gray-800 disabled:opacity-50"
        />
        {uploading && <p className="text-xs text-gray-400 mt-1">Uploading...</p>}
        {form.thumbnail && !uploading && (
          <p className="text-xs text-gray-400 mt-1">Current: {form.thumbnail}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Techstacks (one per line)</label>
        <textarea
          value={techstacks.join('\n')}
          onChange={(e) => setTechstacks(e.target.value.split('\n').map((t) => t.trim()).filter(Boolean))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm min-h-[60px]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Features</label>
        {features.map((f, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              type="text"
              value={f.title}
              onChange={(e) => {
                const next = [...features]
                next[i] = { ...next[i], title: e.target.value }
                setFeatures(next)
              }}
              placeholder="Feature title"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
            <input
              type="text"
              value={f.description}
              onChange={(e) => {
                const next = [...features]
                next[i] = { ...next[i], description: e.target.value }
                setFeatures(next)
              }}
              placeholder="Description"
              className="flex-[2] px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
            <button type="button" onClick={() => setFeatures(features.filter((_, j) => j !== i))} className="px-2 text-red-500 text-sm">X</button>
          </div>
        ))}
        <button type="button" onClick={() => setFeatures([...features, { title: '', description: '' }])} className="text-sm text-gray-600 hover:text-gray-900">+ Add Feature</button>
      </div>

      <div className="flex gap-3 pt-4">
        <button type="submit" disabled={saving || uploading} className="px-6 py-2 bg-gray-900 text-white rounded-md text-sm hover:bg-gray-800 disabled:opacity-50">
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  )
}

export default ProjectForm
