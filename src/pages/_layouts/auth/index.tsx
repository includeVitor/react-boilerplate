import React from "react"
import { Container } from '@material-ui/core'

//Components
import ComponentTheme from '../../../components/ComponentTheme'

const AuthLayout: React.FC = ({ children }) => {
    return ( 
        <>
            <ComponentTheme/>
            <Container component="main" maxWidth="xs">
                <>
                    { children }
                </>
            </Container>
        </>
    )
}
 
export default AuthLayout