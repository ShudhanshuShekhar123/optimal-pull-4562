// import { useParams } from "react-router-dom"
import { useContext } from "react"
import { Datacontext } from "../context/Datacontext"
import "../styles/Cart.css"
import Cartcard from "../components/Cartcard"
import { useState } from "react"

const Cart = () => {

    // const { id } = useParams()
    // console.log(id, "incart")
    let totalprice = 0
    const { data, setdata } = useContext(Datacontext)

    console.log("rendering")
    // const [data1,setdata1]= useState(data)
    //   console.log( typeof data[0].price,"intotalamoutrn")

    for (let i = 0; i <= data.length - 1; i++) {
        totalprice += data[i].price
        //    console.log(totalprice)
    }


    //  console.log(totalprice)
    // console.log(totalprice, "intotal price")
    const [totalamount, settotalamount] = useState(totalprice)
    console.log(totalamount, "totalamount")

    const handledelete = (id) => {
        // console.log(typeof (id), "incart.jsx")
        // console.log(id,"incart.jsx")

        let filter = data.filter((item) => {
            // console.log( typeof item.id , id ,"from para","incart.jsx")
            if (item.id === id) {
                // console.log( item.id === Number(id) ,"incart.jsx")
                console.log("hjbcbajghh")
                return false
            } else {
                return true
            }
        })

        // setdata1(filter)
        setdata(filter)
        totalprice = 0
        for (let i = 0; i <= filter.length - 1; i++) {
            totalprice += filter[i].price
        }
        settotalamount(totalprice)


        // console.log(filter)

        // console.log(filter,"filtered data")
    }

    const addprice = (val) => {
        settotalamount(totalamount + val)
    }




    return (
        <div style={{ position: "relative" }}>
            <div style={{ width: "70%", textAlign: "start", top: "20px", position: "absolute", left: "18%" }}>
                <h2>Shopping Cart</h2>
                <h3>You have <span style={{color:"red"}}>{data.length}</span> items in your cart</h3>
            </div>
            {
                data.length === 0 ? <div style={{ display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"25px", width: "70%", position: "absolute", top: "100px", left: "18%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "320px", }} ><h1>The cart is Empty</h1></div>
                    :

                    <div style={{ width: "70%", position: "absolute", top: "100px", left: "18%" }}>
                        <div style={{ padding: "10px 0px", display: "grid", gridTemplateColumns: "repeat(5,1fr" }}>
                            <p>Item</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Subtotal</p>
                            <p>Remove</p>
                        </div>
                        {/* <hr /> */}
                        <div>

                        </div>


                        <div style={{borderRadius:"25px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "320px", overflowY: "scroll" }} >
                            {
                                data.map((item) => {
                                    return (
                                        <Cartcard addprice={addprice} handledelete={handledelete} {...item} />
                                    )
                                })
                            }
                        </div>
                        <div style={{ width: "25%", marginTop: "14px" }}>
                            <h3 style={{borderRadius:"4px", textAlign: "start", backgroundColor: "#32aeb1", color: "white", padding: "5px 5px", marginBottom: "10px" }}>Total Amount: Rs {totalamount}</h3>
                            <p style={{ borderRadius:"12px",fontSize: "18px", backgroundColor: "black", width: "200px", textAlign: "center", color: "white", padding: "5px 0px", }}>Checkout</p>
                        </div>

                    </div>

            }

        </div>
    )


}
export default Cart