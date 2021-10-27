import React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../Store/Store';
import { CryptocurrencyListType } from '../../Dal/Types';
import { PortfolioInitType } from '../../Bll/Portfolio-reducer';


export const Header = () => {
    const topAssets = useSelector<AppStateType, CryptocurrencyListType[]>(state => state.cryptocurrencyList.topAssets)
    let {portfolio, percent} = useSelector<AppStateType, PortfolioInitType>(state => state.portfolio)


    const portfolioAmount =  portfolio.reduce((acc, curr) =>
        acc + Number(curr.price),0).toFixed(3)


    return <div className={'header'}>
        {topAssets.map((i) => {
            return <div className={'header__blockAssets'} key={i.id}>
                <p>{i.name}</p>
                <p>${(+i.priceUsd).toFixed(2)}</p>
            </div>
        })}
      <div>{portfolioAmount}<b>---{percent.toFixed(2)}%</b></div>
        <NavLink className={'header__link'} to={'/portfolio'}> My Portfolio</NavLink>
    </div>
}