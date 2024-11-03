import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout'
import styles from '../../styles/Post.module.css'
import ChartSwitcher from '../../components/ChartSwitcher'
import { Post, PostSection, PostChart } from '../../types/posts'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../lib/translations'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import { useEffect, useState } from 'react'

interface PostProps {
  post: Post
}

export default function PostPage({ post }: PostProps) {
  const { language } = useLanguage()
  const [sections, setSections] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const processContent = async () => {
      const processedSections = await Promise.all(
        post.sections.map(async (section, index) => {
          if (section.type === 'text') {
            const processedContent = await unified()
              .use(remarkParse)
              .use(remarkHtml)
              .process(section.content as string)

            return (
              <div
                key={`text-${index}`}
                dangerouslySetInnerHTML={{ __html: processedContent.toString() }}
              />
            )
          }

          if (section.type === 'chart') {
            const chartData = section.content as PostChart
            return (
              <div key={`chart-${index}`} className={styles.chartContainer}>
                <ChartSwitcher
                  data={chartData.data}
                  defaultType={chartData.defaultType}
                  defaultLibrary={chartData.defaultLibrary || 'recharts'}
                />
              </div>
            )
          }

          return null
        })
      )

      setSections(processedSections)
    }

    processContent()
  }, [post])

  return (
    <Layout>
      <article className={styles.container}>
        <Head>
          <title>{post.title} | SzekelyData</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.date}>{post.date}</div>
          <div className={styles.content}>{sections}</div>
        </main>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Import all post data files
  const posts = await Promise.all([
    import('../../data/posts/education-stats'),
    import('../../data/posts/economic-indicators'),
    import('../../data/posts/population-trends'),
    import('../../data/posts/szeklerland-overview-2024'),
    import('../../data/posts/chart-types')
  ]).catch(error => {
    console.error('Error importing posts:', error)
    return []
  })

  const paths = posts.map(module => ({
    params: { slug: module.post.id }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  try {
    const slug = params?.slug as string
    const module = await import(`../../data/posts/${slug}`)
    
    return {
      props: {
        post: module.post
      }
    }
  } catch (error) {
    console.error('Error loading post:', error)
    return {
      notFound: true
    }
  }
} 