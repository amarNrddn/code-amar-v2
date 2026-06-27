'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { TiFlowMerge } from 'react-icons/ti'
import HeaderSection from '@/components/atoms/HeaderSection'
import BorderDot from '@/components/atoms/BorderDot'
import Border from '@/components/atoms/Border'
import GithubCalendar from '@/components/Dashboard/GithubCalendar'
import Roadmap from '@/components/Dashboard/Roadmap'
import { useLanguage } from '@/context/LanguageProvider'
import { useTheme } from '@/context/ThemeProvider'

export default function Dashboard() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [chartLoaded, setChartLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imgRef.current?.complete) setChartLoaded(true)
  }, [])

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
      <div className="relative w-full min-h-[128px]">
        {!chartLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className={`w-8 h-8 border-2 border-t-transparent rounded-full animate-spin ${theme === 'dark' ? 'border-white' : 'border-gray-900'}`} />
          </div>
        )}
        <img
          ref={imgRef}
          className={`w-full ${chartLoaded ? '' : 'opacity-0'} transition-opacity`}
          src="https://ghchart.rshah.org/amarNrddn"
          alt={t('dashboard.chartAlt')}
          onLoad={() => setChartLoaded(true)}
          onError={() => setChartLoaded(true)}
        />
      </div>
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
