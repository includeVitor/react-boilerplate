import { PrivateRoutes, PublicRoutes } from "../../route/types"

const _handleRedirect = (e: any , route : PrivateRoutes | PublicRoutes, history : any) => {
    e.preventDefault()
    history.push(route)
}

const _defaultErrorMessages = (e : any) : any => {

    const form = e.target
    const formData = new FormData(form)
    const errorMessages = Array.from(formData.keys()).reduce((acc: any, key: any) => {
        acc[key] = form.elements[key].validationMessage
        return acc
    },{})

    return errorMessages
}

const _handleChange = (e : any, setValues : any, setErrors : any) => {
    const input = e.target
    setValues((values : any) => ({
        ...values,
        [input.name]: input.value
    }))
    setErrors((errors : any) => ({...errors, [input.name] : input.validationMessage }))
}

const _hasError = (field : string, errors : any ) => !!errors[field]

const _getError = (field : string, erros : any) => erros[field] 


export{
    _handleRedirect,
    _defaultErrorMessages,
    _hasError,
    _getError,
    _handleChange
}