import React from "react"
import './style.css';

function Header() {
    return (
        <header>
            <div className='background'>
                <nav className=" container flex justify-between px-4 py-8 mx-auto bg-transparent">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">

                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex flex-col p-4 mt-4 bg-transparent rounded-lg border border-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                                </li>
                                <li>
                                    <a className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                                </li>
                                <li>
                                    <a className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                                </li>
                                <li>
                                    <a className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <center>
                            <div className="logo  h-6 sm:h-9" />
                        </center>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default" >
                            <div className="lg:w-2/5 inline-flex lg:justify-center ml-5 lg:ml-0">
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
                        <button data-collapse-toggle="navbar-default" className=" inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="true">
                            
                            <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.667969 0H27.3346V2.66667H0.667969V0ZM7.33463 6.66667H27.3346V9.33333H7.33463V6.66667ZM15.668 13.3333H27.3346V16H15.668V13.3333Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </nav>

                <h1 className="heading mt-40 sm:static text-center text-white">The best products
                    <br className="hidden sm:block" /> start with Figma
                </h1>
                <h1 className='sub-heading text-center mt-7 text-white'>Most calendars are designed for teams. Slate is designed
                    <br className="hidden sm:block" /> for freelancers
                </h1>
                <center>
                    <button className="button1 text-center  text-white sm:mt-24 border-0 py-3 px-4 w-56 focus:outline-none hover:bg-blue-600">Show/Hide Features</button>
                    <br />
                    <button className="button1 text-center mt-2 text-white  border-0 py-3 px-4 w-56 focus:outline-none hover:bg-blue-600">Show/Hide Partners</button>
                    <br />
                    
                    <label className="switch mt-3">
                        <input type="checkbox" />
                        <span className="slider" />
                    </label>
                    <label className="form-check-label inline-block ml-2 text-white" for="flexSwitchCheckChecked">Show Both</label>
                </center>
            </div>
        </header>

    )
}

export default Header;