import { useState } from 'react'
import dynamic from 'next/dynamic'
import styles from '../styles/ChartSwitcher.module.css'
import { BaseChartProps, PieChartData } from '../types/charts'

// Dynamically import chart components
const BarChart = dynamic(() => import('./visualizations/BarChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
})

const LineChart = dynamic(() => import('./visualizations/LineChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
})

const PieChart = dynamic(() => import('./visualizations/PieChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
})

interface ChartSwitcherProps {
  data: BaseChartProps['data']
  defaultType?: 'bar' | 'line' | 'pie'
}

export default function ChartSwitcher({ data, defaultType = 'bar' }: ChartSwitcherProps) {
  const [chartType, setChartType] = useState(defaultType)

  const transformToPieData = (data: BaseChartProps['data']): PieChartData[] => {
    return data.map(d => ({
      name: String(d.category || d.name || ''),
      value: Number(d.value || 0)
    }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <button 
          className={`${styles.button} ${chartType === 'bar' ? styles.active : ''}`}
          onClick={() => setChartType('bar')}
        >
          Bar Chart
        </button>
        <button 
          className={`${styles.button} ${chartType === 'line' ? styles.active : ''}`}
          onClick={() => setChartType('line')}
        >
          Line Chart
        </button>
        <button 
          className={`${styles.button} ${chartType === 'pie' ? styles.active : ''}`}
          onClick={() => setChartType('pie')}
        >
          Pie Chart
        </button>
      </div>

      <div className={styles.chart}>
        {chartType === 'bar' && <BarChart data={data} />}
        {chartType === 'line' && <LineChart data={data} />}
        {chartType === 'pie' && <PieChart data={transformToPieData(data)} />}
      </div>
    </div>
  )
} 