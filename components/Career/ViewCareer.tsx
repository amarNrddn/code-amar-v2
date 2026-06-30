'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Career } from '@/lib/types'
import { getCareerBySlug } from '@/lib/api'
import BorderDot from '@/components/atoms/BorderDot'
import ImageLazy from '@/components/atoms/ImageLazy'
import Loading from '@/components/atoms/Loading'

const ViewCareer = () => {
  const params = useParams()
  const router = useRouter()
  const [career, setCareer] = useState<Career | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params?.slug) {
      getCareerBySlug(params.slug as string).then((data) => {
        setCareer(data)
        setLoading(false)
      })
    }
  }, [params?.slug])

  if (loading) return <Loading />
  if (!career) return null

  return (
    <motion.div
      className="pt-9 pb-5 w-full relative"
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        ease: 'easeInOut',
        scale: { type: 'spring', stiffness: 300, damping: 20 },
      }}
    >
      <button className="flex items-center gap-2" onClick={() => router.back()}>
        <FaRegArrowAltCircleLeft className="text-xl" />
        <p className="text-gray-500">Kembali</p>
      </button>

      {career.thumbnail && (
        <div className="w-full h-56 md:h-80 overflow-hidden relative mt-6">
          <ImageLazy
            image={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/thumbnails/${career.thumbnail}`}
            className="w-full h-full rounded-md object-cover"
            alt={career.title}
          />
        </div>
      )}

      <h1 className="text-2xl font-bold mt-6 dark:text-white text-black">{career.title}</h1>
      <p className="text-sm text-gray-400 mt-1">{career.period}</p>
      <BorderDot className="my-4" />

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{career.company_description}</p>

      {career.responsibilities && career.responsibilities.length > 0 && (
        <div className="mt-8">
          <h2 className="font-bold text-lg mb-4 dark:text-white text-black">Tanggung Jawab</h2>
          <ul className="space-y-3">
            {career.responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  )
}

export default ViewCareer
