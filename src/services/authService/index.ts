import api from '../apiService'
import { ILoginRequest, ISignupRequest, Routes } from './types'
import { login, logout } from "../../store/modules/auth"
import { clear_errors } from "../../store/modules/ui"
import store from "../../store"
import { PrivateRoutes }  from "../../route/types"
import { _setErrors } from '../../util/serviceUtils'
import { error as ToastError } from "../../store/modules/notify"
import { Toast } from "../../store/modules/notify/types"

export const authService = {
    loginUser,
    registerUser,
    logoutUser
}

const defaultErrorMessage : Toast =  { message : "Não foi possível comunicar com o servidor" }

const setToken = (token : string) => {
    localStorage.setItem('token', token)
    api.defaults.headers.common['Authorization'] = token
}

const dispatchLogin = (history : any) =>{

    store.dispatch(login())

    store.dispatch(clear_errors())

    history.push(PrivateRoutes.App)
}

async function loginUser(user : ILoginRequest, history : any){

    try{

        const { data : result } = await api.post(Routes.Login, user)

        //Login Successful
        setToken(`Bearer ${result.data.accessToken}`)
        
        dispatchLogin(history)
    
    //Login Failed
    }catch(error){
        
        const { response }  = error
        
        if(response)
            _setErrors(response.status, response.data.errors)
        //Network Error
        else
            store.dispatch(ToastError(defaultErrorMessage))
        

    }    
}

async function registerUser(user: ISignupRequest, history: any){
    
    try{

        const { data : result } = await api.post(Routes.Register, user)

        //Register Successful
        setToken(`Bearer ${result.data.accessToken}`)

        dispatchLogin(history)
       
    //Register Failed
    }catch(error){
        
        const { response } = error

        if(response)
            _setErrors(response.status, response.data.errors)
        //Network Error
        else
            store.dispatch(ToastError(defaultErrorMessage))
        
    }

}

async function logoutUser(){
    localStorage.removeItem('token')
    api.defaults.headers.common['Authorization'] = null
    store.dispatch(logout())
}