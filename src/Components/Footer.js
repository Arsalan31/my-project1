import React from "react"
import './style.css';

function Footer() {
    return (
        <footer className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
            <div className="p-5">
                <h2 className="title-font font-medium text-white tracking-widest text-xl pb-4">Pages</h2>
                <nav className="list-none mb-10">
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">Home
                    </li>
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">Product
                    </li>
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">Pricing
                    </li>
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">About
                    </li>
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">Contact
                    </li>
                </nav>
            </div>
            <div className="p-5">
                <h2 className="title-font font-medium text-white tracking-widest text-xl pb-4">Tomothy</h2>
                <nav className="list-none mb-10">
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">Eleanor Edwards
                    </li>
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">Ted Robertson
                    </li>
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">Annette Russell
                    </li>
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">Jennie Mckinney
                    </li>
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">Gloria Richards
                    </li>
                </nav>
            </div>
            <div className="p-5">
                <h2 className="title-font font-medium text-white tracking-widest text-xl pb-4">Jane Black</h2>
                <nav className="list-none mb-10">
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">Philip Jones
                    </li>
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">Product
                    </li>
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">Colleen Russell
                    </li>
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">Marvin Hawkins
                    </li>
                    <li className="text-white font-normal text-lg pb-2 cursor-pointer">Bruce Simmmons
                    </li>
                </nav>

            </div>
            <div className="p-8">
                    
                    <p className="  text-white font-normal text-xl text-center pb-3"><svg width="32" className="inline-flex" height="39" viewBox="0 0 32 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8898 38.1136C15.2142 38.3452 15.6029 38.4697 16.0015 38.4697C16.4001 38.4697 16.7887 38.3452 17.1131 38.1136C17.6958 37.7015 31.3904 27.8134 31.3348 15.4701C31.3348 7.01564 24.4559 0.136719 16.0015 0.136719C7.54705 0.136719 0.668137 7.01564 0.668137 15.4605C0.612554 27.8134 14.3071 37.7015 14.8898 38.1136ZM16.0015 3.97005C22.3437 3.97005 27.5015 9.1278 27.5015 15.4796C27.5417 23.9858 19.0911 31.6237 16.0015 34.1288C12.9137 31.6218 4.46122 23.982 4.50147 15.4701C4.50147 9.1278 9.65922 3.97005 16.0015 3.97005Z" fill="white"/>
                    </svg>   7480 Mockingbird Hill undefined
                    </p>
                    <br/>
                    <p className=" text-white text-xl font-normal text-center sm:text-left pb-3"><svg width="21" className="inline-flex" height="33" viewBox="0 0 21 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3346 0.761719H4.66797C2.24714 0.761719 0.292969 2.71589 0.292969 5.13672V28.4701C0.292969 30.8909 2.24714 32.8451 4.66797 32.8451H16.3346C18.7555 32.8451 20.7096 30.8909 20.7096 28.4701V5.13672C20.7096 2.71589 18.7555 0.761719 16.3346 0.761719ZM13.418 29.9284H7.58464V28.4701H13.418V29.9284ZM18.1576 25.5534H2.84505V5.13672H18.1576V25.5534Z" fill="white"/>
                    </svg>     (239) 555-0108
                    </p>
                    <br />
                <div className="flex gap-6 pb-5">
                <a class="text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-white">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;