import React, { useState } from "react"
import { useHistory } from "react-router-dom"

//Services, Types, Constants
import { authService } from "../../../services"
import { ILoginRequest, ILoginRequestError } from "../../../services/authService/types"


//StyledComponents
import { TextFieldSmart, ButtonSmart, FormSmart, AvatarSmart, TypographySmart } from './styles'

//Material UI
import {LockOutlined as LockOutlinedIcon } from '@material-ui/icons'

//Utils
import { _defaultErrorMessages, _hasError, _getError, _handleChange } from "../../../util/pageUtils"


const LoginPage: React.FC = () => { 
    
    const history =  useHistory()
    
    const [values, setValues] = useState({email: "", password: ""} as ILoginRequest)
 
    const [errors, setErrors] = useState({} as ILoginRequestError)

    function ableToSubmit (value : any) {

        if('email' in errors || 'password' in errors )
            return !(errors.email === "" && errors.password === "" && values.email !== "" && values.password !== "")
        else
            return true
    }

    const handleSubmit = (e : any) => {
        e.preventDefault()

        setErrors(_defaultErrorMessages(e))

        const userData : ILoginRequest ={
            email: values.email,
            password: values.password
        }
        
        //authentication
        authService.loginUser(userData, history)    
    }
        
    return (           
        <>           
            <FormSmart noValidate onSubmit={handleSubmit}> 

                <AvatarSmart>
                    <LockOutlinedIcon  />
                </AvatarSmart>

                <TypographySmart  variant="h5">
                    Smart Data
                </TypographySmart>

                <TextFieldSmart
                    type="email"
                    value={values.email}
                    name="email"
                    onChange={(e : any) => _handleChange(e, setValues, setErrors)}
                    margin="normal"
                    label="E-mail" 
                    variant="outlined"
                    autoComplete="email"
                    helperText={_getError('email', errors)}
                    error={_hasError('email', errors)}
                    autoFocus
                    fullWidth
                    required
                />  
                    

                <TextFieldSmart
                    type="password"
                    value={values.password}
                    name="password"
                    onChange={(e : any) => _handleChange(e, setValues, setErrors)}
                    label="Senha" 
                    variant="outlined"
                    helperText={_getError('password', errors)}
                    error={_hasError('password', errors)}
                    required
                    fullWidth
                />  

                <ButtonSmart
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="medium"
                    disabled={ableToSubmit(errors)}
                    fullWidth
                >
                    Entrar
                </ButtonSmart>

            </FormSmart>
        </>       
    )

}
 
export default LoginPage
