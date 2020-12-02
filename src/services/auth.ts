import api from './api'
import {UserRequest} from '../types'

export const authService = {
    login
}

async function login(user : UserRequest){

    try{
        let result = await api.post(`/entrar`,{email : user.email, password : user.password})
        if(result.data.sucess){
            //implementing auth
            console.log(result.data)
        }else{
            // toast message notification
            console.log(result.data)
        }

    }catch(error){
        //if something wrong happen
        console.log(error.response.data)
    }
}