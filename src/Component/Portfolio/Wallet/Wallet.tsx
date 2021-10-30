import { Button, FormControl, InputGroup } from 'react-bootstrap';
import React, { ChangeEvent, useState } from 'react';
import { removeAssetPortfolio, updateCurrAssetPercent } from '../../../Bll/Portfolio-reducer';
import { AddAssetType, CryptocurrencyListType } from '../../../Dal/Types';
import { useDispatch, useSelector } from 'react-redux';
import './Wallet.scss'
import { AppStateType } from '../../../Store/Store';

type WalletType = {
    asset: AddAssetType
    currentAssets: AddAssetType[]
}
export const Wallet = React.memo(({asset, currentAssets}: WalletType) => {
    const [countDelete, setCountDelete] = useState<string>('')
    const [changeAsset, setChangeAsset] = useState<boolean>(false)
    const valueAssets = useSelector<AppStateType, CryptocurrencyListType[]>(state => state.cryptocurrencyList.dataAssets)
    const dispatch = useDispatch()
    const removeCountAssets = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value > -1) {
            setCountDelete(e.currentTarget.value)
        }
    }

    const removeAssetHandler = (assetId: string) => {
        const count = currentAssets.find(count => count.assetId === assetId)
        const assetValue = valueAssets.find((value) => {
            if (value.id === assetId) {
                return value.priceUsd
            }
        })
        if (count && assetValue) {
            const assetRemove = {
                assetId: assetId,
                count: Number(countDelete),
                price: Number(assetValue.priceUsd) * Number(countDelete)
            }
            if (asset.count < assetRemove.count) return
            dispatch(updateCurrAssetPercent(assetRemove))
            dispatch(removeAssetPortfolio(assetRemove))

        }
        setChangeAsset(false)
    }

    const changeAssetHandler = () => setChangeAsset(!changeAsset)

    return <div className="wallet">
        <Button onClick={changeAssetHandler} variant="primary">Change {asset.assetId}</Button>
        {changeAsset ? <InputGroup className="mb-3">
                <InputGroup.Text>{asset.assetId}</InputGroup.Text>
                <InputGroup.Text>{asset.count}</InputGroup.Text>
                <FormControl type="number" value={countDelete} onChange={removeCountAssets}/>
                <Button variant="primary" onClick={() => removeAssetHandler(asset.assetId)}>sale</Button>
            </InputGroup>
            :
            <div className="wallet__block">
                <span>{asset.assetId}</span>
                <span>${(asset.price).toFixed(1)}</span>
                <span>{asset.count}</span>
            </div>
        }

    </div>
})