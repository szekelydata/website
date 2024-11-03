import Head from 'next/head'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'
import styles from '../styles/Home.module.css'
import Dashboard from '../components/Dashboard'
import Snowflake from '../components/Snowflake'
import LoadingSpinner from '../components/LoadingSpinner'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ChartSwitcher from '../components/ChartSwitcher'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../lib/translations'

interface HomeProps {
  allPosts: any[]
}

export default function Home({ allPosts }: HomeProps) {
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <Layout>
      <Head>
        <title>SzekelyData | {getTranslation('home.title', language)}</title>
        <meta 
          name="description" 
          content={getTranslation('home.subtitle', language)} 
        />
      </Head>

      <div className={styles.snowflakeBackground}>
        {[...Array(20)].map((_, i) => (
          <Snowflake 
            key={i}
            className={styles.floatingSnowflake}
            size={24 + Math.random() * 24}
            color="rgba(255, 255, 255, 0.1)"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`
            }}
            variant={i % 3 === 0 ? 'simple' : i % 3 === 1 ? 'default' : 'detailed'}
          />
        ))}
      </div>

      <div className={styles.hero}>
        <div className={styles.logoContainer}>
          <Snowflake size={48} color="#ffffff" />
          <h1 className={styles.title}>
            <span className={styles.szekely}>székely</span>
            <span className={styles.data}>data</span>
          </h1>
        </div>
        <p className={styles.subtitle}>
          {getTranslation('home.subtitle', language)}
        </p>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Snowflake size={24} color="#ff3b8d" />
          <h2>{getTranslation('home.latest.data', language)}</h2>
        </div>
        <ChartSwitcher 
          data={[
            { category: "2011", value: 1227623 },
            { category: "2021", value: 1184325 }
          ]}
          defaultType="bar"
          defaultLibrary="recharts"
        />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Snowflake size={24} color="#ff3b8d" />
          <h2>{getTranslation('home.interactive.dashboard', language)}</h2>
        </div>
        <Dashboard data={{
          population: [
            { year: 2011, population: 1227623 },
            { year: 2021, population: 1184325 }
          ],
          economic: [
            { year: 2019, gdp: 8500, employment: 65 },
            { year: 2020, gdp: 8100, employment: 62 },
            { year: 2021, gdp: 8800, employment: 66 },
            { year: 2022, gdp: 9200, employment: 68 },
            { year: 2023, gdp: 9600, employment: 70 }
          ],
          education: [
            { name: 'Hungarian', value: 82 },
            { name: 'Romanian', value: 15 },
            { name: 'Other', value: 3 }
          ],
          demographics: [
            { age: '0-14', count: 150000 },
            { age: '15-64', count: 850000 },
            { age: '65+', count: 184325 }
          ]
        }} />
      </section>

      <section className={styles.articles}>
        <h2>{getTranslation('home.latest.articles', language)}</h2>
        <div className={styles.grid}>
          {allPosts.map((post) => (
            <Link 
              href={`/posts/${post.id}`} 
              key={post.id} 
              className={styles.card}
            >
              <Snowflake className={styles.cardSnowflake} size={32} color="#ffffff" />
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className={styles.date}>{post.date}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.resources}>
        <h2>{getTranslation('home.resources', language)}</h2>
        <div className={styles.resourceGrid}>
          <div className={styles.resourceCard}>
            <h3>{getTranslation('resources.data.sources', language)}</h3>
            <ul>
              <li>{getTranslation('resources.data.sources.national', language)}</li>
              <li>{getTranslation('resources.data.sources.local', language)}</li>
              <li>{getTranslation('resources.data.sources.historical', language)}</li>
            </ul>
          </div>
          <div className={styles.resourceCard}>
            <h3>{getTranslation('resources.methodology', language)}</h3>
            <ul>
              <li>{getTranslation('resources.methodology.collection', language)}</li>
              <li>{getTranslation('resources.methodology.visualization', language)}</li>
              <li>{getTranslation('resources.methodology.documentation', language)}</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getSortedPostsData()
  return {
    props: {
      allPosts
    }
  }
} 