import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useState } from 'react';
// import { useContext } from "react"
// import { Datacontext } from "../context/Datacontext"


const Cartcard = ({addprice, id, name,image_url, price,handledelete}) => {
    // console.log(props, "in cartcard")
    // const { data } = useContext(Datacontext)
    // console.log(handledelete,"incard.acrt.jsx")
    const [total, settotal] = useState(price)
    const [quantity, setquantity] = useState(1)


    const handleincrease = (e) => {
        const { value,id } = e.target
        setquantity(quantity + 1)
        settotal((quantity+1) *(value))
        addprice(+value)
    }

    const handledecrease = (e) => {
      
        const { value,id } = e.target
        setquantity(quantity - 1)
        settotal((quantity-1) *(value))
        addprice(-value)


    }


    const handledelete1=(e)=>{
        console.log(e.target)
        console.log(e.target.id,"in target")
        // let id = Number(e.target.id)

        // console.log(typeof id ,"in cartcard.jsx")

        handledelete(id)
         

       
    }

    return (
     <>
        <div style={{  margin: "5px 0px", padding: "8px 0px 4px 0px", display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
            <div>
                <img  width="74px" height="65px" src={image_url} alt="" />
            </div>
            <p style={{fontWeight:"700", marginTop:"15px"}}>{name}</p>
            <div>
                <button onClick={handleincrease} id={id} value={price} style={{marginRight:"8px", padding: "4px 10px ", marginLeft: "8%",marginTop:"13px" }}>+</button>
                {quantity}
                <button disabled={quantity === 1} value={price}   onClick={handledecrease} id={id} style={{ marginLeft:"8px", padding: "4px 10px" }}>-</button>
            </div> 
            <div style={{marginTop:"13px"}}>
                <p style={{  marginLeft: "20%" }}> {total}</p>

            </div>
            <div> <RiDeleteBin5Fill onClick=  {handledelete1} id={id} style={{ marginTop:"14px" ,color: "red", marginLeft: "20%", fontSize: "26px" }} /></div>
            
        </div>
        <hr />
        </>


    )
}
{/* <RiDeleteBin5Fill style={{  color: "red", border: "2px solid orange", marginLeft: "20%", fontSize: "26px" }} /> */}

export default Cartcard