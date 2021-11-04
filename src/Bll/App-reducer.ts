import { ActionsTypes } from "./Store/Store"


const initialState  = {
    status: 'loading' as RequestStatusType,
    error: null as string | null,
}
export const appReducer = (state = initialState , action: ActionsAppTypes): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-APP-STATUS':
        case 'APP/SET-APP-ERROR':
            return {
                ...state,
                ...action.payload,
            }
        default: {
            return state
        }
    }
}
//action
export const setAppStatus = (status:RequestStatusType) => {
  return {type: 'APP/SET-APP-STATUS', payload: {status}} as const
}
export const setAppError = (error:string | null) => {
    return {type: 'APP/SET-APP-ERROR', payload: {error}} as const
}
//type
export type RequestStatusType = 'loading' | 'succeeded' | 'failed'
type InitialStateType = typeof initialState
export type ActionsAppTypes =
        | ReturnType<typeof setAppStatus>
        | ReturnType<typeof setAppError>