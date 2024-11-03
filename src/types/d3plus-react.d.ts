declare module 'd3plus-react' {
  import { Component } from 'react'

  export interface TreemapProps {
    config: {
      data: any[]
      groupBy: string[]
      size: (d: any) => number
      tooltipConfig?: {
        body: (d: any) => [string, any][]
      }
      backgroundColor?: string
      textColor?: string
    }
  }

  export class Treemap extends Component<TreemapProps> {}
} 