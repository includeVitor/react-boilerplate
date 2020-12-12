import React, { useState } from "react"
import { authService } from "../services"
import { UserRequest } from "../types"
import { useHistory } from "react-router-dom"

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TouchAppIcon from '@material-ui/icons/TouchApp';

const LoginPage: React.FC = (props : any) => { 
    
    const history =  useHistory()
    
    const [values, setValues] = useState({
        email: "",
        password: ""
    } as UserRequest)

    const [errors, setErrors] = useState({
        error: null
    })

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
        
        authService.loginUser(userData, history)    
    }

    const useStyles = makeStyles((theme) => ({
        main:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: '1 1 0%',
            width: '100%',
            maxWidth: 1000,
            padding: 32,
            justifyContent: 'center'
        },
        content : {
            width: '100%',
            display: 'flex',           
            justifyContent: 'space-between'
        },
        item: {
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            width: '100%',
            maxWidth: 480,
            alignItems: 'center'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            width: '100%',
            maxWidth: 480,
            alignItems: 'center',
            padding: 68,
            borderRadius: 5,
            border: '1px solid #dadce0',
            backgroundColor: '#fff'
        },
        button : {
            marginTop: 15,
            justifyContent: 'flex-end',
            display: 'flex'
        }
    }));
    
    const classes = useStyles();
    
    return (  

        <Grid className={classes.main}>

            <Grid className={classes.content}>
                    
                <Grid  className={classes.item}>

                    <TouchAppIcon style={{ fontSize: 75, marginBottom: 10 }}/>

                    <Typography variant="h3" component="h3">
                        Entre na plataforma
                    </Typography>
            
                </Grid>

                <form className={classes.form} noValidate> 
                    <Grid container>
                        
                        <Grid item lg={12}>
                            <TextField
                                required
                                id="standard-full-width"
                                fullWidth
                                value={values.email}
                                name="email"
                                onChange={handleChange}
                                margin="normal"
                                label="E-mail" 
                                variant="outlined"
                                autoComplete="email"
                                autoFocus
                            />  
                        </Grid>
                        
                        <Grid item lg={12}>
                            <TextField
                                required
                                id="standard-full-width"
                                fullWidth
                                type="password"
                                value={values.password}
                                name="password"
                                onChange={handleChange}
                                label="Senha" 
                                variant="outlined"
                            />  
                        </Grid>

                         <Grid item lg={12} className={classes.button}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={handleClick}
                                size="medium"
                            >
                                Entrar
                            </Button>
                        </Grid>

                    </Grid>

                </form>
                
            </Grid>
        </Grid>
    )

}
 
export default LoginPage
