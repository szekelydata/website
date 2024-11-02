import { useState } from 'react'
import BarChart from './visualizations/BarChart'
import LineChart from './visualizations/LineChart'
import PieChart from './visualizations/PieChart'
import styles from '../styles/ChartSwitcher.module.css'

interface ChartSwitcherProps {
  data: any[]
  defaultType?: 'bar' | 'line' | 'pie'
}

export default function ChartSwitcher({ data, defaultType = 'bar' }: ChartSwitcherProps) {
  const [chartType, setChartType] = useState(defaultType)

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
        {chartType === 'pie' && <PieChart data={data} />}
      </div>
    </div>
  )
} 