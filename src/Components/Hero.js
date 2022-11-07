import React from "react"
import './style.css';

function Header() {
    return (
        <header>
            <div className='background'>
                <nav className=" container flex justify-between px-4 py-8 mx-auto bg-transparent">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <a>
                            <div className="logo mr-3 h-6 sm:h-9" />
                        </a>
                        <button data-collapse-toggle="navbar-default" type="button" className="bg-white inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex flex-col p-4 mt-4 bg-transparent rounded-lg border border-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Home</a>
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
                    </div>
                    <div className="hidden w-full 2xl:block md:w-auto" >
                    <div className="lg:w-2/5 inline-flex lg:justify-center ml-5 lg:ml-0">

                    </div>
                    </div>
                </nav>

                <h1 className="heading mt-40  text-center text-white">The best products
                    <br className="hidden sm:block" /> start with Figma
                </h1>
                <h1 className='sub-heading text-center mt-7 text-white'>Most calendars are designed for teams. Slate is designed
                    <br className="hidden sm:block" /> for freelancers
                </h1>
                <center>
                    <button className="text-center mt-24 text-white  border-0 py-3 px-4 w-56 focus:outline-none hover:bg-blue-600">Show/Hide Features</button>
                    <br />
                    <button className="text-center mt-2 text-white  border-0 py-3 px-4 w-56 focus:outline-none hover:bg-blue-600">Show/Hide Partners</button>
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