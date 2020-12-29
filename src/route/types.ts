import {RouteProps } from "react-router-dom";

export interface AppRouteProps extends RouteProps{
    component: any,
    rest?: any
}

export enum PublicRoutes{
    
    Login = "/",
    // Signup = "/signup",
    // Forgot = "/forgot",

}

export enum PrivateRoutes{

    App = "/App",

}

