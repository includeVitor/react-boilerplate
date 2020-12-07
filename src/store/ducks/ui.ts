import { Action } from "redux"
import { Error } from "../../types"

interface UiState{
    loading:boolean,
    // errors: Error | null
    errors: number | null
}

const SET_ERRORS = 'ui/set_errors'
const CLEAR_ERRORS = 'ui/clear_errors'
const LOADING_UI = 'ui/loading_ui'


interface SetErrorsAction extends Action<typeof SET_ERRORS> {
    payload: {
      //errors: Error[] | null
      errors: string | null
    }
}
  
//type SetErrorsAction = Action<typeof SET_ERRORS>
type ClearErrorsAction = Action<typeof CLEAR_ERRORS>
type LoadingUIAction = Action<typeof LOADING_UI>



export const set_errors = (value : string) : SetErrorsAction => ({
    type: SET_ERRORS,
    payload : {errors: value}
})

export const clear_errors = () : ClearErrorsAction => ({
    type: CLEAR_ERRORS
})

export const loading_ui = () : LoadingUIAction => ({
    type: LOADING_UI
})

const initialState : UiState = {
    loading: true,
    errors: null
}

const uiReducer = (
    state: UiState = initialState,
    action: SetErrorsAction | ClearErrorsAction | LoadingUIAction
) => {
    
    switch(action.type){

        case SET_ERRORS:
            //const { errors } = action.payload

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

