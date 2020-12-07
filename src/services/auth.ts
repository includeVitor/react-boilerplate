import api from './api'
import { UserRequest, Error } from '../types'
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
            // toast message notification

            // const newErrors = Array<Error>()
            // newErrors[0] = {
            //     code: 200,
            //     description: "deu ruim"
            // }

            //dispatch
            //store.dispatch({type: 'ui/set_errors', payload: { errors :newError} })
            //store.dispatch(set_errors())
            //console.log(result.data)
        }

    }catch(error){
        //if something wrong happen
        //store.dispatch({type: 'ui/set_errors', payload: { errors: "test"} })
        store.dispatch(set_errors("testzzz"))
        console.log(error)
        //console.log(error.response.data)
    }

    
}