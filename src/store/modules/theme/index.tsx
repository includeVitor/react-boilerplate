import { Action } from "redux"
import { IThemeState, IThemeType } from "./types"
import store from '../../../store'

//Actions 

const DARK = 'theme/dark'
const LIGHT = 'theme/light'

type DarkAction = Action<typeof DARK>
type LightAction = Action<typeof LIGHT>

export const dark = (): DarkAction => ({
    type: DARK
})

export const light = (): LightAction => ({
    type: LIGHT
})

export const toggleTheme = (e : any) =>{
    e.preventDefault()

    if(store.getState().theme.type === IThemeType.light)
        store.dispatch(dark())
    else
        store.dispatch(light())
    
}

const initialState: IThemeState = {
    type: IThemeType.light
}

//Reduces

const themeReducer = (
    state: IThemeState = initialState,
    action: DarkAction | LightAction
) => {
    switch(action.type){

        case DARK:

            localStorage.setItem('theme', IThemeType.dark)
            return{
                ...state,
                type: IThemeType.dark
            }

        case LIGHT:

            localStorage.setItem('theme', IThemeType.light)
            return{
                ...state,
                type: IThemeType.light
            }

        default:
            return state
    }
}

export default themeReducer