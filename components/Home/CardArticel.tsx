'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { Blog } from '@/lib/types'
import { getAllBlogs } from '@/lib/api'
import ImageLazy from '@/components/atoms/ImageLazy'
import LoadingCard from '@/components/atoms/LoadingCard'

const CardArticel = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllBlogs().then((data) => {
      setBlogs(data)
      setLoading(false)
    })
  }, [])

  if (loading) return <LoadingCard />

  return (
    <Marquee pauseOnHover gradient={false} speed={40}>
      {blogs.map((item) => (
        <Link
          key={item.id}
          href={`/artikel/${item.slug}`}
          className="mx-2 w-[250px] rounded-md overflow-hidden dark:bg-gray-900 bg-gray-100 hover:scale-105 transition-transform"
        >
          <ImageLazy
            image={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/thumbnails/${item.thumbnail}`}
            className="w-full h-40 object-cover"
            alt={item.title}
          />
          <p className="text-sm p-2 font-medium dark:text-white text-black line-clamp-2">
            {item.title}
          </p>
        </Link>
      ))}
    </Marquee>
  )
}

export default CardArticel
