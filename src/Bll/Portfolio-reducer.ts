import { AddAssetType, CryptocurrencyListType } from '../Dal/Types';
import { ActionsTypes, AppDispatchType } from '../Store/Store';

const initialState = {
    portfolio: [
        {assetId: 'bitcoin', count: '20'}
    ] as AddAssetType[],
    percent: 0
}
export const portfolioReducer = (state = initialState, action: ActionsTypes): PortfolioInitType => {
    switch (action.type) {
        case 'PORTFOLIO/SET-ASSETS':
            return {...state, portfolio: [...state.portfolio, action.assets]}
        case 'PORTFOLIO/ADD-ASSET': {
            debugger
            return {
                ...state.portfolio,
                portfolio: state.portfolio.map(m => m.assetId === action.asset.assetId ? {...m, count: String(Number(m.count) + Number(action.asset.count))
                } : m),
                percent: 0
            }
        }
        case 'PORTFOLIO/SET-PERCENT':
            return {...state,}
        default: {
            return state
        }
    }
}
export const addAsset = (asset: AddAssetType) => {
    return {type: 'PORTFOLIO/ADD-ASSET', asset} as const
}
export const setAssets = (assets: AddAssetType) => {
    return {type: 'PORTFOLIO/SET-ASSETS', assets} as const
}
export const setPercent = (percent: number) => {
    return {type: 'PORTFOLIO/SET-PERCENT', percent} as const
}
export const getPortfolioInLocalStorageTC = () => (dispatch:AppDispatchType) => {
        const portfolio = localStorage.getItem("portfolioAssets")
        if (portfolio){
            dispatch(addAsset(JSON.parse(portfolio)))
        }
    }
export const addAssetTC = (asset:AddAssetType) => (dispatch:AppDispatchType) => {
    dispatch(addAsset(asset))
}
//types

export type PortfolioInitType = typeof initialState

