import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from './Component/Table/Table';
import { Header } from './Component/Header/Header';
import { Portfolio } from './Component/Portfolio/Portfolio';
import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';


function App() {
    return (
        <div className="App">
            <Header/>
           <Route>
               <Switch>
                   <Route exact path={'/'} render={() =>   <Redirect to={'/table'} />}/>
                   <Route path={'/portfolio'} render={() => <Portfolio/>}/>
                   <Route path={'/table'} render={() => <Table/>}/>
               </Switch>
           </Route>
        </div>
    );
}

export default App;
