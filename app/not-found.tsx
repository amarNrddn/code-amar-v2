import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 - Halaman Tidak Ditemukan',
  description: 'Halaman yang Anda cari tidak ditemukan. Kembali ke beranda Amar Nuruddin (codeamar).',
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-500 mb-8 text-center">
        Halaman yang Anda cari tidak ditemukan.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md hover:opacity-80 transition-opacity"
      >
        Kembali ke Beranda
      </Link>
    </div>
  )
}
