'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { Career } from '@/lib/types'
import HeaderSection from '@/components/atoms/HeaderSection'
import BorderDot from '@/components/atoms/BorderDot'
import Border from '@/components/atoms/Border'
import { IoShareSocialSharp } from 'react-icons/io5'
import { FaCode, FaBriefcase } from 'react-icons/fa'
import Story from '@/components/About/Story'
import MarqueeElement from '@/components/About/MarqueeElement'
import SocialMedia from '@/components/About/SocialMedia'
import CareerCard from '@/components/Career/Card'
import { useLanguage } from '@/context/LanguageProvider'

export default function AboutClient() {
  const { t } = useLanguage()
  const [careers, setCareers] = useState<Career[]>([])

  useEffect(() => {
    fetch('/api/career')
      .then((r) => r.json())
      .then((res) => {
        if (res.data) setCareers(res.data as Career[])
      })
      .catch((e) => console.error('Fetch careers error:', e))
  }, [])

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
      <h1 className="sr-only">Tentang Amar Nuruddin - Frontend Developer &amp; Software Engineer</h1>
      <HeaderSection>{t('about.title')}</HeaderSection>
      <p className="mt-5 text-gray-500">{t('about.desc')}</p>
      <BorderDot className="my-6" />
      <Story />
      <Border className="my-6" />
      <section className="space-y-6">
        <div className="space-y-2">
          <HeaderSection>
            <FaBriefcase />
            Career
          </HeaderSection>
          <p className="dark:text-neutral-400 text-gray-500">My professional career journey</p>
        </div>
        <CareerCard careers={careers} />
      </section>
      <Border className="my-6" />
      <HeaderSection>
        <FaCode />
        {t('about.skills')}
      </HeaderSection>
      <p className="my-4 text-gray-500">{t('about.skillsDesc')}</p>
      <MarqueeElement />
      <Border className="my-6" />
      <HeaderSection>
        <IoShareSocialSharp />
        {t('about.media')}
      </HeaderSection>
      <p className="my-4">{t('about.mediaDesc')}</p>
      <SocialMedia />
    </motion.div>
  )
}
