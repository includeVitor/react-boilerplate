import React from "react"
import { Switch, BrowserRouter as Router } from "react-router-dom"

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import { PrivateRoutes, PublicRoutes } from "./types"

import App from "../pages/Dashboard"
import Login from "../pages/auth/Login"
// import Signup from "../pages/auth/Signup"
// import Forgot from "../pages/auth/Forgot"


const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                
                {/* Private Routes */}
                <PrivateRoute exact path={PrivateRoutes.App} component={App} />


                {/* Public Routes */}
                <PublicRoute exact path={PublicRoutes.Login} component={Login} />
                {/* <PublicRoute exact path={PublicRoutes.Signup} component={Signup} />
                <PublicRoute exact path={PublicRoutes.Forgot} component={Forgot} /> */}

            </Switch>
        </Router>
    );
}
 
export default Routes
