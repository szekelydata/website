import { AreaClosed, Line, Bar } from '@visx/shape'
import { curveMonotoneX } from '@visx/curve'
import { scaleTime, scaleLinear } from '@visx/scale'
import { AxisLeft, AxisBottom } from '@visx/axis'
import { GridRows, GridColumns } from '@visx/grid'
import { useTooltip, Tooltip } from '@visx/tooltip'
import { localPoint } from '@visx/event'
import { bisector } from 'd3-array'

interface DataPoint {
  date: Date
  value: number
}

interface AreaChartProps {
  data: DataPoint[]
  width: number
  height: number
}

export default function VisxAreaChart({ data, width, height }: AreaChartProps) {
  const margin = { top: 40, right: 40, bottom: 40, left: 40 }
  const { showTooltip, hideTooltip, tooltipData, tooltipLeft, tooltipTop } = useTooltip()

  // Accessors
  const getDate = (d: DataPoint) => d.date
  const getValue = (d: DataPoint) => d.value

  // Scales
  const xScale = scaleTime<number>({
    range: [margin.left, width - margin.right],
    domain: [data[0].date, data[data.length - 1].date],
    nice: true
  })

  const yScale = scaleLinear<number>({
    range: [height - margin.bottom, margin.top],
    domain: [0, Math.max(...data.map(getValue))],
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
      <GridRows
        scale={yScale}
        width={width - margin.left - margin.right}
        strokeDasharray="3,3"
        stroke="var(--border-color)"
        pointerEvents="none"
      />
      <GridColumns
        scale={xScale}
        height={height - margin.top - margin.bottom}
        strokeDasharray="3,3"
        stroke="var(--border-color)"
        pointerEvents="none"
      />
      <AreaClosed<DataPoint>
        data={data}
        x={d => xScale(getDate(d)) ?? 0}
        y={d => yScale(getValue(d)) ?? 0}
        yScale={yScale}
        curve={curveMonotoneX}
        fill="var(--primary-color)"
        opacity={0.3}
      />
      <Line
        from={{ x: margin.left, y: margin.top }}
        to={{ x: width - margin.right, y: height - margin.bottom }}
        stroke="var(--primary-color)"
        strokeWidth={2}
      />
      <AxisBottom
        scale={xScale}
        top={height - margin.bottom}
        stroke="var(--text-color)"
        tickStroke="var(--text-color)"
        tickLabelProps={() => ({
          fill: 'var(--text-color)',
          fontSize: 11,
          textAnchor: 'middle'
        })}
      />
      <AxisLeft
        scale={yScale}
        left={margin.left}
        stroke="var(--text-color)"
        tickStroke="var(--text-color)"
        tickLabelProps={() => ({
          fill: 'var(--text-color)',
          fontSize: 11,
          textAnchor: 'end'
        })}
      />
    </svg>
  )
} 