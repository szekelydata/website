---
title: 'Szeklerland Overview 2024'
date: '2024-01-20'
excerpt: 'A comprehensive look at demographics, economy, and education'
---

# Szeklerland in Numbers: 2024 Overview

## Population by County
<BarChart 
  data={[
    { county: 'Harghita', population: 266225 },
    { county: 'Covasna', population: 201100 },
    { county: 'Mures', population: 517000 }
  ]}
  xKey="county"
  yKey="population"
/>

## Economic Growth Trends
<LineChart 
  data={[
    { year: 2019, gdp: 8500 },
    { year: 2020, gdp: 8100 },
    { year: 2021, gdp: 8800 },
    { year: 2022, gdp: 9200 },
    { year: 2023, gdp: 9600 }
  ]}
  xKey="year"
  yKey="gdp"
/>

## Language Distribution in Schools
<PieChart 
  data={[
    { name: 'Hungarian', value: 82 },
    { name: 'Romanian', value: 15 },
    { name: 'Other', value: 3 }
  ]}
/> 