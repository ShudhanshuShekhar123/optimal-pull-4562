import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
// import Pagenotfound from "./Pagenotfound"
// import Signup from "./Signup"
import Medicine from "./Medicine"
import Healthcare from "./Healthcare"
import Cart from "./Cart"
import Privateroute from "./Privateroute"

const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
            {/* <Route path="*" element={<Pagenotfound />} />s */}
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/healthcare/cart" element={
            <Privateroute>
            <Cart />
         </Privateroute>
            } />
        </Routes>
    )
}

export default AllRoutes