declare module 'recharts'
declare module 'vega'
declare module 'vega-lite'
declare module 'react-vega'
declare module 'echarts-for-react'
declare module 'd3plus-react'
declare module '@visx/axis'
declare module '@visx/curve'
declare module '@visx/grid'
declare module '@visx/scale'
declare module '@visx/shape'
declare module '@visx/tooltip'
declare module '@visx/event'
declare module 'next/dynamic'
declare module 'next/router'

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

export interface RadarChartData {
  name: string
  value: number[]
}

export interface RadarChartIndicator {
  name: string
  max: number
} 