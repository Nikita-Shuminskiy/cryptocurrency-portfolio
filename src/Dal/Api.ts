import axios from 'axios';
import { AssetsType, DataHistoryAssetsType } from './Types';

const createInstance = axios.create({
    baseURL: 'https://api.coincap.io/v2/',

})

export const api = {
    getAssets() {
        return createInstance.get<AssetsType>('assets')
    },
    getChartData(id:string){
        return createInstance.get<DataHistoryAssetsType>(`assets/${id}/history`, { params: { interval: 'd1' } })
    },
    topAssets(){
        return createInstance.get<AssetsType>('assets?limit=3')
    }
}

