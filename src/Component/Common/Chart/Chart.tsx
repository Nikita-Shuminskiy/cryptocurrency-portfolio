import React, { useEffect } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Chart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getChartDataTC } from '../../../Bll/Crypt-coin-list-reducer';
import { AppStateType } from '../../../Store/Store';
import { DataChartType } from '../../../Dal/types';
import { useParams } from 'react-router-dom';

export type ChartsType = {

}

export const Charts = ({}:ChartsType) => {
    const {id} = useParams<{id: string}>();
    const data = useSelector<AppStateType, DataChartType[] | null>(state => state.cryptocurrencyList.chartData)
    const dispatch = useDispatch()
    const options = {
        series: [{
            type: 'area',
            data: data && data.map(i => +i.priceUsd)
        }]
    }
    useEffect(()=> {
        dispatch(getChartDataTC(id.slice(1)))
    },[dispatch])
    return (<HighchartsReact containerProps={{style: {height: 'auto', position: 'relative', width: '900px'}}}
                             highcharts={Highcharts}
                             options={options}/>
    );
};

