'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import BlogForm from '../../BlogForm'

export default function EditBlog() {
  const { slug } = useParams<{ slug: string }>()
  const router = useRouter()
  const [blog, setBlog] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch(`/api/blog/${slug}`)
      .then((r) => r.json())
      .then((data) => setBlog(data.data))
      .finally(() => setLoading(false))
  }, [slug])

  const handleSave = async (data: Record<string, any>) => {
    setSaving(true)
    try {
      const res = await fetch(`/api/blog/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (result.statusCode === 200) {
        router.push('/admin/blogs')
      } else {
        alert('Error: ' + (result.message || 'Unknown'))
      }
    } catch (e) {
      alert('Error saving blog')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="flex justify-center py-12"><div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" /></div>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>
      <BlogForm onSave={handleSave} saving={saving} initial={blog} />
    </div>
  )
}
