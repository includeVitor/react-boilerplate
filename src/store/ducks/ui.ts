import { Action } from "redux"

interface UiState{
    loading:boolean,
    errors: Array<string> | null
}

const SET_ERRORS = 'ui/set_errors'
const CLEAR_ERRORS = 'ui/clear_errors'
const LOADING_UI = 'ui/loading_ui'

type SetErrorsAction = Action<typeof SET_ERRORS>
type ClearErrorsAction = Action<typeof CLEAR_ERRORS>
type LoadingUIAction = Action<typeof LOADING_UI>

export const set_errors = () : SetErrorsAction => ({
    type: SET_ERRORS
})

export const clear_errors = () : ClearErrorsAction => ({
    type: CLEAR_ERRORS
})

export const loading_ui = () : LoadingUIAction => ({
    type: LOADING_UI
})


