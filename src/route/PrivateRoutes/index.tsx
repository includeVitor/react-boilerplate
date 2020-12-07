import React from "react"
import PrivateRoute from "./PrivateRoute"
import Main from "../../pages/Main"
import {MAIN} from '../CONSTANTS'


const PrivateRoutes: React.FC = () => {
    return (  

        <PrivateRoute exact path={MAIN} component={Main} />

    )
}
 
export default PrivateRoutes