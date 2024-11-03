import { useState } from 'react'
import dynamic from 'next/dynamic'
import styles from '../styles/Dashboard.module.css'

// Dynamically import visualization components
const BarChart = dynamic(() => import('./visualizations/recharts/BarChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
})

const LineChart = dynamic(() => import('./visualizations/recharts/LineChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
})

const PieChart = dynamic(() => import('./visualizations/recharts/PieChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
})

const AreaChart = dynamic(() => import('./visualizations/recharts/AreaChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
})

const ScatterPlot = dynamic(() => import('./visualizations/recharts/ScatterPlot'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
})

interface DashboardProps {
  data: {
    population: any[]
    economic: any[]
    education: any[]
    demographics: any[]
  }
}

export default function Dashboard({ data }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className={styles.dashboard}>
      <nav className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'overview' ? styles.active : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'demographics' ? styles.active : ''}`}
          onClick={() => setActiveTab('demographics')}
        >
          Demographics
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'economic' ? styles.active : ''}`}
          onClick={() => setActiveTab('economic')}
        >
          Economic
        </button>
      </nav>

      <div className={styles.grid}>
        {activeTab === 'overview' && (
          <>
            <div className={styles.card}>
              <h3>Population Trends</h3>
              <AreaChart data={data.population} xKey="year" yKey="population" />
            </div>
            <div className={styles.card}>
              <h3>Economic Indicators</h3>
              <LineChart data={data.economic} xKey="year" yKey="gdp" />
            </div>
          </>
        )}

        {activeTab === 'demographics' && (
          <>
            <div className={styles.card}>
              <h3>Age Distribution</h3>
              <BarChart data={data.demographics} xKey="age" yKey="count" />
            </div>
            <div className={styles.card}>
              <h3>Education Levels</h3>
              <PieChart data={data.education} />
            </div>
          </>
        )}

        {activeTab === 'economic' && (
          <>
            <div className={styles.card}>
              <h3>GDP vs Employment</h3>
              <ScatterPlot 
                data={data.economic.map(d => ({ 
                  x: d.gdp, 
                  y: d.employment,
                  z: d.population,
                  name: d.year.toString()
                }))} 
                xLabel="GDP"
                yLabel="Employment Rate"
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
} 