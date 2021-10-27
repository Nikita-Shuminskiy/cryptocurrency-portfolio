import React, { useState } from 'react';
import { CryptocurrencyListType } from '../../../Dal/Types';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ModalForAssets } from '../ModalForAssets/ModalForAssets';
import { addAsset, setPercent } from '../../../Bll/Portfolio-reducer';

type AssetsType = {
    item: CryptocurrencyListType
}
export const Assets = React.memo(({item}: AssetsType) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const dispatch = useDispatch()
    const history = useHistory();


    const openMoreInfo = (id:string) => {
        return history.push(`/currency-info/${id}`)
    }
    const addAssetsHandler = (assetsCount:string) => {
        const newAccount = {
            assetId: item.id,
            count:assetsCount,
            price:item.priceUsd
        }
        dispatch( addAsset(newAccount))
        dispatch( setPercent(+newAccount.price))
        setShowModal(!showModal)

    }
    const openModalHandler = () => {
        setShowModal(true)
    }

    return (
        <>
            <Button onClick={() => openMoreInfo(item.id)} variant="primary">More info</Button>
            <Button onClick={openModalHandler} variant="success">+</Button>
            {showModal &&  <ModalForAssets assets={item} addAssetsHandler={addAssetsHandler} showModal={setShowModal}  />}
            <tr key={item.id}>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>${(+item.priceUsd).toFixed(2)}</td>
                <td>${Math.round(+item.marketCapUsd)}</td>
                <td>${(+item.vwap24Hr).toFixed(2)}</td>
                <td>{Math.round(+item.supply)}m</td>
                <td>{(+item.volumeUsd24Hr).toFixed(2)}%</td>
                <td>{(+item.changePercent24Hr).toFixed(2)}%</td>
            </tr>
        </>
    );
})

