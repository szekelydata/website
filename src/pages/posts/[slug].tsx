import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { getPostData, getAllPostIds } from '../../lib/posts'
import styles from '../../styles/Post.module.css'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'
import React from 'react'

// Dynamically import chart components
const ChartSwitcher = dynamic(() => import('../../components/ChartSwitcher'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
})

interface PostData {
  title: string
  date: string
  contentHtml: string
  id: string
}

interface PostProps {
  postData: PostData
}

interface ChartMatch {
  index: number
  [n: number]: string
  groups: { [key: string]: string }
  input: string
}

export default function Post({ postData }: PostProps) {
  // Function to render markdown content with chart components
  const renderContent = () => {
    let content = postData.contentHtml

    // Find all ChartSwitcher components in the content
    const chartRegex = /<ChartSwitcher[^>]*data=({[^}]+})[^>]*defaultType=['"]([^'"]+)['"][^>]*\/>/g
    const matches = [...content.matchAll(chartRegex)] as ChartMatch[]

    if (matches.length === 0) {
      return <div dangerouslySetInnerHTML={{ __html: content }} />
    }

    // Split content into parts and insert React components
    let lastIndex = 0
    const parts = []

    matches.forEach((match, index) => {
      // Add text before the component
      if (match.index > lastIndex) {
        parts.push(
          <div 
            key={`text-${index}`} 
            dangerouslySetInnerHTML={{ 
              __html: content.slice(lastIndex, match.index) 
            }} 
          />
        )
      }

      // Add the chart component
      try {
        const chartData = JSON.parse(match[1].replace(/&quot;/g, '"'))
        const chartType = match[2] as 'bar' | 'line' | 'pie'
        parts.push(
          <div key={`chart-${index}`} className={styles.chartContainer}>
            <ChartSwitcher data={chartData} defaultType={chartType} />
          </div>
        )
      } catch (e) {
        console.error('Error parsing chart data:', e)
      }

      lastIndex = match.index + match[0].length
    })

    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(
        <div 
          key="text-final" 
          dangerouslySetInnerHTML={{ 
            __html: content.slice(lastIndex) 
          }} 
        />
      )
    }

    return <>{parts}</>
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