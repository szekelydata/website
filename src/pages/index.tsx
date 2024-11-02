import Head from 'next/head'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'
import styles from '../styles/Home.module.css'
import LanguageSwitcher from '../components/LanguageSwitcher'
import Dashboard from '../components/Dashboard'
import Snowflake from '../components/Snowflake'
import LoadingSpinner from '../components/LoadingSpinner'
import { useState, useEffect } from 'react'

interface HomeProps {
  allPosts: any[]
}

export default function Home({ allPosts }: HomeProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <Layout>
      <Head>
        <title>SzekelyData | Data Visualization Hub</title>
        <meta name="description" content="A comprehensive data visualization resource about Szeklerland" />
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
        <p className={styles.subtitle}>Exploring Szeklerland Through Data</p>
        <div className={styles.languageSelector}>
          <LanguageSwitcher />
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Snowflake size={24} color="#ff3b8d" />
          <h2>About This Project</h2>
        </div>
        <p>
          Welcome to SzekelyData, your comprehensive hub for understanding Szeklerland through data visualization. 
          We believe in making data accessible, beautiful, and meaningful. Our visualizations follow best practices 
          in data presentation while maintaining cultural sensitivity and accuracy.
        </p>
        <div className={styles.principles}>
          <div className={styles.principle}>
            <h3>Clear Communication</h3>
            <p>Each visualization is designed to tell a clear story, with careful attention to color, typography, and layout.</p>
          </div>
          <div className={styles.principle}>
            <h3>Interactive Learning</h3>
            <p>Switch between different chart types to understand the data from multiple perspectives.</p>
          </div>
          <div className={styles.principle}>
            <h3>Cultural Context</h3>
            <p>Data is presented with relevant historical and cultural context to ensure proper interpretation.</p>
          </div>
        </div>
      </section>

      <section className={styles.visualizationGuide}>
        <h2>Understanding Our Visualizations</h2>
        <div className={styles.guideGrid}>
          <div className={styles.guideItem}>
            <h3>Color Usage</h3>
            <p>
              Our color choices follow accessibility guidelines while maintaining aesthetic appeal. 
              We use color strategically to highlight important data points and ensure readability 
              across different devices and contexts.
            </p>
          </div>
          <div className={styles.guideItem}>
            <h3>Chart Selection</h3>
            <p>
              Each visualization type is chosen based on the data structure and story we want to tell. 
              Bar charts for comparisons, line charts for trends over time, and pie charts for proportions 
              when appropriate.
            </p>
          </div>
          <div className={styles.guideItem}>
            <h3>Interactive Features</h3>
            <p>
              Explore different aspects of the data through interactive elements. Switch between visualization 
              types to gain new insights and perspectives on the same dataset.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.latestVisualizations}>
        <h2>Latest Visualizations</h2>
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
        <h2>Latest Articles</h2>
        <div className={styles.grid}>
          {allPosts.map((post) => (
            <div key={post.id} className={styles.card}>
              <Snowflake className={styles.cardSnowflake} size={32} color="#ffffff" />
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className={styles.date}>{post.date}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.resources}>
        <h2>Resources & Documentation</h2>
        <div className={styles.resourceGrid}>
          <div className={styles.resourceCard}>
            <h3>Data Sources</h3>
            <ul>
              <li>Romanian National Institute of Statistics</li>
              <li>Local Government Data</li>
              <li>Historical Archives</li>
            </ul>
          </div>
          <div className={styles.resourceCard}>
            <h3>Methodology</h3>
            <ul>
              <li>Data Collection Process</li>
              <li>Visualization Guidelines</li>
              <li>Technical Documentation</li>
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