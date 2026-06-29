'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Blog } from '@/lib/types'
import { getAllBlogs } from '@/lib/api'
import ImageLazy from '@/components/atoms/ImageLazy'
import Ribbon from '@/components/atoms/Ribbon'

interface CardArticelProps {
  onLoaded?: () => void
}

const CardArticel = ({ onLoaded }: CardArticelProps) => {
  const router = useRouter()
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    getAllBlogs().then((data) => {
      setBlogs(data)
      onLoaded?.()
    })
  }, [onLoaded])

  return (
    <>
      {blogs.map((item, index) => {
        const date = new Date(item.createdAt)
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' }
        const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(date)

        return (
          <button
            key={item.id}
            className="relative w-72 flex-shrink-0 animate-slide-card transition hover:scale-95 hover:duration-500 text-left"
            onClick={() => router.push(`/artikel/${item.slug}`)}
          >
            <div className="relative z-10 flex h-max w-full flex-col items-start space-y-1">
              <div className="relative aspect-video h-48 w-full overflow-hidden rounded-md lg:h-40">
                <ImageLazy
                  image={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/thumbnails/${item.thumbnail}`}
                  className="rounded-md object-cover"
                  alt={item.title}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-start text-sm text-neutral-800 dark:text-neutral-300 truncate w-full">
                {item.title}
              </p>
              <span className="text-[10px] text-neutral-600 dark:text-neutral-400">
                {formattedDate}
              </span>
            </div>
            {index === 0 && <Ribbon text="New" />}
          </button>
        )
      })}
    </>
  )
}

export default CardArticel
