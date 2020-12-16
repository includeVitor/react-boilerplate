import {RouteProps } from "react-router-dom";

//Global types
export interface ILoginRequest{
    email:string,
    password:string
}

export interface IRegisterRequest{
    email:string,
    password:string,
    confirmPassword: string
}

export type UserRequestError = {
    [index: string] :string
}





export interface Error{
    description: string
}

export interface Errors{
    code: number,
    errors: Error[]
}

export interface AppRouteProps extends RouteProps{
    component: any,
    authenticated: boolean,
    rest?: any
}

export interface Forgot{
    email: string
}

