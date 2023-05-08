import "../styles/Navbar.css"

import MediZone from "../styles/MediZONE.png"
import { RiContactsFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";
import { FaLuggageCart } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { Authcontext } from "../context/Authcontext"
import {Datacontext} from "../context/Datacontext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
const Navbar = () => {
    const { isAuth, setIsAuth, login, logout,name ,setname} = useContext(Authcontext)
    const {setdata,data} = useContext(Datacontext)


    const navigate = useNavigate()

    const handlelogout=()=>{
        if(isAuth){
            logout()
            setdata([])
            setname(null)
            alert("logout successful")
            navigate("/")
        }else{
            alert("Please login first")
        }
   
    }

    const handlelogin=()=>{
        if(!isAuth){
            navigate("/login")
        }
        
        if(isAuth)
        {
            alert("You are already logged in")
            // navigate("/healthcare")
        }
    }

    return (
        <>
            <div className="outerdiv-navbar">
                <div className="container-navbar">
                    <div className="logo-selecttag">
                        <NavLink to="/" style={{ textDecoration: "none" }}>
                            <div className="img">
                                <img
                                    src={MediZone}
                                    alt="img"
                                />
                            </div>
                        </NavLink>

                        <div>
                            <select className="selecttag-navbar">
                                <option value="">Deliver to....</option>
                                <option value="bangalore">Bangalore</option>
                                <option value="delhi">Delhi</option>
                                <option value="punjab">Punjab</option>
                                <option value="andhrapradesh">Andhra Pradesh</option>
                            </select>
                        </div>
                    </div>
                    <div className="cart-signin">

                        <div className="signup-login">
                            <div className="inner-signup-login" style={{ display: "flex" }}>
                               
                                    <div onClick={handlelogin}  className="icon-div-navbar-login">
                                        {" "}

                                        <RiContactsFill style={{ marginRight: "7px" }} />
                                        Login

                                    </div>
                                
                                    <div onClick={handlelogout} className="icon-div-navbar logout-navbar">
                                        {" "}
                                        <IoMdContact
                                            style={{
                                                marginRight: "7px"
                                            }}
                                        />
                                        Logout
                                    </div>         
                            </div>
                            <div
                                style={{
                                    // border: "3px solid black",
                                    position: "absolute",
                                    top: "25px",
                                    // width: "180px",
                                    textAlign: "center"
                                }}
                            >
                                <p style={{fontWeight:"600"}}> {name !==null ? `Welcome,${name}` : null}</p>
                            </div>
                        </div>

                        <div className="icon-div-navbar offer-cart">
                            {" "}
                            <MdLocalOffer className="icon-tag" />
                            Offers
                        </div>
                        <NavLink to="/healthcare/cart" style={{ textDecoration: "none" }}>
                       
                            <div style={{position:"relative"}} className="icon-div-navbar">
                            <p style={{fontSize:"22px",fontWeight:"900",color:"black", position:"absolute",left:"110px",bottom:"8px"}}>
                                {data.length === 0 ? null : data.length}</p>
                                {" "}
                                <FaLuggageCart className="icon-tag" />
                                Cart
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <hr />
            <div className="category-div-navbar">
                <div className="inner-category-div-navbar">
                    <div>
                        <NavLink className="inner-category-div-navbar-navlink" to="/medicine">Medicine</NavLink>
                    </div>
                    <div>
                        <NavLink className="inner-category-div-navbar-navlink"  to="/healthcare">Health Care</NavLink>
                    </div>
                    <div>
                        <NavLink className="inner-category-div-navbar-navlink"  to="">Ayurvedic</NavLink>
                    </div>
                    <div>
                        <NavLink className="inner-category-div-navbar-navlink"  to="">Health Blogs</NavLink>
                    </div>
                    <div>
                        <NavLink className="inner-category-div-navbar-navlink"  to="">Eyewear</NavLink>
                    </div>
                    <div>
                        <NavLink className="inner-category-div-navbar-navlink"  to="">Homeopathy</NavLink>
                    </div>
                </div>
                <hr />
            </div>
        </>
    );
};

export default Navbar;
