declare module 'recharts'
declare module 'vega'
declare module 'vega-lite'
declare module 'react-vega'
declare module 'echarts-for-react'
declare module 'd3plus-react'
declare module '@visx/*'

// Base data types
export interface ChartData {
  category: string
  value: number
  [key: string]: string | number
}

export interface TimeSeriesData extends ChartData {
  date: Date
}

// Base props interface
export interface BaseChartProps {
  data: ChartData[]
  xKey?: string
  yKey?: string
  color?: string
}

// Pie chart types
export interface PieChartData {
  name: string
  value: number
}

export interface PieChartProps {
  data: PieChartData[]
  colors?: string[]
}

// Scatter plot types
export interface ScatterPlotData {
  x: number
  y: number
  z?: number
  name?: string
}

export interface ScatterPlotProps {
  data: ScatterPlotData[]
  xLabel?: string
  yLabel?: string
  color?: string
}

// Area chart types
export interface AreaChartProps extends BaseChartProps {
  gradient?: boolean
}

// Visx specific types
export interface VisxChartProps {
  width?: number
  height?: number
  margin?: { top: number; right: number; bottom: number; left: number }
}

export interface VisxBaseProps extends BaseChartProps, VisxChartProps {}
export interface VisxPieProps extends PieChartProps, VisxChartProps {}
export interface VisxScatterProps extends ScatterPlotProps, VisxChartProps {}
export interface VisxAreaProps extends AreaChartProps, VisxChartProps {}

// Union type for all chart props
export type ChartProps = BaseChartProps | PieChartProps | ScatterPlotProps | AreaChartProps | 
                        VisxBaseProps | VisxPieProps | VisxScatterProps | VisxAreaProps

// Common props for all chart libraries
export interface CommonChartProps {
  width?: number
  height?: number
  margin?: { top: number; right: number; bottom: number; left: number }
}
 