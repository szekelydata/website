import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { getPostData, getAllPostIds } from '../../lib/posts'
import styles from '../../styles/Post.module.css'
import Layout from '../../components/Layout'
import MarkdownChart from '../../components/MarkdownChart'

interface PostData {
  title: string
  date: string
  contentHtml: string
  id: string
}

interface PostProps {
  postData: PostData
}

export default function Post({ postData }: PostProps) {
  // Function to render markdown content with chart components
  const renderContent = () => {
    let content = postData.contentHtml
    console.log('Raw content:', content)

    // Split content by ChartSwitcher components
    const parts = content.split(/(<ChartSwitcher[^>]*\/>)/)
    
    return parts.map((part, index) => {
      if (part.startsWith('<ChartSwitcher')) {
        return <MarkdownChart key={`chart-${index}`} content={part} />
      }
      return (
        <div 
          key={`text-${index}`} 
          dangerouslySetInnerHTML={{ __html: part }} 
        />
      )
    })
  }

  return (
    <Layout>
      <article className={styles.container}>
        <Head>
          <title>{postData.title} | SzekelyData</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>{postData.title}</h1>
          <div className={styles.date}>{postData.date}</div>
          <div className={styles.content}>
            {renderContent()}
          </div>
        </main>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string)
  return {
    props: {
      postData
    }
  }
} 