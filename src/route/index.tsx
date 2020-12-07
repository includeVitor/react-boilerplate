import React from "react"
import { Switch, BrowserRouter as Router } from "react-router-dom"
import PrivateRoutes from './PrivateRoutes'

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>

                {/* Public Routes */}
                

                {/* Private Routes Routes */}
                <PrivateRoutes/>

                
            </Switch>
        </Router>
    );
}
 
export default Routes;