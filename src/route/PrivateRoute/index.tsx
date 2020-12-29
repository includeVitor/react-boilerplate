import React from "react"
import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"
import { RootState } from "../../store"

//Constants, Types
import { PublicRoutes, AppRouteProps } from '../types'

//Layout
import Layout from "../../pages/_layouts/dashboard"
 
const PrivateRoute: React.FC<AppRouteProps> = ({component: Component, ...rest}) => {
    
    const authenticated = useSelector( (state : RootState)  => (state.auth.isAuthenticated))

    return (  
        <Route
            {...rest}
            render={ (props) => authenticated ? <Layout><Component {...props} /></Layout>: <Redirect to={PublicRoutes.Login} />}
        />
    )
}
 
export default PrivateRoute