-- Jalankan SQL ini di Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql/new)

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Bios
CREATE TABLE "Bios" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  about TEXT,
  city TEXT,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Jobs
CREATE TABLE "Jobs" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job TEXT,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Abouts (junction table Bio-Jobs)
CREATE TABLE "Abouts" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "jobId" UUID REFERENCES "Jobs"(id) ON DELETE CASCADE ON UPDATE CASCADE,
  "bioId" UUID REFERENCES "Bios"(id) ON DELETE CASCADE ON UPDATE CASCADE,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Blogs
CREATE TABLE "Blogs" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  thumbnail TEXT,
  introduction TEXT,
  titleconten TEXT,
  content TEXT,
  solution TEXT,
  instalation TEXT,
  code_snippet TEXT,
  elucidation TEXT,
  tags JSONB DEFAULT '[]',
  slug TEXT,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Projects
CREATE TABLE "Projects" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  description TEXT,
  linksourcode TEXT,
  thumbnail TEXT,
  introduction TEXT,
  clone TEXT,
  install TEXT,
  run TEXT,
  slug TEXT,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. Techstacks
CREATE TABLE "Techstacks" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  techstack TEXT,
  "projectId" UUID REFERENCES "Projects"(id) ON DELETE CASCADE ON UPDATE CASCADE,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. Features
CREATE TABLE "Features" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  description TEXT,
  "projectId" UUID REFERENCES "Projects"(id) ON DELETE CASCADE ON UPDATE CASCADE,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
