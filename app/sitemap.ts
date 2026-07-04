import { MetadataRoute } from 'next'
import { supabaseAdmin } from '@/lib/supabase-admin'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codeamar.my.id'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    { path: '', lastModified: new Date(), priority: 1.0 },
    { path: '/about', lastModified: new Date(), priority: 0.8 },
    { path: '/blog', lastModified: new Date(), priority: 0.9 },
    { path: '/project', lastModified: new Date(), priority: 0.9 },
    { path: '/dashboard', lastModified: new Date(), priority: 0.6 },
    { path: '/contact', lastModified: new Date(), priority: 0.8 },
  ].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.path === '' ? 'weekly' as const : 'monthly' as const,
    priority: route.priority,
  }))

  let blogRoutes: MetadataRoute.Sitemap = []
  try {
    const { data: blogs } = await supabaseAdmin
      .from('Blogs')
      .select('slug, createdAt')
    if (blogs) {
      blogRoutes = blogs.map((blog) => ({
        url: `${siteUrl}/artikel/${blog.slug}`,
        lastModified: new Date(blog.createdAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    }
  } catch (e) {
    console.error('Sitemap blogs error:', e)
  }

  let projectRoutes: MetadataRoute.Sitemap = []
  try {
    const { data: projects } = await supabaseAdmin
      .from('Projects')
      .select('slug, createdAt')
    if (projects) {
      projectRoutes = projects.map((project) => ({
        url: `${siteUrl}/project/${project.slug}`,
        lastModified: new Date(project.createdAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    }
  } catch (e) {
    console.error('Sitemap projects error:', e)
  }

  let careerRoutes: MetadataRoute.Sitemap = []
  try {
    const { data: careers } = await supabaseAdmin
      .from('Careers')
      .select('slug, createdAt')
    if (careers) {
      careerRoutes = careers.map((career) => ({
        url: `${siteUrl}/career/${career.slug}`,
        lastModified: new Date(career.createdAt),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      }))
    }
  } catch (e) {
    console.error('Sitemap careers error:', e)
  }

  return [...staticRoutes, ...blogRoutes, ...projectRoutes, ...careerRoutes]
}
