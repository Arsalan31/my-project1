import React, { useState } from "react";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import Partners from "./Components/Partners";
{/*import Header from "./Components/Header";*/ }





function App() {
  return (

    <React.Fragment>

      {/*<Header/>*/}
      <Hero />
      <Feature />
      <Partners />
      <Pricing />
      <Contact />
      <Footer />

    </React.Fragment>
  );
}

export default App;

