import React from "react"
import './style.css';

function Contact(){
    return(
<section className="text-gray-600 body-font relative">
  <div className="contact container px-5 py-24 m-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="con sm:text-3xl text-2xl font-medium title-font text-white">Contact Us</h1>
      <p className="sub-con lg:w-2/3 mx-auto mt-5 leading-relaxed text-base">Most calendars are designed for teams. 
      <br/>Slate is designed for freelancers</p>
    </div>
  
  <div className="contact-us container px-5 py-24 flex">     
    <div className="lg:w-2/2 md:w-2/2 bg-white flex flex-col  w-auto md:py-8 mt-8 md:mt-0">
      <h3 className="con-1 text-center mb-10">Contact Us</h3>
      <div className="relative mb-10">
        <label for="name" className="leading-7 text-sm text-gray-600"></label>
        <input type="text" id="name" name="name" placeholder="Your Name" className="w-96 h-14 bg-gray-100 rounded-3xl border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-10">
        <label for="email" className="leading-7 text-sm text-black"></label>
        <input type="email" id="email" name="email" placeholder="Your Email" className="w-96 h-14  bg-gray-100 rounded-3xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600"></label>
        <textarea id="message" name="message" placeholder="Your Message" className="w-96 bg-gray-100  border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 w-36 h-14 text-xl font-normal">Send</button>
    </div>
    </div>
   </div>   
</section>
    )
}

export default Contact;