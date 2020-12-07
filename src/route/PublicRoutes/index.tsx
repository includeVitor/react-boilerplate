import React from "react"
import Login from "../../pages/Login"
import {LOGIN} from "../CONSTANTS"
import PublicRoute from "./PublicRoute"

const PublicRoutes: React.FC = () => {
    return ( 

        <PublicRoute exact path={LOGIN} component={Login} />
    )
}
 
export default PublicRoutes