export type DataChartType = {
    priceUsd: string,
    time: number,
    date: string
}
export type DataHistoryAssetsType = {
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
export type AddAssetType = {
    assetId: string,
    count: number,
    price: number,
}
