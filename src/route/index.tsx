import React from "react"
import { Switch, BrowserRouter as Router } from "react-router-dom"

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import { LOGIN, SIGNUP, FORGOT, MAIN } from "./CONSTANTS"

import Main from "../pages/app"
import Login from "../pages/auth/Login"
import Signup from "../pages/auth/Signup"
import Forgot from "../pages/auth/Forgot"


const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                
                {/* Private Routes */}
                <PrivateRoute exact path={MAIN} component={Main} />


                {/* Public Routes */}
                <PublicRoute exact path={LOGIN} component={Login} />
                <PublicRoute exact path={SIGNUP} component={Signup} />
                <PublicRoute exact path={FORGOT} component={Forgot} />

            </Switch>
        </Router>
    );
}
 
export default Routes
