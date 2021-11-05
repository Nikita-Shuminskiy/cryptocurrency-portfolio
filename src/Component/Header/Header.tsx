import React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AddAssetType, CryptocurrencyListType } from '../../Dal/Types';
import { PortfolioInitType } from '../../Bll/Portfolio-reducer';
import { Preloader } from '../Common/Preloader/Preloader';
import { RequestStatusType } from '../../Bll/App-reducer';
import { AppStateType } from '../../Bll/Store/Store';
import { walletCalculation } from '../Common/Helpers/Helpers';


export const Header = () => {
    const topAssets = useSelector<AppStateType, CryptocurrencyListType[]>(state => state.cryptocurrencyList.topAssets)
    const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
    const {
        portfolio,
        percent,
        currentAssetSessions
    } = useSelector<AppStateType, PortfolioInitType>(state => state.portfolio)

    const portfolioAmount =  portfolio && walletCalculation(portfolio)

    return <div className="header header__top">
                {status === 'loading' && <Preloader/>}
                {topAssets.map((topAssets) => {
                    return <div className="header__assets" key={topAssets.id}>
                <p className="header__text">{topAssets.name}</p>
                <p className="header__text">${(+topAssets.priceUsd).toFixed(2)}</p>
            </div>
        })}
        <div className="header__wallet">
            <p className="header__text">Wallet:{portfolioAmount}USD</p>
            <p className="header__text">Session:{(currentAssetSessions).toFixed(2)}USD</p>
            <p className="header__text">{percent !== Infinity && percent.toFixed(3)}%</p>
        </div>
        <NavLink className="header__link " to={'/portfolio'}> My Portfolio</NavLink>
    </div>
}


