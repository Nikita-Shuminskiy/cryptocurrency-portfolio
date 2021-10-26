import React from 'react';
import { CryptocurrencyListType } from '../../../Dal/types';
import { useHistory } from 'react-router-dom';


type AssetsType = {
    item: CryptocurrencyListType
}

export const Assets = ({item}:AssetsType) =>{
    const history = useHistory();
    const openMoreInfo = (id: string) => {
       return history.push(`/currency-info/:${id}`)
    }
    return (
        <>
            <button type="button" onClick={() => openMoreInfo(item.id)} className="btn btn-primary">More info</button>
            <tr key={item.id}>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>${(+item.priceUsd).toFixed(2)}</td>
                <td>${Math.round(+item.marketCapUsd)}</td>
                <td>${Math.round(+item.vwap24Hr)}</td>
                <td>{Math.round(+item.supply)}m</td>
                <td>{Math.round(+item.volumeUsd24Hr)}</td>
                <td>{item.changePercent24Hr}%</td>
            </tr>
        </>
    );
};

