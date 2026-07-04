'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import Card from '@/components/PagesBlog/Card'
import Loading from '@/components/atoms/Loading'

interface BlogCard {
  id: string
  title: string
  thumbnail: string | null
  content: string
  slug: string
  createdAt: string
}

export default function BlogClient() {
  const [blogs, setBlogs] = useState<BlogCard[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await supabase
        .from('Blogs')
        .select('id, title, thumbnail, content, slug, createdAt')
        .order('createdAt', { ascending: false })
      if (data) setBlogs(data as BlogCard[])
      setLoading(false)
    }
    fetchBlogs()
  }, [])

  if (loading) return <Loading />

  return (
    <motion.div
      className="mt-4 md:mt-12 pb-10"
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        ease: 'easeInOut',
        scale: { type: 'spring', stiffness: 300, damping: 20 },
      }}
    >
      <h1 className="sr-only">Blog Amar Nuruddin - Tutorial, Tips, dan Insight Teknologi</h1>
      <Card blogs={blogs} />
    </motion.div>
  )
}
