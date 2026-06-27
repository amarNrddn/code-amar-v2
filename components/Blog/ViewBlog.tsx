'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Blog } from '@/lib/types'
import { getBlogBySlug } from '@/lib/api'
import useFormatDate from '@/hooks/formatDate'
import BorderDot from '@/components/atoms/BorderDot'
import ImageLazy from '@/components/atoms/ImageLazy'
import Introduction from './Introduction'
import Content from './Content'
import Instalation from './Instalation'
import Code from './Code'
import Description from './Description'
import Elucidation from './Elucidation'
import Tags from './Tags'
import Loading from '@/components/atoms/Loading'
import { useLanguage } from '@/context/LanguageProvider'

const ViewBlog = () => {
  const { t } = useLanguage()
  const params = useParams()
  const router = useRouter()
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params?.slug) {
      getBlogBySlug(params.slug as string).then((data) => {
        setBlog(data)
        setLoading(false)
      })
    }
  }, [params?.slug])

  if (loading) return <Loading />
  if (!blog) return null

  const formateDate = useFormatDate(blog.createdAt)

  return (
    <motion.div
      className="pt-9 pb-5 w-full"
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        ease: 'easeInOut',
        scale: { type: 'spring', stiffness: 300, damping: 20 },
      }}
    >
      <button className="flex items-center gap-2" onClick={() => router.push('/blog')}>
        <FaRegArrowAltCircleLeft className="text-xl" />
        <p className="text-gray-500">{t('view.back')}</p>
      </button>

      <h1 className="text-xl mt-9 font-medium">{blog.title}</h1>
      <p className="mt-5 text-sm text-gray-500 mb-4">{t('blogView.publishedOn')}{formateDate}</p>
      <BorderDot className="mb-4" />

      <div className="w-full h-36 md:h-80 overflow-hidden relative">
        <ImageLazy
          image={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/thumbnails/${blog.thumbnail}`}
          className="w-full h-full rounded-md object-cover"
          alt={blog.title}
        />
      </div>

      <Introduction blog={blog} />
      <Content blog={blog} />
      <Instalation blog={blog} />
      <Code blog={blog} />
      <Description blog={blog} />
      <Elucidation blog={blog} />
      <Tags blog={blog} />
    </motion.div>
  )
}

export default ViewBlog
