import React from "react"
import { Grid, Typography, TextField, Button, Link } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

import {LOGIN} from "../route/CONSTANTS"
import { useHistory } from "react-router-dom"

const ForgetPage: React.FC = () => {
    
    const history = useHistory()

    const handleRedirectLogin = (e : any) => {
        e.preventDefault()
        history.push(LOGIN)
    }

    const useStyles = makeStyles((theme) => ({

        main:{
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: '1 1 0%',
            width: '100%',
            maxWidth: 450,
            padding:32,
            justifyContent: 'center'
        },
        title:{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 20
        },
        forgotButton: {
            marginTop: 8
        },
        backLink:{
            marginTop: 12,
            textAlign: 'center'
        }

    }))
    
    const classes = useStyles()

    return (  

        <Grid className={classes.main}>

            <Grid container>    
                <Grid item lg={12}>
                    <Typography variant="h5" className={classes.title}>
                        Recuperar senha
                    </Typography>
                </Grid>

                <Grid item lg={12}>
                    <TextField
                        type="email"
                        //value={values.email}
                        name="email"
                        //onChange={handleChange}
                        margin="normal"
                        label="Digite seu e-mail" 
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
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="medium"
                        fullWidth
                        className={classes.forgotButton}
                    >
                        Recuperar
                    </Button>
                </Grid>

                <Grid item lg={12}>
                    <Typography  className={classes.backLink}>
                        <Link href={LOGIN} onClick={handleRedirectLogin}>
                            Voltar
                        </Link>
                    </Typography>
                </Grid>

            </Grid>

        </Grid>
    );
}
 
export default ForgetPage;