import React from "react"
import PropTypes from "prop-types"

const SimpleComponent = ({ onLogin, onLogout, isAuth }) => {
    const toggleLog = (isAuth) => {
        if (isAuth) {
            return onLogout()
        }
        return onLogin()
    }

    return (
        <button className={`btn btn${isAuth ? "-secondary" : "-primary"}`} onClick={() => toggleLog(isAuth)}>
            {isAuth ? "Выйти из системы" : "Войти"}
        </button>
    )
}

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    isAuth: PropTypes.string
}

export default SimpleComponent
