import React, { useState } from "react"
import { useHistory } from "react-router-dom"

//Services, Types, Constants
import { authService } from "../../../services"
import { ILoginRequest, ILoginRequestError } from "../../../services/authService/types"
import { PublicRoutes } from "../../../route/types"

//SmartData Components
import SmartDataPaper from '../../../components/SmartDataPaper'

//StyledComponents
import { GridForgot, GridRegister, GridSubmit } from './styles'

//Material UI
import { Button, TextField, Grid, Typography, Link } from '@material-ui/core'
import {TouchApp as TouchAppIcon } from '@material-ui/icons'

//Utils
import { _handleRedirect, _defaultErrorMessages, _hasError, _getError, _handleChange } from "../../../util/pageUtils"


const LoginPage: React.FC = (props : any) => { 
    
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
            <SmartDataPaper>

                <TouchAppIcon style={{ fontSize: 75, marginBottom: 10 }}/>

                <Typography variant="h4">
                    Entre na plataforma
                </Typography>
        
            </SmartDataPaper>

            <SmartDataPaper padding={68} border={true} background={true} >

                <form  noValidate onSubmit={handleSubmit}> 

                    <Grid container>
                        
                        <Grid item lg={12}>
                            <TextField
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
                        </Grid>
                        
                        <Grid item lg={12}>
                            <TextField
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
                        </Grid>

                        <GridForgot item lg={12}>
                            <Typography>
                                <Link href={PublicRoutes.Forgot} onClick={(e : any) => _handleRedirect(e, PublicRoutes.Forgot, history)}>
                                    Esqueci minha senha
                                </Link>
                            </Typography>
                        </GridForgot>

                        <GridRegister item lg={6}>
                            <Typography>
                                <Link href={PublicRoutes.Signup} onClick={(e : any) => _handleRedirect(e,PublicRoutes.Signup, history)}>
                                    Registrar
                                </Link>
                            </Typography>
                        </GridRegister>

                        <GridSubmit item lg={6} >
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="medium"
                                disabled={ableToSubmit(errors)}
                            >
                                Entrar
                            </Button>
                        </GridSubmit>

                    </Grid>

                </form>
                
            </SmartDataPaper>
        </>       
    )

}
 
export default LoginPage
