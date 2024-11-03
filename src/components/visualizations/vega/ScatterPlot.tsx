import { VegaLite } from 'react-vega'
import { TopLevelSpec } from 'vega-lite'
import { ScatterPlotData } from '../../../types/charts'

interface ScatterPlotProps {
  data: ScatterPlotData[]
  xLabel?: string
  yLabel?: string
}

export default function VegaScatterPlot({ 
  data, 
  xLabel = 'X Axis', 
  yLabel = 'Y Axis' 
}: ScatterPlotProps) {
  const spec: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: { values: data },
    mark: { 
      type: 'point',
      filled: true,
      size: 100
    },
    encoding: {
      x: { 
        field: 'x', 
        type: 'quantitative',
        title: xLabel
      },
      y: { 
        field: 'y', 
        type: 'quantitative',
        title: yLabel
      },
      size: {
        field: 'z',
        type: 'quantitative',
        scale: { range: [50, 400] }
      },
      tooltip: [
        { field: 'name', type: 'nominal', title: 'Name' },
        { field: 'x', type: 'quantitative' },
        { field: 'y', type: 'quantitative' },
        { field: 'z', type: 'quantitative' }
      ],
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