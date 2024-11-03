import { VegaLite } from 'react-vega'
import { TopLevelSpec } from 'vega-lite'
import { BaseChartProps } from '../../../types/charts'

export default function VegaLineChart({ data, xKey = 'category', yKey = 'value' }: BaseChartProps) {
  const spec: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: { values: data },
    mark: { 
      type: 'line',
      point: true 
    },
    encoding: {
      x: { field: xKey, type: 'nominal' },
      y: { field: yKey, type: 'quantitative' },
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

  return <VegaLite spec={spec} />
} 