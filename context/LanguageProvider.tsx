'use client'

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react'
import translations from '@/constants/translations'

interface LanguageContextType {
  locale: string
  setLocale: (locale: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (key: string) => key,
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    const saved = localStorage.getItem('locale') || 'en'
    setLocale(saved)
  }, [])

  const handleSetLocale = (newLocale: string) => {
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  const t = useCallback(
    (key: string): string => {
      const dict = translations[locale]
      return dict?.[key] ?? key
    },
    [locale],
  )

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
