import { useEffect, useState } from 'react'
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { BaseChartProps } from '../../types/charts'

export default function BarChart({ 
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
      <RechartsBarChart 
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
        <Bar 
          dataKey={yKey} 
          fill={color}
          radius={[4, 4, 0, 0]}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
} 