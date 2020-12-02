import api from './api'
import {UserRequest} from '../types'

export const authService = {
    login
}

async function login(user : UserRequest){

    try{
        let result = await api.post(`/entrar`,{email : user.email, password : user.password})
        console.log(result)
    }catch(error){
        console.log(error)
    }
}