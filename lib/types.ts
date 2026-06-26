export interface Bio {
  id: string
  about: string
  city: string
  createdAt: string
  Jobs?: Job[]
}

export interface Job {
  id: string
  job: string
}

export interface About {
  id: string
  jobId: string
  bioId: string
}

export interface Blog {
  id: string
  title: string
  thumbnail: string | null
  introduction: string
  titleconten: string
  content: string
  solution: string
  instalation: string
  code_snippet: string
  elucidation: string
  tags: string[]
  slug: string
  createdAt: string
}

export interface Project {
  id: string
  title: string
  description: string
  linksourcode: string
  thumbnail: string | null
  introduction: string
  clone: string
  install: string
  run: string
  slug: string
  createdAt: string
  techstacks?: Techstack[]
  features?: Feature[]
}

export interface Techstack {
  id: string
  techstack: string
  projectId: string
}

export interface Feature {
  id: string
  title: string
  description: string
  projectId: string
}

export interface ApiResponse<T> {
  statusCode: number
  message: string
  data: T
}
