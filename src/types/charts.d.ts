declare module 'recharts'
declare module 'vega'
declare module 'vega-lite'
declare module 'react-vega'
declare module 'echarts-for-react'
declare module 'd3plus-react'
declare module '@visx/*'

export interface BaseChartProps {
  data: Array<{
    [key: string]: string | number
  }>
  xKey?: string
  yKey?: string
  color?: string
}

export interface PieChartData {
  name: string
  value: number
}

export interface ScatterPlotData {
  x: number
  y: number
  z?: number
  name?: string
} 