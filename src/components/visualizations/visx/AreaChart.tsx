import { Group } from '@visx/group'
import { AreaClosed, LinePath, Bar } from '@visx/shape'
import { curveMonotoneX } from '@visx/curve'
import { scaleLinear, scalePoint } from '@visx/scale'
import { AxisLeft, AxisBottom } from '@visx/axis'
import { GridRows, GridColumns } from '@visx/grid'
import { useTooltip, Tooltip } from '@visx/tooltip'
import { localPoint } from '@visx/event'
import { AreaChartProps } from '../../../types/charts'

interface VisxAreaChartProps extends AreaChartProps {
  width?: number
  height?: number
  margin?: { top: number; right: number; bottom: number; left: number }
}

interface DataPoint {
  [key: string]: string | number
}

export default function VisxAreaChart({ 
  data,
  xKey = 'category',
  yKey = 'value',
  color = 'var(--primary-color)',
  gradient = true,
  width = 600,
  height = 400,
  margin = { top: 40, right: 40, bottom: 40, left: 40 }
}: VisxAreaChartProps) {
  const { showTooltip, hideTooltip, tooltipData, tooltipLeft, tooltipTop } = useTooltip<DataPoint>()

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
    <div style={{ position: 'relative' }}>
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
          <AreaClosed<DataPoint>
            data={data}
            x={d => xScale(String(d[xKey])) ?? 0}
            y={d => yScale(Number(d[yKey])) ?? 0}
            yScale={yScale}
            curve={curveMonotoneX}
            fill={color}
            opacity={gradient ? 0.3 : 0.8}
          />
          <LinePath<DataPoint>
            data={data}
            x={d => xScale(String(d[xKey])) ?? 0}
            y={d => yScale(Number(d[yKey])) ?? 0}
            stroke={color}
            strokeWidth={2}
            curve={curveMonotoneX}
          />
          <Bar
            x={0}
            y={0}
            width={xMax}
            height={yMax}
            fill="transparent"
            onMouseMove={event => {
              const coords = localPoint(event)
              if (coords) {
                const x = coords.x
                const index = Math.floor((x / xMax) * data.length)
                showTooltip({
                  tooltipData: data[index],
                  tooltipLeft: coords.x,
                  tooltipTop: coords.y
                })
              }
            }}
            onMouseLeave={() => hideTooltip()}
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
      {tooltipData && (
        <Tooltip
          top={tooltipTop}
          left={tooltipLeft}
          style={{
            backgroundColor: 'var(--card-background)',
            color: 'var(--text-color)',
            padding: '0.5rem',
            border: '1px solid var(--border-color)',
            borderRadius: '4px'
          }}
        >
          <div>
            <strong>{xKey}: {tooltipData[xKey]}</strong>
            <div>{yKey}: {tooltipData[yKey]}</div>
          </div>
        </Tooltip>
      )}
    </div>
  )
} 