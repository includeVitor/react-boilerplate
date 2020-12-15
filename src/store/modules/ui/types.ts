export interface Error{
    description: string
}

export interface Errors{
    code: number,
    errors: Error[]
}