import React, { lazy, Suspense } from "react"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import { LOGIN, MAIN } from './CONSTANTS'

const Login = lazy(() => import('../pages/Login'))

const Routes: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<h1>Carregando...</h1>}>
                <Switch>
                    <Route exact path={LOGIN} component={() => <Login />} />
                </Switch>
            </Suspense>
        </Router>
    );
}
 
export default Routes;