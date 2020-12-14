import { Grid, makeStyles, Typography, TextField, Button, Link } from "@material-ui/core";
import React from "react"
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';
import {LOGIN} from "../route/CONSTANTS"
import { useHistory } from "react-router-dom";

const SignupPage: React.FC = () => {


    const history = useHistory()

    const handleRedirectLogin = (e: any) => {
        e.preventDefault()
        history.push(LOGIN)
    }

    const useStyles = makeStyles((theme) => ({
        main:{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 0%',
            width: '100%',
            maxWidth: 1000,
            padding: 32,
            justifyContent: 'center'
        },
        content: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
        },
        title: {
            textAlign: 'center',
            fontWeight: 'bold'
        },
        registerForm: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: 480,
            padding: 25,
            marginTop: 15,
            borderRadius: 5,
            alignItems: 'center',
            border: '1px solid #dadce0',
            backgroundColor: '#fff'
        },
        item: {
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            width: '100%',
            maxWidth: 480,
            alignItems: 'center',
            padding: 25
        },
        registerButton:{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 15
        },
        titleBack:{
            marginTop:25,
            textAlign: 'start'       
        }
    }))

    const classes = useStyles()


    return (  
        <Grid className={classes.main}>
            <Grid className={classes.content}>
                <form className={classes.registerForm} noValidate>
                    <Grid container>

                        <Grid item lg={12}>
                            <Typography variant="h5" className={classes.title}>
                                Crie sua conta
                            </Typography>
                        </Grid>

                        <Grid item lg={12}>
                            <TextField
                                type="email"
                                //value={values.email}
                                name="email"
                                //onChange={handleChange}
                                margin="normal"
                                label="E-mail" 
                                variant="outlined"
                                autoComplete="email"
                                //helperText={getError('email')}
                                //error={hasError('email')}
                                autoFocus
                                fullWidth
                                required
                            />  
                        </Grid>

                        <Grid item lg={12}>
                            <TextField
                                //value={values.email}
                                name="password"
                                //onChange={handleChange}
                                margin="normal"
                                label="Sua senha" 
                                variant="outlined"
                                //helperText={getError('email')}
                                //error={hasError('email')}
                                fullWidth
                                required
                            />  
                        </Grid>

                        <Grid item lg={12}>
                            <TextField
                                //value={values.email}
                                name="password_confirmation"
                                //onChange={handleChange}
                                margin="normal"
                                label="Confirme sua senha" 
                                variant="outlined"
                                //helperText={getError('email')}
                                //error={hasError('email')}
                                fullWidth
                                required
                            />  
                        </Grid>

                        <Grid item lg={12} className={classes.registerButton}>
                            <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="medium"
                //                                disabled={ableToSubmit(errors)}
                                >
                                    Cadastrar
                            </Button>
                        </Grid>



                    </Grid>
                </form>
            
                <Grid className={classes.item}>

                     <EqualizerRoundedIcon style={{ fontSize: 75, marginBottom: 10}}/>

                    <Typography variant="h4"  style={{textAlign: 'center'}}>
                        Gerencie projetos com excelência
                    </Typography>

                    <Grid lg={12}>
                        <Typography className={classes.titleBack}>
                            <Link href={LOGIN} onClick={handleRedirectLogin}>
                                Voltar para Login
                            </Link>
                        </Typography>
                    </Grid>
            
                </Grid>
            </Grid>
        </Grid>
    );
}
 
export default SignupPage;