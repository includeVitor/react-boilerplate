import { IError, IErrors } from '../../store/modules/ui/types'
import store from "../../store"
import { set_errors } from "../../store/modules/ui"

const _setErrors = (code : any, errors : any) => {

    const items: IError[] = []
    
    errors.forEach((e: string) => { items.push({description: e}) });

    const listErros : IErrors = ({
        code :  code,
        errors : items
    })

    store.dispatch(set_errors(errors))
    
}

export {
    _setErrors
}