'use client'

import { DotFilledIcon } from '@radix-ui/react-icons'
import { useLanguage } from '@/context/LanguageProvider'

const Bio = () => {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-2">
      <ul className="flex gap-4">
        <li className="flex gap-2 items-center text-base text-neutral-800 dark:text-neutral-300">
          <DotFilledIcon className="w-4 h-4" />
          {t('bio.remote')}
        </li>
        <li className="flex gap-2 items-center text-base text-neutral-800 dark:text-neutral-300">
          <DotFilledIcon className="w-4 h-4" />
          {t('bio.based')}
        </li>
      </ul>
      <p className="text-base text-pretty text-neutral-800 dark:text-neutral-300 mt-4">
        {t('bio.about')}
      </p>
    </div>
  )
}

export default Bio
