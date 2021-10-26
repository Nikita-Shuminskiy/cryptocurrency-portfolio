import { api } from '../Dal/Api';
import { CryptocurrencyListType, DataChartType } from '../Dal/types';
import { ActionsTypes, AppThunk } from '../Store/Store';

const initialState = {
    dataAssets: null as CryptocurrencyListType[] | null,
    timestamp: null as number | null,
    chartData: null as DataChartType[] | null
}

export const cryptocurrencyReducer = (state = initialState, action: ActionsTypes):
    CryptocurrencyInitType => {
    switch (action.type) {
        case 'CRYPT/SET-CURRENT-ASSETS':
            return {...state, dataAssets: action.data, timestamp: action.timestamp}
        case 'CRYPT/SET-DATA-CHART':
            return {...state, chartData: action.data}
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
//thunk
export const getDataAssetsTC = (): AppThunk => (dispatch) => {
    api.getAssets()
        .then((res) => {
            const {data, timestamp} = res.data
            dispatch(setDataAssets(data, timestamp))
        }).catch((error) => {
        console.log(error)
    })
}
export const getChartDataTC = (id:string): AppThunk => (dispatch) => {
    api.getChartData(id)
        .then((res) => {
            const {data} = res.data
            dispatch(setDataChart(data))
        }).catch((error) => {
        console.log(error)
    })
}
//types
export type CryptocurrencyInitType = typeof initialState
