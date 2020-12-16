import { PrivateRoutes, PublicRoutes } from "../../route/types"

const _handleRedirect = (e: any , route : PrivateRoutes | PublicRoutes, history : any) => {
    e.preventDefault()
    history.push(route)
}


export{
    _handleRedirect,
}