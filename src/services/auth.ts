import api from './api'
import {UserRequest} from '../types'

export const authService = {
    login
}

async function login(user : UserRequest, history : any){

    try{
        let result = await api.post(`/login`,{email : user.email, password : user.password})
        if(result.data.sucess){
            //implementing auth
            const token = `Bearer ${result.data.accessToken}`
            localStorage.setItem('token', `Bearer ${result.data.accessToken}`)
            api.defaults.headers.commom['Authorization'] = token

            //redirect
            
            console.log(result.data)
            history.push('/gewq')
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