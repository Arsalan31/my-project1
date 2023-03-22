import React, { useState } from "react";
import Development from "./Components/Development";
import Footer3 from "./Components/Footer3";
import Header3 from "./Components/Header3";
import Hero3 from "./Components/Hero3";
import Solutions from "./Components/Solutions";


function riversroads() {
    const [isRtl, setIsRtl] = useState(false)
    return (
        <React.Fragment>
            <div dir={isRtl ? "rtl" : "ltr"}>
                <Header3 />
                <Hero3 isRtl={isRtl} setIsRtl={setIsRtl} />
                <Solutions />
                <Development />
                <Footer3 />
            </div>
        </React.Fragment>
    )

}

export default riversroads;