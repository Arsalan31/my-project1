import React, { useState } from "react";
import Agency from "./Components/Agency";
import Impact from "./Components/Impact";
import Subscribe from "./Components/Subscribe";


function Akdn() {
    return (
        <React.Fragment>
            <div>
                <Impact />
                <Agency/>
                <Subscribe/>
            </div>
        </React.Fragment>
    )
}

export default Akdn;