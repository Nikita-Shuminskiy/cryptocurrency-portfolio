import React, { useEffect } from 'react';
import './Table.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Assets } from './Asset/Assets';
import { getDataAssetsTC } from '../../Bll/Crypt-coin-list-reducer';
import { AppStateType } from '../../Store/Store';
import { CryptocurrencyListType } from '../../Dal/Types';
import { RequestStatusType } from '../../Bll/App-reducer';
import { Preloader } from '../Common/Preloader/Preloader';
import { Paginator } from '../Common/Paginator/Paginator';
import { AlertError } from '../Common/AlertError/AlertError';
import { changePage } from '../../Bll/Portfolio-reducer';

export const Table = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDataAssetsTC())
    }, [dispatch])

    const dataAssets = useSelector<AppStateType, CryptocurrencyListType[]>
    ((state) => state.cryptocurrencyList.dataAssets)
    const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
    const pageCurrent = useSelector<AppStateType, number>(state => state.portfolio.currentPage)


    const totalCount = dataAssets.length
    const pageSize = 10
    const lastCurrentsPage = pageCurrent * pageSize
    const firstCurrentPage = lastCurrentsPage - pageSize
    const currentElements = dataAssets.slice(firstCurrentPage, lastCurrentsPage)

    const onPageChange = (page: number) => dispatch(changePage(page))

    return <div className="main">
        <Paginator onPageChange={onPageChange} totalCount={totalCount} pageSize={pageSize}
                   currentPage={pageCurrent}/>
        {status === 'failed' && <AlertError/>}
        <div className="main__header">
            <p className="main__header-text">Rank</p>
            <p className="main__header-text">Rank</p>
            <p className="main__header-text">Price</p>
        </div>
        {
            status === 'loading' ? <Preloader/> : currentElements.map((i) => {
                return <Assets key={i.id} item={i}/>
            })
        }
    </div>
}
