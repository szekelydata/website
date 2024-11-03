import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import styles from '../styles/Archive.module.css'

interface ArchiveProps {
  posts: any[]
}

export default function Archive({ posts }: ArchiveProps) {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Archive</h1>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <div className={styles.post}>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData()
  return {
    props: {
      posts
    }
  }
}