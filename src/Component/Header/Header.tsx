import React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom';


export const Header = () => {
    const func = (e: any) => {
    }
    return (
        <div className={'header'}>
            <div>
                <div>top 3</div>
                <p onClick={(e) => func(e)}>1</p>
                <p>2</p>
                <p>3</p>
            </div>
            <NavLink className={'header-link-portfolio'} to={'/portfolio'}> My Portfolio</NavLink>
        </div>
    );
};