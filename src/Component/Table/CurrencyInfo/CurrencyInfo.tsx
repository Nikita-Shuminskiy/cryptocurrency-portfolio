import React, { useEffect } from 'react';
import { Charts } from '../../Common/Chart/Chart';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../Store/Store';
import { CryptocurrencyInitType, getChartDataTC } from '../../../Bll/Crypt-coin-list-reducer';
import './CurrencyInfo.scss'

export const CurrencyInfo = () => {
    const {id} = useParams<{ id: string }>();
    const data = useSelector<AppStateType, CryptocurrencyInitType>(state => state.cryptocurrencyList)
    const dispatch = useDispatch()
    const history = useHistory();
    const goBackHandler = () => {
        history.goBack()
    }
    useEffect(() => {
        dispatch(getChartDataTC(id))
    }, [dispatch, id])
    return (
        <div>
            <button onClick={goBackHandler} type="button" className="btn btn-outline-primary">Go back</button>
            <table className="table table-hover table-sm">
                <thead>
                <tr className="table-primary">
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
                {
                    data.dataAssets.filter(i => i.id === id).map((i) => {
                            return <tr key={i.id}>
                                <td scope="row">{i.rank}</td>
                                <td>{i.name}</td>
                                <td>${(+i.priceUsd).toFixed(5)}</td>
                                <td>${(+i.marketCapUsd).toFixed(5)}</td>
                                <td>${(+i.vwap24Hr).toFixed(2)}</td>
                                <td>{(+i.supply).toFixed(5)}B</td>
                                <td>{(+i.volumeUsd24Hr).toFixed(5)}B</td>
                                <td>{(+i.changePercent24Hr).toFixed(2)}%</td>
                            </tr>
                    })
                }
                </tbody>
            </table>
            <Charts data={data.chartData}/>
        </div>
    );
};


