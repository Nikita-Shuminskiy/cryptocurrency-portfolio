import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './Wallet.scss'
import { ChangeWallet } from './ChangeWallet/ChangeWallet';
import { AddAssetType } from '../../../Dal/Types';


type WalletType = {
    asset: AddAssetType
}

export const Wallet = React.memo(({asset}: WalletType) => {
    const [changeAsset, setChangeAsset] = useState<boolean>(false)
    const changeAssetHandler = () => setChangeAsset(!changeAsset)

    return <div className="wallet">
        <Button onClick={changeAssetHandler} variant="primary">Change {asset.assetId}</Button>
        {changeAsset ? <ChangeWallet assetId={asset.assetId} count={asset.count} setChangeAsset={setChangeAsset}/>
            :
            <div className="wallet__block">
                <span>{asset.assetId}</span>
                <span>${(asset.price).toFixed(1)}</span>
                <span>{asset.count}</span>
            </div>
        }
    </div>
})