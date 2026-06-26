import { supabase } from './supabase'
import { Blog, Project, Bio as BioType } from './types'

export async function getBios(): Promise<BioType[]> {
  const { data, error } = await supabase
    .from('Bios')
    .select(`
      id,
      about,
      city,
      createdAt,
      Abouts (
        Jobs (
          id,
          job
        )
      )
    `)

  if (error) {
    console.error('Supabase Bios error:', error)
    return []
  }

  if (!data) return []

  const transformed: BioType[] = data.map((bio: any) => ({
    id: bio.id,
    about: bio.about,
    city: bio.city,
    createdAt: bio.createdAt,
    Jobs: bio.Abouts?.map((a: any) => a.Jobs).filter(Boolean) || [],
  }))

  return transformed
}

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

export async function createMyJobs(jobs: string[], city: string, about: string) {
  const { data: bio, error: bioError } = await supabase
    .from('Bios')
    .insert([{ city, about }])
    .select()
    .single()

  if (bioError || !bio) throw bioError

  for (const jobName of jobs) {
    let { data: job } = await supabase
      .from('Jobs')
      .select('id')
      .eq('job', jobName)
      .maybeSingle()

    if (!job) {
      const { data: newJob } = await supabase
        .from('Jobs')
        .insert([{ job: jobName }])
        .select()
        .single()
      job = newJob
    }

    if (job) {
      await supabase
        .from('Abouts')
        .insert([{ bioId: bio.id, jobId: job.id }])
    }
  }

  return bio
}
