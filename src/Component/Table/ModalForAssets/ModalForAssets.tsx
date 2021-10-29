import React, { ChangeEvent, useState } from 'react';
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { CryptocurrencyListType } from '../../../Dal/Types';

type ModalForAssetsType = {
    assets: CryptocurrencyListType
    showModal: (show: boolean) => void
    addAssetsHandler: (countAssets:number) => void
}
export const ModalForAssets = (props: ModalForAssetsType) => {
    const [assetsCount, setAssetsCount] = useState<string>('')
    const onChangeAssets = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) > -1){
            setAssetsCount(e.currentTarget.value)
        }
    }
    const  onAddAssetsHandler = () => assetsCount &&  props.addAssetsHandler( Number(assetsCount))

    return (<Modal show={true}>
            <Modal.Header>
                <Modal.Title>Add to portfolio</Modal.Title>
                <Button onClick={() => props.showModal(false)} variant="primary">close</Button>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Do you want to add <strong>{props.assets.name}</strong> to your portfolio
                </div>
                <div>
                    <InputGroup className="mb-3">
                        <FormControl type="number" value={assetsCount} onChange={onChangeAssets}/>
                    </InputGroup>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onAddAssetsHandler} variant="primary">
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

