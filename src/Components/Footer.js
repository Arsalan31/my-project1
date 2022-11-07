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
            <div className="p-5">
                    <p className="  text-white font-normal text-xl text-center pb-6">7480 Mockingbird Hill undefined
                    </p>
                    
                    <p className=" text-white text-xl font-normal text-center sm:text-left pb-6">(239) 555-0108
                    </p>
                    <br />
                <div className="flex gap-6 pb-5">

                </div>
            </div>
        </footer>
    )
}

export default Footer;