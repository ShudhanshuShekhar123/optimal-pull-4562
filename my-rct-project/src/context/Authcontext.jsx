import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Authcontext = createContext()

const Authcontextprovider = (props) => {
    // const navigate = useNavigate()

    const [isAuth, setIsAuth] = useState(false)

    const login = () => {
        setIsAuth(true)
        // navigate("/healthcare/cart")

    }

    console.log("isauth value in contextapi")
   

    const logout = () => {
        setIsAuth(false)
    }

    return (
        <Authcontext.Provider value={{ isAuth, login, logout }} >
            {props.children}
        </Authcontext.Provider>
    )
}

export default Authcontextprovider