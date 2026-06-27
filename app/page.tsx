'use client'

import { useEffect, useRef, Suspense, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { LuCalendarHeart } from 'react-icons/lu'
import { RiServiceFill } from 'react-icons/ri'
import Border from '@/components/atoms/Border'
import Bio from '@/components/Bio/Bio'
import RunText from '@/components/atoms/RunText'
import LoadingCard from '@/components/atoms/LoadingCard'
import Loading from '@/components/atoms/Loading'
import ButtonThemeVsCode from '@/components/atoms/ButtonThemeVsCode'
import HeaderSection from '@/components/atoms/HeaderSection'

const CardArticel = dynamic(() => import('@/components/Home/CardArticel'), {
  loading: () => <LoadingCard />,
})

const CardService = dynamic(() => import('@/components/CardServices/CardService'), {
  loading: () => <LoadingCard />,
})

export default function Home() {
  const [loading, setLoading] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(timer)
  }, [])

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

  if (loading) return <Loading />

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
            <p>Latest Articles</p>
          </HeaderSection>
          <div className="mt-4 md:flex md:justify-between md:items-center">
            <p className="text-md text-gray-500">Latest articles from dev.to</p>
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
            Services
          </HeaderSection>
          <p className="text-gray-500 mt-2">I can deliver the following services</p>
        </div>
        <Suspense fallback={<LoadingCard />}>
          <CardService />
        </Suspense>
      </div>
    </motion.div>
  )
}
