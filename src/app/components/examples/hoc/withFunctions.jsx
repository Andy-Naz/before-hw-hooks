import React from "react"
import CardWrapper from "../../common/Card"

const withFunctions = (Component) => (props) => {
    const onLogin = () => localStorage.setItem("auth", "token")
    const onLogout = () => localStorage.removeItem("auth")
    const isAuth = localStorage.getItem("auth")

    return (
        <CardWrapper>
            <Component {...props} isAuth={isAuth} onLogin={onLogin} onLogout={onLogout} />
        </CardWrapper>
    )
}

export default withFunctions
