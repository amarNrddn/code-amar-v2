import { supabaseAdmin } from './supabase-admin'
import { Blog, Project, Career } from './types'

export async function getAllBlogs(): Promise<any[]> {
  const { data, error } = await supabaseAdmin
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
  const { data, error } = await supabaseAdmin
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
  const { data, error } = await supabaseAdmin
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
  const { data, error } = await supabaseAdmin
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
  const { data, error } = await supabaseAdmin
    .from('Features')
    .insert([{ title, description, projectId }])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function createTechstack(techstack: string, projectId: string) {
  const { data, error } = await supabaseAdmin
    .from('Techstacks')
    .insert([{ techstack, projectId }])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function createProject(project: Partial<Project>) {
  const { data, error } = await supabaseAdmin
    .from('Projects')
    .insert([project])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function createBlog(blog: Partial<Blog>) {
  const { data, error } = await supabaseAdmin
    .from('Blogs')
    .insert([blog])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateBlog(slug: string, blog: Partial<Blog>) {
  const { data, error } = await supabaseAdmin
    .from('Blogs')
    .update(blog)
    .eq('slug', slug)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteBlog(slug: string) {
  const { error } = await supabaseAdmin
    .from('Blogs')
    .delete()
    .eq('slug', slug)

  if (error) throw error
}

export async function updateProject(slug: string, project: Partial<Project>) {
  const { data, error } = await supabaseAdmin
    .from('Projects')
    .update(project)
    .eq('slug', slug)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteProject(slug: string) {
  const { error } = await supabaseAdmin
    .from('Projects')
    .delete()
    .eq('slug', slug)

  if (error) throw error
}

export async function deleteFeature(id: string) {
  const { error } = await supabaseAdmin
    .from('Features')
    .delete()
    .eq('id', id)

  if (error) throw error
}

export async function deleteTechstack(id: string) {
  const { error } = await supabaseAdmin
    .from('Techstacks')
    .delete()
    .eq('id', id)

  if (error) throw error
}

export async function deleteFeaturesByProjectId(projectId: string) {
  const { error } = await supabaseAdmin
    .from('Features')
    .delete()
    .eq('projectId', projectId)

  if (error) throw error
}

export async function deleteTechstacksByProjectId(projectId: string) {
  const { error } = await supabaseAdmin
    .from('Techstacks')
    .delete()
    .eq('projectId', projectId)

  if (error) throw error
}

// Career
export async function getAllCareers(): Promise<any[]> {
  const { data, error } = await supabaseAdmin
    .from('Careers')
    .select('*')
    .order('createdAt', { ascending: false })

  if (error) {
    console.error('Supabase Careers error:', error)
    return []
  }
  return data || []
}

export async function getCareerBySlug(slug: string): Promise<Career | null> {
  const { data, error } = await supabaseAdmin
    .from('Careers')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Supabase CareerBySlug error:', error)
    return null
  }
  return data
}

export async function createCareer(career: Partial<Career>) {
  const { data, error } = await supabaseAdmin
    .from('Careers')
    .insert([career])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateCareer(slug: string, career: Partial<Career>) {
  const { data, error } = await supabaseAdmin
    .from('Careers')
    .update(career)
    .eq('slug', slug)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteCareer(slug: string) {
  const { error } = await supabaseAdmin
    .from('Careers')
    .delete()
    .eq('slug', slug)

  if (error) throw error
}


