export interface ILoginRequest{
    email:string,
    password:string
}

export interface ISignupRequest{
    email:string,
    password:string,
    confirmPassword: string
}

export interface IForgotRequest{
    email:string
}

export type ILoginRequestError = {
    [index: string] :string
}

export enum Routes{
    Login = "/entrar",
    Register = "nova-conta"
}