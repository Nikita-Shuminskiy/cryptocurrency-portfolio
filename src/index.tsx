import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './Store/Store';

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
     <Provider store={store}>
         <App />
     </Provider>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
