import React, { useEffect, useState } from "react";


function AkhssHeader() {
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
        <section className="w-full z-50 absolute">
            <div className="h-auto">
                <img src={require('./assets/Rectangle 80.png')}></img>
                <div className="inline-flex justify-center absolute bottom-10 px-10">
                    <img src={require('./assets/AKH_Logo_Small 1.png')}></img>
                    <p className="font-extrabold self-center text-3xl">Aga Khan Health Services</p>
                </div>
            </div>
            {/* <div className="flex w-full flex-wrap justify-between content-center items-center absolute bg-white">
                <img src={require('./assets/Rectangle 80.png')}></img>
                <div className="flex px-5 py-5">
                    <img src={require('./assets/AKH_Logo_Small 1.png')} className="cursor-pointer" />
                    <h5 className="text-3xl font-extrabold text-black">Aga Khan Health Services</h5>
                </div>
                <button onClick={toggleNav} className="block items-center focus:outline-none p-2 ms-3 text-sm font-semibold uppercase border-white border-2 px-6 py-3 text-white md:hidden">Menu
                </button>
                {(toggleMenu || screenWidth > 767) && (
                    <div className="list2 flex flex-col md:p-4  2xl:-ms-96 xl:-ms-40 lg:-ms-40 md:bg-transparent bg-white md:border-transparent border-t-2 border-white md:flex-row md:text-sm md:font-medium  w-full md:block md:w-auto">
                        <li>
                            <a href="Akdn" className="cursor-pointer uppercase block py-2 pe-4 ps-3 md:text-red-600 font-semibold text-sm rounded md:bg-transparent focus-within: dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="cursor-pointer uppercase block py-2 pe-4 ps-3 md:text-black font-semibold text-sm rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">About Us </a>
                        </li>
                        <li>
                            <a href="#" className="cursor-pointer uppercase block py-2 pe-4 ps-3 md:text-black font-semibold text-sm rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Hospitals & Medical Centers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="cursor-pointer uppercase block py-2 pe-4 ps-3 font-semibold text-sm md:text-black text-indigo-650 rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Regional Outreach Centers</a>
                        </li>
                        <li>
                            <a href="#" className="cursor-pointer uppercase block py-2 pe-4 ps-3 font-semibold text-sm md:text-black text-indigo-650 rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Media Resources</a>
                        </li>
                        <li>
                            <a href="#" className="cursor-pointer uppercase block py-2 pe-4 ps-3 font-semibold text-sm md:text-black text-indigo-650 rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Join Us!</a>
                        </li>
                    </div>
                )}
            </div> */}
        </section>
    )
}


export default AkhssHeader;