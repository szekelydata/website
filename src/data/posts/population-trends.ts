import { Post } from '../../types/posts'

export const post: Post = {
  id: 'population-trends',
  title: 'Population Trends in Szeklerland',
  date: '2024-01-10',
  excerpt: 'Analyzing demographic changes in Szeklerland over the past decades',
  sections: [
    {
      type: 'text',
      content: '# Population Trends in Szeklerland\n\nAnalyzing the demographic changes in Szeklerland reveals interesting patterns over the past decades.'
    },
    {
      type: 'chart',
      content: {
        data: [
          { category: "1992", value: 1200000 },
          { category: "2002", value: 1230000 },
          { category: "2011", value: 1227623 },
          { category: "2021", value: 1184325 }
        ],
        defaultType: 'line',
        defaultLibrary: 'recharts'
      }
    },
    {
      type: 'text',
      content: '## Age Distribution\n\nThe age structure of the population shows significant changes.'
    },
    {
      type: 'chart',
      content: {
        data: [
          { category: "0-14", value: 150000 },
          { category: "15-64", value: 850000 },
          { category: "65+", value: 184325 }
        ],
        defaultType: 'pie',
        defaultLibrary: 'recharts'
      }
    }
  ]
} 