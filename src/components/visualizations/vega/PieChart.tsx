import { VegaLite } from 'react-vega'
import { TopLevelSpec } from 'vega-lite'
import { PieChartData } from '../../../types/charts'

interface PieChartProps {
  data: PieChartData[]
}

export default function VegaPieChart({ data }: PieChartProps) {
  const spec: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: { values: data },
    mark: { type: 'arc' },
    encoding: {
      theta: { field: 'value', type: 'quantitative' },
      color: { field: 'name', type: 'nominal' }
    },
    view: { stroke: null },
    config: {
      background: 'var(--card-background)',
      style: {
        "guide-label": {
          fill: 'var(--text-color)'
        }
      }
    }
  }

  return <VegaLite spec={spec} />
} 