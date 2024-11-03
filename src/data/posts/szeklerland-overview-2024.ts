import { Post } from '../../types/posts'

export const post: Post = {
  id: 'szeklerland-overview-2024',
  title: 'Szeklerland Overview 2024',
  date: '2024-01-20',
  excerpt: 'A comprehensive overview of Szeklerland in 2024',
  sections: [
    {
      type: 'text',
      content: '# Szeklerland Overview 2024\n\nA comprehensive look at the current state of Szeklerland across various dimensions.'
    },
    {
      type: 'chart',
      content: {
        data: [
          { category: "Population", value: 1184325 },
          { category: "GDP (mil €)", value: 9600 },
          { category: "Employment (%)", value: 70 },
          { category: "Education (%)", value: 82 }
        ],
        defaultType: 'bar',
        defaultLibrary: 'recharts'
      }
    },
    {
      type: 'text',
      content: '## Population Distribution\n\nAge distribution across different regions.'
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
    },
    {
      type: 'text',
      content: '## Economic Growth Trends\n\nTracking economic development over recent years.'
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
        defaultType: 'area',
        defaultLibrary: 'recharts'
      }
    }
  ]
} 