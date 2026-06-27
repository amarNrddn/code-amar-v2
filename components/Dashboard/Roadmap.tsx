'use client'

import { itemsRoadmap } from '@/constants/roadmap'
import { useTheme } from '@/context/ThemeProvider'

const Roadmap = () => {
  const { theme } = useTheme()

  return (
    <div>
      {itemsRoadmap.map((item, i) => (
        <div
          key={i}
          className="flex justify-between items-center py-3 border-[1px] rounded-lg px-2 mb-4 hover:shadow-lg hover:ease-out transition-all"
        >
          <div className="flex items-center gap-2">
            <img className="w-5" src={item.icon} alt="" />
            <p className="text-sm">{item.title}</p>
          </div>
          <div>
            <a href={item.link} target="_blank" rel="noreferrer">
              <p
                className={`text-xs p-1 bg-green-200 rounded-full ${theme === 'dark' ? 'text-black' : ''}`}
              >
                {item.language}
              </p>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Roadmap
