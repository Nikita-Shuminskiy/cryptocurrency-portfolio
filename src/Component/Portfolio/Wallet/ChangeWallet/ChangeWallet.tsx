import React, { ChangeEvent, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { removeAssetPortfolio, updateCurrAssetPercent } from '../../../../Bll/Portfolio-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { CryptocurrencyListType } from '../../../../Dal/Types';
import { AppStateType } from '../../../../Bll/Store/Store';

type ChangeWalletType = {
    assetId: string
    count: number
    setChangeAsset: (value: boolean) => void
}
export const ChangeWallet = React.memo(({assetId, count, setChangeAsset}: ChangeWalletType) => {
    const totalAssetData = useSelector<AppStateType, CryptocurrencyListType[]>(state => state.cryptocurrencyList.totalAssetData)
    const dispatch = useDispatch()
    const [countDelete, setCountDelete] = useState<string>('')
    const removeCountAssets = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value > -1) {
            setCountDelete(e.currentTarget.value)
        }
    }
    const removeAssetHandler = (assetId: string) => {
        const assetValue = totalAssetData.find((value) => value.id === assetId && value.priceUsd)
        if (assetValue) {
            const assetRemove = {
                assetId: assetId,
                count: Number(countDelete),
                price: Number(assetValue.priceUsd) * Number(countDelete)
            }
            if (count < assetRemove.count) return
            dispatch(updateCurrAssetPercent(assetRemove))
            dispatch(removeAssetPortfolio(assetRemove))
        }
        setChangeAsset(false)
    }

    return <InputGroup className="mb-3">
        <InputGroup.Text>{assetId}</InputGroup.Text>
        <InputGroup.Text>{count}</InputGroup.Text>
        <FormControl type="number" value={countDelete} onChange={removeCountAssets}/>
        <Button variant="primary" onClick={() => removeAssetHandler(assetId)}>sale</Button>
    </InputGroup>


})

