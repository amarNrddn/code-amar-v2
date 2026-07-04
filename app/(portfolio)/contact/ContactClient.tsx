'use client'

import { motion } from 'framer-motion'
import { IoMailOutline, IoLocationOutline } from 'react-icons/io5'
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa'
import HeaderSection from '@/components/atoms/HeaderSection'
import BorderDot from '@/components/atoms/BorderDot'
import { useLanguage } from '@/context/LanguageProvider'

export default function ContactClient() {
  const { t } = useLanguage()

  const socials = [
    {
      title: t('social.github.title'),
      desc: t('social.github.desc'),
      button: t('social.github.button'),
      href: 'https://github.com/amarNrddn',
      icon: <FaGithub className="text-white text-center w-full text-3xl" />,
      bg: 'dark:bg-gray-700 dark:border-gray-600 bg-gray-200 border-gray-300',
      btnClassName: 'dark:bg-gray-900 bg-black text-white',
      iconClassName: 'dark:bg-gray-900 bg-black',
    },
    {
      title: t('social.linkedin.title'),
      desc: t('social.linkedin.desc'),
      button: t('social.linkedin.button'),
      href: 'https://www.linkedin.com/in/amar-nuruddin-592282257/',
      icon: <FaLinkedin className="text-white text-center w-full text-3xl" />,
      bg: 'dark:bg-sky-800 dark:border-sky-600 bg-sky-200 border-sky-300',
      btnClassName: '',
      btnStyle: { background: '#0077B5', color: 'white' },
      iconClassName: '',
      iconStyle: { background: '#0077B5' },
    },
    {
      title: t('social.instagram.title'),
      desc: t('social.instagram.desc'),
      button: t('social.instagram.button'),
      href: 'https://www.instagram.com/amarrnrdn/',
      icon: <FaInstagram className="text-white text-center w-full text-3xl" />,
      bg: 'dark:bg-pink-800 dark:border-pink-600 bg-pink-200 border-pink-300',
      btnClassName: '',
      btnStyle: { background: 'var(--insta-gradient)', color: 'white' },
      iconClassName: '',
      iconStyle: { background: 'var(--insta-gradient)' },
    },
  ]

  return (
    <motion.div
      className="mt-4 md:mt-12 pb-10 w-full relative"
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        ease: 'easeInOut',
        scale: { type: 'spring', stiffness: 300, damping: 20 },
      }}
    >
      <h1 className="sr-only">Contact Amar Nuruddin (codeamar) - Frontend Developer</h1>
      <HeaderSection>Contact</HeaderSection>
      <p className="mt-5 text-gray-500">
        Have a project, collaboration idea, or just want to say hi? Reach out to me through any of the channels below.
      </p>

      <div className="mt-6">
        <div className="flex items-center gap-3 mb-4">
          <IoMailOutline className="text-2xl" />
          <a href="mailto:amarpalevi82@gmail.com" className="text-blue-500 hover:underline text-lg">
            amarpalevi82@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <IoLocationOutline className="text-2xl" />
          <span className="text-gray-500">Banjarnegara, Indonesia</span>
        </div>
      </div>

      <BorderDot className="my-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socials.map((s, i) => (
          <div
            key={i}
            className={`relative px-3 py-4 rounded-md border-[1px] ${s.bg}`}
          >
            <p className="font-bold text-xl">{s.title}</p>
            <p className="pr-14 mt-2 text-sm">{s.desc}</p>
            <div
              className={`absolute right-5 bottom-5 w-14 h-14 flex justify-center items-center rounded-full ${s.iconClassName || 'dark:bg-gray-900 bg-black'}`}
              style={s.iconStyle || {}}
            >
              {s.icon}
            </div>
            <a href={s.href} target="_blank" rel="noreferrer">
              <button
                className={`flex items-center gap-2 py-1 px-2 rounded-md mt-3 ${s.btnClassName}`}
                style={s.btnStyle || {}}
              >
                {s.button}
                <FaArrowUp className="rotate-45" />
              </button>
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
