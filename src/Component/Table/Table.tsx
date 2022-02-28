import React from 'react';
import { useSelector } from 'react-redux';
import { RequestStatusType } from '../../Bll/App-reducer';
import { AppStateType } from '../../Bll/Store/Store';
import { CryptocurrencyListType } from '../../Dal/Types';
import { AlertError } from '../Common/AlertError/AlertError';
import { Paginator } from '../Common/Paginator/Paginator';
import { Preloader } from '../Common/Preloader/Preloader';
import { Assets } from './Asset/Assets';
import './Table.scss'

export const Table = () => {
  const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
  const totalAssetData = useSelector<AppStateType, CryptocurrencyListType[]>((state) => state.cryptocurrencyList.dataAssetsPortion)
  const errorRequest = 'The server is overloaded, try again later'
  return <div className="table-assets">
    {status === 'failed' && <AlertError error={errorRequest}/>}
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
