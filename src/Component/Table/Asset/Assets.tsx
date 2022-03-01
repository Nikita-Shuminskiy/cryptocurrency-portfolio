import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addAsset } from '../../../Bll/Portfolio-reducer';
import { CryptocurrencyListType } from '../../../Dal/Types';
import { ModalForAssets } from '../ModalForAssets/ModalForAssets';
import './Assets.scss'

type AssetsType = {
  item: CryptocurrencyListType
}
export const Assets = ({item}: AssetsType) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [price, setPrice] = useState<string>(item.priceUsd)
  const [fieldIllumination, setFieldIllumination] = useState<boolean>(false)
  const dispatch = useDispatch()
  const history = useHistory();
  const openMoreInfo = (id: string) => {
    return history.push(`/currency-info/${id}`)
  }
  useEffect(() => {
    setPrice(prevState => {
      if (prevState !== item.priceUsd) {
        setFieldIllumination(true)
      }
      return prevState !== item.priceUsd ? item.priceUsd : prevState
    })
    setTimeout(() => {
      setFieldIllumination(false)
    }, 800)
  }, [item.priceUsd])
  const addAssetsHandler = (assetsCount: number) => {
    const newAsset = {
      assetId: item.id,
      count: assetsCount,
      price: Number(item.priceUsd) * assetsCount,
    }
    dispatch(addAsset(newAsset))
    setShowModal(!showModal)
  }
  const openModalPortfolioHandler = () => {
    setShowModal(true)
  }
  return <>
    {showModal && <ModalForAssets assets={item} addAssetsHandler={addAssetsHandler} showModal={setShowModal}/>}
    <div className={`table-assets__item ${fieldIllumination ? 'field-illumination' : ''}`}>
      <p className="table-assets__text">{item?.rank}</p>
      <p className="table-assets__text">{item?.name}</p>
      <p className="table-assets__text">${(+price).toFixed(3)}</p>
      <Button onClick={() => openMoreInfo(item?.id)} variant="outline-primary">More
        info</Button>
      <Button onClick={openModalPortfolioHandler} variant="outline-primary">Buy
        currency</Button>
    </div>
  </>

}

