import { ActionsTypes } from '../Store/Store';



const initialState  = {
    status: 'loading' as RequestStatusType,
    error: null as string | null,
}
export const appReducer = (state = initialState , action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-APP-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-APP-ERROR':
            return {...state, error: action.error}
        default: {
            return state
        }
    }
}
export const setAppStatus = (status:RequestStatusType) => {
  return {type: 'APP/SET-APP-STATUS', status} as const
}
export const setAppError = (error:string | null) => {
    return {type: 'APP/SET-APP-ERROR', error} as const
}

export type RequestStatusType = 'loading' | 'succeeded' | 'failed'

type InitialStateType = typeof initialState