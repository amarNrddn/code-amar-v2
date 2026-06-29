'use client'

import { FcAdvertising } from 'react-icons/fc'
import { useLanguage } from '@/context/LanguageProvider'

const ButtonThemeVsCode = () => {
  const { t } = useLanguage()

  return (
    <div className="p-[3px] bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-[length:400%_400%] animate-rainbow rounded-lg mt-2 md:w-[335px]">
      <a
        href="https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode"
        target="_blank"
        rel="noreferrer"
      >
        <button
          className="w-full flex items-center gap-2 px-2 py-2 text-gray-500 rounded-md text-xs text-start md:justify-center dark:bg-black dark:text-white bg-white"
        >
          <FcAdvertising className="text-xl -rotate-12" />
          {t('buttonTheme.desc')}
        </button>
      </a>
    </div>
  )
}

export default ButtonThemeVsCode
