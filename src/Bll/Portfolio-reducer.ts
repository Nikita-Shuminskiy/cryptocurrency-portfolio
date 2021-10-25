const initialState = {
}

export const portfolioReducer = (state = initialState, action: any): PortfolioInitType => {
    switch (action.type) {

        default: {
            return state
        }
    }
}
//types
/*export type CryptocurrencyActionType =*/
export type PortfolioInitType = typeof initialState
