import {RouteProps } from "react-router-dom";

export interface UserRequest{
    email:string,
    password:string
}

export interface User{
    id: string,
    name:string 
    email:string
}

export interface AppRouteProps extends RouteProps{
    component: any,
    authenticated: boolean,
    rest?: any
}