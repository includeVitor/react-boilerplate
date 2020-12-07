import React from "react"
import { connect } from "react-redux"
import { Redirect, Route } from "react-router-dom"
import {AppRouteProps} from "../../../types"
 
const PrivateRoute: React.FC<AppRouteProps> = ({component: Component, authenticated, ...rest}) => {
    return (  
        <Route
            {...rest}
            render={ (props) => authenticated ? <Redirect to="/" /> : <Component {...props} />}
        />
    )
}

const mapStateToProps = (state:any) => ({
    authenticated: state.auth.isAuthenticated
})
 
export default connect(mapStateToProps) (PrivateRoute)