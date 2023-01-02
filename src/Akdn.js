import React, { useState } from "react";
import Agency from "./Components/Agency";
import Hero2 from "./Components/Hero2";
import Impact from "./Components/Impact";
import Partners2 from "./Components/Partners2";
import Subscribe from "./Components/Subscribe";


function Akdn() {
    const [isRtl, setIsRtl] = useState(false)
    return (
        <React.Fragment>
            <div dir={isRtl ? "rtl" : "ltr"}>
                <Hero2/>
                <Impact isRtl={isRtl} setIsRtl={setIsRtl} />
                <Partners2 isRtl={isRtl}/>
                <Agency/>
                <Subscribe/>
            </div>
        </React.Fragment>
    )
}

export default Akdn;