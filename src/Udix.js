import React, { useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Content from "./Components/Content";
import Customer from "./Components/Customers";
import Footer from "./Components/Footer1";
import Header1 from "./Components/Header1";


function Udix() {
    const [isRtl, setIsRtl] = useState(false)
    return (
        <React.Fragment>
            <div dir={isRtl ? "rtl" : "ltr"} className="md:bg-white bg-gray-200">
                <Header1 isRtl={isRtl} setIsRtl={setIsRtl} />
                <Content />
                <Customer />
                <Footer />
            </div>
        </React.Fragment>
    )
}


export default Udix;