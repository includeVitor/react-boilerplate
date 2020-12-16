import React from "react"
import { connect } from "react-redux"
import { Redirect, Route } from "react-router-dom"

//Constants, Types
import { AppRouteProps } from "../../types"
import {MAIN}  from "../CONSTANTS"

//Layout
import Layout from "../../pages/_layouts/auth"

const PublicRoute: React.FC<AppRouteProps> = ({component: Component, authenticated, ...rest}) => {

    return (  
        <Route
            {...rest}
            render={ (props) => authenticated ? <Redirect to={MAIN} /> : <Layout><Component {...props} /></Layout>  }
        />
    )
}

const mapStateToProps = (state:any) => ({
    authenticated : state.auth.isAuthenticated
})
 
export default connect(mapStateToProps) (PublicRoute)