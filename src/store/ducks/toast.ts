import { Action } from "redux"
import { toast } from "react-toastify";

interface ToastState { 
    time?: number,
    message: string
}

const INFO = 'toast/info'
const SUCCESS = 'toast/success'
const WARNING = 'toast/warning'
const ERROR = 'toast/error'

type InfoAction = Action<typeof INFO>
type SuccessAction = Action<typeof SUCCESS>
type WarningAction = Action<typeof WARNING>
type ErrorAction = Action<typeof ERROR>

export const info = (): InfoAction => ({
    type: INFO
})

export const success = (): SuccessAction => ({
    type: SUCCESS
})

export const warning = (): WarningAction => ({
    type:WARNING
})

export const error = (): ErrorAction => ({
    type: ERROR
})

const initialState: ToastState = {
    time : 5000,
    message: ""
}

const toastReducer = (
    state: ToastState = initialState,
    action: InfoAction | SuccessAction | WarningAction | ErrorAction
) => {
    switch(action.type){

        case INFO:
            toast.info("test")
            return{
                ...state
            }

        case SUCCESS:
            return{
                ...state
            }

        case WARNING:
            return{
                ...state
            }

        case ERROR:
            return{
                ...state
            }

        default:
            return state
    }
}

export default toastReducer