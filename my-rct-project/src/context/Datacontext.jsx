import { createContext } from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
export const Datacontext = createContext()

const Datacontextprovider = (props) => {
    // const navigate = useNavigate()
  const [data,setdata] = useState([])
    // const [isAuth, setIsAuth] = useState(false)
    console.log(data,"in datacontextprovider")
    // const login = () => {
    //     setIsAuth(true)
    //     // navigate("/healthcare/cart")

    // }
    

    // console.log("isauth value in contextapi")
   

    // const logout = () => {
    //     setIsAuth(false)
    // }

    return (
        <Datacontext.Provider value={{data,setdata}} >
            {props.children}
        </Datacontext.Provider>
    )
}

export default Datacontextprovider