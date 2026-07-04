import type { Metadata } from 'next'
import { supabaseAdmin } from '@/lib/supabase-admin'
import ViewBlog from '@/components/Blog/ViewBlog'
import BreadcrumbJsonLd from '@/components/atoms/BreadcrumbJsonLd'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codeamar.my.id'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  try {
    const { data } = await supabaseAdmin
      .from('Blogs')
      .select('title, thumbnail, slug')
      .eq('slug', params.slug)
      .single()

    if (data) {
      const ogImage = data.thumbnail
        ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/thumbnails/${data.thumbnail}`
        : `${siteUrl}/images/profile.webp`

      return {
        title: data.title,
        description: `Baca artikel ${data.title} oleh Amar Nuruddin (codeamar) - tips, tutorial, dan insight seputar teknologi.`,
        openGraph: {
          title: data.title,
          description: `Baca artikel ${data.title} oleh Amar Nuruddin (codeamar) - tips, tutorial, dan insight seputar teknologi.`,
          url: `${siteUrl}/artikel/${data.slug}`,
          images: [{ url: ogImage, alt: data.title }],
        },
        twitter: {
          title: data.title,
          description: `Baca artikel ${data.title} oleh Amar Nuruddin (codeamar) - tips, tutorial, dan insight seputar teknologi.`,
          images: [ogImage],
        },
      }
    }
  } catch {
    // Fallback if fetch fails
  }

  return {
    title: 'Artikel',
    description: 'Artikel oleh Amar Nuruddin (codeamar)',
  }
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string }
}) {
  let articleJsonLd = null

  try {
    const { data } = await supabaseAdmin
      .from('Blogs')
      .select('title, thumbnail, slug, createdAt')
      .eq('slug', params.slug)
      .single()

    if (data) {
      const ogImage = data.thumbnail
        ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/thumbnails/${data.thumbnail}`
        : `${siteUrl}/images/profile.webp`

      articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: `Baca artikel ${data.title} oleh Amar Nuruddin (codeamar) - tips, tutorial, dan insight seputar teknologi.`,
        image: ogImage,
        datePublished: data.createdAt,
        author: {
          '@type': 'Person',
          name: 'Amar Nuruddin',
          url: siteUrl,
        },
        publisher: {
          '@type': 'Person',
          name: 'Amar Nuruddin',
        },
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
          { name: 'Blog', path: '/blog' },
          { name: 'Artikel', path: '' },
        ]}
      />
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      )}
      <ViewBlog />
    </>
  )
}
