export interface IUiState{
    loading: boolean,
    errors: IErrors | null
}

export interface IError{
    description: string
}

export interface IErrors{
    code: number,
    errors: IError[]
}