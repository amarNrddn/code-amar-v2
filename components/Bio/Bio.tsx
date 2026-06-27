'use client'

import { DotFilledIcon } from '@radix-ui/react-icons'
import { useTheme } from '@/context/ThemeProvider'
import { textPrimaryDark, textLight } from '@/constants/styles'

const bios = [
  {
    jobs: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
    city: 'Jakarta',
    about:
      'Full-stack developer with 5+ years experience building web applications using JavaScript, Node.js, and React.',
  },
  {
    jobs: ['UI/UX Designer'],
    city: 'Bandung',
    about:
      'UI/UX designer focused on creating intuitive and accessible user interfaces for digital products.',
  },
  {
    jobs: [],
    city: 'Surabaya',
    about:
      'Backend engineer specializing in microservices architecture, API design, and cloud infrastructure.',
  },
]

const Bio = () => {
  const { theme } = useTheme()

  return (
    <div>
      {bios.map((item, i) => (
        <div key={i}>
          {item.jobs.map((job, j) => (
            <p key={j} className="flex items-center gap-2 text-base text-gray-500">
              <DotFilledIcon className="w-4 h-4" />
              {job}
            </p>
          ))}
          <div className="flex items-center gap-2 text-gray-500">
            <DotFilledIcon className="w-4 h-4" />
            <p className="text-base">
              Based {item.city} <span className="text-xs font-semibold">ID</span>
            </p>
          </div>
          <p
            className={`text-base text-pretty text-gray-700 mt-3 ${theme === 'dark' ? textLight.className : textPrimaryDark.className}`}
          >
            {item.about}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Bio
