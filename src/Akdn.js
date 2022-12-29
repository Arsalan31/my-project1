import React, { useState } from "react";
import Agency from "./Components/Agency";
import Impact from "./Components/Impact";
import Subscribe from "./Components/Subscribe";


function Akdn() {
    const [isRtl, setIsRtl] = useState(false)
    return (
        <React.Fragment>
            <div dir={isRtl ? "rtl" : "ltr"}>
                <Impact isRtl={isRtl} setIsRtl={setIsRtl} />
                <Agency/>
                <Subscribe/>
            </div>
        </React.Fragment>
    )
}

export default Akdn;