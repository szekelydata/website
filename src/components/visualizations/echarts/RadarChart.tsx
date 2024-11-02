import ReactECharts from 'echarts-for-react'
import { useEffect, useState } from 'react'

interface RadarChartProps {
  data: Array<{
    name: string
    value: number[]
  }>
  indicators: Array<{
    name: string
    max: number
  }>
}

export default function EChartsRadar({ data, indicators }: RadarChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const option = {
    backgroundColor: 'var(--card-background)',
    textStyle: {
      color: 'var(--text-color)'
    },
    radar: {
      indicator: indicators,
      axisLine: {
        lineStyle: {
          color: 'var(--border-color)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'var(--border-color)'
        }
      }
    },
    series: [{
      type: 'radar',
      data: data,
      symbol: 'none',
      itemStyle: {
        color: 'var(--primary-color)'
      },
      areaStyle: {
        opacity: 0.3
      }
    }]
  }

  return (
    <ReactECharts 
      option={option}
      style={{ height: '400px' }}
    />
  )
} 