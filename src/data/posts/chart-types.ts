import { Post } from '../../types/posts'

export const post: Post = {
  id: 'chart-types',
  title: 'Chart Types Overview',
  date: '2024-01-30',
  excerpt: 'Overview of different chart types and their use cases',
  sections: [
    {
      type: 'text',
      content: '# Chart Types Overview\n\nExploring different types of charts and their best use cases for data visualization.'
    },
    {
      type: 'text',
      content: '## Bar Chart\n\nBar charts are excellent for comparing quantities across different categories.'
    },
    {
      type: 'chart',
      content: {
        data: [
          { category: "Hungarian", value: 82 },
          { category: "Romanian", value: 15 },
          { category: "Other", value: 3 }
        ],
        defaultType: 'bar',
        defaultLibrary: 'recharts'
      }
    },
    {
      type: 'text',
      content: '## Line Chart\n\nLine charts are perfect for showing trends over time.'
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
      content: '## Area Chart\n\nArea charts emphasize the magnitude of change over time.'
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
    },
    {
      type: 'text',
      content: '## Pie Chart\n\nPie charts show parts of a whole, ideal for displaying proportions.'
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
    }
  ]
} 