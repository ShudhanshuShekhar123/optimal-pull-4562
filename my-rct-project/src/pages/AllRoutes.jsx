import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Pagenotfound from "./Pagenotfound"
import Signup from "./Signup"
import Cart from "./Cart"
const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Pagenotfound />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default AllRoutes