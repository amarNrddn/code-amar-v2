'use client'

import { useEffect, useState } from 'react'
import { DotFilledIcon } from '@radix-ui/react-icons'
import { useTheme } from '@/context/ThemeProvider'
import { textPrimaryDark, textLight } from '@/constants/styles'
import { Bio as BioType } from '@/lib/types'
import { getBios } from '@/lib/api'
import LoadingInfinity from '@/components/atoms/LoadingInfinity'

const Bio = () => {
  const { theme } = useTheme()
  const [bio, setBio] = useState<BioType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBios().then((data) => {
      setBio(data)
      setLoading(false)
    })
  }, [])

  if (loading) return <LoadingInfinity />

  return (
    <div>
      {bio.map((item) => (
        <div key={item.id}>
          {item.Jobs?.map((job) => (
            <p key={job.id} className="flex items-center gap-2 text-base text-gray-500">
              <DotFilledIcon className="w-4 h-4" />
              {job.job}
            </p>
          ))}
          <div className="flex items-center gap-2 text-gray-500">
            <DotFilledIcon className="w-4 h-4" />
            <p className="text-base">
              Based {item.city} <span className="text-xs font-semibold">ID</span>
            </p>
          </div>
          <p className={`text-base text-pretty text-gray-700 mt-3 ${theme === 'dark' ? textLight.className : textPrimaryDark.className}`}>
            {item.about}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Bio
