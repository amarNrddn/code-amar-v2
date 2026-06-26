'use client'

import Marquee from 'react-fast-marquee'
import { useTheme } from '@/context/ThemeProvider'
import { itemsmargue } from '@/constants/marquee'

const MarqueeElement = () => {
  const { theme } = useTheme()
  return (
    <div className="relative overflow-hidden w-full">
      <Marquee className="flex py-5 cursor-pointer" gradient={false} speed={30} direction="left" loop={0}>
        {itemsmargue.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-1 rounded-2xl py-1 px-3 mx-2 ${theme === 'dark' ? 'shadow-neutral-800 shadow-md' : 'shadow-[0_3px_10px_rgb(0,0,0,0.15)]'}`}
          >
            <img src={item.logo} alt={item.title} className="w-6 h-6 object-contain" />
            <p className="text-xs">{item.title}</p>
          </div>
        ))}
      </Marquee>
      <Marquee className="flex py-5 cursor-pointer" gradient={false} speed={30} direction="right" loop={0}>
        {itemsmargue.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-1 rounded-2xl py-1 px-3 mx-2 ${theme === 'dark' ? 'shadow-neutral-800 shadow-md' : 'shadow-[0_3px_10px_rgb(0,0,0,0.15)]'}`}
          >
            <img src={item.logo} alt={item.title} className="w-6 h-6 object-contain" />
            <p className="text-xs">{item.title}</p>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default MarqueeElement
