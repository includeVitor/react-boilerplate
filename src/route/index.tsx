import React from "react"
import { Switch, BrowserRouter as Router } from "react-router-dom"

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import {LOGIN, MAIN} from "./CONSTANTS"

import Main from "../pages/Main"
import Login from "../pages/Login"


const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                
                {/* Private Routes */}
                <PrivateRoute exact path={MAIN} component={Main} />


                {/* Public Routes */}
                <PublicRoute exact path={LOGIN} component={Login} />

            </Switch>
        </Router>
    );
}
 
export default Routes
