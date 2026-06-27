'use client'

import { useTheme } from '@/context/ThemeProvider'
import { textPrimaryDark, textLight } from '@/constants/styles'
import { Blog } from '@/lib/types'
import { useLanguage } from '@/context/LanguageProvider'

const Elucidation = ({ blog }: { blog: Blog }) => {
  const { theme } = useTheme()
  const { t } = useLanguage()

  if (!blog.elucidation) return null

  return (
    <div className="mt-7">
      <h1 className="font-bold text-xl mb-2">{t('blogView.elucidation')}</h1>
      <p className={`${theme === 'dark' ? textLight.className : textPrimaryDark.className}`}>
        {blog.elucidation}
      </p>
    </div>
  )
}

export default Elucidation
