import { VegaLite } from 'react-vega'
import { TopLevelSpec } from 'vega-lite'

interface BarChartProps {
  data: Array<{
    category: string
    value: number
  }>
}

export default function VegaBarChart({ data }: BarChartProps) {
  const spec: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: { values: data },
    mark: { type: 'bar' },
    encoding: {
      x: { field: 'category', type: 'nominal' },
      y: { field: 'value', type: 'quantitative' },
      color: { value: 'var(--primary-color)' }
    },
    config: {
      background: 'var(--card-background)',
      style: {
        "guide-label": {
          fill: 'var(--text-color)'
        },
        "guide-title": {
          fill: 'var(--text-color)'
        }
      }
    }
  }

  return (
    <VegaLite spec={spec} />
  )
} 