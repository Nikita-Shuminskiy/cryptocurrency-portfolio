import React, { ChangeEvent, useState } from 'react';
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { CryptocurrencyListType } from '../../../Dal/Types';

type ModalForAssetsType = {
  assets: CryptocurrencyListType
  showModal: (show: boolean) => void
  addAssetsHandler: (countAssets: number) => void
}
export const ModalForAssets = ({assets, showModal, addAssetsHandler}: ModalForAssetsType) => {
  const [assetsCount, setAssetsCount] = useState<string>('')
  const onChangeAssets = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value > -1) {
      setAssetsCount(e.currentTarget.value)
    }
  }
  const onAddAssetsHandler = () => +assetsCount !== 0 && addAssetsHandler(Number(assetsCount))
  const currentValueAsset = (Number(assets.priceUsd) * Number(assetsCount)).toFixed(2)

  return (<Modal show={true}>
      <Modal.Header>
        <Modal.Title>Add to portfolio</Modal.Title>
        <Button onClick={() => showModal(false)} variant="primary">close</Button>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div>
            Current price&nbsp;<strong>{assets.name}</strong>:&nbsp;{Number(assets.priceUsd).toFixed(2)}
          </div>
        </div>
        <div>
          <InputGroup className="mb-3">
            <FormControl type="number" value={assetsCount} onChange={onChangeAssets}/>
            <InputGroup.Text>${currentValueAsset}</InputGroup.Text>
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

