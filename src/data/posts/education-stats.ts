import { Post } from '../../types/posts'

export const post: Post = {
  id: 'education-stats',
  title: 'Education Statistics',
  date: '2024-01-05',
  excerpt: 'Educational achievements and challenges in Szeklerland',
  sections: [
    {
      type: 'text',
      content: '# Education in Szeklerland\n\nLooking at enrollment rates, language of instruction, and academic performance...'
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
    }
  ]
} 