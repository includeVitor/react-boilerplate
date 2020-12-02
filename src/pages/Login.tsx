import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { login } from "../store/ducks/auth"


const LoginPage: React.FC = () => {


    
    const a = (state: RootState) => state.auth.isAuthenticated

    const aa = useSelector(a)

    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(login())
        
    }


   
    return (  

        <div>
            <h2>Usuário autenticado</h2>
            This is the login LoginPage
            <input type="email"></input>
            <input type="password"></input>
            <button onClick={handleClick}>Entrar</button>
        </div>

    );

}
 
export default LoginPage;