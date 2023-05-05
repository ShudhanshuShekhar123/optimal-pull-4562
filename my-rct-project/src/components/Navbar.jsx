import "../styles/Navbar.css"

import MediZone from "../styles/MediZONE.png"
import { RiContactsFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";
import { FaLuggageCart } from "react-icons/fa";

import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="outerdiv-navbar">
            <div className="container-navbar">
                <div className="logo-selecttag">
                    <NavLink to="/" style={{textDecoration:"none"}}>
                        <div className="img">
                            <img
                                src={MediZone}
                                alt="img"
                            />
                        </div>
                        </NavLink>
                  
                    <div>
                        <select className="selecttag-navbar">
                            <option value="">Select Country</option>
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                            <option value="china">China</option>
                        </select>
                    </div>
                </div>
                <div className="cart-signin">
                    
                    <div className="signup-login">
                        <div className="inner-signup-login" style={{ display: "flex" }}>
                        <NavLink to="/login" style={{textDecoration:"none"}}>
                                <div  className="icon-div-navbar-login">
                                    {" "}

                                    <RiContactsFill style={{ marginRight: "7px" }} />
                                    Login

                                </div>
                                </NavLink>
                       
                           
                            <NavLink to="/signup" style={{textDecoration:"none"}}>
                            <div className="icon-div-navbar">
                                {" "}
                                <IoMdContact
                                    style={{
                                        marginRight: "7px"
                                    }}
                                />
                                Signup
                            </div>
                            </NavLink>
                            
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
                            <p> </p>
                        </div>
                    </div>

                    <div className="icon-div-navbar offer-cart">
                        {" "}
                        <MdLocalOffer className="icon-tag" />
                        Offers
                    </div>
                    <NavLink to="/cart" style={{textDecoration:"none"}}>
                    <div className="icon-div-navbar">
                        {" "}
                        <FaLuggageCart className="icon-tag" />
                        Cart
                    </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
