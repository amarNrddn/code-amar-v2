'use client'

import { Blog } from '@/lib/types'
import { useLanguage } from '@/context/LanguageProvider'

const Elucidation = ({ blog }: { blog: Blog }) => {
  const { t } = useLanguage()

  if (!blog.elucidation) return null

  return (
    <div className="mt-7">
      <h1 className="font-bold text-xl mb-2">{t('blogView.elucidation')}</h1>
      <p className="dark:text-white text-gray-500 text-justify">
        {blog.elucidation}
      </p>
    </div>
  )
}

export default Elucidation
