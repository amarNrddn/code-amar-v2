'use client'

import CodeSnippet from '@/components/atoms/CodeSnippet'
import { Blog } from '@/lib/types'
import { useLanguage } from '@/context/LanguageProvider'

const Instalation = ({ blog }: { blog: Blog }) => {
  const { t } = useLanguage()

  if (!blog.instalation) return null

  return (
    <div className="mt-7">
      <h1 className="font-bold text-xl mb-2">{t('blogView.instalation')}</h1>
      <CodeSnippet code={blog.instalation} language="bash" />
    </div>
  )
}

export default Instalation
