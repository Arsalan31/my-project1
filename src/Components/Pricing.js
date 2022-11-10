import React from "react"
import './style.css';

function Pricing(){
    return(
<section className="pricing text-white body-font overflow-hidden ">
  <div className="container px-auto py-28 mx-auto">
    <div className="price flex flex-col text-center w-full mb-20">
      <h1 id="Pricing" className="heading-1 text-3xl text-center font-medium title-font mb-2 text-white">Pricing</h1>
      <p className="sub-heading mx-auto leading-relaxed text-base text-white">Most calendars are designed for teams. 
        <br/> Slate is designed for freelancers</p>
    </div>
    <div className="flex flex-wrap justify-center ">
      <div className="price-box p-3 m-10 mt-20 xl:w-1/3 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden bg-white">
          <h2 className="text-black text-sm text-center tracking-widest title-font mb-1 font-medium">FREE</h2>
          <h2 className="text-black text-sm tracking-widest title-font mb-1 font-medium text-center">Organize across all 
          <br/> apps by hand</h2>
          <br/>
          <h1 className="text-5xl text-center text-gray-900 pb-4 mb-4 leading-none">$0</h1>
          <p className="text-center text-black mb-2">
            Pricing Feature
          </p>
          <p className="text-center text-black mb-2">
            Pricing Feature
          </p>
          <p className="text-center text-black mb-2">
            Pricing Feature
          </p>
          <p className="text-center text-black mb-2">
            Pricing Feature
          </p>
          <p className="text-center text-black mb-6">
            Pricing Feature
          </p>
          <button className="button1 text-center mt-auto text-white  border-0 py-2 px-4 w-64 h-14 focus:outline-none hover:bg-blue-600">Order Now
          </button> 
        </div>
      </div>
      <div className="price-box1 flex  m-10 p-3 xl:w-1/3 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
          <h2 className="text-white text-sm tracking-widest title-font mb-1 font-normal text-center">STANDARD</h2>
          <h2 className="text-white text-sm tracking-widest title-font mb-1 font-medium text-center">Organize across all 
          <br/> apps by hand</h2>
          <br/>
          <h1 className="text-5xl text-white leading-none text-center pb-4 mb-4">
            <span>$10</span>
            <span className="text-lg ml-1 font-normal text-white">/mo</span>
          </h1>
          <p className="text-center text-white mb-2">
            Pricing Feature
          </p>
          <p className="text-center text-white mb-2">
            Pricing Feature
          </p>
          <p className="text-center text-white mb-2">
            Pricing Feature
          </p>
          <p className="text-center text-white mb-2">
            Pricing Feature
          </p>
          <p className="text-center text-white mb-6">
            Pricing Feature
          </p>
          <button className=" text-center text-blue-400 mt-auto border-0 py-2 px-4 w-64 h-14 rounded-3xl focus:outline-none hover:bg-gray-300 bg-white">Order Now
            
          </button>
        </div>
      </div>
      <div className="price-box2 p-3 m-10 mt-20 xl:w-1/3 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden bg-white">
          <h2 className="text-black text-sm tracking-widest title-font mb-1 font-medium text-center">BUSINESS</h2>
          <h2 className="text-black text-sm tracking-widest title-font mb-1 font-medium text-center">Organize across all 
          <br/> apps by hand</h2>
          <h1 className="text-5xl text-black leading-none text-center pb-4 mb-4 ">
            <br/>
            <span>$99</span>
            <span className="text-lg ml-1 font-normal text-black">/mo</span>
          </h1>
          <p className="text-center text-black mb-2">
            Pricing Feature
          </p>
          <p className="text-center text-black mb-2">
            Pricing Feature
          </p>
          <p className="text-center text-black mb-2">
            Pricing Feature
          </p>
          <p className="text-center text-black mb-2">
            Pricing Feature
          </p>
          <p className="text-center text-black mb-6">
            Pricing Feature
          </p>
          <button className="button1 text-center mt-auto text-white  border-0 py-2 px-4 w-64 h-14 focus:outline-none hover:bg-blue-600">Order Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Pricing;