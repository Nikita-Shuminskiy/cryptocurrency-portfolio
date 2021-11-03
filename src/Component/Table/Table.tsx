import React from 'react';
import { useSelector } from 'react-redux';
import './Table.scss'
import { Assets } from './Asset/Assets';
import { AppStateType } from '../../Store/Store';
import { RequestStatusType } from '../../Bll/App-reducer';
import { Preloader } from '../Common/Preloader/Preloader';
import { AlertError } from '../Common/AlertError/AlertError';
import { CryptocurrencyListType } from '../../Dal/Types';
import { Paginator } from '../Common/Paginator/Paginator';

export const Table = () => {
    const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
    const totalAssetData = useSelector<AppStateType, CryptocurrencyListType[]>((state) => state.cryptocurrencyList.dataAssetsPortion)

    return <div className="main">
        <Paginator onPageChange={onPageChange} totalCount={totalCount} pageSize={pageSize}
                   currentPage={pageCurrent}/>
        {status === 'failed' && <AlertError/>}
        <div className="main__header">
            <p className="main__header-text">Rank</p>
            <p className="main__header-text">Rank</p>
            <p className="main__header-text">Price</p>
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
