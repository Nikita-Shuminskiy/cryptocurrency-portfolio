import React, { useEffect } from 'react';
import './Table.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getDataAssetsTC } from '../../Bll/Crypt-coin-list-reducer';
import { AppStateType } from '../../Store/Store';
import { CryptocurrencyListType } from '../../Dal/types';
import { Assets } from './Asset/Assets';

export const Table = () => {
    const dataAssets = useSelector<AppStateType, CryptocurrencyListType[] | null>
    ((state) => state.cryptocurrencyList.dataAssets)
    const dispatch = useDispatch()

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
                {dataAssets && dataAssets.map((item) => {
                    return (<Assets key={item.id} item={item}/>)
                })}
                </tbody>
            </table>
        </div>
    );
};
