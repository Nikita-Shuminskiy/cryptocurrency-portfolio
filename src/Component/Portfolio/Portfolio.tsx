import React, { useEffect } from 'react';
import './Portfolio.scss'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../Store/Store';
import { getPortfolioInLocalStorageTC, removeAssetPortfolio } from '../../Bll/Portfolio-reducer';
import { Modal } from 'react-bootstrap';
import { AddAssetType } from '../../Dal/Types';

export const Portfolio = () => {
    const currentAssets = useSelector<AppStateType, AddAssetType[]>(state => state.portfolio.portfolio)
    const history = useHistory();
    const dispatch = useDispatch()
     const goBackHandler = () => {
        history.goBack()
    }
    const removeAssetHandler = (assetId:string) => {
        dispatch(removeAssetPortfolio(assetId))
    }
    useEffect(() => {
        dispatch(getPortfolioInLocalStorageTC())
    }, [])
    return <Modal show={true}>
        <Modal.Header>
            <Modal.Title>My Portfolio</Modal.Title>
            <button onClick={goBackHandler} type="button" className="btn btn-outline-primary">Go back</button>
        </Modal.Header>
        <Modal.Body>
            <div>
                {currentAssets.map((i) => {
                    return <div key={i.assetId}>
                        {i.count}
                        <button onClick={() => removeAssetHandler(i.assetId)} >close</button>
                    </div>
                })}
            </div>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
    </Modal>
}
