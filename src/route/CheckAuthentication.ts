import jwtDecode from "jwt-decode"
import { useDispatch } from "react-redux"
import { login, logout } from "../store/ducks/auth"
import api from "../services/api"



export const CheckAuthentication = () => {

    const authToken = localStorage.token
    const dispatch = useDispatch()
    
    if(authToken){
        const decodedToken:any = jwtDecode(authToken)

        if(decodedToken.exp * 1000 < Date.now()){
            dispatch(logout())
        }else{
            dispatch(login())
            api.defaults.headers.common["Authorization"] = authToken
        }
    }

}