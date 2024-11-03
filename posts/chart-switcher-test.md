---
title: 'Chart Switcher Test'
date: '2024-01-25'
excerpt: 'Testing different chart types with ChartSwitcher'
---

# Chart Switcher Test

## Population Data
<ChartSwitcher 
  data={[
    { category: "2011", value: 1227623 },
    { category: "2021", value: 1184325 }
  ]}
  defaultType="bar"
/>

## Language Distribution
<ChartSwitcher 
  data={[
    { category: "Hungarian", value: 82 },
    { category: "Romanian", value: 15 },
    { category: "Other", value: 3 }
  ]}
  defaultType="pie"
/>

## GDP Growth
<ChartSwitcher 
  data={[
    { category: "2019", value: 8500 },
    { category: "2020", value: 8100 },
    { category: "2021", value: 8800 },
    { category: "2022", value: 9200 },
    { category: "2023", value: 9600 }
  ]}
  defaultType="line"
/> 