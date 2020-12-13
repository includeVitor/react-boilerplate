import { Grid, makeStyles, Typography, TextField, Button } from "@material-ui/core";
import React from "react"


const SignupPage: React.FC = () => {


    const useStyles = makeStyles((theme) => ({
        main:{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 0%',
            width: '100%',
            maxWidth: 1000,
            padding: 32,
            justifyContent: 'flex-start'
        },
        content: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
        },
        registerForm: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: 480,
            padding: 45,
            marginTop: 15
        },
        registerButton:{
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }))

    const classes = useStyles()


    return (  
        <Grid className={classes.main}>
            <Grid className={classes.content}>
                <form className={classes.registerForm} noValidate>
                    <Grid container>

                        <Grid item lg={12}>
                            <Typography>
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
                                name="name"
                                //onChange={handleChange}
                                margin="normal"
                                label="Name" 
                                variant="outlined"
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
                                autoFocus
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
                                autoFocus
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
            </Grid>
        </Grid>
    );
}
 
export default SignupPage;