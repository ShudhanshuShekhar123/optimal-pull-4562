import "../styles/Healthcard.css"
// import { Link } from "react-router-dom"
// import { useState } from "react"
import { useContext } from "react"
import { Datacontext } from "../context/Datacontext"
import { Authcontext } from "../context/Authcontext"
import { useNavigate } from "react-router-dom"

const Healthcard = ({ id, name, image_url, description, price }) => {
    // const [data, setdata] = useState([])
    const { data, setdata } = useContext(Datacontext)
    const { isAuth } = useContext(Authcontext)
    const navigate = useNavigate()


    const handle = () => {
        // console.log(data,"in acrt ontainer")
        // console.log(setdata,"in acrt ontainer")
        if (isAuth) {
            let flag = true
            for (let i = 0; i <= data.length - 1; i++) {
                if (data[i].id === id) {
                    flag = false;
                    break;
                }
            }
            if (flag === true) {
                setdata([...data, { id: id, name: name, image_url: image_url, description: description, price: price }])
                alert("product added to cart")
            }

            else {

                alert("product already in cart")
            }
        }
        else {
            alert("You need to login first")
            navigate("/login")
        }


    }





    return (
        <div className="health_card_container">
            <div>
                <img style={{ marginBottom: "8px", paddingTop: "40px" }} src={image_url} alt={name} />
                <p style={{ marginBottom: "4px", padding: "0px 5px", fontSize: "17px", fontWeight: "600" }}>{description}</p>
                <p style={{ fontSize: "18px", fontWeight: "600", marginBottom: "5px" }}>Rs.{price}</p>
            </div>
            <div>
                {/* <Link to={`/healthcare/cart`}> */}
                <button onClick={handle} className="health_card_button" >Add To Cart</button>
                {/* </Link> */}
            </div>
        </div>
    )

}
export default Healthcard