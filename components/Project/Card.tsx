'use client'

import Link from 'next/link'
import { Project } from '@/lib/types'
import HeaderSection from '@/components/atoms/HeaderSection'
import BorderDot from '@/components/atoms/BorderDot'
import ImageLazy from '@/components/atoms/ImageLazy'

interface CardProps {
  projects: Project[]
}

const SkeletonCard = () => (
  <div className="rounded-md overflow-hidden dark:bg-gray-900 bg-gray-100">
    <div className="w-full h-48 dark:bg-gray-800 bg-gray-200" />
    <div className="p-4">
      <div className="h-5 dark:bg-gray-800 bg-gray-200 rounded w-2/3 mb-2" />
      <div className="h-3 dark:bg-gray-800 bg-gray-200 rounded w-full mb-1" />
      <div className="h-3 dark:bg-gray-800 bg-gray-200 rounded w-3/4 mb-3" />
      <div className="flex gap-2">
        <div className="h-6 w-16 dark:bg-gray-800 bg-gray-200 rounded-full" />
        <div className="h-6 w-20 dark:bg-gray-800 bg-gray-200 rounded-full" />
        <div className="h-6 w-14 dark:bg-gray-800 bg-gray-200 rounded-full" />
      </div>
    </div>
  </div>
)

const Card = ({ projects }: CardProps) => {
  return (
    <div className="w-full">
      <HeaderSection>My Projects</HeaderSection>
      <BorderDot className="my-5" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.length === 0
          ? [1, 2, 3, 4].map((i) => <SkeletonCard key={i} />)
          : projects.map((item) => (
              <Link
                key={item.id}
                href={`/project/${item.slug}`}
                className="rounded-md overflow-hidden dark:bg-gray-900 bg-gray-100 cursor-pointer hover:scale-[1.02] transition-transform"
              >
                {item.thumbnail && (
                  <ImageLazy
                    image={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/thumbnails/${item.thumbnail}`}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="font-bold text-lg dark:text-white text-black">{item.title}</h2>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{item.description}</p>
                  {item.techstacks && item.techstacks.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.techstacks.map((tech: any) => (
                        <span
                          key={tech.id}
                          className="text-xs px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300"
                        >
                          {tech.techstack}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
      </div>
    </div>
  )
}

export default Card
