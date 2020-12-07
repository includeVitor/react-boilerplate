import api from './api'
import { UserRequest } from '../types'
import { login, logout } from "../store/ducks/auth"
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
            // toast message notification
            console.log(result.data)
        }

    }catch(error){
        //if something wrong happen
        console.log(error)
        //console.log(error.response.data)
    }

    
}