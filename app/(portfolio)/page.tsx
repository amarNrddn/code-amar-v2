'use client'

import { useEffect, useRef, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import CardService from '@/components/CardServices/CardService'
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

export default function Home() {
  const { t } = useLanguage()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [cardLoaded, setCardLoaded] = useState(false)

  useEffect(() => {
    document.title = 'Amar Nuruddin (@codeamar) | Frontend Developer & Software Engineer'
  }, [])

  useEffect(() => {
    if (!cardLoaded) return

    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const firstCard = scrollContainer.firstElementChild as HTMLElement | null
    if (!firstCard) return

    const cardWidth = firstCard.offsetWidth || 220
    const scrollAmount = cardWidth

    const smoothScroll = (direction: number) => {
      scrollContainer.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      })
    }

    const scrollLeft = () => {
      smoothScroll(1)
      setTimeout(() => smoothScroll(-1), 2000)
    }

    const animationFrameId = requestAnimationFrame(() => setTimeout(scrollLeft, 1000))

    return () => cancelAnimationFrame(animationFrameId)
  }, [cardLoaded])

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
      <h1 className="sr-only">Amar Nuruddin - Frontend Developer &amp; Software Engineer</h1>
      <RunText />
      <Bio />
      <div>
        <Border className="my-8" />
        <div>
          <HeaderSection>
            <LuCalendarHeart />
            <span>{t('home.articles')}</span>
          </HeaderSection>
          <div className="mt-4 md:flex md:justify-between md:items-center">
            <p className="text-md text-gray-500">{t('home.articlesFrom')}</p>
            <ButtonThemeVsCode />
          </div>
        </div>
        <div className="mt-5 relative">
          <div
            className="mt-4 flex h-64 flex-row space-x-3 overflow-y-hidden overflow-x-auto pt-2 lg:h-52 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            ref={scrollContainerRef}
          >
            <Suspense fallback={<LoadingCard />}>
              <CardArticel onLoaded={() => setCardLoaded(true)} />
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
        <CardService />
      </div>
    </motion.div>
  )
}
