import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface AreaChartProps {
  data: Array<{
    [key: string]: string | number
  }>
  xKey?: string
  yKey?: string
  color?: string
  gradient?: boolean
}

export default function AreaChart({ 
  data, 
  xKey = 'year', 
  yKey = 'value',
  color = '#0070f3',
  gradient = true 
}: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsAreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
            <stop offset="95%" stopColor={color} stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
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