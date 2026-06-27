'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import type { Project } from '@/lib/types'
import Card from '@/components/Project/Card'
import Loading from '@/components/atoms/Loading'

export default function Project() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('Projects')
        .select('*, Techstacks(*), Features(*)')
        .order('createdAt', { ascending: false })

      if (error) {
        console.error('Supabase Projects error:', error)
      }

      if (data) {
        const mapped = data.map((item: any) => ({
          ...item,
          techstacks: item.Techstacks || [],
          features: item.Features || [],
        }))
        setProjects(mapped as Project[])
      }
      setLoading(false)
    }
    fetchProjects()
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
      <Card projects={projects} />
    </motion.div>
  )
}
