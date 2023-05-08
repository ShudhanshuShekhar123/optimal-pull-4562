import { useState, useEffect } from "react"
import Healthcard from "../components/Healthcard"
import "../styles/Healthcare.css"
import Footer from "./Footer"

const Healthcare = () => {
    const [data, setdata] = useState([])
    const [page, setpage] = useState(1)
    const [category, setcategory] = useState("")
    const [order, setorder] = useState("")

    useEffect(() => {
        fetchAndUpdateData(page, order, category)
    }, [page, order, category])

    const fetchAndUpdateData = (page, order, category) => {

        let url;
        if (category && order) {
            url = `?_page=${page}&_limit=10&category=${category}&_order=${order}&_sort=price`
        }
        else if (category) {
            url = `?_page=${page}&_limit=10&category=${category}`
        }
        else {
            url = `?_page=${page}&_limit=10`
        }

        fetch(`http://localhost:8080/data${url}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setdata(data)
                console.log(data)
            })

    }


    const handlechangecategory = (e) => {
        setcategory(e.target.value)
    }

    const handlesort = (e) => {
        setorder(e.target.value)
    }
    return (
        <div>
            <div className="product_container_main_div" >
                <div className="inner_product_container_main_div">
                    <div className="sort_filter_div">
                        <div>
                            <select onChange={handlechangecategory}>
                                <option value="">Select Category</option>
                                <option value="Healthcare devices">Healthcare Supplements</option>
                                <option value="skin care">Skin Care</option>
                                <option value="fitness supplements">Fitness Supplements</option>
                                <option value="healthy food and drinks">Healthy Food and Drinks</option>
                                <option value="elderly care">Elderly Care</option>
                                <option value="ayurvedic care">Ayurvedic Care</option>
                            </select>
                        </div>
                        <div>
                            <select onChange={handlesort}>
                                <option value="">Sort By Price</option>
                                <option value="asc">Sort in asc</option>
                                <option value="desc">Sort in desc</option>
                            </select>
                        </div>
                    </div>
                    <div className="product_container_display">
                        {
                            data.map((item) => {
                                return <Healthcard key={item.id} {...item} />
                            })
                        }
                    </div>
                </div>
            </div>
            <div style={{ fontWeight: "600",marginTop: "50px" }}>
                <button className="pagination_button" disabled={page === 1} onClick={() => setpage(page - 1)}>PREV</button>
                {page}
                <button className="pagination_button" disabled={page === 3} onClick={() => setpage(page + 1)}>NEXT</button>
            </div>
            <Footer />
        </div>
    )
}

export default Healthcare