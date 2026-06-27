'use client'

import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { TiFlowMerge } from 'react-icons/ti'
import HeaderSection from '@/components/atoms/HeaderSection'
import BorderDot from '@/components/atoms/BorderDot'
import Border from '@/components/atoms/Border'
import GithubCalendar from '@/components/Dashboard/GithubCalendar'
import Roadmap from '@/components/Dashboard/Roadmap'
import { useLanguage } from '@/context/LanguageProvider'

export default function Dashboard() {
  const { t } = useLanguage()

  return (
    <motion.div
      className="mt-4 md:mt-12 pb-10 w-full relative"
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        ease: 'easeInOut',
        scale: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      }}
    >
      <HeaderSection>{t('dashboard.title')}</HeaderSection>
      <p className="mt-5 text-gray-500">{t('dashboard.desc')}</p>
      <BorderDot className="my-6" />
      <HeaderSection>
        <FaGithub />
        {t('dashboard.contributions')}
      </HeaderSection>

      <div className="my-3 md:flex md:justify-between">
        <p className="text-gray-500">{t('dashboard.contributionsDesc')}</p>
        <a
          className="text-gray-500"
          href="https://github.com/amarNrddn"
          target="_blank"
          rel="noreferrer"
        >
          {t('dashboard.codeamar')}
        </a>
      </div>

      <GithubCalendar />
      <img
        className="w-full"
        src="https://ghchart.rshah.org/amarNrddn"
        alt={t('dashboard.chartAlt')}
      />
      <Border className="my-8" />
      <HeaderSection>
        <TiFlowMerge />
        {t('dashboard.roadmap')}
      </HeaderSection>
      <p className="my-4 text-gray-500">{t('dashboard.roadmapDesc')}</p>

      <Roadmap />
    </motion.div>
  )
}
