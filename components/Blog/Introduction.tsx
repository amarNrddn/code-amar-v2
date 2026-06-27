'use client'

import { useTheme } from '@/context/ThemeProvider'
import { textPrimaryDark, textLight } from '@/constants/styles'
import { Blog } from '@/lib/types'
import { useLanguage } from '@/context/LanguageProvider'

const Introduction = ({ blog }: { blog: Blog }) => {
  const { theme } = useTheme()
  const { t } = useLanguage()

  if (!blog.introduction) return null

  return (
    <div className="mt-7">
      <h1 className="font-bold text-xl mb-2">{t('blogView.introduction')}</h1>
      <p className={`${theme === 'dark' ? textLight.className : textPrimaryDark.className}`}>
        {blog.introduction}
      </p>
    </div>
  )
}

export default Introduction
