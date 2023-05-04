const Navbar = () => {
    return (
        <div className="navbar-outer-div" style={{border:"2px solid blue", display:"flex",justifyContent:"space-between"}}>
            <div style={{border:"2px solid blue", display:"flex",justifyContent:"space-around",width:"30%",paddingLeft:"10px"}}>
                <div>logo here</div>
                <div>selecttag here</div>
            </div>
            <div style={{border:"2px solid blue", display:"flex",justifyContent:"space-evenly",width:"40%"}}>
                <div style={{border:"2px solid blue", display:"flex",justifyContent:"space-around",width:"20%"}} className="login-signup">
                    <div>login</div>
                    <div>signup</div>
                </div>
                <div>
                    offers
                </div>
                <div style={{paddingRight:"10px"}}>
                    cart
                </div>
            </div>
        </div>
    )
}

export default Navbar