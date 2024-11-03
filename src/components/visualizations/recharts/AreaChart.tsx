import { useEffect, useState } from 'react'
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { BaseChartProps } from '@/components/types/charts'

export default function AreaChart({ 
  data, 
  xKey = 'year', 
  yKey = 'value',
  color = 'var(--primary-color)',
  gradient = true 
}: BaseChartProps & { gradient?: boolean }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsAreaChart 
        data={data} 
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
            <stop offset="95%" stopColor={color} stopOpacity={0.1}/>
          </linearGradient>
        </defs>
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
        <Area 
          type="monotone" 
          dataKey={yKey} 
          stroke={color} 
          fill={gradient ? "url(#colorGradient)" : color} 
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  )
} 