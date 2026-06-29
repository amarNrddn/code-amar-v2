'use client'

import { LuLanguages } from 'react-icons/lu'
import { useLanguage } from '@/context/LanguageProvider'

const TogleLanguage = () => {
  const { locale, setLocale } = useLanguage()

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'id' : 'en')
  }

  return (
    <button onClick={toggleLanguage} className="flex items-center gap-1 dark:text-white text-black">
      <LuLanguages className="text-lg" />
      <span className="text-xs font-medium tracking-wider">
        {locale === 'en' ? 'EN' : 'ID'}
      </span>
    </button>
  )
}

export default TogleLanguage
