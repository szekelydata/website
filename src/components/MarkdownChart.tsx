import dynamic from 'next/dynamic'
import styles from '../styles/MarkdownChart.module.css'

const ChartSwitcher = dynamic(() => import('./ChartSwitcher'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
})

interface MarkdownChartProps {
  content: string
}

export default function MarkdownChart({ content }: MarkdownChartProps) {
  const renderChart = () => {
    try {
      // Extract data and type from the markdown content
      const match = content.match(/<ChartSwitcher[^>]*data=({[^}]+})[^>]*defaultType=['"]([^'"]+)['"][^>]*\/>/)
      if (!match) return null

      const data = JSON.parse(match[1].replace(/&quot;/g, '"'))
      const defaultType = match[2] as 'bar' | 'line' | 'pie'

      return (
        <div className={styles.chartWrapper}>
          <ChartSwitcher data={data} defaultType={defaultType} />
        </div>
      )
    } catch (e) {
      console.error('Error rendering chart:', e)
      return <div>Error loading chart</div>
    }
  }

  return renderChart()
} 