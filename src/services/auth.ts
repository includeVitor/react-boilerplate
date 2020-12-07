import api from './api'
import { UserRequest } from '../types'
import { MAIN } from '../route/CONSTANTS'

export const authService = {
    login
}

async function login(user : UserRequest, history : any){

    try{
        let result = await api.post(`/login`,{email : user.email, password : user.password})
        if(result.data.success){

            //auth 
            const token = `Bearer ${result.data.data.accessToken}`
            localStorage.setItem('token', token)
            api.defaults.headers.common['Authorization'] = token
            
            //route
            history.push(MAIN)
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