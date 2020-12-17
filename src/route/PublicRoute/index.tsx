import React from "react"
import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"
import { RootState } from "../../store"

//Constants, Types
import { AppRouteProps } from "../../types"
import { PrivateRoutes }  from "../types"

//Layout
import Layout from "../../pages/_layouts/auth"

const PublicRoute: React.FC<AppRouteProps> = ({component: Component, ...rest}) => {

    const authenticated = useSelector( (state : RootState)  => (state.auth.isAuthenticated))

    return (  
        <Route
            {...rest}
            render={ (props) => authenticated ? <Redirect to={PrivateRoutes.App} /> : <Layout><Component {...props} /></Layout>  }
        />
    )
}

 
export default PublicRoute