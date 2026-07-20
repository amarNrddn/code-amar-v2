import { MetadataRoute } from 'next'

const siteUrl = 'https://codeamar.my.id'

const staticRoutes = [
  { path: '', priority: 1.0, changeFreq: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFreq: 'monthly' as const },
  { path: '/blog', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/project', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/dashboard', priority: 0.6, changeFreq: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFreq: 'monthly' as const },
]

const dynamicRoutes = [
  { path: '/artikel/building-restful-apis-with-expressjs-a7b8c9d0', lastmod: '2026-06-26', priority: 0.7 },
  { path: '/artikel/menjinakkan-state-kompleks-react-hooks', lastmod: '2026-06-27', priority: 0.7 },
  { path: '/artikel/introduction-to-database-design-with-mysql-a7b8c9d0', lastmod: '2026-06-26', priority: 0.7 },
  { path: '/artikel/optimasi-seo-nextjs-google-search-console-vercel', lastmod: '2026-07-04', priority: 0.7 },
  { path: '/project/sistem-rekomendasi-jurusan-smk-knn-nlp', lastmod: '2026-07-04', priority: 0.7 },
  { path: '/project/codeamar-portfolio-blog-website', lastmod: '2026-07-06', priority: 0.7 },
  { path: '/project/wargacek-crowdsourcing-pelaporan-isu-kota', lastmod: '2026-06-28', priority: 0.7 },
  { path: '/project/cms-penjualan-tiket-online', lastmod: '2026-07-04', priority: 0.7 },
  { path: '/project/undanganvas', lastmod: '2026-07-06', priority: 0.7 },
  { path: '/project/sparkling-admin-dashboard', lastmod: '2026-07-08', priority: 0.7 },
  { path: '/career/zlaepik-std-323', lastmod: '2026-06-30', priority: 0.5 },
  { path: '/career/bangkit-academy345', lastmod: '2026-06-30', priority: 0.5 },
  { path: '/career/pompa-dex-indoguna', lastmod: '2026-06-30', priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date('2026-07-20'),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }))

  const dynamicUrls = dynamicRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(route.lastmod),
    changeFrequency: 'monthly' as const,
    priority: route.priority,
  }))

  return [...staticUrls, ...dynamicUrls]
}
