import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { getPostData, getAllPostIds } from '../../lib/posts'
import styles from '../../styles/Post.module.css'

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
  return (
    <article className={styles.container}>
      <Head>
        <title>{postData.title} | SzekelyData</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{postData.title}</h1>
        <div className={styles.date}>{postData.date}</div>
        <div 
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </main>
    </article>
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