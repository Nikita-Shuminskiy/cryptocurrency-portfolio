import React from 'react';
import './Portfolio.scss'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../Store/Store';
import { Modal } from 'react-bootstrap';
import { AddAssetType } from '../../Dal/Types';
import { Wallet } from './Wallet/Wallet';

export const Portfolio = () => {
    const currentAssets = useSelector<AppStateType, AddAssetType[]>(state => state.portfolio.portfolio)
    const history = useHistory();
    const goBackHandler = () => history.goBack()
    const checkingCurrentAsset = currentAssets.filter(asset => asset.count !== 0)

    return <Modal show={true}>
        <Modal.Header>
            <Modal.Title>My Portfolio</Modal.Title>
            <button onClick={goBackHandler} type="button" className="btn btn-outline-primary">Go back</button>
        </Modal.Header>
        <Modal.Body>
            {!checkingCurrentAsset.length && <div>Your Wallet Is Empty</div>}
            {checkingCurrentAsset.map((asset) => {
                return <Wallet currentAssets={currentAssets} key={asset.assetId} asset={asset}/>
            })}
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
    </Modal>
}
