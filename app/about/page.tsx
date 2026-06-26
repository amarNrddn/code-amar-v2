'use client'

import { motion } from 'framer-motion'
import HeaderSection from '@/components/atoms/HeaderSection'
import BorderDot from '@/components/atoms/BorderDot'
import Border from '@/components/atoms/Border'
import { IoShareSocialSharp } from 'react-icons/io5'
import { FaCode } from 'react-icons/fa'
import Story from '@/components/About/Story'
import MarqueeElement from '@/components/About/MarqueeElement'
import SocialMedia from '@/components/About/SocialMedia'

export default function About() {
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
      <HeaderSection>About</HeaderSection>
      <p className="mt-5 text-gray-500">A short story of me</p>
      <BorderDot className="my-6" />
      <Story />
      <Border className="my-6" />
      <HeaderSection>
        <FaCode />
        Skills
      </HeaderSection>
      <p className="my-4 text-gray-500">My coding skills</p>
      <MarqueeElement />
      <Border className="my-6" />
      <HeaderSection>
        <IoShareSocialSharp />
        Media
      </HeaderSection>
      <p className="my-4">I am active on social media</p>
      <SocialMedia />
    </motion.div>
  )
}
