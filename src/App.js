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
  return (
    <React.Fragment>
      <div dir={isRtl ? "rtl" : "ltr"}>
        <Header />
        <Hero isRtl={isRtl} setIsRtl={setIsRtl} />
        <Feature />
        <Partners />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;

