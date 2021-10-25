import axios from 'axios';

const createInstance = axios.create({
    baseURL: 'https://api.coincap.io/v2/',
})

export const api = {
    getAssets() {
        return createInstance.get<AssetsType>('assets')
    },
    getChartData(id:string){
        return createInstance.get<DataqwqeRType>(`assets/${id}/history?interval=d1`)
    }
}
export type DataChartType = {
    "priceUsd": string,
    "time": number,
    "date": string
}
export type DataqwqeRType = {
    data: DataChartType[]
}


export type CryptocurrencyListType = {
    id: string,
    rank: string,
    symbol: string,
    name: string,
    supply: string,
    maxSupply: string,
    marketCapUsd: string,
    volumeUsd24Hr: string,
    priceUsd: string,
    changePercent24Hr: string,
    vwap24Hr: string
}
export type AssetsType = {
    data: CryptocurrencyListType[]
    timestamp: number
}
