import React from 'react';
import { CryptocurrencyListType } from '../../../../Dal/Types';


type CurrencyDetailsType = {
    asset: CryptocurrencyListType
}

export const CurrencyDetails = React.memo( ({asset}:CurrencyDetailsType) => {

    return <tr key={asset.id}>
        <th>{asset.rank}</th>
        <th>{asset.name}</th>
        <th>${(+asset.priceUsd).toFixed(5)}</th>
        <th>${(+asset.marketCapUsd).toFixed(5)}</th>
        <th>${(+asset.vwap24Hr).toFixed(2)}</th>
        <th>{(+asset.supply).toFixed(5)}B</th>
        <th>{(+asset.volumeUsd24Hr).toFixed(5)}B</th>
        <th>{(+asset.changePercent24Hr).toFixed(2)}%</th>
    </tr>
})