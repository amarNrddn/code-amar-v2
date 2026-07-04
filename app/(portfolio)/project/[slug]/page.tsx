import type { Metadata } from 'next'
import { supabaseAdmin } from '@/lib/supabase-admin'
import ViewProject from '@/components/Project/ViewProject'
import BreadcrumbJsonLd from '@/components/atoms/BreadcrumbJsonLd'

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

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string }
}) {
  let projectJsonLd = null

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

      projectJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: data.title,
        description: `Lihat project ${data.title} oleh Amar Nuruddin (codeamar) - showcase dan dokumentasi project.`,
        image: ogImage,
        url: `${siteUrl}/project/${data.slug}`,
        author: {
          '@type': 'Person',
          name: 'Amar Nuruddin',
          url: siteUrl,
        },
        applicationCategory: 'WebApplication',
        operatingSystem: 'Web',
      }
    }
  } catch {
    // Silently fail
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/project' },
          { name: 'Detail', path: '' },
        ]}
      />
      {projectJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
        />
      )}
      <ViewProject />
    </>
  )
}
