import React, { useState } from "react"
import { authService } from "../../services"
import { UserRequest, UserRequestError } from "../../types"
import { useHistory } from "react-router-dom"

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import {FORGOT, SIGNUP} from "../../route/CONSTANTS"

//SmartData Components
import SmartDataPaper from '../../components/SmartDataPaper'

//StyledComponents
import { Container, Content, GridForgot, GridRegister, GridSubmit } from './styles'
import { makeStyles } from '@material-ui/core/styles'

const LoginPage: React.FC = (props : any) => { 
    
    const history =  useHistory()
    
    const [values, setValues] = useState({
        email: "",
        password: ""
    } as UserRequest)
 
    const [errors, setErrors] = useState({} as UserRequestError)

    const hasError = (field: string) => !!errors[field]

    const getError = (field: string) => errors[field]   

    function ableToSubmit (value : any) {

        if('email' in errors || 'password' in errors )
            return !(errors.email === "" && errors.password === "" && values.email !== "" && values.password !== "")
        else
            return true
    }

    const handleChange = (e: any) => {
        const input = e.target
        setValues(values => ({
            ...values,
            [input.name]: input.value
        }));
        setErrors({ ...errors, [input.name]: input.validationMessage})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        // client side validation
        const form = e.target
        const formData = new FormData(form)
        const errorMessages = Array.from(formData.keys()).reduce((acc: any, key: any) => {
            acc[key] = form.elements[key].validationMessage
            return acc
        },{})

        setErrors(errorMessages)

        const userData : UserRequest ={
            email: values.email,
            password: values.password
        }
        
        //authentication
        authService.loginUser(userData, history)    
    }

    const handleRedirectForgot = (e :any) => {
        e.preventDefault()
        history.push(FORGOT)
    }

    const handleRedirectRegister = (e: any) => {
        e.preventDefault()
        history.push(SIGNUP)
    }
    
    return (        

            <Container>

                <Content>
                        
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
                                        <Link href={FORGOT} onClick={handleRedirectForgot}>
                                            Esqueci minha senha
                                        </Link>
                                    </Typography>
                                </GridForgot>

                                <GridRegister item lg={6}>
                                    <Typography>
                                        <Link href={SIGNUP} onClick={handleRedirectRegister}>
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
                    
                </Content>

            </Container>
    )

}
 
export default LoginPage
