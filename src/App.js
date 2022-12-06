import React, { useState } from "react";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import Partners from "./Components/Partners";
import Header from "./Components/Header";






function App() {
  const [isRtl, setIsRtl] = useState(false)
  const [showFeature, setShowFeature] = useState(true)
  const [showPartner, setShowPartner] = useState(true)
  return (
    <React.Fragment>
      <div dir={isRtl ? "rtl" : "ltr"} className="bg-white">
        <Header />
        <Hero isRtl={isRtl} setIsRtl={setIsRtl} showFeature ={showFeature} setShowFeature={setShowFeature} showPartner ={showPartner} setShowPartner={setShowPartner}  />
        {showFeature ? <Feature /> : null}
        {showPartner ? <Partners /> : null}
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;

