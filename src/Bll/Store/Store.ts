import { Dispatch } from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ThunkMiddleware, { ThunkAction } from 'redux-thunk'
import { loadState, saveState } from '../../Component/Common/Utils/localstorage-utils';
import { ActionsAppTypes, appReducer } from '../App-reducer';
import { ActionsCryptoCurrencyTypes, cryptocurrencyReducer } from '../Crypt-coin-list-reducer';
import { ActionsPortfolioTypes, portfolioReducer } from '../Portfolio-reducer';

const rootReducer = combineReducers({
  cryptocurrencyList: cryptocurrencyReducer,
  portfolio: portfolioReducer,
  app: appReducer,
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(ThunkMiddleware))

store.subscribe(() => {
  saveState({
    ...store.getState(),
    portfolio: store.getState().portfolio,
  })
})

//type
export type ActionsTypes =
  |ActionsAppTypes
  |ActionsCryptoCurrencyTypes
  |ActionsPortfolioTypes
export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = Dispatch<ActionsTypes>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes>

// @ts-ignore
window.store = store


