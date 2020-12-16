import React, { useState } from "react"
import { useHistory } from "react-router-dom"

//Services, Types, Constants
import { authService } from "../../../services"
import { ILoginRequestError } from "../../../services/authService/types"
import { PublicRoutes } from "../../../route/types"

//StyledComponents
import { TitleRecovery, ForgotButton, TitleBack, TitleMessage, SecurityIcon } from './styles'
import SmartDataPaper from "../../../components/SmartDataPaper"

//Material UI
import { Grid, TextField, Link } from "@material-ui/core"

//Utils
import { _handleRedirect } from "../../../util/formFunctions"

const ForgetPage: React.FC = () => {
    
    const history = useHistory()


    const [email, setEmail] = useState()
    const [errors, setErrors] = useState({} as ILoginRequestError)

    const handleRedirectLogin = (e : any) => {
        e.preventDefault()
        history.push(PublicRoutes.Login)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const errorMessages = Array.from(formData.keys()).reduce((acc: any, key: any) => {
            acc[key] = form.elements[key].validationMessage
            return acc
        },{})

        setErrors(errorMessages)

        //forgot action
        
    }

    const handleChange = (e: any) => {
        const input = e.target
        setEmail(input.value)
        setErrors({...errors, [input.name] : input.validationMessage})
    }

    const hasError = (field: string) => !!errors[field]

    const getError = (field: string) => errors[field]   

    return (  
        <>  
            <SmartDataPaper padding={68} border={true} background={true}>
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container>    
                        <Grid item lg={12}>
                            <TitleRecovery variant="h5">
                                Recuperar senha                          
                            </TitleRecovery>
                        </Grid>

                        <Grid item lg={12}>
                            <TextField
                                type="email"
                                value={email}
                                name="email"
                                onChange={handleChange}
                                margin="normal"
                                label="Digite seu e-mail" 
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
                            <ForgotButton
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="medium"
                                fullWidth
                            >
                                Recuperar
                            </ForgotButton>
                        </Grid>

                    </Grid>
                </form>
            </SmartDataPaper>

            <SmartDataPaper>

                <SecurityIcon/>

                <TitleMessage variant="h4" >
                    Volte a ter o controle de seus projetos
                </TitleMessage>

                <Grid item lg={12}>
                    <TitleBack>
                        <Link href={PublicRoutes.Login} onClick={(e : any) => _handleRedirect(e, PublicRoutes.Login, history)}>
                            Voltar
                        </Link>
                    </TitleBack>
                </Grid>
            </SmartDataPaper>
        </>
    )
}
 
export default ForgetPage