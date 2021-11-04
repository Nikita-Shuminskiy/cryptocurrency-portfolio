import { AddAssetType } from "../../../Dal/Types"

export const formatPricer = (price: any, countAfterDot: number) => {
    return Number(price).toFixed(countAfterDot)
}

export const walletCalculation = (portfolio: AddAssetType[]) => {
    return portfolio.reduce((acc, curr) =>
        acc + Number(curr.price), 0).toFixed(2)
}
export const filteringArrayAssets = (currentAssets:AddAssetType[]) => {
    return currentAssets.filter(asset => asset.count !== 0)
}