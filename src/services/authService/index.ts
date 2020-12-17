import api from '../apiService'
import { ILoginRequest, IRegisterRequest, Routes } from './types'
import { login, logout } from "../../store/modules/auth"
import { clear_errors } from "../../store/modules/ui"
import store from "../../store"
import { PrivateRoutes }  from "../../route/types"
import { _setErrors } from '../../util/serviceUtils'

export const authService = {
    loginUser,
    registerUser,
    logoutUser
}

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

        _setErrors(response.status, response.data.errors); 
    }    
}

async function registerUser(user: IRegisterRequest, history: any){
    
    try{

        const { data : result } = await api.post(Routes.Register, user)

        //Register Successful
        setToken(`Bearer ${result.data.accessToken}`)

        dispatchLogin(history)
       
    //Register Failed
    }catch(error){
        
        const { response } = error

        _setErrors(response.status, response.data.errors); 
    }

}

async function logoutUser(){
    localStorage.removeItem('token')
    api.defaults.headers.common['Authorization'] = null
    store.dispatch(logout())
}