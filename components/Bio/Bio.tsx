'use client'

import { DotFilledIcon } from '@radix-ui/react-icons'
import { useTheme } from '@/context/ThemeProvider'
import { textPrimaryDark, textLight } from '@/constants/styles'
import { useLanguage } from '@/context/LanguageProvider'

const Bio = () => {
  const { theme } = useTheme()
  const { t } = useLanguage()

  const bios = [
    {
      jobs: [t('bio.job1'), t('bio.job2'), t('bio.job3')],
      city: t('bio.city1'),
      about: t('bio.about1'),
    },
    {
      jobs: [t('bio.job4')],
      city: t('bio.city2'),
      about: t('bio.about2'),
    },
    {
      jobs: [],
      city: t('bio.city3'),
      about: t('bio.about3'),
    },
  ]

  return (
    <div>
      {bios.map((item, i) => (
        <div key={i}>
          {item.jobs.map((job, j) => (
            <p key={j} className="flex items-center gap-2 text-base text-gray-500">
              <DotFilledIcon className="w-4 h-4" />
              {job}
            </p>
          ))}
          <div className="flex items-center gap-2 text-gray-500">
            <DotFilledIcon className="w-4 h-4" />
            <p className="text-base">
              {t('bio.based')} {item.city} <span className="text-xs font-medium">ID</span>
            </p>
          </div>
          <p
            className={`text-base text-pretty text-gray-700 mt-3 ${theme === 'dark' ? textLight.className : textPrimaryDark.className}`}
          >
            {item.about}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Bio
