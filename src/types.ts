import {RouteProps } from "react-router-dom";

//Global types

export interface AppRouteProps extends RouteProps{
    component: any,
    rest?: any
}