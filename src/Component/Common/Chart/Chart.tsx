import React, { useEffect } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Chart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getChartDataTC } from '../../../Bll/Crypt-coin-list-reducer';
import { AppStateType } from '../../../Store/Store';
import { DataChartType } from '../../../Dal/Api';

export type ChartsType = {
    id:string
}

export const Charts = ({id}:ChartsType) => {
    const data = useSelector<AppStateType, DataChartType[] | null>(state => state.cryptocurrencyList.chartData)
    console.log(data)
    const dispatch = useDispatch()
    const options = {
        series: [{
            type: 'area',
            data: data && data.map(i => +i.priceUsd)
        }]
    }
    useEffect(()=> {
        dispatch(getChartDataTC(id))
    },[dispatch])
    return (<HighchartsReact containerProps={{style: {height: 'auto', position: 'relative', width: '900px'}}}
                             highcharts={Highcharts}
                             options={options}/>
    );
};

