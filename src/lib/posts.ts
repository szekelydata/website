import { Post } from '../types/posts'

export function getSortedPostsData() {
  const posts = [
    require('../data/posts/education-stats').post,
    require('../data/posts/economic-indicators').post,
    require('../data/posts/population-trends').post,
    require('../data/posts/szeklerland-overview-2024').post,
    require('../data/posts/chart-types').post
  ]

  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else if (a.date > b.date) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllPostIds() {
  const posts = getSortedPostsData()
  return posts.map(post => ({
    params: {
      slug: post.id
    }
  }))
} 