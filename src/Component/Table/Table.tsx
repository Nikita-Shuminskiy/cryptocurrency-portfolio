import React from 'react';
import { useSelector } from 'react-redux';
import './Table.scss'
import { Assets } from './Asset/Assets';
import { RequestStatusType } from '../../Bll/App-reducer';
import { Preloader } from '../Common/Preloader/Preloader';
import { AlertError } from '../Common/AlertError/AlertError';
import { CryptocurrencyListType } from '../../Dal/Types';
import { Paginator } from '../Common/Paginator/Paginator';
import { AppStateType } from '../../Bll/Store/Store';

export const Table = () => {
    const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
    const totalAssetData = useSelector<AppStateType, CryptocurrencyListType[]>((state) => state.cryptocurrencyList.dataAssetsPortion)
    const errorReqest = 'The server is overloaded, try again later'

    return <div className="table-assets">
        {status === 'failed' && <AlertError error={errorReqest}/>}
        <div className="table-assets__header">
            <p className="table-assets__text">Rank</p>
            <p className="table-assets__text">Rank</p>
            <p className="table-assets__text">Price</p>
        </div>
        <div className="table-assets__body">
            {
                status === 'loading' ? <Preloader/>
                    :
                    totalAssetData.map((asset) => {
                        return <Assets key={asset.id} item={asset}/>
                    })
            }
        </div>
         <Paginator/>
    </div>
}
