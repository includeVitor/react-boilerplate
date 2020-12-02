import api from './api'

export const authService = {
    login
}

async function login(email: string, password: string){

    try{
        let result = await api.post(`/login`,{email :email, password : password})
        console.log(result)
    }catch(error){
        console.log(error)
    }
}