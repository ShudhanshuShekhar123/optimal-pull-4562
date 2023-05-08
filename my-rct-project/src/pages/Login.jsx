
import { Authcontext } from "../context/Authcontext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()
    const { isAuth, setIsAuth, login, logout } = useContext(Authcontext)
//  console.log(login)
// console.log(isAuth,"in login")
    const hadleclick = () => {
       login()
    //    console.log("hello")
     alert("Login Successfull")
       navigate("/healthcare")
    }

    // console.log("jsjjsjsj")
    // if(isAuth){
    //     console.log("jhdewnd")
    //     navigate("/healthcare/cart")
    // }


    return (
        <>
            <h1>This is login page</h1>
            <button onClick={hadleclick}>click here</button>
        </>
    )
}
export default Login