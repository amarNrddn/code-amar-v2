'use client'

import { FaGithub, FaArrowUp, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageProvider'

const SocialMedia = () => {
  const { t } = useLanguage()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative px-3 py-4 rounded-md border-[1px] dark:bg-gray-700 dark:border-gray-600 bg-gray-200 border-gray-300">
        <p className="font-bold text-xl">{t('social.github.title')}</p>
        <p className="pr-14 mt-2 text-sm">{t('social.github.desc')}</p>
        <div className="absolute right-5 bottom-5 w-14 h-14 flex justify-center items-center rounded-full dark:bg-gray-900 bg-black">
          <FaGithub className="text-white text-center w-full text-3xl" />
        </div>
        <a href="https://github.com/amarNrddn" target="_blank" rel="noreferrer">
          <button className="flex items-center gap-2 py-1 px-2 rounded-md mt-3 dark:bg-gray-900 dark:text-white bg-black text-white">
            {t('social.github.button')}
            <FaArrowUp className="rotate-45" />
          </button>
        </a>
      </div>

      <div className="relative px-3 py-4 rounded-md border-[1px] dark:bg-sky-800 dark:border-sky-600 bg-sky-200 border-sky-300">
        <p className="font-bold text-xl">{t('social.linkedin.title')}</p>
        <p className="pr-14 mt-2 text-sm">{t('social.linkedin.desc')}</p>
        <div className="absolute right-5 bottom-5 w-14 h-14 flex justify-center items-center rounded-full" style={{ background: '#0077B5' }}>
          <FaLinkedin className="text-white text-center w-full text-3xl" />
        </div>
        <a href="https://www.linkedin.com/in/amar-nuruddin-592282257/" target="_blank" rel="noreferrer">
          <button className="flex items-center gap-2 py-1 px-2 rounded-md mt-3" style={{ background: '#0077B5', color: 'white' }}>
            {t('social.linkedin.button')}
            <FaArrowUp className="rotate-45" />
          </button>
        </a>
      </div>

      <div className="relative px-3 py-4 rounded-md border-[1px] dark:bg-pink-800 dark:border-pink-600 bg-pink-200 border-pink-300">
        <p className="font-bold text-xl">{t('social.instagram.title')}</p>
        <p className="pr-14 mt-2 text-sm">{t('social.instagram.desc')}</p>
        <div className="absolute right-5 bottom-5 w-14 h-14 flex justify-center items-center rounded-full" style={{ background: 'var(--insta-gradient)' }}>
          <FaInstagram className="text-white text-center w-full text-3xl" />
        </div>
        <a href="https://www.instagram.com/amarrnrdn/" target="_blank" rel="noreferrer">
          <button className="flex items-center gap-2 py-1 px-2 rounded-md mt-3 text-white" style={{ background: 'var(--insta-gradient)' }}>
            {t('social.instagram.button')}
            <FaArrowUp className="rotate-45" />
          </button>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
