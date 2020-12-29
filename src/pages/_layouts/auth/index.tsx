import React from "react"
import { Container } from '@material-ui/core'

//SmartData Components
import SmartDataTheme from '../../../components/SmartDataTheme'

const AuthLayout: React.FC = ({ children }) => {
    return ( 
        <>
            <SmartDataTheme/>
            <Container component="main" maxWidth="xs">
                <>
                    { children }
                </>
            </Container>
        </>
    )
}
 
export default AuthLayout