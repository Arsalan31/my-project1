import React, { useState } from "react";
import About from "./Components/About";
import Contact1 from "./Components/Contact1";
import Development from "./Components/Development";
import Footer3 from "./Components/Footer3";
import Header3 from "./Components/Header3";
import Hero3 from "./Components/Hero3";
import Solutions from "./Components/Solutions";
import OurProcess from "./Components/OurProcess";


function Riversroads() {
    const [isRtl, setIsRtl] = useState(false)
    return (
        <React.Fragment>
            <div dir={isRtl ? "rtl" : "ltr"}>
                <Header3 />
                <Hero3 isRtl={isRtl} setIsRtl={setIsRtl} />
                <Solutions />
                <OurProcess />
                <Development />
                <About />
                {/* <Contact1 /> */}
                <Footer3 />
            </div>
        </React.Fragment>
    )

}

export default Riversroads;