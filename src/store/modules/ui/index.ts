import { Action } from "redux"
import { IErrors, IUiState } from "./types"

//Actions

const SET_ERRORS = 'ui/set_errors'
const CLEAR_ERRORS = 'ui/clear_errors'
const LOADING_UI = 'ui/loading_ui'


interface SetErrorsAction extends Action<typeof SET_ERRORS> {
    payload: IErrors
}
  
type ClearErrorsAction = Action<typeof CLEAR_ERRORS>
type LoadingUIAction = Action<typeof LOADING_UI>


export const set_errors = (errors : IErrors) : SetErrorsAction => ({
    type: SET_ERRORS,
    payload : errors
})

export const clear_errors = () : ClearErrorsAction => ({
    type: CLEAR_ERRORS
})

export const loading_ui = () : LoadingUIAction => ({
    type: LOADING_UI
})

const initialState : IUiState = {
    loading: true,
    errors: null
}

//Reduces

const uiReducer = (
    state: IUiState = initialState,
    action: SetErrorsAction | ClearErrorsAction | LoadingUIAction
) => {
    
    switch(action.type){

        case SET_ERRORS:
            return{
                ...state,
                errors: action.payload
            }
    
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: null
            }

        case LOADING_UI:
            return{
                ...state,
                loading:true
            }

        default :
            return state

    }
}

export default uiReducer

