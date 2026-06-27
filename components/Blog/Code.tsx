'use client'

import CodeSnippet from '@/components/atoms/CodeSnippet'
import { Blog } from '@/lib/types'
import { useLanguage } from '@/context/LanguageProvider'

const Code = ({ blog }: { blog: Blog }) => {
  const { t } = useLanguage()

  if (!blog.code_snippet) return null

  return (
    <div className="mt-7">
      <h1 className="font-bold text-xl mb-2">{t('blogView.codeSnippet')}</h1>
      <CodeSnippet code={blog.code_snippet} language="javascript" />
    </div>
  )
}

export default Code
