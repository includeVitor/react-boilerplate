import React, { useState } from "react"
import { useHistory } from "react-router-dom";

//Services, Types, Constants
import { authService } from "../../../services"
import { ILoginRequestError, IRegisterRequest } from "../../../services/authService/types"
import {LOGIN} from "../../../route/CONSTANTS"

//SmartData Components
import SmartDataPaper from '../../../components/SmartDataPaper'

//Styled Components
import { Container, Content, EqualizerRoundedIcon, SignupTitle, GridRegister, TitleBack } from './styles'

//Material UI
import { Grid, Typography, TextField, Button, Link } from "@material-ui/core";


const SignupPage: React.FC = () => {


    const history = useHistory()

    const [errors, setErrors] = useState({} as ILoginRequestError)

    const [values, setValues] = useState({email: "", password: "", confirmPassword: ""} as IRegisterRequest)

    const handleSubmit = (e: any) => {
       e.preventDefault() 
        
      if(values.password !== values.confirmPassword){
        setErrors({...errors, confirmPassword: "Senhas não conferem"})  
        return
      }

       // client side validation
       const form = e.target
       const formData = new FormData(form)
       const errorMessages = Array.from(formData.keys()).reduce((acc: any, key: any) => {
           acc[key] = form.elements[key].validationMessage
           return acc
       },{})

       setErrors(errorMessages)

        const userRegisterData : IRegisterRequest ={
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword
        }

        //registration
        authService.registerUser(userRegisterData, history)
    }

    const handleChange = (e: any) => {
        const input = e.target
        setValues(values => ({
            ...values,
            [input.name]: input.value
        }));
        setErrors({ ...errors, [input.name]: input.validationMessage})
    }

    const handleRedirectLogin = (e: any) => {
        e.preventDefault()
        history.push(LOGIN)
    }

    function ableToSubmit (value : any) {

        if('email' in errors || 'password' in errors || 'confirmPassword')
            return !(errors.email === "" && errors.password === "" && errors.confirmPassword === "" && values.email !== "" && values.password !== "" && values.confirmPassword !== "")
        else
            return true
    }

    const hasError = (field: string) => !!errors[field]

    const getError = (field: string) => errors[field]  

    return (

            <Container>

                <Content>

                    <SmartDataPaper padding={25} background={true} border={true}>

                        <form noValidate onSubmit={handleSubmit}>
                        
                            <Grid container>
                                <Grid item lg={12}>
                                    <SignupTitle variant="h5">
                                        Crie sua conta
                                    </SignupTitle>
                                </Grid>

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
                                        margin="normal"
                                        label="Sua senha" 
                                        variant="outlined"
                                        helperText={getError('password')}
                                        error={hasError('password')}
                                        fullWidth
                                        required
                                    />  
                                </Grid>

                                <Grid item lg={12}>
                                    <TextField
                                        type="password"
                                        value={values.confirmPassword}
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        margin="normal"
                                        label="Confirme sua senha" 
                                        variant="outlined"
                                        helperText={getError('confirmPassword')}
                                        error={hasError('confirmPassword')}
                                        fullWidth
                                        required
                                    />  
                                </Grid>

                                <GridRegister item lg={12}>
                                    <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            size="medium"
                                            disabled={ableToSubmit(errors)}
                                        >
                                            Cadastrar
                                    </Button>
                                </GridRegister>
                            </Grid>

                        </form>

                    </SmartDataPaper>
                
                    <SmartDataPaper>

                        <EqualizerRoundedIcon/>

                        <Typography variant="h4"  style={{textAlign: 'center'}}>
                            Gerencie projetos com excelência
                        </Typography>

                        <Grid item lg={12}>
                            <TitleBack>
                                <Link href={LOGIN} onClick={handleRedirectLogin}>
                                    Voltar para Login
                                </Link>
                            </TitleBack>
                        </Grid>
                
                    </SmartDataPaper>

                </Content>

            </Container>
    );
}
 
export default SignupPage;