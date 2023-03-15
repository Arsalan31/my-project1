import React, { useState } from "react";
import Hero3 from "./Components/Hero3";
import Solutions from "./Components/Solutions";


function Slack() {
    const [isRtl, setIsRtl] = useState(false)
    return (
        <React.Fragment>
            <Hero3 />
            <Solutions />
        </React.Fragment>
    )

}

export default Slack;