'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import './globals.css'

const navItems = [
  { label: 'Dashboard', path: '/admin' },
  { label: 'Blogs', path: '/admin/blogs' },
  { label: 'Projects', path: '/admin/projects' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [authed, setAuthed] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('admin_token')
    if (!token && pathname !== '/admin/login') {
      router.push('/admin/login')
    } else {
      setAuthed(!!token)
    }
    setLoading(false)
  }, [pathname, router])

  if (pathname === '/admin/login') return <>{children}</>

  if (loading) return <div className="flex items-center justify-center min-h-screen"><div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" /></div>

  if (!authed) return null

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-56 bg-white border-r border-gray-200 p-4 flex flex-col">
        <h1 className="text-lg font-bold mb-6">Admin Panel</h1>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-2 rounded-md text-sm ${pathname === item.path || (item.path !== '/admin' && pathname.startsWith(item.path)) ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => { localStorage.removeItem('admin_token'); router.push('/admin/login') }}
          className="mt-auto px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-md"
        >
          Logout
        </button>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  )
}
