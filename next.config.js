/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'ghchart.rshah.org',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/artikel/:slug',
        destination: '/artikel/:slug',
      },
    ]
  },
}

module.exports = nextConfig
