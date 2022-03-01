import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useState } from 'react';
import { DataChartType } from '../../../Dal/Types';
import './Chart.scss';

export type ChartsType = {
  data: DataChartType[]
}

export const Charts = ({data}: ChartsType) => {
  const [dataForChart, setDataForChart] = useState<Array<number>[]>([])

  useEffect(() => {
    data && data.forEach((item) => {
      setDataForChart(prevState => {
        return [...prevState, [item.time, +item.priceUsd]]
      })
    })
    return () => {
      setDataForChart([[]])
    }
  }, [data])
  const options = {
    title: {
      text: 'Zone with dash style',
    },
    subtitle: {
      text: 'Dotted line typically signifies prognosis',
    },
    xAxis: {
      type: "datetime",
    },
    series: [{
      type: 'area',
      data: dataForChart,
      name: 'USD',
    }],
  }
  return <>
    <HighchartsReact highcharts={Highcharts} options={options}/>
  </>

};

