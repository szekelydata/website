import { Feed } from 'feed'
import { getAllPosts } from './posts'

export async function generateRssFeed() {
  const posts = await getAllPosts()
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL
  const date = new Date()

  const feed = new Feed({
    title: "SZÉKELYDATA",
    description: "Data visualization and analysis about Székely Land",
    id: siteURL,
    link: siteURL,
    language: "hu",
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}`,
    updated: date,
    generator: "Next.js using Feed",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
  })

  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: `${siteURL}/posts/${post.slug}`,
      link: `${siteURL}/posts/${post.slug}`,
      description: post.excerpt,
      content: post.content,
      author: [{ name: post.author }],
      date: new Date(post.date),
    })
  })

  return feed
} 