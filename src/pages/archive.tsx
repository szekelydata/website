import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/posts'

export default function Archive({ posts, years }) {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Archívum</h1>
        
        {years.map(year => (
          <div key={year} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{year}</h2>
            <div className="grid gap-6">
              {posts
                .filter(post => new Date(post.date).getFullYear() === year)
                .map(post => (
                  <article key={post.slug} className="border-b pb-6">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href={`/posts/${post.slug}`}>
                        <a className="hover:text-blue-600">{post.title}</a>
                      </Link>
                    </h3>
                    <time className="text-gray-600">
                      {new Date(post.date).toLocaleDateString('hu-HU')}
                    </time>
                  </article>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
} 