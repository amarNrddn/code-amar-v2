'use client'

import { useRouter } from 'next/navigation'
import { differenceInMonths, differenceInYears } from 'date-fns'
import { BsBuildings as CompanyIcon } from 'react-icons/bs'
import { Career } from '@/lib/types'
import { Card } from '@/components/elements/Card'

interface CareerCardProps {
  careers: Career[]
}

function CareerItem({ career }: { career: Career }) {
  const router = useRouter()

  const idMonths: Record<string, string> = {
    jan: 'jan', feb: 'feb', mar: 'mar', apr: 'apr', mei: 'may', jun: 'jun',
    jul: 'jul', agt: 'aug', agus: 'aug', sep: 'sep', okt: 'oct', nov: 'nov', des: 'dec',
  }
  const normalizeDate = (s: string) => {
    const parts = s.toLowerCase().split(' ')
    if (parts.length >= 2) {
      parts[0] = idMonths[parts[0].slice(0, 3)] || parts[0]
    }
    return new Date(parts.join(' '))
  }

  const parts = career.period.split('-')
  const startDate = normalizeDate(parts[0].trim())
  const endRaw = parts[1]?.trim()
  const endDate = endRaw && endRaw.toLowerCase() !== 'present' ? normalizeDate(endRaw) : new Date()

  let durationText = ''
  if (!isNaN(startDate.getTime())) {
    const durationYears = differenceInYears(endDate, startDate)
    const durationMonths = differenceInMonths(endDate, startDate) % 12
    if (durationYears > 0) {
      durationText += `${durationYears} Year${durationYears > 1 ? 's' : ''} `
    }
    if (durationMonths > 0 || durationYears === 0) {
      durationText += `${durationMonths} Month${durationMonths > 1 ? 's' : ''}`
    }
  }

  return (
    <Card
      onClick={() => router.push(`/career/${career.slug}`)}
      className="flex h-max w-full cursor-pointer items-center gap-5 overflow-hidden rounded-l-sm rounded-r-xl border border-l-0 border-neutral-300 py-2 !shadow-none duration-500 hover:scale-[1.02] dark:border-neutral-600 dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-950"
    >
      <div className="relative my-2 h-max">
        <div className="flex items-center rounded-r-full border border-l-0 border-neutral-300 shadow-lg pl-3 pr-5 py-3 dark:border-neutral-600 dark:shadow-neutral-800">
          {career.thumbnail ? (
            <img
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/thumbnails/${career.thumbnail}`}
              width={55}
              height={55}
              alt={career.title}
              className="relative z-10 w-[55px] h-[55px] object-contain rounded-full"
            />
          ) : (
            <CompanyIcon size={30} className="text-neutral-500 dark:text-neutral-400" />
          )}
        </div>
      </div>

      <div className="flex flex-col items-start space-y-1 pr-4">
        <h2 className="font-semibold dark:text-white text-black">{career.title}</h2>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1 md:gap-2">
            <span>{career.company_description?.slice(0, 60)}</span>
          </div>
          <div className="flex flex-col items-start md:text-[13px]">
            <div className="flex gap-1">
              <span>{career.period}</span>
            </div>
            <span className="text-neutral-500 dark:text-neutral-500">~ {durationText}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

const SkeletonCard = () => (
  <div className="flex h-max w-full items-center gap-5 rounded-xl border border-neutral-300 py-2 dark:border-neutral-600">
    <div className="w-[85px] flex justify-center">
      <div className="w-[55px] h-[55px] rounded-full dark:bg-gray-800 bg-gray-200" />
    </div>
    <div className="flex-1 pr-4 space-y-2">
      <div className="h-5 dark:bg-gray-800 bg-gray-200 rounded w-1/2" />
      <div className="h-3 dark:bg-gray-800 bg-gray-200 rounded w-3/4" />
      <div className="h-3 dark:bg-gray-800 bg-gray-200 rounded w-1/3" />
    </div>
  </div>
)

const CareerCard = ({ careers }: CareerCardProps) => {
  return (
    <div className="w-full space-y-4">
      {careers.length === 0
        ? [1, 2].map((i) => <SkeletonCard key={i} />)
        : careers.map((item) => <CareerItem key={item.id} career={item} />)}
    </div>
  )
}

export default CareerCard
