'use client'

import { LuLanguages } from 'react-icons/lu'
import { useLanguage } from '@/context/LanguageProvider'
import { useTheme } from '@/context/ThemeProvider'

const TogleLanguage = () => {
  const { locale, setLocale } = useLanguage()
  const { theme } = useTheme()

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'id' : 'en')
  }

  const color = theme === 'dark' ? '#fff' : '#000'

  return (
    <button onClick={toggleLanguage} className="flex items-center gap-1" style={{ color }}>
      <LuLanguages className="text-lg" />
      <span className="text-xs font-medium tracking-wider">
        {locale === 'en' ? 'EN' : 'ID'}
      </span>
    </button>
  )
}

export default TogleLanguage
