/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
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
};

export default nextConfig;
