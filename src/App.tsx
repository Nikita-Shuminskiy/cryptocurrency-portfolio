import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Header } from './Component/Header/Header';
import { Portfolio } from './Component/Portfolio/Portfolio';
import { CurrencyInfo } from './Component/Table/CurrencyInfo/CurrencyInfo';
import { Table } from './Component/Table/Table';

export type AllPatchType = {
  patch: string
  component: JSX.Element
}
const PATH = {
  home: '/',
  portfolio: '/portfolio',
  table: '/table',
  currInfo: '/currency-info/:id',
}
export const allRoute: Array<AllPatchType> = [
  {
    patch: PATH.portfolio,
    component: <Portfolio/>,
  },
  {
    patch: PATH.table,
    component: <Table/>,
  },
  {
    patch: PATH.currInfo,
    component: <CurrencyInfo/>,
  },
]

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path={PATH.home} render={() => <Redirect to={'/table'}/>}/>
        {
          allRoute.map((route) => {
            return <Route path={route.patch} render={() => route.component}/>
          })
        }
      </Switch>
    </div>
  );
}

export default App;
