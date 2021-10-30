import React, { useEffect, useState } from 'react';
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

export const Table = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDataAssetsTC())
    }, [dispatch])

    const dataAssets = useSelector<AppStateType, CryptocurrencyListType[]>
    ((state) => state.cryptocurrencyList.dataAssets)
    const [currentPage, setCurrentPages] = useState(1)
    const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)


    const totalCount = dataAssets.length
    const onPageChange = (page: number) => {
        setCurrentPages(page)
    }
    const pageSize = 10
    const lastCurrentsPage = currentPage * pageSize
    const firstCurrentPage = lastCurrentsPage - pageSize
    const currentElements = dataAssets.slice(firstCurrentPage, lastCurrentsPage)

    return <div className="main">
        <Paginator onPageChange={onPageChange} totalCount={totalCount} pageSize={pageSize}
                   currentPage={currentPage}/>
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
