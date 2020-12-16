import {RouteProps } from "react-router-dom";

//Global types

export interface AppRouteProps extends RouteProps{
    component: any,
    authenticated: boolean,
    rest?: any
}

export interface Forgot{
    email: string
}

