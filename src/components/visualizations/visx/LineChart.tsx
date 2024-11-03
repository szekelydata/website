import { LinePath } from '@visx/shape'
import { Group } from '@visx/group'
import { curveMonotoneX } from '@visx/curve'
import { scaleLinear, scalePoint } from '@visx/scale'
import { AxisLeft, AxisBottom } from '@visx/axis'
import { GridRows, GridColumns } from '@visx/grid'
import { BaseChartProps } from '../../../types/charts'

interface VisxLineChartProps extends BaseChartProps {
  width?: number
  height?: number
  margin?: { top: number; right: number; bottom: number; left: number }
}

export default function VisxLineChart({ 
  data,
  xKey = 'category',
  yKey = 'value',
  width = 600,
  height = 400,
  margin = { top: 40, right: 40, bottom: 40, left: 40 }
}: VisxLineChartProps) {
  // Bounds
  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  // Scales
  const xScale = scalePoint<string>({
    range: [0, xMax],
    domain: data.map(d => String(d[xKey]))
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
        <LinePath
          data={data}
          x={d => xScale(String(d[xKey])) ?? 0}
          y={d => yScale(Number(d[yKey])) ?? 0}
          stroke="var(--primary-color)"
          strokeWidth={2}
          curve={curveMonotoneX}
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