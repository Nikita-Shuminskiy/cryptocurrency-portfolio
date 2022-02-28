import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';
import { DataChartType } from '../../../Dal/Types';
import './Chart.scss';

export type ChartsType = {
  data: DataChartType[]
}

export const Charts = ({data}: ChartsType) => {
  const options = {
    series: [{
      type: 'area',
      data: data && data.map(item => +item.priceUsd),
    }],
  }
  return <>
    <HighchartsReact highcharts={Highcharts} options={options}/>
  </>

};

