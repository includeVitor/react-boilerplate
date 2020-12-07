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
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
    }));
    
    const classes = useStyles();
    
    return (  

        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}> */}
                {/* <LockOutlinedIcon /> */}
            {/* </Avatar> */}
            {/* <Typography component="h1" variant="h5">
            Sign in
            </Typography> */}
            <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            /> */}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Entrar
            </Button>
            </form>
        </div>
        {/* <Box mt={8}>
            <Copyright />
        </Box> */}
        </Container>
    )

}
 
export default LoginPage
