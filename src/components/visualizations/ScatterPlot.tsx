import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts'

interface ScatterPlotProps {
  data: Array<{
    x: number
    y: number
    z?: number
    name?: string
  }>
  xLabel?: string
  yLabel?: string
  color?: string
}

export default function ScatterPlot({ 
  data, 
  xLabel = 'X Axis', 
  yLabel = 'Y Axis',
  color = '#0070f3' 
}: ScatterPlotProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="x" 
          name={xLabel} 
          type="number"
        />
        <YAxis 
          dataKey="y" 
          name={yLabel} 
          type="number"
        />
        <ZAxis dataKey="z" range={[50, 400]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter 
          name="Data Points" 
          data={data} 
          fill={color}
        />
      </ScatterChart>
    </ResponsiveContainer>
  )
} 