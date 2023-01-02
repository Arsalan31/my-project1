import React, { useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Content from "./Components/Content";
import Customer from "./Components/Customers";
import Footer from "./Components/Footer1";
import Header1 from "./Components/Header1";
import Hero1 from "./Components/Hero1";


function Udix() {
    const [isRtl, setIsRtl] = useState(false)
    return (
        <React.Fragment>
            <div dir={isRtl ? "rtl" : "ltr"} className="bg-white">
                <Header1/>
                <Hero1 isRtl={isRtl} setIsRtl={setIsRtl} />
                <Content  isRtl={isRtl}/>
                <Customer isRtl={isRtl}/>
                <Footer />
            </div>
        </React.Fragment>
    )
}


export default Udix;