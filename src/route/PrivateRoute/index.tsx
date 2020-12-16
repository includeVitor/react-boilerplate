import React from "react"
import { connect } from "react-redux"
import { Redirect, Route } from "react-router-dom"

//Constants, Types
import { AppRouteProps } from "../../types"
import { LOGIN } from '../CONSTANTS'

//Layout
import Layout from "../../pages/_layouts/app"
 
const PrivateRoute: React.FC<AppRouteProps> = ({component: Component, authenticated, ...rest}) => {
    
    return (  
        <Route
            {...rest}
            render={ (props) => authenticated ? <Layout><Component {...props} /></Layout> : <Redirect to={LOGIN} />}
        />
    )
}

const mapStateToProps = (state:any) => ({
    authenticated: state.auth.isAuthenticated
})
 
export default connect(mapStateToProps) (PrivateRoute)