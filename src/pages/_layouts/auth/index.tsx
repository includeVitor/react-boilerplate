import React from "react"
import { Container, Content } from "./styles"

const AuthLayout: React.FC = ({ children }) => {
    return ( 
        <Container>
            <Content>{ children }</Content>
        </Container>
    )
}
 
export default AuthLayout