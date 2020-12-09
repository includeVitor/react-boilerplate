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
import TouchAppIcon from '@material-ui/icons/TouchApp';

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
        }
    }));
    
    const classes = useStyles();
    
    return (  

        <div className={classes.main}>

            <div className={classes.content}>
                    
                <div  className={classes.item}>

                    <TouchAppIcon style={{ fontSize: 75, marginBottom: 10 }}/>

                    <Typography variant="h3" component="h3">
                        Entre na plataforma
                    </Typography>
            
                </div>

                <form className={classes.form}>
                    <Grid container>
                        <Grid item lg={12}>
                            <TextField
                                id="standard-full-width"
                                fullWidth
                                value={values.email}
                                name="email"
                                onChange={handleChange}
                                margin="normal"
                                label="E-mail" 
                                variant="outlined"
                            />  
                        </Grid>
                        <Grid item lg={12} >
                            <TextField
                                id="standard-full-width"
                                fullWidth
                                type="passsword"
                                value={values.password}
                                name="password"
                                onChange={handleChange}
                                label="Senha" 
                                variant="outlined"
                            />  
                        </Grid>

                         <Grid item lg={4} >
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
                
            </div>
        </div>
    )

}
 
export default LoginPage
