import React from "react";
import Content from "./Components/Content";
import Customer from "./Components/Customers";
import Header1 from "./Components/Header1";


function Udix() {
    return (
        <React.Fragment>
            <div dir="ltr" className="md:bg-white bg-gray-200">
                <Header1 />
                <Content />
                <Customer />
            </div>
        </React.Fragment>
    )
}


export default Udix;