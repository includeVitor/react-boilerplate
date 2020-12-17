import { IError, IErrors } from '../../store/modules/ui/types'
import store from "../../store"
import { set_errors } from "../../store/modules/ui"

const defaultErrorMessage : IError[] =  [{ description : "Não foi possível concluír a operação" }]

const _setErrors = (code : number, errors : any) => {

    const items: IError[] = []
    
    errors?.forEach((e: string) => { items.push({description: e}) });

    const listErros : IErrors = ({
        code :  code,
        errors : (items.length) ? items : defaultErrorMessage
    })

    store.dispatch(set_errors(listErros))
}

export {
    _setErrors
}