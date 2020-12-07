import React from "react"
import { Switch, BrowserRouter as Router } from "react-router-dom"
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>

                <PrivateRoutes/>

                <PublicRoutes />              

            </Switch>
        </Router>
    );
}
 
export default Routes