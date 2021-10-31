import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Dispatch } from 'react';
import ThunkMiddleware, { ThunkAction } from 'redux-thunk'
import {
    cryptocurrencyReducer,
    setDataAssetsPortion,
    setTotalAssetData,
    setDataChart,
    setTopDataAssets
} from '../Bll/Crypt-coin-list-reducer';
import {
    addAsset, changeUsersCurrentPage,
    portfolioReducer,
    removeAssetPortfolio,
    setAssets,
    updateCurrAssetPercent
} from '../Bll/Portfolio-reducer';
import { appReducer, setAppError, setAppStatus } from '../Bll/App-reducer';
import { loadState, saveState } from '../Component/Common/Utils/localstorage-utils';

const rootReducer = combineReducers({
    cryptocurrencyList: cryptocurrencyReducer,
    portfolio: portfolioReducer,
    app: appReducer,
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(ThunkMiddleware))

store.subscribe(() => {
    saveState({
        portfolio: store.getState().portfolio,
    })
})

//type
export type ActionsTypes =
    | ReturnType<typeof setDataAssetsPortion>
    | ReturnType<typeof setDataChart>
    | ReturnType<typeof setTopDataAssets>
    | ReturnType<typeof setAppStatus>
    | ReturnType<typeof setAppError>
    | ReturnType<typeof addAsset>
    | ReturnType<typeof removeAssetPortfolio>
    | ReturnType<typeof setAssets>
    | ReturnType<typeof updateCurrAssetPercent>
    | ReturnType<typeof changeUsersCurrentPage>
    | ReturnType<typeof changeUsersCurrentPage>
    | ReturnType<typeof setTotalAssetData>

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = Dispatch<ActionsTypes>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes>


// @ts-ignore
window.store = store


