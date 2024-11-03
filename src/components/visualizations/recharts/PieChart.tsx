import { useEffect, useState } from 'react'
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

interface ChartData {
  name: string
  value: number
}

interface PieChartProps {
  data: ChartData[]
  colors?: string[]
}

export default function PieChart({ 
  data,
  colors = ['var(--primary-color)', '#0891b2', '#6366f1', '#8b5cf6', '#ec4899']
}: PieChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsPieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          label={{
            fill: 'var(--text-color)'
          }}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={colors[index % colors.length]}
            />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{
            backgroundColor: 'var(--card-background)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-color)'
          }}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  )
} 