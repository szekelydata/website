export interface DataPoint {
  [key: string]: string | number
}

export interface NumericDataPoint {
  [key: string]: number
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('hu-HU').format(num)
}

export function calculateGrowthRate(current: number, previous: number): number {
  return ((current - previous) / previous) * 100
}

export function aggregateData(data: DataPoint[], key: string): NumericDataPoint {
  const result: NumericDataPoint = {}
  
  data.forEach((item) => {
    const value = item[key]
    if (typeof value === 'number') {
      if (!(key in result)) {
        result[key] = 0
      }
      result[key] += value
    }
  })
  
  return result
}

export function filterDataByYear(data: DataPoint[], year: number): DataPoint[] {
  return data.filter(item => {
    const itemYear = item.year
    return typeof itemYear === 'number' && itemYear === year
  })
}

export function calculateAverage(data: DataPoint[], key: string): number {
  const values = data
    .map(item => item[key])
    .filter((value): value is number => typeof value === 'number')
  
  if (values.length === 0) return 0
  return values.reduce((a, b) => a + b, 0) / values.length
}

export function ensureNumeric(value: string | number): number {
  if (typeof value === 'string') {
    const parsed = parseFloat(value)
    return isNaN(parsed) ? 0 : parsed
  }
  return value
} 