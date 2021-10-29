import React, { useEffect } from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../Store/Store';
import { CryptocurrencyListType } from '../../Dal/Types';
import { PortfolioInitType } from '../../Bll/Portfolio-reducer';
import { getDataTopAssetsTC } from '../../Bll/Crypt-coin-list-reducer';


export const Header = () => {
    const topAssets = useSelector<AppStateType, CryptocurrencyListType[]>(state => state.cryptocurrencyList.topAssets)
    const {
        portfolio,
        percent,
        currentAssetSessions
    } = useSelector<AppStateType, PortfolioInitType>(state => state.portfolio)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDataTopAssetsTC())
    }, [dispatch])
    const portfolioAmount = portfolio && portfolio.reduce((acc, curr) =>
        acc + Number(curr.price), 0).toFixed(2)

    return <div className="header">
        {topAssets.map((topAssets) => {
            return <div className="header__assets" key={topAssets.id}>
                <p className="header__assets-text">{topAssets.name}</p>
                <p className="header__assets-text">${(+topAssets.priceUsd).toFixed(2)}</p>
            </div>
        })}
        <div className="header__totalCounts">
            <p className="header__totalCounts-text">Wallet:{portfolioAmount}USD</p>
            <p className="header__totalCounts-text">Session:{(currentAssetSessions).toFixed(2)}USD</p>
            <p className="header__totalCounts-text">{percent !== Infinity && percent.toFixed(2)}% </p>
        </div>

        <NavLink className="header__link" to={'/portfolio'}> My Portfolio</NavLink>
    </div>
}