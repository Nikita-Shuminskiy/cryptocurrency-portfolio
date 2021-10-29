import { AppStateType } from '../../../Store/Store';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('portfolioAssets');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
export const saveState = (state: AppStateType )  => {
    try {
        const stateCopy = {...state, portfolio: {...state.portfolio, percent: 0, currentAssetSessions: 0}}
        const serializedState = JSON.stringify(stateCopy);
        localStorage.setItem('portfolioAssets', serializedState);
    } catch(error) {
       return console.log(error)
    }
};
