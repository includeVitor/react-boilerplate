import React, { useEffect, useState } from "react"
import { authService } from "../services"
import { UserRequest } from "../types"
import { useDispatch } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

const LoginPage: React.FC = (props : any) => { 
    
    const history =  useHistory()

    const dispatch = useDispatch();
    
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
        main: {
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent: 'center',
            alignContent: 'center',
        },
        paper: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%',
          marginTop: theme.spacing(8),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
    }));
    
    const classes = useStyles();
    
    return (  

        <Container  className={classes.main} >

            <Grid className={classes.paper} >
                <Typography variant="h5" component="h5">
                    Faça login na plataforma
                </Typography>
                
                <form className={classes.form} noValidate>  
                    <Grid container spacing={2} alignItems="flex-end">
                        <Grid item xs={1} >
                            <EmailIcon />
                        </Grid>
                        <Grid item xs={11} >
                            <TextField
                                id="standard-full-width"
                                placeholder="E-mail"
                                fullWidth
                                value={values.email}
                                name="email"
                                onChange={handleChange}
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />  
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} alignItems="flex-end">
                        <Grid item xs={1}>
                            <LockIcon />
                        </Grid>
                        <Grid item xs={11}>
                            <TextField
                                id="standard-full-width"
                                placeholder="Senha"
                                fullWidth
                                value={values.password}
                                name="password"
                                onChange={handleChange}
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />  
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleClick}
                    >
                        Entrar
                    </Button>
                </form>
                
            </Grid>
        </Container>
    )

}
 
export default LoginPage
