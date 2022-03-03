import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PortfolioInitType } from '../../Bll/Portfolio-reducer';
import { AppStateType } from '../../Bll/Store/Store';
import { CryptocurrencyListType } from '../../Dal/Types';
import { walletCalculation } from '../Common/Helpers/Helpers';
import './Header.scss'

export const Header = () => {
  const topAssets = useSelector<AppStateType, CryptocurrencyListType[]>(state => state.cryptocurrencyList.topAssets)
  const {
    portfolio,
    percent,
    currentAssetSessions,
  } = useSelector<AppStateType, PortfolioInitType>(state => state.portfolio)

  const portfolioAmount = portfolio && walletCalculation(portfolio)

  return <div className="header">
    {topAssets.map((topAssets) => {
      return <div className="header__assets" key={topAssets.id}>
        <p className="header__text">{topAssets.name}</p>
        <p className="header__text">${(+topAssets.priceUsd).toFixed(2)}</p>
      </div>
    })}
    <div className="header__wallet">
      <p className="header__text">The whole wallet:{' '}{portfolioAmount}USD</p>
      <p className="header__text">Added during the current session:{' '}{(currentAssetSessions).toFixed(2)}USD</p>
      {/*      <p className="header__text">{percent !== Infinity && percent.toFixed(3)}%</p>*/}
    </div>
    <NavLink className="header__link " to={'/portfolio'}> My Portfolio</NavLink>
  </div>
}


