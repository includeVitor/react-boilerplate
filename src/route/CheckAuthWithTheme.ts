import jwtDecode from "jwt-decode"
import { login, logout } from "../store/modules/auth"
import { light, dark } from '../store/modules/theme'
import api from "../services/apiService"
import store from "../store"
import { IThemeType } from '../store/modules/theme/types'


export const CheckAuthWithTheme = () => {

    const authToken = localStorage.token
    const currentTheme = localStorage.theme
    
    if(authToken){
        try{
            
            //preciso verificar se o token está correto e tratar caso não esteja
            const decodedToken:any = jwtDecode(authToken)

            if(decodedToken.exp * 1000 < Date.now()){
                store.dispatch(logout())
            }else{
                store.dispatch(login())
                api.defaults.headers.common["Authorization"] = authToken
            }

        }catch{
            localStorage.removeItem('token')
            store.dispatch(logout())
        }
    }

    if(currentTheme){
        try{

            if(currentTheme === IThemeType.light)
                store.dispatch(light())
            else
                store.dispatch(dark())

        }catch{
            store.dispatch(light())
        }
    }

}