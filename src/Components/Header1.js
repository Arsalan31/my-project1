import React, { useEffect, useState } from "react";


function Header1() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <header className="w-full md:absolute relative">
            <nav className="flex justify-between md:bg-transparent bg-indigo-600">
                <div className="container nav md:my-0 my-10 px-10 flex flex-wrap justify-between content-center items-center xl:mx-64 lg:mx-32 mx-auto bg-transparent ">
                    <div className="logo1 bg-no-repeat flex-none order-0 flex-grow-0 block cursor-pointer" />
                    <button onClick={toggleNav} className="block items-center p-2 ms-3 text-sm font-semibold uppercase border-white border-2 px-6 py-3 text-white md:hidden">Menu
                    </button>
                    {(toggleMenu || screenWidth > 767) && (
                        <div className="list2 flex flex-col md:p-4 md:mt-10 mt-10 md:bg-transparent bg-white text-indigo-700 md:border-transparent border-t-2 border-white md:flex-row md:text-sm md:font-medium  w-full md:block md:w-auto">
                            <li>
                                <a href="Udix" className="cursor-pointer uppercase block py-2 pe-4 ps-3 md:text-white text-indigo-700 font-normal text-1xl leading-7 rounded md:bg-transparent focus-within: dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#Pricing" className="cursor-pointer uppercase block py-2 pe-4 ps-3 md:text-white text-indigo-700 font-normal text-1xl leading-7 rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
                            </li>
                            <li>
                                <a href="#Partners" className="cursor-pointer uppercase block py-2 pe-4 ps-3 md:text-white text-indigo-700 font-normal text-1xl leading-7 rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Product</a>
                            </li>
                            <li>
                                <a href="#Contact" className="cursor-pointer uppercase block py-2 pe-4 ps-3 font-normal text-1xl leading-7 md:text-white text-indigo-700 rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Contacts</a>
                            </li>
                        </div>
                    )}
                    {(toggleMenu || screenWidth > 767) && (
                        <div className="list3 text-center flex md:bg-transparent md:p-0 p-5 md:w-52 w-full bg-white">
                            <button className="2xl:text-indigo-700 text-indigo-700 text-sm font-bold uppercase md:text-white ms-3 py-2">sign in</button>
                            <button className="2xl:text-indigo-700 text-indigo-700 md:text-white ms-5 2xl:border-indigo-700 border-indigo-700 text-sm font-bold uppercase md:border-white border-2 px-5 py-2">sign up</button>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
export default Header1;