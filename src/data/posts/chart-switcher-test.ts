import { Post } from '../../types/posts'

export const post: Post = {
  id: 'chart-switcher-test',
  title: 'Chart Switcher Test',
  date: '2024-01-25',
  excerpt: 'Testing different chart types with ChartSwitcher',
  sections: [
    {
      type: 'text',
      content: '# Chart Switcher Test\n\nTesting different chart types and libraries.'
    },
    {
      type: 'chart',
      content: {
        data: [
          { category: "2011", value: 1227623 },
          { category: "2021", value: 1184325 }
        ],
        defaultType: 'bar',
        defaultLibrary: 'recharts'
      }
    },
    {
      type: 'text',
      content: '## Language Distribution'
    },
    {
      type: 'chart',
      content: {
        data: [
          { category: "Hungarian", value: 82 },
          { category: "Romanian", value: 15 },
          { category: "Other", value: 3 }
        ],
        defaultType: 'pie',
        defaultLibrary: 'recharts'
      }
    },
    {
      type: 'text',
      content: '## GDP Growth'
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
    }
  ]
} 