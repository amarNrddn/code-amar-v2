'use client'

import { Blog } from '@/lib/types'
import { useLanguage } from '@/context/LanguageProvider'

const Introduction = ({ blog }: { blog: Blog }) => {
  const { t } = useLanguage()

  if (!blog.introduction) return null

  return (
    <div className="mt-7">
      <h1 className="font-bold text-xl mb-2">{t('blogView.introduction')}</h1>
      <p className="dark:text-white text-gray-500">
        {blog.introduction}
      </p>
    </div>
  )
}

export default Introduction
