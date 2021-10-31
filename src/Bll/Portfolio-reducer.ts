import { AddAssetType } from '../Dal/Types';
import { ActionsTypes } from '../Store/Store';


const initialState = {
    portfolio: [] as AddAssetType[],
    percent: 0,
    currentAssetSessions: 0,
    currentUserPage:1
}

export const portfolioReducer = (state = initialState, action: ActionsTypes): PortfolioInitType => {
    switch (action.type) {
        case 'PORTFOLIO/SET-ASSETS':
            return {...state, portfolio: [...state.portfolio, ...action.assets]}
        case 'PORTFOLIO/ADD-ASSET':
            const currentAssetSession = state.portfolio.reduce((acc, curr) =>
                acc + curr.price, 0)
            const asset = state.portfolio.find(item => item.assetId === action.asset.assetId)
            if (asset) {
                state.portfolio.forEach(item => {
                    if (item.assetId === action.asset.assetId) {
                        item.count = item.count + action.asset.count
                        item.price = item.price + action.asset.price
                    }
                })
                return {
                    ...state, currentAssetSessions: state.currentAssetSessions + currentAssetSession,
                    percent: action.asset.price * 100 / currentAssetSession,
                    portfolio: [...state.portfolio]
                }
            }
            return {
                ...state,
                currentAssetSessions: state.currentAssetSessions + action.asset.price,
                percent: action.asset.price * 100 / action.asset.price,
                portfolio: [...state.portfolio, action.asset]
            }
        case 'PORTFOLIO/UPDATE-PERCENT': {
            const currentAssetSession = state.portfolio.reduce((acc, curr) =>
                acc + curr.price, 0)
            return {
                ...state, currentAssetSessions: state.currentAssetSessions - action.asset.price,
                percent: action.asset.price * 100 / currentAssetSession
            }
        }
        case 'PORTFOLIO/REMOVE-ASSET':
            return {
                ...state, portfolio: state.portfolio.map((element) => {
                    if (element.assetId === action.asset.assetId) {
                        return {
                            ...element, count: element.count - action.asset.count,
                            price: element.price - action.asset.price
                        }
                    }
                    return element
                })
            }
        case 'PORTFOLIO/CHANGE-PAGE':
            return {...state, currentUserPage: action.currentPage}
        default: {
            return state
        }
    }
}

//action
export const addAsset = (asset: AddAssetType) => {
    return {type: 'PORTFOLIO/ADD-ASSET', asset} as const
}
export const updateCurrAssetPercent = (asset: AddAssetType) => {
    return {type: 'PORTFOLIO/UPDATE-PERCENT', asset} as const
}
export const setAssets = (assets: AddAssetType[]) => {
    return {type: 'PORTFOLIO/SET-ASSETS', assets} as const
}
export const changeUsersCurrentPage = (currentPage: number) => {
    return {type: 'PORTFOLIO/CHANGE-PAGE',  currentPage} as const
}
export const removeAssetPortfolio = (asset: AddAssetType) => {
    return {type: 'PORTFOLIO/REMOVE-ASSET', asset} as const
}

//types
export type PortfolioInitType = typeof initialState

