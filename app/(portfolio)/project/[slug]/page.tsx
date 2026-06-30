import type { Metadata } from 'next'
import { supabaseAdmin } from '@/lib/supabase-admin'
import ViewProject from '@/components/Project/ViewProject'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codeamar.vercel.app'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  try {
    const { data } = await supabaseAdmin
      .from('Projects')
      .select('title, thumbnail, slug')
      .eq('slug', params.slug)
      .single()

    if (data) {
      const ogImage = data.thumbnail
        ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/thumbnails/${data.thumbnail}`
        : `${siteUrl}/images/profile.webp`

      return {
        title: data.title,
        description: `Lihat project ${data.title} oleh Amar Nuruddin (codeamar) - showcase dan dokumentasi project.`,
        openGraph: {
          title: data.title,
          description: `Lihat project ${data.title} oleh Amar Nuruddin (codeamar) - showcase dan dokumentasi project.`,
          url: `${siteUrl}/project/${data.slug}`,
          images: [{ url: ogImage, alt: data.title }],
        },
        twitter: {
          title: data.title,
          description: `Lihat project ${data.title} oleh Amar Nuruddin (codeamar) - showcase dan dokumentasi project.`,
          images: [ogImage],
        },
      }
    }
  } catch {
    // Fallback if fetch fails
  }

  return {
    title: 'Project',
    description: 'Project oleh Amar Nuruddin (codeamar)',
  }
}

export default function ProjectDetail() {
  return <ViewProject />
}
