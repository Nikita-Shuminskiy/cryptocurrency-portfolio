import React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../Store/Store';
import { AddAssetType, CryptocurrencyListType } from '../../Dal/Types';


export const Header = () => {
    const topAssets = useSelector<AppStateType, CryptocurrencyListType[]>(state => state.cryptocurrencyList.topAssets)
    const currentAssets = useSelector<AppStateType, AddAssetType[]>(state => state.portfolio.portfolio)

    return <div className={'header'}>
                {topAssets.map((i) => {
                    return <div className={'header__blockAssets'} key={i.id}>
                        <p>{i.name}</p>
                        <p>${(+i.priceUsd).toFixed(2)}</p>
                    </div>
                })}
        {
              currentAssets.map((i) => {
                return <div>
                    <p>{i.assetId}----{i.count}</p>
                </div>
            })

        }
            <NavLink className={'header__link'} to={'/portfolio'}> My Portfolio</NavLink>
        </div>
};