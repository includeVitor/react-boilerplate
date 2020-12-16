export interface IError{
    description: string
}

export interface IErrors{
    code: number,
    errors: IError[]
}