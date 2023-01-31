import React, { useState } from "react";
import Agency from "./Components/Agency";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer2";
import Header2 from "./Components/Header2";
import Hero2 from "./Components/Hero2";
import Impact from "./Components/Impact";
import Info from "./Components/Info";
import Partners2 from "./Components/Partners2";
import Subscribe from "./Components/Subscribe";


function Akdn() {
    const [isRtl, setIsRtl] = useState(false)
    return (
        <React.Fragment>
            <div dir={isRtl ? "rtl" : "ltr"}>
                <Header2 />
                <Hero2 />
                <Impact isRtl={isRtl} setIsRtl={setIsRtl} />
                <Partners2 isRtl={isRtl} />
                <Agency />
                <Info/>
                <Featured isRtl={isRtl} />
                <Subscribe />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Akdn;