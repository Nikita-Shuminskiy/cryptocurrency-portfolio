import { AppStateType } from '../../../Store/Store';
import { AddAssetType } from '../../../Dal/Types';

const checkingArrayAssets = (serializedState: string) => {
    const parsedState: AppStateType = JSON.parse(serializedState);
    const portfolio = parsedState.portfolio.portfolio.filter((asset: AddAssetType) => asset.count !== 0)
    return {...parsedState, portfolio: {...parsedState.portfolio, portfolio: portfolio}}
}

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('portfolioAssets');
        if (serializedState === null) {
            return undefined;
        }

        return checkingArrayAssets(serializedState);
    } catch (err) {
        return undefined;
    }
};
export const saveState = (state: AppStateType) => {
    try {
        const stateCopy = {...state, portfolio: {...state.portfolio, percent: 0, currentAssetSessions: 0}}
        const serializedState = JSON.stringify(stateCopy);
        localStorage.setItem('portfolioAssets', serializedState);
    } catch (error) {
        return console.log(error)
    }
};
