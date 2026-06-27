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

  useEffect(() => {
    if (params?.slug) {
      getProjectBySlug(params.slug as string).then((data) => {
        setProject(data)
        setLoading(false)
      })
    }
  }, [params?.slug])

  if (loading) return <Loading />
  if (!project) return null

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
      <button className="flex items-center gap-2" onClick={() => router.push('/project')}>
        <FaRegArrowAltCircleLeft className="text-xl" />
        <p className="text-gray-500">{t('view.back')}</p>
      </button>

      <h1 className="text-2xl mt-9 font-bold">{project.title}</h1>
      <p className="mt-2 text-gray-500">{project.description}</p>

      {project.techstacks && project.techstacks.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techstacks.map((tech) => (
            <span key={tech.id} className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-sm">
              {tech.techstack}
            </span>
          ))}
        </div>
      )}

      <BorderDot className="my-5" />

      {project.thumbnail && (
        <div className="w-full h-48 md:h-96 overflow-hidden rounded-md mb-6">
          <ImageLazy
            image={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/thumbnails/${project.thumbnail}`}
            className="w-full h-full object-cover"
            alt={project.title}
          />
        </div>
      )}

      {project.introduction && (
        <div className="mt-6">
          <h2 className="font-bold text-xl mb-2">{t('view.introduction')}</h2>
          <p className="text-gray-600 dark:text-gray-400">{project.introduction}</p>
        </div>
      )}

      {project.features && project.features.length > 0 && (
        <div className="mt-6">
          <h2 className="font-bold text-xl mb-2">{t('view.features')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature) => (
              <div key={feature.id} className="p-4 rounded-lg dark:bg-gray-900 bg-gray-100">
                <h3 className="font-medium">{feature.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6">
        <h2 className="font-bold text-xl mb-2">{t('view.howToStart')}</h2>
        {project.clone && (
          <div className="mb-4">
            <h3 className="font-medium mb-1">{t('view.clone')}</h3>
            <CodeSnippet code={project.clone} language="bash" />
          </div>
        )}
        {project.install && (
          <div className="mb-4">
            <h3 className="font-medium mb-1">{t('view.install')}</h3>
            <CodeSnippet code={project.install} language="bash" />
          </div>
        )}
        {project.run && (
          <div>
            <h3 className="font-medium mb-1">{t('view.run')}</h3>
            <CodeSnippet code={project.run} language="bash" />
          </div>
        )}
      </div>

      {project.linksourcode && (
        <div className="mt-8">
          <a
            href={project.linksourcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            {t('view.sourceCode')}
          </a>
        </div>
      )}
    </motion.div>
  )
}

export default ViewProject
