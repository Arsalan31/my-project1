import React from "react"
import './style.css';

function Contact() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="contact container px-5 py-24 m-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 id="Contact" className="con sm:text-3xl text-2xl font-medium title-font text-white">Contact Us</h1>
          <p className="sub-con lg:w-2/3 mx-auto mt-5 leading-relaxed text-base">Most calendars are designed for teams.
            <br />Slate is designed for freelancers</p>
        </div>
        <div class="flex justify-center">
          <div className="contact-us container px-5 py-24 ">
            <div className=" bg-white flex flex-col  w-full md:py-8 mt-8 md:mt-0">
              <h3 className="con-1 text-center mb-10">Contact Us</h3>
              <div className="relative mb-10">
                <label for="name" className="leading-7 text-sm text-gray-600"></label>
                <input type="text" id="name" name="name" placeholder="Your Name" className="w-full h-14 bg-gray-100 rounded-3xl border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-10">
                <label for="email" className="leading-7 text-sm text-black"></label>
                <input type="email" id="email" name="email" placeholder="Your Email" className="w-full h-14  bg-gray-100 rounded-3xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label for="message" className="leading-7 text-sm text-gray-600"></label>
                <textarea id="message" name="message" placeholder="Your Message" className="w-full   bg-gray-100  border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="button1 text-white  border-0 py-3 px-4 w-44 sm:w-32 sm:h-14 focus:outline-none hover:bg-blue-600">Send</button>
            </div>
          </div>
          <div class="flex flex-wrap ml-16 mt-5 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 w-full flex flex-col text-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex" width="25" height="30" fill="#2091F9" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" /><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>

              <div class="flex-grow mt-6">
                <p class="sub-c">6386 Spring St undefined Anchorage, 
                  <br/>Georgia 12473 United States</p> 
              </div>
            </div>
            <div class="p-4 md:w-1/3 w-full flex flex-col text-center items-center">
              <svg width="20" className="inline-flex" height="30" viewBox="0 0 21 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3346 0.761719H4.66797C2.24714 0.761719 0.292969 2.71589 0.292969 5.13672V28.4701C0.292969 30.8909 2.24714 32.8451 4.66797 32.8451H16.3346C18.7555 32.8451 20.7096 30.8909 20.7096 28.4701V5.13672C20.7096 2.71589 18.7555 0.761719 16.3346 0.761719ZM13.418 29.9284H7.58464V28.4701H13.418V29.9284ZM18.1576 25.5534H2.84505V5.13672H18.1576V25.5534Z" fill="#2091F9" />
              </svg>
              <div class="flex-grow mt-6">
                <p class="sub-c">(843) 555-0130</p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 w-full flex flex-col text-center items-center">
              <svg width="26" height="30" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.8125 0.904785H1.4375C0.918945 0.904785 0.5 1.32373 0.5 1.84229V20.5923C0.5 21.1108 0.918945 21.5298 1.4375 21.5298H25.8125C26.3311 21.5298 26.75 21.1108 26.75 20.5923V1.84229C26.75 1.32373 26.3311 0.904785 25.8125 0.904785ZM24.6406 4.15088V19.4204H2.60938V4.15088L1.80078 3.521L2.95215 2.0415L4.20605 3.01709H23.0469L24.3008 2.0415L25.4521 3.521L24.6406 4.15088ZM23.0469 3.01416L13.625 10.3384L4.20312 3.01416L2.94922 2.03857L1.79785 3.51807L2.60645 4.14795L12.6143 11.9292C12.9021 12.1528 13.2561 12.2742 13.6206 12.2742C13.9851 12.2742 14.3391 12.1528 14.627 11.9292L24.6406 4.15088L25.4492 3.521L24.2979 2.0415L23.0469 3.01416Z" fill="#2091F9" />
              </svg>


              <div class="flex-grow mt-6">
                <p class="sub-c">willie.jennings@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Contact;