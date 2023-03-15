import React, { useState } from "react";
import Hero3 from "./Components/Hero3";


function Slack() {
    const [isRtl, setIsRtl] = useState(false)
    return (
        <React.Fragment>
            <Hero3 />
        </React.Fragment>
    )

}

export default Slack;