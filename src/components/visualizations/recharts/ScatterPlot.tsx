import { useEffect, useState } from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts'
import { ScatterPlotData } from '../../../types/charts'

interface ScatterPlotProps {
  data: ScatterPlotData[]
  xLabel?: string
  yLabel?: string
  color?: string
}

export default function ScatterPlot({ 
  data, 
  xLabel = 'X Axis', 
  yLabel = 'Y Axis',
  color = 'var(--primary-color)' 
}: ScatterPlotProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
        <XAxis 
          dataKey="x" 
          name={xLabel} 
          type="number"
          stroke="var(--text-color)"
        />
        <YAxis 
          dataKey="y" 
          name={yLabel} 
          type="number"
          stroke="var(--text-color)"
        />
        <ZAxis dataKey="z" range={[50, 400]} />
        <Tooltip 
          cursor={{ strokeDasharray: '3 3' }}
          contentStyle={{
            backgroundColor: 'var(--card-background)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-color)'
          }}
        />
        <Scatter 
          name="Data Points" 
          data={data} 
          fill={color}
        />
      </ScatterChart>
    </ResponsiveContainer>
  )
} 