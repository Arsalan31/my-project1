import React, { useState } from "react";
import Header3 from "./Components/Header3";
import Hero3 from "./Components/Hero3";
import Solutions from "./Components/Solutions";


function Slack() {
    const [isRtl, setIsRtl] = useState(false)
    return (
        <React.Fragment>
            <div dir={isRtl ? "rtl" : "ltr"}>
                <Header3 />
                <Hero3 isRtl={isRtl} setIsRtl={setIsRtl} />
                <Solutions />
            </div>
        </React.Fragment>
    )

}

export default Slack;