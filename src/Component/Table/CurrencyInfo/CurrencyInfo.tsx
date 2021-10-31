import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencyDetails } from './CurrenceDetails/CurrencyDetails';
import './CurrencyInfo.scss'
import { AppStateType } from '../../../Store/Store';
import { Charts } from '../../Common/Chart/Chart';
import { CryptocurrencyInitType, getChartDataTC } from '../../../Bll/Crypt-coin-list-reducer';



export const CurrencyInfo = () => {
    const {id} = useParams<{ id: string }>();
    const history = useHistory();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getChartDataTC(id))
    }, [dispatch, id])
    const {totalAssetData, chartData} = useSelector<AppStateType, CryptocurrencyInitType>(state => state.cryptocurrencyList)

    const goBackHandler = () => history.goBack()

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
                    totalAssetData
                        .filter(asset => asset.id === id)
                        .map((asset) => {
                        return <CurrencyDetails asset={asset} key={asset.id}/>
                    })
                }
                </tbody>
            </table>
            <Charts data={chartData}/>
        </div>
    );
};


