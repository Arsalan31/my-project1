import React, { useState } from "react";
import Hero3 from "./Components/Hero3";
import Solutions from "./Components/Solutions";


function Slack() {
    const [isRtl, setIsRtl] = useState(false)
    return (
        <React.Fragment>
            <div dir={isRtl ? "rtl" : "ltr"}>
                <Solutions />
                <Hero3 isRtl={isRtl} setIsRtl={setIsRtl} />
            </div>
        </React.Fragment>
    )

}

export default Slack;