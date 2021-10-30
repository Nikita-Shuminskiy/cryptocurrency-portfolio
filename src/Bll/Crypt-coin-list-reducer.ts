import { CryptocurrencyListType, DataChartType } from '../Dal/Types';
import { ActionsTypes, AppDispatchType } from '../Store/Store';
import { setAppStatus } from './App-reducer';
import { api } from '../Dal/Api';

const initialState = {
    dataAssets: [] as CryptocurrencyListType[],
    timestamp: null as number | null,
    chartData: [] as DataChartType[],
    topAssets: [] as CryptocurrencyListType[]
}

export const cryptocurrencyReducer = (state = initialState, action: ActionsTypes): CryptocurrencyInitType => {
    switch (action.type) {
        case 'CRYPT/SET-CURRENT-ASSETS':
            return {...state, dataAssets: action.data, timestamp: action.timestamp}
        case 'CRYPT/SET-DATA-CHART':
            return {...state, chartData: action.data}
        case  'CRYPT/SET-TOP-DATA-ASSETS':
            return {...state, topAssets: action.data}
        default: {
            return state
        }
    }
}
//action
export const setDataAssets = (data: CryptocurrencyListType[], timestamp: number) => {
    return {type: 'CRYPT/SET-CURRENT-ASSETS', data, timestamp} as const
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
        const response = await api.getAssets()
        const {data, timestamp} = response.data
        dispatch(setDataAssets(data, timestamp))
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
        const response = await  api.getChartData(id)
        const {data} = response.data
        dispatch(setDataChart(data))
        dispatch(setAppStatus('succeeded'))
    } catch (e) {
        dispatch(setAppStatus('failed'))
    }
}

//types
export type CryptocurrencyInitType = typeof initialState
