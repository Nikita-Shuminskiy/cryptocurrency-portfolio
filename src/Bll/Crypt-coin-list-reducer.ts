import { api } from '../Dal/Api';
import { CryptocurrencyListType, DataChartType } from '../Dal/Types';
import { setAppStatus } from './App-reducer';
import { AppDispatchType } from './Store/Store';

const initialState = {
  totalAssetData: [] as CryptocurrencyListType[],
  dataAssetsPortion: [] as CryptocurrencyListType[],
  timestamp: null as number|null,
  chartData: [] as DataChartType[],
  topAssets: [] as CryptocurrencyListType[],

}

export const cryptocurrencyReducer = (state = initialState, action: ActionsCryptoCurrencyTypes): CryptocurrencyInitType => {
  switch (action.type) {
    case 'CRYPT/SET-CURRENT-ASSETS-PORTION':
      return {...state, dataAssetsPortion: action.data}
    case 'CRYPT/SET-DATA-CHART':
      return {...state, chartData: action.data}
    case 'CRYPT/SET-ASSETS-TOTAL':
      return {
        ...state,
        totalAssetData: action.totalAssetData,
        timestamp: action.timestamp,
        topAssets: action.totalAssetData.slice(0, 3),
      }
    case "CRYPT/SET-CURRENCY-MONITOR":
      const newData = state.dataAssetsPortion.filter((item) => {
        if (action.listCrypt[item.id]) {
          return item.priceUsd = action.listCrypt[item.id]
        } else {
          return item
        }
      })
      const newDateTotal = state.totalAssetData.filter((item) => {
        if (action.listCrypt[item.id]) {
          return item.priceUsd = action.listCrypt[item.id]
        } else {
          return item
        }
      })
      return {
        ...state, dataAssetsPortion: newData, topAssets: newDateTotal.slice(0, 3),
      }
    default: {
      return state
    }
  }
}

export const setDataAssetsPortion = (data: CryptocurrencyListType[]) => {
  return {type: 'CRYPT/SET-CURRENT-ASSETS-PORTION', data} as const
}
export const setTotalAssetData = (totalAssetData: CryptocurrencyListType[], timestamp: number) => {
  return {type: 'CRYPT/SET-ASSETS-TOTAL', totalAssetData, timestamp} as const
}
export const setDataChart = (data: DataChartType[]) => {
  return {type: 'CRYPT/SET-DATA-CHART', data} as const
}
export const setCurrencyMonitor = (listCrypt: any) => {
  return {type: 'CRYPT/SET-CURRENCY-MONITOR', listCrypt} as const
}

export const getDataAssetsPortionTC = (limit: number, offset: number) => async (dispatch: AppDispatchType) => {
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
/*export const getDataAssetsPortionTC = (limit: number, offset: number) => async (dispatch: AppDispatchType) => {
  dispatch(setAppStatus('loading'))
  try {
    const response = await api.getDataAssetsPortion(limit, offset)
    const {data} = response.data
    dispatch(setDataAssetsPortion(data))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    dispatch(setAppStatus('failed'))
  }
}*/
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
export type ActionsCryptoCurrencyTypes =
  |ReturnType<typeof setDataAssetsPortion>
  |ReturnType<typeof setDataChart>
  |ReturnType<typeof setTotalAssetData>
  |ReturnType<typeof setCurrencyMonitor>
