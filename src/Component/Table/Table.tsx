import React, { useEffect, useState } from 'react';
import './Table.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getDataAssetsTC } from '../../Bll/Crypt-coin-list-reducer';
import { AppStateType } from '../../Store/Store';
import { CryptocurrencyListType } from '../../Dal/Types';
import { Assets } from './Asset/Assets';
import { RequestStatusType } from '../../Bll/App-reducer';
import { Preloader } from '../Common/Preloader/Preloader';
import { AlertError } from '../Common/AlertError/AlertError';
import { Paginator } from '../Common/Paginator/Paginator';
import { ModalForAssets } from './ModalForAssets/ModalForAssets';

export const Table = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDataAssetsTC())
    }, [dispatch])

    const dataAssets = useSelector<AppStateType, CryptocurrencyListType[]>
    ((state) => state.cryptocurrencyList.dataAssets)
    const status = useSelector<AppStateType, RequestStatusType>
    ((state) => state.app.status)
    const error = useSelector<AppStateType, null | string>
    ((state) => state.app.error)


    const [currentPage, setCurrentPages] = useState(1)
    const totalCount = dataAssets.length
    const onPageChange = (page: number) => {
        setCurrentPages(page)
    }
    const pageSize = 10
    const lastCurrentsPage = currentPage * pageSize
    const firstCurrentPage = lastCurrentsPage - pageSize
    const currentElements = dataAssets.slice(firstCurrentPage,lastCurrentsPage)

    return (<table className="table">
            <thead className="table__block">
            <tr className="table__blockHead">
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
            <tbody className="table__body">
            {status === 'loading' && <Preloader/>}
            {error && <AlertError error={error}/>}
            {
                currentElements.map((i)=> {
                    return <Assets key={i.id} item={i}/>
                })
            }
            <Paginator onPageChange={onPageChange} totalCount={totalCount} pageSize={pageSize} currentPage={currentPage}/>
            </tbody>

        </table>
    );
};
