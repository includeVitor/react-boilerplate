import React from "react"

const LoginPage: React.FC = () => {

    const handleClick = () => {
        alert("Clicked")
    }

    return (  

        <div>
            This is the login LoginPage
            <button onClick={handleClick}>Entrar</button>
        </div>
    );
}
 
export default LoginPage;