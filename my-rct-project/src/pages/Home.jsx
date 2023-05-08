// CiSearch
import "../styles/Home.css"
import Footer from "./Footer";
import { useEffect, useRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Home = () => {

    let ref1 = useRef(null);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        desktop: {
            breakpoint: { max: 1100, min: 800 },
            items: 4,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 800, min: 645 },
            items: 3,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 644, min: 451 },
            items: 2
        },
        mobile1: {
            breakpoint: { max: 450, min: 300 },
            items: 1
        }
    }


    let data = [
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=360x0",
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=360x0",
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=360x0",
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=360x0",
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/7b238cdbb60-womencare.png?dim=360x0",
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/6b775dd8478-covid.png?dim=360x0",
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1c60c444bf-Fever.png?dim=256x0",
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/bca113a1b80-Bone.png?dim=256x0",
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/520acd31898-heart.png?dim=256x0",
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=256x0"
    ]

    useEffect(() => {

        let placeholders = [
            "Search Medicines . . . .",
            "Search Health Care . . . . .",
            "Search Beauty products . . . .",
            "Search Ayuervedic medicines . . . . . . ."
        ];

        let i = 0;
        setInterval(() => {
            ref1.current = placeholders[i];
            i++;
            if (i === 4) {
                i = 0;
            }

        }, 1000);
    }, []);


    return (
        <div>
            <div className='search-container'>
                <div className="inner-search-cntainer-div">
                    <div>
                        <h2>What are you looking for?</h2>
                    </div>
                    <div className="search-input-homepage">
                        <CiSearch className="search-icon-home" />
                        <input className="inner_search_input_hpmepage" ref={ref1}
                            placeholder={ref1.current || "Search products here . . ."} type="text" />
                    </div>
                    <button className="inner_search_button_homepage" >Search</button>
                </div>
            </div>
            <div className="product_div_homepage">
                <div className="inner_product_div_homepage" >
                    <div className="inner_product_div_homepage_cards">
                        <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" alt="" />
                        <p>Medicine</p>
                        <p>FLAT 15% OFF</p>
                    </div>
                    <div className="inner_product_div_homepage_cards">
                        <img src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0" alt="" />
                        <p>Lab Tests</p>
                        <p>UPTO 70% OFF</p>
                    </div>
                    <div className="inner_product_div_homepage_cards">
                        <img src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0" alt="" />
                        <p>Healthcare</p>
                        <p>UPTO 80% OFF</p>
                    </div>
                    <div className="inner_product_div_homepage_cards">
                        <img src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0" alt="" />
                        <p>Health Blogs</p>

                    </div>
                    <div className="inner_product_div_homepage_cards">
                        <img src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0" alt="" />
                        <p>Plus</p>
                        <p>SAVE 5% EXTRA</p>
                    </div>
                    <div className="inner_product_div_homepage_cards">
                        <img src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0" alt="" />
                        <p>Offers</p>

                    </div>

                </div>
            </div>
            <hr />
            <div>
                <div style={{ width: "97%", margin: "auto" }}>
                    <img width="100%" src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1682870704_Web_Home_Bannersvbvv.jpg" alt="" />
                </div>
            </div>
            <div className="heading_for_carousel">
                <div style={{ width: "91%", margin: "auto", textAlign: "left", padding: "17px 0px" }}>
                    <h1>Lab Tests By Health Concern.</h1>
                </div>
            </div>
            <div className="carousel_div">
                <div className="inner_carousel_div" style={{ width: "95%", margin: "auto" }}>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        showDots={true}
                    >
                        {
                            data.map((item) => {
                                return (
                                    <div key={Math.random()}>
                                        <img width="186px" height="180px" src={item} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
            <div>
                <div className="medical_problems_div">
                    <div className="medical_problems_image" >
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1" alt="" />
                        <p>Lung Care</p>
                    </div>
                    <div className="medical_problems_image">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1" alt="" />
                        <p>Weight Care</p>
                    </div>
                    <div className="medical_problems_image">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1" alt="" />
                        <p>Women's Care</p>
                    </div>
                    <div className="medical_problems_image">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1" alt="" />
                        <p>Bone And Joint Pain</p>
                    </div>
                    <div className="medical_problems_image">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg?v=1" alt="" />
                        <p>Cold And Fever</p>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ width: "50%", margin: "auto", padding: "70px 0px", fontSize: "18px", color: "black" }}>
                    <h1 style={{ color: "teal" }}> MediZone</h1><p> is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 7 million happy customers – PAN India.</p>
                </div>
            </div>
            <div>
                <div style={{ backgroundColor: "rgb(230, 246, 240)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", padding: "80px 0px" }}>
                    <div>
                        <h1>1000+</h1> Offline Stores
                    </div>
                    <div >
                        <h1>20000+</h1> Pincode Served
                    </div>
                    <div>
                        <h1>7M+</h1> Happy Customers
                    </div>
                </div>
            </div>
            <hr />
            <hr />
            {/* <div>
                <div className="outer_footer_section">
                    <div className="footer_section" >
                        <div className="inner_footer_section_spans">
                            <span style={{ fontWeight: "500" }}>COMPANY</span>
                            <span>About Medizone</span>
                            <span>Customers Speak</span>
                            <span>In the News</span>
                            <span>Career</span>
                            <span>Contact</span>
                        </div>
                        <div className="inner_footer_section_spans">
                            <span style={{ fontWeight: "500" }} >OUR POLICIES</span>
                            <span>Terms and Conditions</span>
                            <span>Privacy Policy</span>
                            <span>Fees and Payments Policy</span>
                            <span>Shipping and Delivery Policy</span>
                            <span>Return, Refund and Cancellation Policy</span>
                        </div>
                        <div className="inner_footer_section_spans">
                            <span style={{ fontWeight: "500" }}>SHOPPING</span>
                            <span>Browse by A-Z</span>
                            <span>Browse by Manufacturers</span>
                            <span>Health Articles</span>
                            <span>Offers / Coupons</span>
                            <span>FAQs</span>
                        </div>
                        <div className="inner_footer_section_spans">
                            <span style={{ fontWeight: "500" }}>SOCIAL</span>
                            <span>Patients Alike</span>
                            <span>Facebook</span>
                            <span>Twitter</span>
                            <span>LinkedIn</span>
                            <span>Youtube</span>
                        </div>
                        <div className="inner_footer_section_spans_last">
                            <span style={{ fontWeight: "500" }}>SUBSCRIBE TO OUR NEWSLETTER</span>
                            <span>Get a free subscription to our health and fitness tip and stay tuned to our latest offers</span>
                            <input style={{ width: "80%", padding: "14px 10px", margin: "auto", outline: "none", border: "0px" }} type="text" placeholder="Enter your email address" />
                        </div>
                    </div>
                    <div className="payment_partners">
                        <div className="inner_payment_partners">
                            <img src="https://www.netmeds.com/assets/global/images/footer-payment-icon/google-pay.svg" alt="" />
                            <img src="https://www.netmeds.com/assets/global/images/footer-payment-icon/phonepe.svg" alt="" />
                            <img src="https://www.netmeds.com/assets/global/images/footer-payment-icon/paytm.svg" alt="" />
                            <img src="https://www.netmeds.com/assets/global/images/footer-payment-icon/simpl.svg" alt="" />
                            <img src="https://www.netmeds.com/assets/global/images/footer-payment-icon/rupay.svg" alt="" />
                            <img src="https://www.netmeds.com/assets/global/images/footer-payment-icon/visa.svg" alt="" />
                            <img src="https://www.netmeds.com/assets/global/images/footer-payment-icon/mastercard.svg" alt="" />

                        </div>

                        <p style={{ padding: "20px 0px" }}>Copyright© 2023. All Rights Reserved.</p>
                    </div>
                </div>
            </div> */}
            <Footer />
        </div>
    )

}
export default Home