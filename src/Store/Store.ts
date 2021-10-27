import { applyMiddleware, combineReducers, createStore } from 'redux';
import ThunkMiddleware, { ThunkAction } from 'redux-thunk'
import { cryptocurrencyReducer, setDataAssets, setDataChart, setTopDataAssets } from '../Bll/Crypt-coin-list-reducer';
import { addAsset, portfolioReducer, setAssets, setPercent } from '../Bll/Portfolio-reducer';
import { appReducer, RequestStatusType, setAppError, setAppStatus } from '../Bll/App-reducer';
import { Dispatch } from 'react';
import { AddAssetType, CryptocurrencyListType, DataChartType } from '../Dal/Types';

const rootReducer = combineReducers({
    cryptocurrencyList: cryptocurrencyReducer,
    portfolio: portfolioReducer,
    app: appReducer,
})

let preloadedState;
const persistedCounterString = localStorage.getItem("portfolioAssets")
const parsedValue = persistedCounterString && JSON.parse(persistedCounterString);
    preloadedState = {
        cryptocurrencyList: {
        dataAssets: [] as CryptocurrencyListType[],
            timestamp: null as number | null,
            chartData: [] as DataChartType[],
            topAssets: [] as CryptocurrencyListType[]
    },
        portfolio: {
            portfolio: parsedValue ? parsedValue : [],
            percent: 0 as number
        },
        app: {
            status: 'loading' as RequestStatusType,
            error: null as string | null
        }

}
export const store = createStore(rootReducer,preloadedState, applyMiddleware(ThunkMiddleware))

store.subscribe(() => {
    localStorage.setItem("portfolioAssets", JSON.stringify(store.getState().portfolio.portfolio))
})
//type
export type ActionsTypes =
    | ReturnType<typeof setDataAssets>
    | ReturnType<typeof setDataChart>
    | ReturnType<typeof setTopDataAssets>
    | ReturnType<typeof setAppStatus>
    | ReturnType<typeof setAppError>
    | ReturnType<typeof addAsset>
    | ReturnType<typeof setAssets>
    | ReturnType<typeof setPercent>

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = Dispatch<ActionsTypes>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes>


// @ts-ignore
window.store = store


