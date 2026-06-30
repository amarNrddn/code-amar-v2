'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Project } from '@/lib/types'
import { getProjectBySlug } from '@/lib/api'
import BorderDot from '@/components/atoms/BorderDot'
import ImageLazy from '@/components/atoms/ImageLazy'
import CodeSnippet from '@/components/atoms/CodeSnippet'
import Loading from '@/components/atoms/Loading'
import { useLanguage } from '@/context/LanguageProvider'

const ViewProject = () => {
  const { t } = useLanguage()
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [isTitleVisible, setIsTitleVisible] = useState(true)

  useEffect(() => {
    if (params?.slug) {
      getProjectBySlug(params.slug as string).then((data) => {
        setProject(data)
        setLoading(false)
      })
    }
  }, [params?.slug])

  useEffect(() => {
    const handleScroll = () => {
      setIsTitleVisible(window.scrollY < 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (loading) return <Loading />
  if (!project) return null

  return (
    <motion.div
      className="pt-9 pb-5 w-full relative"
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        ease: 'easeInOut',
        scale: { type: 'spring', stiffness: 300, damping: 20 },
      }}
    >
      <button className="flex items-center gap-2" onClick={() => router.push('/project')}>
        <FaRegArrowAltCircleLeft className="text-xl" />
        <p className="text-gray-500">Back</p>
      </button>

      <motion.h1
        className="text-xl mt-9 font-semibold"
        initial={{ y: -50, opacity: 0 }}
        animate={isTitleVisible ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </motion.h1>
      <p className="mt-3 text-gray-500 text-base">{project.description}</p>
      <BorderDot className="my-5" />

      {project.techstacks && project.techstacks.length > 0 && (
        <div className="w-full flex justify-between items-center mb-5">
          <div>
            {project.techstacks.map((tech) => (
              <span
                key={tech.id}
                className="mr-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-lg mb-2 inline-block text-sm"
              >
                {tech.techstack}
              </span>
            ))}
          </div>
          {project.linksourcode && (
            <a
              className="flex items-center gap-2 shrink-0"
              href={project.linksourcode}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/github-icon.svg"
                className="w-5 dark:bg-white dark:rounded-full"
                alt="GitHub"
              />
              <p className="text-gray-500 text-sm">Source Code</p>
            </a>
          )}
        </div>
      )}

      {project.thumbnail && (
        <div className="w-full h-64 md:h-80 overflow-hidden relative">
          <ImageLazy
            image={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/thumbnails/${project.thumbnail}`}
            className="w-full h-full rounded-md object-cover transition-transform duration-500 ease-out hover:scale-105 hover:rounded-md hover:transform hover:origin-center"
            alt={project.title}
          />
        </div>
      )}

      {project.introduction && (
        <div className="mt-9">
          <h1 className="font-bold text-lg">{t('view.introduction')}</h1>
          <p className="mt-4 text-base leading-loose text-gray-600 dark:text-gray-400">
            {project.introduction}
          </p>
        </div>
      )}

      {project.features && project.features.length > 0 && (
        <div className="mt-5">
          <h1 className="font-bold text-lg">{t('view.features')}</h1>
          <div className="flex flex-col gap-9 mt-5">
            {project.features.map((feature) => (
              <div key={feature.id}>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-9">
        <h1 className="font-bold text-lg mb-8">How to Start this project</h1>

        {project.clone && (
          <div className="mt-9">
            <h1 className="font-bold text-lg">1. Clone using git</h1>
            <CodeSnippet code={project.clone} language="bash" />
          </div>
        )}

        {project.install && (
          <div className="mt-9">
            <h1 className="font-bold text-lg">2. Install dependencies</h1>
            <CodeSnippet code={project.install} language="bash" />
          </div>
        )}

        {project.run && (
          <div className="mt-9">
            <h1 className="font-bold text-lg">3. Run development server</h1>
            <CodeSnippet code={project.run} language="bash" />
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ViewProject
