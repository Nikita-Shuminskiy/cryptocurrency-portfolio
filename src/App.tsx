import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Table } from './Component/Table/Table';
import { Header } from './Component/Header/Header';
import { Portfolio } from './Component/Portfolio/Portfolio';
import { CurrencyInfo } from './Component/Table/CurrencyInfo/CurrencyInfo';

const PATH = {
    HOME: '/'
}

const App = () => {
    return (
        <div className="container">
            <Header/>
                    <Switch>
                        <Route exact path={PATH.HOME} render={() => <Redirect to={'/table'}/>}/>
                        <Route path={'/portfolio'} render={() => <Portfolio/>}/>
                        <Route path={'/table'} render={() => <Table/>}/>
                        <Route path={'/currency-info/:id'} render={() => <CurrencyInfo/>}/>
                    </Switch>
        </div>
    );
}

export default App;
