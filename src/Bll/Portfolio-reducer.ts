import { AddAssetType } from '../Dal/Types';
import { ActionsTypes, AppDispatchType } from '../Store/Store';


const initialState = {
    portfolio: [] as AddAssetType[],
    percent: 0
}

export const portfolioReducer = (state = initialState, action: ActionsTypes): PortfolioInitType => {
    switch (action.type) {
        case 'PORTFOLIO/SET-ASSETS':
            return {...state, portfolio: [...state.portfolio, action.assets]}
        case 'PORTFOLIO/ADD-ASSET':
            const asset = state.portfolio.find(item => item.assetId === action.asset.assetId)
            if (asset) {
                state.portfolio.forEach(item => {
                    if (item.assetId === action.asset.assetId) {
                        item.count = String(Number(item.count) + Number(action.asset.count))
                        item.price = String(Number(item.price) + Number(action.asset.price))
                    }
                })
                return {...state, portfolio: [...state.portfolio]}
            }
            return {...state, portfolio: [...state.portfolio, action.asset]}
        case 'PORTFOLIO/SET-PERCENT':
            const copyState = {...state}
            const differenceCostInitial  = copyState.portfolio.reduce((acc, curr) =>
                acc + Number(curr.price),0)
            return {...state, percent: Number(action.percent) * 100 /  differenceCostInitial }
        case 'PORTFOLIO/REMOVE-ASSET':
            return {...state, portfolio: state.portfolio.filter((assets) => {
                    return assets.assetId !== action.assetId
                })}
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
export const removeAssetPortfolio = (assetId: string) => {
    return {type: 'PORTFOLIO/REMOVE-ASSET', assetId} as const
}
export const getPortfolioInLocalStorageTC = () => (dispatch: AppDispatchType) => {
    const portfolio = localStorage.getItem('portfolioAssets')
    if (portfolio) {
        dispatch(addAsset(JSON.parse(portfolio)))
    }
}


//types
export type PortfolioInitType = {
    portfolio: AddAssetType[]
    percent: number
}

