import { useEffect, useState } from 'react'
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { BaseChartProps } from '../../types/charts'

export default function LineChart({ 
  data, 
  xKey = 'year', 
  yKey = 'value',
  color = 'var(--primary-color)'
}: BaseChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsLineChart 
        data={data} 
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke="var(--border-color)"
        />
        <XAxis 
          dataKey={xKey} 
          stroke="var(--text-color)"
        />
        <YAxis 
          stroke="var(--text-color)"
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'var(--card-background)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-color)'
          }}
        />
        <Line 
          type="monotone" 
          dataKey={yKey} 
          stroke={color}
          strokeWidth={2}
          dot={{ fill: color, strokeWidth: 2 }}
          activeDot={{ r: 6, fill: color }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
} 