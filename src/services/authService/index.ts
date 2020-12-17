import api from '../apiService'
import { ILoginRequest, IRegisterRequest, Routes } from './types'
import { login, logout } from "../../store/modules/auth"
import { clear_errors, set_errors } from "../../store/modules/ui"
import { error as ToastError } from "../../store/modules/notify"
import store from "../../store"
import { PrivateRoutes }  from "../../route/types"
import { IError, IErrors } from '../../store/modules/ui/types'
import { Toast } from '../../store/modules/notify/types'

export const authService = {
    loginUser,
    registerUser,
    logoutUser
}


const setToken = (token : string) => {
    localStorage.setItem('token', token)
    api.defaults.headers.common['Authorization'] = token
}

async function loginUser(user : ILoginRequest, history : any){

    try{

        const { data : result } = await api.post(Routes.Login, user)

        if(result.success){

            setToken(`Bearer ${result.data.accessToken}`)
            
            store.dispatch(login())

            store.dispatch(clear_errors())

            history.push(PrivateRoutes.App)
        }

    }catch(error){


        var toast : Toast = {
            message: "Não foi possível acessar o sistema, tente novamente mais tarde"
        }

        if(error.response){
            let data : any = error.response.data
            var items: IError[] = []
            
            data.errors.forEach((e: string) => {                
                items.push({description: e})
            });

            const errors : IErrors = ({
                code :  error.response.status,
                errors : items
            })

            store.dispatch(set_errors(errors))

            toast = {
                message: errors.errors.map((e)=> ` - ${e.description}` ).join()
            }

            store.dispatch(ToastError(toast))
            
        }     
    }    
}

async function registerUser(user: IRegisterRequest, history: any){
    
    try{

        let result = await api.post(Routes.Register, {email: user.email, password: user.password, confirmPassword: user.confirmPassword})

        if(result.data.success){

            //auth 
            const token = `Bearer ${result.data.data.accessToken}`
            localStorage.setItem('token', token)
            api.defaults.headers.common['Authorization'] = token

            //dispatch
            store.dispatch(login())
            store.dispatch(clear_errors())

            //route
            history.push( PrivateRoutes.App )

        }


    }catch(error){
        
        if(error.response !== undefined){
            
            let data : any = error.response.data
            var items: IError[] = []
            
            data.errors.forEach((e: string) => {                
                items.push({description: e})
            });

            const errors : IErrors = ({
                code :  error.response.status,
                errors : items
            })

            store.dispatch(set_errors(errors))

            const toast : Toast = {
                message: errors.errors.map((e)=> ` - ${e.description}` ).join()
            }

            store.dispatch(ToastError(toast))

        }else{
            const toast : Toast = {
                message: "Não foi possível acessar o sistema, tente novamente mais tarde"
            }

            store.dispatch(ToastError(toast))
        }
    }

}

async function logoutUser(){
    localStorage.removeItem('token')
    api.defaults.headers.common['Authorization'] = null
    store.dispatch(logout())
}