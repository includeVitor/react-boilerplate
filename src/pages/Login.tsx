import React, { useState } from "react"
import { useDispatch, useSelector, useStore } from "react-redux"
import { RootState } from "../store"
import { authService } from "../services"
import { UserRequest } from "../types"
import { useHistory } from "react-router-dom"
 

const LoginPage: React.FC = (props : any) => {

    const history =  useHistory()

    const [values, setValues] = useState({
        email: "",
        password: ""
    } as UserRequest);

    const handleChange = (e: any) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
         }));
    }

    const handleClick = (e: any) => {
        e.preventDefault()

        // client side validation

        const userData : UserRequest ={
            email: values.email,
            password: values.password
        }
        
        
        authService.login(userData, history)
    }


    return (  

        <div>
            <h2>Usuário autenticado</h2>
            This is the login LoginPage
            <input type="email" name="email" value={values.email} onChange={handleChange}></input>
            <input type="password" name="password" value={values.password} onChange={handleChange}></input>
            <button onClick={handleClick}>Send</button>
        </div>

    )

}
 
export default LoginPage
