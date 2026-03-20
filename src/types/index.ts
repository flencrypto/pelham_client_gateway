export type Sector = 'Residential' | 'Commercial' | 'Hospitality'
export type ProjectStatus = 'In Progress' | 'Completed' | 'Planning'

export interface Project {
  id: string
  name: string
  sector: Sector
  value: string
  progress: number
  status: ProjectStatus
  location: string
  description: string
  imageUrl: string
  completedDate?: string
  highlights: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface ProcessStep {
  phase: string
  title: string
  description: string
}

export interface Insight {
  id: string
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
}

export interface Metric {
  label: string
  value: string
}

export interface SustainabilityPillar {
  title: string
  stat: string
  description: string
}
