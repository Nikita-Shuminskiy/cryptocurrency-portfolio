import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './Bll/Store/Store';


//HashRouter for gitHub.io
ReactDOM.render(
  <React.StrictMode>
   <HashRouter>
     <Provider store={store}>
         <App />
     </Provider>
   </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
