import { CryptocurrencyListType, DataChartType } from '../Dal/Types';
import { ActionsTypes, AppDispatchType } from '../Store/Store';
import { setAppStatus } from './App-reducer';
import { api } from '../Dal/Api';

const initialState = {
    totalAssetData: [] as CryptocurrencyListType[],
    dataAssetsPortion: [] as CryptocurrencyListType[],
    timestamp: null as number | null,
    chartData: [] as DataChartType[],
    topAssets: [] as CryptocurrencyListType[],

}


export const cryptocurrencyReducer = (state = initialState, action: ActionsTypes): CryptocurrencyInitType => {
    switch (action.type) {
        case 'CRYPT/SET-CURRENT-ASSETS-PORTION':
            return {...state, dataAssetsPortion: action.data}
        case 'CRYPT/SET-DATA-CHART':
            return {...state, chartData: action.data}
        case  'CRYPT/SET-TOP-DATA-ASSETS':
            return {...state, topAssets: action.data}
        case 'CRYPT/SET-ASSETS-TOTAL':
            return {...state, totalAssetData: action.totalAssetData, timestamp: action.timestamp}
        default: {
            return state
        }
    }
}
//action
export const setDataAssetsPortion = (data: CryptocurrencyListType[]) => {
    return {type: 'CRYPT/SET-CURRENT-ASSETS-PORTION', data} as const
}
export const setTotalAssetData = (totalAssetData: CryptocurrencyListType[], timestamp: number) => {
    return {type: 'CRYPT/SET-ASSETS-TOTAL', totalAssetData, timestamp} as const
}
export const setDataChart = (data: DataChartType[]) => {
    return {type: 'CRYPT/SET-DATA-CHART', data} as const
}
export const setTopDataAssets = (data: CryptocurrencyListType[]) => {
    return {type: 'CRYPT/SET-TOP-DATA-ASSETS', data} as const
}

//thunk
export const getDataAssetsTC = () => async (dispatch: AppDispatchType) => {
    dispatch(setAppStatus('loading'))
    try {
        const response = await api.getDataAssetsPortion(limit, offset)
        const {data} = response.data
        dispatch(setDataAssetsPortion(data))
        dispatch(setAppStatus('succeeded'))
    } catch (e) {
        dispatch(setAppStatus('failed'))
    }
}
export const getDataAssetsTotalTC = () => async (dispatch: AppDispatchType) => {
    dispatch(setAppStatus('loading'))
    try {
        const response = await api.getAssets()
        const {data, timestamp} = response.data
        dispatch(setTotalAssetData(data, timestamp))
        dispatch(setAppStatus('succeeded'))
    } catch (e) {
        dispatch(setAppStatus('failed'))
    }
}
export const getDataTopAssetsTC = () => async (dispatch: AppDispatchType) => {
    dispatch(setAppStatus('loading'))
    try {
        const response = await api.topAssets()
        const {data} = response.data
        dispatch(setTopDataAssets(data))
        dispatch(setAppStatus('succeeded'))
    } catch (e) {
        dispatch(setAppStatus('failed'))
    }
}
export const getChartDataTC = (id: string) => async (dispatch: AppDispatchType) => {
    dispatch(setAppStatus('loading'))
    try {
        const response = await api.getChartAssetData(id)
        const {data} = response.data
        dispatch(setDataChart(data))
        dispatch(setAppStatus('succeeded'))
    } catch (e) {
        dispatch(setAppStatus('failed'))
    }
}

//types
export type CryptocurrencyInitType = typeof initialState
