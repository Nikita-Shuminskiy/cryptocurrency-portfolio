import { applyMiddleware, combineReducers, createStore } from 'redux';
import ThunkMiddleware, { ThunkAction } from 'redux-thunk'
import { cryptocurrencyReducer, setDataAssets, setDataChart } from '../Bll/Crypt-coin-list-reducer';
import { portfolioReducer } from '../Bll/Portfolio-reducer';

const rootReducer = combineReducers({
    cryptocurrencyList: cryptocurrencyReducer,
    portfolio: portfolioReducer,
})

export const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))

//type
export type ActionsTypes =
    | ReturnType<typeof setDataAssets>
    | ReturnType<typeof setDataChart>
export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes>
// @ts-ignore
window.store = store


