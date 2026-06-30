'use client'

import { useState } from 'react'

interface Props {
  initial?: Record<string, any>
  onSave: (data: Record<string, any>) => void
  saving: boolean
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''

const textFields = [
  { key: 'title', label: 'Nama Perusahaan', type: 'text' },
  { key: 'slug', label: 'Slug', type: 'text' },
  { key: 'period', label: 'Periode Kerja (contoh: Jan 2020 - Des 2023)', type: 'text' },
  { key: 'company_description', label: 'Deskripsi Perusahaan', type: 'textarea' },
]

const CareerForm = ({ initial, onSave, saving }: Props) => {
  const [form, setForm] = useState<Record<string, any>>(() => {
    const base: Record<string, any> = {}
    textFields.forEach((f) => { base[f.key] = '' })
    base.thumbnail = initial?.thumbnail || ''
    base.responsibilities = initial?.responsibilities || ['']
    if (initial) {
      textFields.forEach((f) => { base[f.key] = initial[f.key] || '' })
      base.responsibilities = Array.isArray(initial.responsibilities) && initial.responsibilities.length > 0
        ? initial.responsibilities
        : ['']
    }
    return base
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

  const addResponsibility = () => {
    setForm({ ...form, responsibilities: [...form.responsibilities, ''] })
  }

  const removeResponsibility = (index: number) => {
    const next = form.responsibilities.filter((_: any, i: number) => i !== index)
    setForm({ ...form, responsibilities: next.length ? next : [''] })
  }

  const updateResponsibility = (index: number, value: string) => {
    const next = [...form.responsibilities]
    next[index] = value
    setForm({ ...form, responsibilities: next })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      ...form,
      responsibilities: form.responsibilities.filter((r: string) => r.trim()),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
      {textFields.map((f) => (
        <div key={f.key}>
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
        <label className="block text-sm font-medium text-gray-700 mb-1">Tanggung Jawab (list item)</label>
        {form.responsibilities.map((item: string, i: number) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              type="text"
              value={item}
              onChange={(e) => updateResponsibility(i, e.target.value)}
              placeholder="Contoh: Mengembangkan fitur X"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
            <button type="button" onClick={() => removeResponsibility(i)} className="px-2 text-red-500 text-sm">X</button>
          </div>
        ))}
        <button type="button" onClick={addResponsibility} className="text-sm text-gray-600 hover:text-gray-900">
          + Tambah tanggung jawab
        </button>
      </div>

      <div className="flex gap-3 pt-4">
        <button type="submit" disabled={saving || uploading} className="px-6 py-2 bg-gray-900 text-white rounded-md text-sm hover:bg-gray-800 disabled:opacity-50">
          {saving ? 'Menyimpan...' : 'Simpan'}
        </button>
      </div>
    </form>
  )
}

export default CareerForm
