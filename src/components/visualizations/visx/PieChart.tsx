import { Pie } from '@visx/shape'
import { Group } from '@visx/group'
import { scaleOrdinal } from '@visx/scale'
import { PieChartProps } from '../../../types/charts'

export default function VisxPieChart({ 
  data,
  width = 600,
  height = 400,
  colors = ['var(--primary-color)', '#0891b2', '#6366f1', '#8b5cf6', '#ec4899']
}: PieChartProps & { width?: number; height?: number }) {
  const radius = Math.min(width, height) / 2
  const centerY = height / 2
  const centerX = width / 2

  const colorScale = scaleOrdinal({
    domain: data.map(d => d.name),
    range: colors
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
      <Group top={centerY} left={centerX}>
        <Pie
          data={data}
          pieValue={d => d.value}
          outerRadius={radius - 40}
          innerRadius={radius - 120}
        >
          {pie => {
            return pie.arcs.map((arc, index) => {
              const [centroidX, centroidY] = pie.path.centroid(arc)
              const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1
              const arcPath = pie.path(arc)
              const arcFill = colorScale(arc.data.name)

              return (
                <g key={`arc-${index}`}>
                  <path d={arcPath ?? ''} fill={arcFill} />
                  {hasSpaceForLabel && (
                    <text
                      x={centroidX}
                      y={centroidY}
                      dy=".33em"
                      fill="var(--text-color)"
                      fontSize={12}
                      textAnchor="middle"
                      pointerEvents="none"
                    >
                      {arc.data.name}
                    </text>
                  )}
                </g>
              )
            })
          }}
        </Pie>
      </Group>
    </svg>
  )
} 