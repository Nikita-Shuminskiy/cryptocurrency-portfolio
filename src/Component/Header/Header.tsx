import React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../Store/Store';
import { CryptocurrencyListType } from '../../Dal/Types';
import { PortfolioInitType } from '../../Bll/Portfolio-reducer';
import { Preloader } from '../Common/Preloader/Preloader';
import { RequestStatusType } from '../../Bll/App-reducer';


export const Header = () => {
    const topAssets = useSelector<AppStateType, CryptocurrencyListType[]>(state => state.cryptocurrencyList.topAssets)
    const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
    const {
        portfolio,
        percent,
        currentAssetSessions
    } = useSelector<AppStateType, PortfolioInitType>(state => state.portfolio)
    const portfolioAmount = portfolio && portfolio.reduce((acc, curr) =>
        acc + Number(curr.price), 0).toFixed(2)

    return <div className="header">
        {status === 'loading' && <Preloader/>}
        {topAssets.map((topAssets) => {
            return <div className="assets" key={topAssets.id}>
                <p className="assets__top-text">{topAssets.name}</p>
                <p className="assets__top-text">${(+topAssets.priceUsd).toFixed(2)}</p>
            </div>
        })}
        <div className="top-active">
            <p className="top-active__text ">Wallet:{portfolioAmount}USD</p>
            <p className="top-active__text ">Session:{(currentAssetSessions).toFixed(2)}USD</p>
            <p className="top-active__text ">{percent !== Infinity && percent.toFixed(3)}%</p>
        </div>
        <NavLink className="header__link" to={'/portfolio'}> My Portfolio</NavLink>
    </div>
}