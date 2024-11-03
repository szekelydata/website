import { Post } from '../../types/posts'

export const post: Post = {
  id: 'economic-indicators',
  title: 'Economic Indicators',
  date: '2024-01-15',
  excerpt: 'Economic trends and indicators in Szeklerland',
  sections: [
    {
      type: 'text',
      content: '# Economic Indicators in Szeklerland\n\nAnalyzing key economic indicators and trends in the region reveals significant patterns of development and challenges.'
    },
    {
      type: 'chart',
      content: {
        data: [
          { category: "2019", value: 8500 },
          { category: "2020", value: 8100 },
          { category: "2021", value: 8800 },
          { category: "2022", value: 9200 },
          { category: "2023", value: 9600 }
        ],
        defaultType: 'line',
        defaultLibrary: 'recharts'
      }
    },
    {
      type: 'text',
      content: '## Employment by Sector\n\nThe distribution of employment across different sectors shows the economic structure of the region.'
    },
    {
      type: 'chart',
      content: {
        data: [
          { category: "Agriculture", value: 25 },
          { category: "Industry", value: 35 },
          { category: "Services", value: 40 }
        ],
        defaultType: 'pie',
        defaultLibrary: 'recharts'
      }
    },
    {
      type: 'text',
      content: '## GDP Growth Rate\n\nAnnual GDP growth rates demonstrate the economic resilience and development of Szeklerland.'
    },
    {
      type: 'chart',
      content: {
        data: [
          { category: "2019", value: 3.2 },
          { category: "2020", value: -4.5 },
          { category: "2021", value: 8.6 },
          { category: "2022", value: 4.5 },
          { category: "2023", value: 4.3 }
        ],
        defaultType: 'bar',
        defaultLibrary: 'recharts'
      }
    }
  ]
} 