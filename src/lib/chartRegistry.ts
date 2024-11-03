import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { 
  BaseChartProps, 
  PieChartProps, 
  ScatterPlotProps, 
  AreaChartProps,
  VisxBaseProps,
  VisxPieProps,
  VisxScatterProps,
  VisxAreaProps
} from '../types/charts'

// Recharts implementations
const RechartsBarChart = dynamic(() => import('../components/visualizations/recharts/BarChart'))
const RechartsLineChart = dynamic(() => import('../components/visualizations/recharts/LineChart'))
const RechartsPieChart = dynamic(() => import('../components/visualizations/recharts/PieChart'))
const RechartsAreaChart = dynamic(() => import('../components/visualizations/recharts/AreaChart'))
const RechartsScatterPlot = dynamic(() => import('../components/visualizations/recharts/ScatterPlot'))

// Visx implementations
const VisxBarChart = dynamic(() => import('../components/visualizations/visx/BarChart'))
const VisxLineChart = dynamic(() => import('../components/visualizations/visx/LineChart'))
const VisxPieChart = dynamic(() => import('../components/visualizations/visx/PieChart'))
const VisxAreaChart = dynamic(() => import('../components/visualizations/visx/AreaChart'))
const VisxScatterPlot = dynamic(() => import('../components/visualizations/visx/ScatterPlot'))

// Vega implementations
const VegaBarChart = dynamic(() => import('../components/visualizations/vega/BarChart'))
const VegaLineChart = dynamic(() => import('../components/visualizations/vega/LineChart'))
const VegaPieChart = dynamic(() => import('../components/visualizations/vega/PieChart'))
const VegaAreaChart = dynamic(() => import('../components/visualizations/vega/AreaChart'))
const VegaScatterPlot = dynamic(() => import('../components/visualizations/vega/ScatterPlot'))

type ChartImplementations = {
  [K in 'bar' | 'line' | 'pie' | 'area' | 'scatter']: {
    recharts: ComponentType<any>
    visx: ComponentType<any>
    vega: ComponentType<any>
  }
}

export const chartImplementations: ChartImplementations = {
  bar: {
    recharts: RechartsBarChart,
    visx: VisxBarChart,
    vega: VegaBarChart
  },
  line: {
    recharts: RechartsLineChart,
    visx: VisxLineChart,
    vega: VegaLineChart
  },
  pie: {
    recharts: RechartsPieChart,
    visx: VisxPieChart,
    vega: VegaPieChart
  },
  area: {
    recharts: RechartsAreaChart,
    visx: VisxAreaChart,
    vega: VegaAreaChart
  },
  scatter: {
    recharts: RechartsScatterPlot,
    visx: VisxScatterPlot,
    vega: VegaScatterPlot
  }
}

export type ChartType = keyof typeof chartImplementations
export type LibraryType = 'recharts' | 'visx' | 'vega'