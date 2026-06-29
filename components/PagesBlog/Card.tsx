'use client'

import Link from 'next/link'
import HeaderSection from '@/components/atoms/HeaderSection'
import BorderDot from '@/components/atoms/BorderDot'
import ImageLazy from '@/components/atoms/ImageLazy'
import { useLanguage } from '@/context/LanguageProvider'

interface BlogCard {
  id: string
  title: string
  thumbnail: string | null
  content: string
  slug: string
  createdAt: string
}

interface CardProps {
  blogs: BlogCard[]
}

const SkeletonCard = ({ featured = false }: { featured?: boolean }) => (
  <div className="rounded-md overflow-hidden dark:bg-gray-900 bg-gray-100">
    <div className={`${featured ? 'w-full h-48 md:h-80' : 'w-full h-40 md:h-56'} dark:bg-gray-800 bg-gray-200`} />
    <div className="p-4">
      <div className="h-5 dark:bg-gray-800 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-3 dark:bg-gray-800 bg-gray-200 rounded w-1/4" />
    </div>
  </div>
)

const Card = ({ blogs }: CardProps) => {
  const { t } = useLanguage()

  return (
    <div className="w-full">
      <HeaderSection>{t('blog.title')}</HeaderSection>
      <p className="text-sm text-neutral-800 dark:text-neutral-300 mt-4">{t('blog.desc')}</p>
      <BorderDot className="my-5" />

      {blogs.length === 0 ? (
        <>
          <SkeletonCard featured />
          <HeaderSection className="mt-5 mb-3 md:mt-6 md:mb-4">
            {t('blog.related')}
          </HeaderSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </>
      ) : (
        <>
          <Link href={`/artikel/${blogs[0].slug}`} className="rounded-md w-full block">
            <div className="w-full h-48 md:h-80 relative overflow-hidden rounded-md">
              <ImageLazy
                image={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/thumbnails/${blogs[0].thumbnail}`}
                className="object-cover"
                alt={blogs[0].title}
              />
            </div>
            <h2 className="mt-2 font-bold dark:text-gray-400 text-gray-600">
              {blogs[0].title}
            </h2>
            <p className="text-sm text-gray-500">
              {new Intl.DateTimeFormat('id-ID', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(blogs[0].createdAt))}
            </p>
          </Link>

          <HeaderSection className="mt-5 mb-3 md:mt-6 md:mb-4">
            {t('blog.related')}
          </HeaderSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {blogs.slice(1).map((item) => (
              <Link
                key={item.id}
                href={`/artikel/${item.slug}`}
                className="rounded-md cursor-pointer block"
              >
                <div className="w-full h-40 md:h-56 relative overflow-hidden rounded-md">
                  <ImageLazy
                    image={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/thumbnails/${item.thumbnail}`}
                    className="object-cover"
                    alt={item.title}
                  />
                </div>
                <h2 className="mt-2 font-bold hover:text-emerald-500 line-clamp-2 dark:text-gray-400 text-gray-600">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 my-3">
                  {new Intl.DateTimeFormat('id-ID', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(item.createdAt))}
                </p>
                <p className="line-clamp-2 text-gray-500">{item.content}</p>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Card
