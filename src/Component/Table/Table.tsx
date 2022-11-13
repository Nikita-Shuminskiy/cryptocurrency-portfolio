import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RequestStatusType} from '../../Bll/App-reducer';
import {setCurrencyMonitor} from '../../Bll/Crypt-coin-list-reducer';
import {AppStateType} from '../../Bll/Store/Store';
import {CryptocurrencyListType} from '../../Dal/Types';
import {AlertError} from '../Common/AlertError/AlertError';
import {useFilter} from "../Common/Hooks/UseFilter";
import {Paginator} from '../Common/Paginator/Paginator';
import {Preloader} from '../Common/Preloader/Preloader';
import {Assets} from './Asset/Assets';
import './Table.scss'

export const Table = () => {
    const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
    const totalAssetData = useSelector<AppStateType, CryptocurrencyListType[]>((state) => state.cryptocurrencyList.dataAssetsPortion)
    const errorRequest = 'The server is overloaded, try again later'
    const dispatch = useDispatch()
    const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=ALL')
    useEffect(() => {
        pricesWs.onmessage = function (msg) {
            totalAssetData.length !== 0 && dispatch(setCurrencyMonitor(JSON.parse(msg.data)))
        }
        return () => {
            pricesWs.close(1000, "работа закончена");
        }
    }, [pricesWs])
    const [searchByCrypt, setSearchByCrypt] = useState<string>('')
    const {searchedAndFilterResult} = useFilter({sort: searchByCrypt, totalAssetData: totalAssetData})
    return <div className="table-assets">
        {status === 'failed' && <AlertError error={errorRequest}/>}
        <div className="table-assets__header">
            <p className="table-assets__text color-orange">Number</p>
            <p className="table-assets__text color-orange">Name</p>
            <p className="table-assets__text color-orange">Price</p>
            <div className={'table-assets__input'}>
                <input type="text" placeholder={'Сryptocurrency search'}
                       onChange={(e) => setSearchByCrypt(e.currentTarget.value)}/>
            </div>
        </div>
        <div className="table-assets__body">
            {
                status === 'loading' ? <Preloader/>
                    :
                    searchedAndFilterResult.map((asset, index) => {
                        return <Assets key={`${asset?.id}-${index}`} item={asset}/>
                    })
            }
        </div>
        <Paginator searchedAndFilterResult={searchedAndFilterResult}/>
    </div>
}
