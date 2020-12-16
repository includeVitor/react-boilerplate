export interface ILoginRequest{
    email:string,
    password:string
}

export interface IRegisterRequest{
    email:string,
    password:string,
    confirmPassword: string
}

export type ILoginRequestError = {
    [index: string] :string
}