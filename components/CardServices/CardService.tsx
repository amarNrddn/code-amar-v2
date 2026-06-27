'use client'

import { useTheme } from '@/context/ThemeProvider'
import { useLanguage } from '@/context/LanguageProvider'
import WebIlustration from './WebIlustration'
import MobileIlustration from './MobileIlustration'
import AnalyticIlustration from './AnalyticIlustration'

const CardService = () => {
  const { theme } = useTheme()
  const { t } = useLanguage()

  const items = [
    {
      thumbnail: <WebIlustration />,
      title: t('service.web'),
      des: t('service.webDesc'),
      tech: 'coding',
    },
    {
      thumbnail: <MobileIlustration />,
      title: t('service.mobile'),
      des: t('service.mobileDesc'),
      tech: 'coding',
    },
    {
      thumbnail: <AnalyticIlustration />,
      title: t('service.uiux'),
      des: t('service.uiuxDesc'),
      tech: 'design',
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative hover:shadow-lg hover:ease-out transition-all rounded-lg overflow-hidden border-[1px] border-gray-500 p-4"
          >
            <div className="pt-4 mb-6 flex justify-center">
              {item.thumbnail}
            </div>
            <div className={`absolute top-3 right-3 px-2 py-[1px] rounded-xl inline-block text-xs ${theme === 'dark' ? 'border-[1px] border-green-300 bg-emerald-500' : 'bg-gray-200 text-gray-700'}`}>
              {item.tech}
            </div>
            <h2 className="text-xl font-medium mt-2">{item.title}</h2>
            <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {item.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardService
