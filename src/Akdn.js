import React, { useState } from "react";
import Agency from "./Components/Agency";
import Impact from "./Components/Impact";


function Akdn() {
    return (
        <React.Fragment>
            <div className="bg-blue-20">
                <Impact />
                <Agency/>
            </div>
        </React.Fragment>
    )
}

export default Akdn;