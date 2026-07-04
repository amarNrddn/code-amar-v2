import type { Metadata } from 'next'
import { supabaseAdmin } from '@/lib/supabase-admin'
import ViewCareer from '@/components/Career/ViewCareer'
import BreadcrumbJsonLd from '@/components/atoms/BreadcrumbJsonLd'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codeamar.my.id'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  try {
    const { data } = await supabaseAdmin
      .from('Careers')
      .select('title, thumbnail, slug')
      .eq('slug', params.slug)
      .single()

    if (data) {
      const ogImage = data.thumbnail
        ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/thumbnails/${data.thumbnail}`
        : `${siteUrl}/images/profile.webp`

      return {
        title: data.title,
        description: `Lihat karir ${data.title} oleh Amar Nuruddin (codeamar) - pengalaman profesional.`,
        openGraph: {
          title: data.title,
          description: `Lihat karir ${data.title} oleh Amar Nuruddin (codeamar) - pengalaman profesional.`,
          url: `${siteUrl}/career/${data.slug}`,
          images: [{ url: ogImage, alt: data.title }],
        },
        twitter: {
          title: data.title,
          description: `Lihat karir ${data.title} oleh Amar Nuruddin (codeamar) - pengalaman profesional.`,
          images: [ogImage],
        },
      }
    }
  } catch {
    // Fallback if fetch fails
  }

  return {
    title: 'Karir',
    description: 'Pengalaman karir Amar Nuruddin (codeamar)',
  }
}

export default function CareerDetail() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Karir', path: '' },
        ]}
      />
      <ViewCareer />
    </>
  )
}
