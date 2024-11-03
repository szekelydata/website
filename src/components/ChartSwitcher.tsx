import { useState } from 'react'
import dynamic from 'next/dynamic'
import styles from '../styles/ChartSwitcher.module.css'
import { chartImplementations, ChartType, LibraryType } from '../lib/chartRegistry'
import { BaseChartProps, PieChartProps, ScatterPlotProps, AreaChartProps } from '../types/charts'

interface ChartData {
  category: string
  value: number
  [key: string]: string | number
}

interface ChartSwitcherProps {
  data: ChartData[]
  defaultType?: ChartType
  defaultLibrary?: LibraryType
  xKey?: string
  yKey?: string
}

export default function ChartSwitcher({ 
  data, 
  defaultType = 'bar',
  defaultLibrary = 'recharts',
  xKey = 'category',
  yKey = 'value'
}: ChartSwitcherProps) {
  const [chartType, setChartType] = useState<ChartType>(defaultType)
  const [library, setLibrary] = useState<LibraryType>(defaultLibrary)

  // Get available libraries for current chart type
  const availableLibraries = Object.keys(chartImplementations[chartType]) as LibraryType[]

  // Ensure selected library is available for current chart type
  if (!availableLibraries.includes(library)) {
    setLibrary(availableLibraries[0])
  }

  const ChartComponent = chartImplementations[chartType][library]

  // Transform data based on chart type and library
  const getTransformedData = () => {
    switch (chartType) {
      case 'pie':
        return data.map(item => ({
          name: String(item.category || ''),
          value: Number(item.value || 0)
        }))
      case 'scatter':
        return data.map(item => ({
          x: Number(item[xKey] || 0),
          y: Number(item[yKey] || 0),
          name: String(item.category || ''),
          z: Number(item.value || 0)
        }))
      case 'area':
        return data.map(item => ({
          ...item,
          [xKey]: String(item[xKey] || ''),
          [yKey]: Number(item[yKey] || 0)
        }))
      default:
        return data
    }
  }

  // Get props based on chart type and library
  const getChartProps = () => {
    const baseProps = {
      width: 600,
      height: 400,
      margin: { top: 40, right: 40, bottom: 40, left: 40 }
    }

    switch (chartType) {
      case 'pie':
        return {
          ...baseProps,
          data: getTransformedData(),
          colors: ['var(--primary-color)', '#0891b2', '#6366f1', '#8b5cf6', '#ec4899']
        } as PieChartProps
      case 'scatter':
        return {
          ...baseProps,
          data: getTransformedData(),
          xLabel: xKey,
          yLabel: yKey,
          color: 'var(--primary-color)'
        } as ScatterPlotProps
      case 'area':
        return {
          ...baseProps,
          data: getTransformedData(),
          xKey,
          yKey,
          color: 'var(--primary-color)',
          gradient: true
        } as AreaChartProps
      default:
        return {
          ...baseProps,
          data: getTransformedData(),
          xKey,
          yKey,
          color: 'var(--primary-color)'
        } as BaseChartProps
    }
  }

  if (!ChartComponent) {
    return <div>Chart type or library not available</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.chartTypes}>
          {Object.keys(chartImplementations).map(type => (
            <button 
              key={type}
              className={`${styles.button} ${chartType === type ? styles.active : ''}`}
              onClick={() => setChartType(type as ChartType)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Chart
            </button>
          ))}
        </div>
        <div className={styles.libraries}>
          {availableLibraries.map(lib => (
            <button 
              key={lib}
              className={`${styles.button} ${library === lib ? styles.active : ''}`}
              onClick={() => setLibrary(lib)}
            >
              {lib.charAt(0).toUpperCase() + lib.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.chartContainer}>
        <ChartComponent {...getChartProps()} />
      </div>
    </div>
  )
} 