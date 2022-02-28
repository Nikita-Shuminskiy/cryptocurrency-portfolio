import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppStateType } from '../../Bll/Store/Store';
import { AddAssetType } from '../../Dal/Types';
import { filteringArrayAssets } from '../Common/Helpers/Helpers';
import './Portfolio.scss'
import { Wallet } from './Wallet/Wallet';

export const Portfolio = () => {
  const currentAssets = useSelector<AppStateType, AddAssetType[]>(state => state.portfolio.portfolio)
  const history = useHistory();
  const goBackHandler = () => history.goBack()

  const checkingCurrentAsset = filteringArrayAssets(currentAssets)

  return <Modal show={true}>
    <Modal.Header>
      <Modal.Title>My Portfolio</Modal.Title>
      <button onClick={goBackHandler} type="button" className="btn btn-outline-primary">Go back</button>
    </Modal.Header>
    <Modal.Body>
      {!checkingCurrentAsset.length && <div>Your Wallet Is Empty</div>}
      {checkingCurrentAsset.map((asset) => {
        return <Wallet key={asset.assetId} asset={asset}/>
      })}
    </Modal.Body>
    <Modal.Footer>

    </Modal.Footer>
  </Modal>
}
