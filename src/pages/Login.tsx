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
import Paper from '@material-ui/core/Paper';

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
            maxWidth: 480
        }
    }));
    
    const classes = useStyles();
    
    return (  

        <div className={classes.main}>

            <div className={classes.content}>
                    
                <div  className={classes.item}>

                    <Typography variant="h4" component="h4">
                        Logo
                    </Typography>


                    <Typography variant="h3" component="h3">
                        Faça login na plataforma
                    </Typography>
            
                </div>
                <form className={classes.item}>  
                    <Grid container spacing={1} alignItems="flex-end">
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

                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={1}>
                            <LockIcon />
                        </Grid>
                        <Grid item xs={11}>
                            <TextField
                                id="standard-full-width"
                                placeholder="Senha"
                                fullWidth
                                type="passsword"
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
                        onClick={handleClick}
                    >
                        Entrar
                    </Button>
                </form>
                
            </div>
        </div>
    )

}
 
export default LoginPage
