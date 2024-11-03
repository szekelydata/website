import { BarGroup } from '@visx/shape'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale'
import { AxisLeft, AxisBottom } from '@visx/axis'
import { GridRows, GridColumns } from '@visx/grid'
import { BaseChartProps } from '../../../types/charts'

export default function VisxBarChart({ 
  data,
  xKey = 'category',
  yKey = 'value',
  width = 600,
  height = 400,
  margin = { top: 40, right: 40, bottom: 40, left: 40 }
}: BaseChartProps & { width?: number; height?: number; margin?: { top: number; right: number; bottom: number; left: number } }) {
  // Bounds
  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  // Scales
  const xScale = scaleBand<string>({
    range: [0, xMax],
    domain: data.map(d => String(d[xKey])),
    padding: 0.2
  })

  const yScale = scaleLinear<number>({
    range: [yMax, 0],
    domain: [0, Math.max(...data.map(d => Number(d[yKey])))],
    nice: true
  })

  return (
    <svg width={width} height={height}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="var(--card-background)"
        rx={14}
      />
      <Group left={margin.left} top={margin.top}>
        <GridRows
          scale={yScale}
          width={xMax}
          strokeDasharray="3,3"
          stroke="var(--border-color)"
        />
        <GridColumns
          scale={xScale}
          height={yMax}
          strokeDasharray="3,3"
          stroke="var(--border-color)"
        />
        <BarGroup
          data={data}
          keys={[yKey]}
          height={yMax}
          x0={d => String(d[xKey])}
          x0Scale={xScale}
          x1Scale={scaleBand({
            range: [0, xScale.bandwidth()],
            domain: [yKey],
            padding: 0.1
          })}
          yScale={yScale}
          color={scaleOrdinal({
            domain: [yKey],
            range: ['var(--primary-color)']
          })}
        />
        <AxisLeft
          scale={yScale}
          stroke="var(--text-color)"
          tickStroke="var(--text-color)"
          tickLabelProps={() => ({
            fill: 'var(--text-color)',
            fontSize: 11,
            textAnchor: 'end'
          })}
        />
        <AxisBottom
          top={yMax}
          scale={xScale}
          stroke="var(--text-color)"
          tickStroke="var(--text-color)"
          tickLabelProps={() => ({
            fill: 'var(--text-color)',
            fontSize: 11,
            textAnchor: 'middle'
          })}
        />
      </Group>
    </svg>
  )
} 