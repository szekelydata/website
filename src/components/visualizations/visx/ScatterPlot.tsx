import { Group } from '@visx/group'
import { Circle } from '@visx/shape'
import { scaleLinear } from '@visx/scale'
import { AxisLeft, AxisBottom } from '@visx/axis'
import { GridRows, GridColumns } from '@visx/grid'
import { useTooltip, Tooltip } from '@visx/tooltip'
import { localPoint } from '@visx/event'
import { ScatterPlotProps } from '../../../types/charts'

interface VisxScatterPlotProps extends ScatterPlotProps {
  width?: number
  height?: number
  margin?: { top: number; right: number; bottom: number; left: number }
}

export default function VisxScatterPlot({ 
  data,
  xLabel = 'X Axis',
  yLabel = 'Y Axis',
  color = 'var(--primary-color)',
  width = 600,
  height = 400,
  margin = { top: 40, right: 40, bottom: 40, left: 40 }
}: VisxScatterPlotProps) {
  const { showTooltip, hideTooltip, tooltipData, tooltipLeft, tooltipTop } = useTooltip()

  // Bounds
  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  // Scales
  const xScale = scaleLinear<number>({
    range: [0, xMax],
    domain: [Math.min(...data.map(d => d.x)), Math.max(...data.map(d => d.x))],
    nice: true
  })

  const yScale = scaleLinear<number>({
    range: [yMax, 0],
    domain: [Math.min(...data.map(d => d.y)), Math.max(...data.map(d => d.y))],
    nice: true
  })

  // Size scale for z values
  const sizeScale = scaleLinear<number>({
    range: [4, 20],
    domain: [
      Math.min(...data.map(d => d.z ?? 0)),
      Math.max(...data.map(d => d.z ?? 0))
    ]
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
          {data.map((point, i) => (
            <Circle
              key={`point-${i}`}
              cx={xScale(point.x)}
              cy={yScale(point.y)}
              r={point.z ? sizeScale(point.z) : 5}
              fill={color}
              opacity={0.6}
              onMouseMove={event => {
                const coords = localPoint(event)
                if (coords) {
                  showTooltip({
                    tooltipData: point,
                    tooltipLeft: coords.x,
                    tooltipTop: coords.y
                  })
                }
              }}
              onMouseLeave={() => hideTooltip()}
            />
          ))}
          <AxisLeft
            scale={yScale}
            stroke="var(--text-color)"
            tickStroke="var(--text-color)"
            label={yLabel}
            labelOffset={40}
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
            label={xLabel}
            labelOffset={40}
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
            <strong>{(tooltipData as any).name || 'Point'}</strong>
            <div>X: {(tooltipData as any).x}</div>
            <div>Y: {(tooltipData as any).y}</div>
            {(tooltipData as any).z && <div>Z: {(tooltipData as any).z}</div>}
          </div>
        </Tooltip>
      )}
    </div>
  )
} 