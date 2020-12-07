import api from './api'
import { UserRequest, Error, Errors } from '../types'
import { login, logout } from "../store/ducks/auth"
import { set_errors } from "../store/ducks/ui"
import store from "../store"

export const authService = {
    loginUser
}


async function loginUser(user : UserRequest, history : any){

    try{
        let result = await api.post(`/login`,{email : user.email, password : user.password})
        if(result.data.success){

            //auth 
            const token = `Bearer ${result.data.data.accessToken}`
            localStorage.setItem('token', token)
            api.defaults.headers.common['Authorization'] = token
            
            //dispatch
            store.dispatch(login())

            //route
            history.push("/Main")
            
        }else{

        }

    }catch(error){

        if(error.response.data){
            
            let data : any = error.response.data
            var items: Error[] = []
            
            data.errors.forEach((e: string) => {                
                items.push({description: e})
            });

            const errors : Errors = ({
                code :  error.response.status,
                errors : items
            })

            store.dispatch(set_errors(errors))
        }

    }

    
}