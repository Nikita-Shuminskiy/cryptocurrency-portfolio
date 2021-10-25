import React, { useEffect, useState } from 'react';
import './Table.scss'
import { Charts } from '../Common/Chart/Chart';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAssetsTC } from '../../Bll/Crypt-coin-list-reducer';
import { AppStateType } from '../../Store/Store';
import { CryptocurrencyListType } from '../../Dal/Api';

export const Table = () => {
    const dataAssets = useSelector<AppStateType, CryptocurrencyListType[] | null>((state) => state.cryptocurrencyList.dataAssets)
    const dispatch = useDispatch()
    const [chartOpen, setOpenChart] = useState<Array<string>>([])
    const openChartHandler = (id: string) => {
        if (chartOpen.includes(id)) {
            setOpenChart(chartOpen.filter(idChart => idChart !== id))
        } else {
            setOpenChart([...chartOpen, id])
        }
    }
    const cryptocurrencyList = dataAssets && dataAssets.map((item) => {
        return (<tr key={item.id} onClick={() => openChartHandler(item.id)}>
            <td>{item.rank}</td>
            <td>{item.name}</td>
            <td>${(+item.priceUsd).toFixed(2)}</td>
            <td>${Math.round(+item.marketCapUsd)}</td>
            <td>${Math.round(+item.vwap24Hr)}</td>
            <td>{Math.round(+item.supply)}m</td>
            <td>{Math.round(+item.volumeUsd24Hr)}</td>
            <td>{item.changePercent24Hr}%</td>
            {chartOpen.some(id => id === item.id) && <div style={{width: '500px', height: 'auto'}}><Charts id={item.id}/></div>}
        </tr>)
    })
    useEffect(() => {
        dispatch(getDataAssetsTC())
    }, [dispatch])
    return (<div className={'table-container'}>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col">VWAP(24Hr)</th>
                    <th scope="col">Supply</th>
                    <th scope="col">Volume(24Hr)</th>
                    <th scope="col">Change(24Hr)</th>
                </tr>
                </thead>
                <tbody>
                {cryptocurrencyList}
                </tbody>
            </table>
        </div>
    );
};
