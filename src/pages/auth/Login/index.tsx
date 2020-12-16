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
import { _handleRedirect } from "../../../util/formFunctions"


const LoginPage: React.FC = (props : any) => { 
    
    const history =  useHistory()
    
    const [values, setValues] = useState({
        email: "",
        password: ""
    } as ILoginRequest)
 
    const [errors, setErrors] = useState({} as ILoginRequestError)

    const hasError = (field : string) => !!errors[field]

    const getError = (field : string) => errors[field]   

    function ableToSubmit (value : any) {

        if('email' in errors || 'password' in errors )
            return !(errors.email === "" && errors.password === "" && values.email !== "" && values.password !== "")
        else
            return true
    }

    const handleChange = (e : any) => {
        const input = e.target
        setValues(values => ({
            ...values,
            [input.name]: input.value
        }));
        setErrors({ ...errors, [input.name]: input.validationMessage})
    }

    const handleSubmit = (e : any) => {
        e.preventDefault()

        // client side validation
        const form = e.target
        const formData = new FormData(form)
        const errorMessages = Array.from(formData.keys()).reduce((acc: any, key: any) => {
            acc[key] = form.elements[key].validationMessage
            return acc
        },{})

        setErrors(errorMessages)

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
                                onChange={handleChange}
                                margin="normal"
                                label="E-mail" 
                                variant="outlined"
                                autoComplete="email"
                                helperText={getError('email')}
                                error={hasError('email')}
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
                                onChange={handleChange}
                                label="Senha" 
                                variant="outlined"
                                helperText={getError('password')}
                                error={hasError('password')}
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
