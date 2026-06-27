import { supabase } from './supabase'
import { Blog, Project } from './types'

export async function getAllBlogs(): Promise<any[]> {
  const { data, error } = await supabase
    .from('Blogs')
    .select('id, title, thumbnail, createdAt, content, slug')
    .order('createdAt', { ascending: false })

  if (error) {
    console.error('Supabase Blogs error:', error)
    return []
  }
  return data || []
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const { data, error } = await supabase
    .from('Blogs')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Supabase BlogBySlug error:', error)
    return null
  }
  return data
}

export async function getAllProjects(): Promise<any[]> {
  const { data, error } = await supabase
    .from('Projects')
    .select('*, Techstacks(*), Features(*)')
    .order('createdAt', { ascending: false })

  if (error) {
    console.error('Supabase Projects error:', error)
    return []
  }

  if (!data) return []

  return data.map((item: any) => ({
    ...item,
    techstacks: item.Techstacks || [],
    features: item.Features || [],
  }))
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from('Projects')
    .select('*, Techstacks(*), Features(*)')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Supabase ProjectBySlug error:', error)
    return null
  }

  if (!data) return null

  return {
    ...data,
    techstacks: (data as any).Techstacks || [],
    features: (data as any).Features || [],
  } as Project
}

export async function createFeature(title: string, description: string, projectId: string) {
  const { data, error } = await supabase
    .from('Features')
    .insert([{ title, description, projectId }])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function createTechstack(techstack: string, projectId: string) {
  const { data, error } = await supabase
    .from('Techstacks')
    .insert([{ techstack, projectId }])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function createProject(project: Partial<Project>) {
  const { data, error } = await supabase
    .from('Projects')
    .insert([project])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function createBlog(blog: Partial<Blog>) {
  const { data, error } = await supabase
    .from('Blogs')
    .insert([blog])
    .select()
    .single()

  if (error) throw error
  return data
}


