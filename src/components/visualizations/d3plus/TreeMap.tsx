import { Treemap } from "d3plus-react"

interface TreeMapProps {
  data: Array<{
    name: string
    value: number
    parent?: string
  }>
}

export default function D3PlusTreeMap({ data }: TreeMapProps) {
  const config = {
    data,
    groupBy: ["parent", "name"],
    size: (d: any) => d.value,
    tooltipConfig: {
      body: (d: any) => [
        ["Value", d.value]
      ]
    },
    backgroundColor: "var(--card-background)",
    textColor: "var(--text-color)"
  }

  return (
    <Treemap config={config} />
  )
} 