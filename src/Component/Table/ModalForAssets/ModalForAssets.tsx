import React, { ChangeEvent, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { CryptocurrencyListType } from '../../../Dal/Types';

type ModalForAssetsType = {
    assets: CryptocurrencyListType
    showModal: (show: boolean) => void
    addAssetsHandler: (countAssets:string) => void
}
export const ModalForAssets = (props: ModalForAssetsType) => {
    const [assetsCount, setAssetsCount] = useState('')
    const onChangeAssets = (e: ChangeEvent<HTMLInputElement>) => {
            setAssetsCount(e.currentTarget.value)
    }
    const  onaddAssetsHandler = () =>{
        props.addAssetsHandler(assetsCount)
    }
    return (<Modal show={true}>
            <Modal.Header>
                <Modal.Title>Add to portfolio</Modal.Title>
                <Button onClick={() => props.showModal(false)} variant="primary">
                    close
                </Button>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Do you want to add <strong>{props.assets.name}</strong> to your portfolio
                </div>
                <div>
                    <input type={'number'} value={assetsCount} onChange={onChangeAssets}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onaddAssetsHandler} variant="primary">
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

