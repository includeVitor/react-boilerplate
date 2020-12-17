import React, { useState } from "react"
import { useHistory } from "react-router-dom";

//Services, Types, Constants
import { authService } from "../../../services"
import { ILoginRequestError, IRegisterRequest } from "../../../services/authService/types"
import { PublicRoutes } from "../../../route/types"

//SmartData Components
import SmartDataPaper from '../../../components/SmartDataPaper'

//Styled Components
import { EqualizerRoundedIcon, SignupTitle, GridRegister, TitleBack } from './styles'

//Material UI
import { Grid, Typography, TextField, Button, Link } from "@material-ui/core";

//Utils
import { _handleRedirect, _defaultErrorMessages, _getError, _hasError, _handleChange } from "../../../util/pageUtils"

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

       setErrors(_defaultErrorMessages(e))

        const userRegisterData : IRegisterRequest ={
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword
        }

        //registration
        authService.registerUser(userRegisterData, history)
    }

    function ableToSubmit (value : any) {

        if('email' in errors || 'password' in errors || 'confirmPassword')
            return !(errors.email === "" && errors.password === "" && errors.confirmPassword === "" && values.email !== "" && values.password !== "" && values.confirmPassword !== "")
        else
            return true
    }

    return (

        <>
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
                                margin="normal"
                                label="Sua senha" 
                                variant="outlined"
                                helperText={_getError('password', errors)}
                                error={_hasError('password', errors)}
                                fullWidth
                                required
                            />  
                        </Grid>

                        <Grid item lg={12}>
                            <TextField
                                type="password"
                                value={values.confirmPassword}
                                name="confirmPassword"
                                onChange={(e : any) => _handleChange(e, setValues, setErrors)}
                                margin="normal"
                                label="Confirme sua senha" 
                                variant="outlined"
                                helperText={_getError('confirmPassword', errors)}
                                error={_hasError('confirmPassword', errors)}
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
                        <Link href={PublicRoutes.Login} onClick={(e : any) => _handleRedirect(e, PublicRoutes.Login, history)}>
                            Voltar para Login
                        </Link>
                    </TitleBack>
                </Grid>
        
            </SmartDataPaper>
        </>
    );
}
 
export default SignupPage;