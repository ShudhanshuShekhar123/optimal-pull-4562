import { Authcontext } from "../context/Authcontext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
const Privateroute=(props)=>{
//  console.log(props.children,"privateroute")
    const {isAuth,setIsAuth,login,logout} = useContext(Authcontext)
 console.log(isAuth,"in privaterite")
    if(isAuth){
      return props.children
    }
    if(!isAuth){
       return <Navigate to="/login" />
    }


   
}
export default Privateroute