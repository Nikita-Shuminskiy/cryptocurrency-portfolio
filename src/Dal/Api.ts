import axios from 'axios';
import { AssetsType, DataHistoryAssetsType } from './Types'

const settings = {
  baseURL: 'https://api.coincap.io/v2/',
}

const createInstance = axios.create(settings)

export const api = {
  getAssets() {
    return createInstance.get<AssetsType>('assets')
  },
  getDataAssetsPortion(limit: number, offset: number) {
    return createInstance.get<AssetsType>('assets', {params: {limit, offset}})
  },
  getChartAssetData(id: string) {
    return createInstance.get<DataHistoryAssetsType>(`assets/${id}/history`, {params: {interval: 'h12'}})
  },
  topAssets() {
    return createInstance.get<AssetsType>('assets?limit=3')
  },
}

