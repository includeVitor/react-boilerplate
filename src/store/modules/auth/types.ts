export interface IAuthState {
    isAuthenticated: boolean;
    token: string | null
    user: IUser| null
}

export interface IUser{
    id: string,
    name:string 
    email:string
}