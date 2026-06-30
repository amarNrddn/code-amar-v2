import type { Metadata } from 'next'
import { supabaseAdmin } from '@/lib/supabase-admin'
import ViewBlog from '@/components/Blog/ViewBlog'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codeamar.vercel.app'

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

export default function BlogDetail() {
  return <ViewBlog />
}
