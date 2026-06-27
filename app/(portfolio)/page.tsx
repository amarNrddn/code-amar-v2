'use client'

import { useEffect, useRef, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { LuCalendarHeart } from 'react-icons/lu'
import { RiServiceFill } from 'react-icons/ri'
import Border from '@/components/atoms/Border'
import Bio from '@/components/Bio/Bio'
import RunText from '@/components/atoms/RunText'
import LoadingCard from '@/components/atoms/LoadingCard'
import ButtonThemeVsCode from '@/components/atoms/ButtonThemeVsCode'
import HeaderSection from '@/components/atoms/HeaderSection'
import { useLanguage } from '@/context/LanguageProvider'

const CardArticel = dynamic(() => import('@/components/Home/CardArticel'), {
  loading: () => <LoadingCard />,
})

const CardService = dynamic(() => import('@/components/CardServices/CardService'), {
  loading: () => <LoadingCard />,
})

export default function Home() {
  const { t } = useLanguage()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    const cardWidth = scrollContainer.firstChild ? (scrollContainer.firstChild as HTMLElement).offsetWidth || 0 : 0
    let scrollAmount = cardWidth

    const smoothScroll = (direction: number) => {
      scrollContainer.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      })
    }

    const scrollLeft = () => {
      smoothScroll(1)
      setTimeout(() => {
        smoothScroll(-1)
      }, 2000)
    }

    animationFrameId = requestAnimationFrame(() => setTimeout(scrollLeft, 1000))

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <motion.div
      className="mt-4 md:mt-12 pb-10"
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
      <RunText />
      <Bio />
      <div>
        <Border className="my-8" />
        <div>
          <HeaderSection>
            <LuCalendarHeart />
            <p>{t('home.articles')}</p>
          </HeaderSection>
          <div className="mt-4 md:flex md:justify-between md:items-center">
            <p className="text-md text-gray-500">{t('home.articlesFrom')}</p>
            <ButtonThemeVsCode />
          </div>
        </div>
        <div className="lg:max-w-3xl md:max-w-xl mt-5 relative">
          <div
            className="w-full flex overflow-x-auto gap-4 whitespace-nowrap non-scrole"
            ref={scrollContainerRef}
          >
            <Suspense fallback={<LoadingCard />}>
              <CardArticel />
            </Suspense>
          </div>
        </div>
        <Border className="my-8" />
        <div className="mb-5">
          <HeaderSection>
            <RiServiceFill />
            {t('home.services')}
          </HeaderSection>
          <p className="text-gray-500 mt-2">{t('home.servicesDesc')}</p>
        </div>
        <Suspense fallback={<LoadingCard />}>
          <CardService />
        </Suspense>
      </div>
    </motion.div>
  )
}
