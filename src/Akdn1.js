import React, { useState } from "react";
import Agency from "./Components/Agency";
import AkhssHeader from "./Components/AkkssHeader";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer2";
import Header2 from "./Components/Header2";
import Hero2 from "./Components/Hero2";
import HeroSlider from "./Components/HeroSlider";
import Impact from "./Components/Impact";
import Info from "./Components/Info";
import Maininfo from "./Components/Maininfo";
import Partners2 from "./Components/Partners2";
import Subscribe from "./Components/Subscribe";


function Akdn1() {
    const [isRtl, setIsRtl] = useState(false)
    return (
        <React.Fragment>
            <div dir={isRtl ? "rtl" : "ltr"}>
                <AkhssHeader />
                {/* <Header2 /> */}
                <Hero2 />
                <HeroSlider isRtl={isRtl} />
                <Impact isRtl={isRtl} setIsRtl={setIsRtl} />
                <Maininfo />
                <Partners2 isRtl={isRtl} />
                <Agency />
                <Info />
                <Featured isRtl={isRtl} />
                <Subscribe isRtl={isRtl} />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Akdn1;