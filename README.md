<div align="center">
  <h1>codeamar.my.id</h1>
  <p>🔥 Personal portfolio & blog website built from scratch using Next.js 14, TypeScript, Tailwind CSS, and Supabase</p>

[![GitHub Repo stars](https://img.shields.io/github/stars/codeamar/code-amar-next)](https://github.com/codeamar/code-amar-next/stargazers)
[![Last Update](https://img.shields.io/badge/last%20update-2026-blue.svg)](https://shields.io/)

</div>
<br />

<img width="1359" alt="screenshot" src="https://codeamar.my.id/_next/image?url=https%3A%2F%2Fgtgdlgnmlsmrqnnvqyxd.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fthumbnails%2F1783306013718-42e2on.png&w=1080&q=75">

## Introduction

This personal website was carefully crafted from scratch using Next.js 14 (App Router) and Supabase, designed to serve as a professional portfolio, a tech blog, and a personal dashboard.

I'm constantly improving and adding new features. This website is where I share my projects, write about web development, and showcase my career journey.

Feel free to use this website as a reference, for inspiration, or as a template following the provided license.

If you have any questions, suggestions, or anything else, don't hesitate to reach out!
<br /><br />

## Tech Stack

This website is built using these technologies:

- ◼️ Next.js 14 (App Router)
- ⚛️ React 18
- 🔰 TypeScript
- 💠 Tailwind CSS 3
- 🗄 Supabase (PostgreSQL + Storage)
- ➰ Framer Motion
- 💢 React Icons
- 🎨 Radix UI Icons
- 📝 React Syntax Highlighter
- 🌀 React Type Animation
- 🏃 React Fast Marquee
- 📋 React Lazy Load Image
- 📎 Clipboard.js
- 📅 date-fns
- 🔗 slugify
- 📏 ESLint
- ✨ Prettier

<br />

## Features

### 🌐 Bilingual (English & Indonesian)

Full bilingual support with Indonesian and English translations via React Context. Users can toggle between languages seamlessly.

### 📝 Blog

Tech articles and tutorials with syntax-highlighted code snippets, installation guides, and rich content. Blog posts are managed via an admin panel and stored in Supabase.

### 🗂 Projects

Portfolio project showcase with tech stack badges, feature lists, and step-by-step "how to start" guides (clone, install, run) with copyable code snippets.

### 💼 Career Timeline

Professional career history displayed chronologically, with company descriptions, period, and responsibilities.

### 📊 Dashboard

GitHub contribution calendar and statistics (total contributions, repositories, followers) fetched via GitHub GraphQL API, plus a curated learning roadmap with YouTube playlist links.

### 🎨 Dark/Light Mode

Persistent theme toggle with localStorage + cookie sync. Dark mode is fully supported across all pages.

### 🔐 Admin Panel

Password-protected admin dashboard for managing:
- Blog posts (CRUD with thumbnail upload)
- Projects (CRUD with tech stacks, features, and thumbnail upload)
- Careers (CRUD with responsibilities and thumbnail upload)
- File uploads to Supabase Storage

### 🚀 Performance & SEO

- Dynamic metadata and Open Graph tags per page
- JSON-LD structured data (Person, WebSite, Article, SoftwareApplication, SiteNavigationElement)
- Dynamic sitemap generation
- Image optimization with AVIF/WebP
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy)
- Skeleton loaders and loading states

<br />

## Getting Started

If you are interested in running this project on your local machine, follow the steps below. Make sure to copy `.env.local.example` to `.env.local` and replace the variables with your own.

### 1. Clone this repository

```bash
git clone https://github.com/codeamar/code-amar-next.git
cd code-amar-next
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure environment variables

Copy the example env file and fill in your own values:

```bash
cp .env.local.example .env.local
```

```env
# Supabase - get from Project Settings > API
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Supabase Service Role Key - for admin file uploads
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Admin Panel Password
ADMIN_PASSWORD=password123

# Site URL - for SEO (canonical, sitemap, Open Graph)
NEXT_PUBLIC_SITE_URL=https://codeamar.vercel.app

# Google Search Console Verification
GOOGLE_SITE_VERIFICATION=your-google-verification-code
```

### 4. Set up the database

Run the migration and seeder SQL files in your Supabase SQL editor:

1. `supabase-migration.sql` - Creates all tables
2. `supabase-seeder.sql` - Seeds sample data

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 6. Access the admin panel

Navigate to [http://localhost:3000/admin/login](http://localhost:3000/admin/login) and enter the password you set in `ADMIN_PASSWORD`.

<br />

## Project Structure

```
app/
├── (portfolio)/          # Public portfolio pages
│   ├── page.tsx          # Homepage
│   ├── about/            # About page
│   ├── blog/             # Blog listing + detail
│   ├── project/          # Project listing + detail
│   ├── career/           # Career listing + detail
│   ├── dashboard/        # GitHub stats & roadmap
│   └── contact/          # Contact page
├── (admin)/              # Admin panel
│   └── admin/
│       ├── login/        # Admin login
│       ├── blogs/        # Blog CRUD
│       ├── projects/     # Project CRUD
│       └── careers/      # Career CRUD
└── api/                  # REST API route handlers

components/               # Reusable UI components
├── atoms/                # Small atomic components
├── Project/              # Project-related components
├── Blog/                 # Blog-related components
├── Career/               # Career-related components
├── Home/                 # Homepage components
└── Navbar/               # Navigation components

lib/                      # Utility libraries
├── supabase.ts           # Supabase public client
├── supabase-admin.ts     # Supabase service role client
└── api.ts                # Data access layer

constants/                # Constants & configurations
context/                  # React context providers
```

<br />

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blog` | List all blogs |
| GET | `/api/blog/[slug]` | Get blog by slug |
| POST | `/api/blog` | Create a blog |
| PUT | `/api/blog/[slug]` | Update a blog |
| DELETE | `/api/blog/[slug]` | Delete a blog |
| GET | `/api/project` | List all projects |
| GET | `/api/project/[slug]` | Get project by slug |
| POST | `/api/project` | Create a project |
| PUT | `/api/project/[slug]` | Update a project |
| DELETE | `/api/project/[slug]` | Delete a project |
| GET | `/api/career` | List all careers |
| GET | `/api/career/[slug]` | Get career by slug |
| POST | `/api/career` | Create a career |
| PUT | `/api/career/[slug]` | Update a career |
| DELETE | `/api/career/[slug]` | Delete a career |
| POST | `/api/admin/verify` | Verify admin password |
| POST | `/api/upload` | Upload file to Supabase Storage |

<br />

## License

Licensed under the [MIT license](https://github.com/codeamar/code-amar-next/blob/main/LICENSE).
