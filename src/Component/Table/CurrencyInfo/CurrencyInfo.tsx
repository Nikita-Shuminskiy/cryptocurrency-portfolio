import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { CryptocurrencyInitType, getChartDataTC, setCurrencyMonitor } from '../../../Bll/Crypt-coin-list-reducer';
import { AppStateType } from '../../../Bll/Store/Store';
import { Charts } from '../../Common/Chart/Chart';
import { CurrencyDetails } from './CurrenceDetails/CurrencyDetails';
import './CurrencyInfo.scss'

export const CurrencyInfo = () => {
  const {id} = useParams<{id: string}>();
  const history = useHistory();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChartDataTC(id))
  }, [dispatch, id])
  const {
    dataAssetsPortion,
    chartData,
  } = useSelector<AppStateType, CryptocurrencyInitType>(state => state.cryptocurrencyList)
  const name = dataAssetsPortion
  .find(asset => asset.id === id)?.id
  const goBackHandler = () => history.goBack()
  const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${name}`)
  useEffect(() => {
    pricesWs.onmessage = function (msg) {
      dataAssetsPortion.length !== 0 && dispatch(setCurrencyMonitor(JSON.parse(msg.data)))
    }
    return () => {
      pricesWs.close(1000, "работа закончена");
    }
  }, [pricesWs])
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
          dataAssetsPortion
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


