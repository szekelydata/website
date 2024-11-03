import { ChartType, LibraryType } from '../lib/chartRegistry'

export interface PostChart {
  data: any[]
  defaultType: ChartType
  defaultLibrary: LibraryType
}

export interface PostSection {
  type: 'text' | 'chart'
  content: string | PostChart
}

export interface Post {
  id: string
  title: string
  date: string
  excerpt?: string
  sections: PostSection[]
} 