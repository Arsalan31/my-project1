import React from "react";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";



function App(){
  return(

    <React.Fragment>
      
      
      <Hero/>
      <Feature/>
      <Pricing/>
      <Contact/>
      <Footer/>

    </React.Fragment>
  );
}

export default App;

