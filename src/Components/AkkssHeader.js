import React, { useEffect, useRef, useState } from "react";


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

    const ref = useRef()

    const [toggleCenters, setTogglecenters] = useState(false)

    const toggleCenter = () => {
        setTogglecenters(!toggleCenters)

    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleCenters && ref.current && !ref.current.contains(e.target)) {
                setTogglecenters(false)
            }
        }

        document.addEventListener("mouseout", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mouseout", checkIfClickedOutside)
        }
    }, [toggleCenters])


    const ref1 = useRef()

    const [toggleCountries, setTogglecountries] = useState(false)

    const toggleCountry = () => {
        setTogglecountries(!toggleCountries)

    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleCountries && ref.current && !ref.current.contains(e.target)) {
                setTogglecountries(false)
            }
        }

        document.addEventListener("mouseout", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mouseout", checkIfClickedOutside)
        }
    }, [toggleCountries])
    return (
        <section className="w-full z-50">
            <div className="flex">
                <div className="xl:w-5/12 lg:w-1/3 w-11/12">
                    <img className="xl:flex absolute hidden" src={require('./assets/Rectangle 80.png')}></img>
                    <div className="inline-flex p-3 justify-center xl:absolute xl:top-5">
                        <img src={require('./assets/AKH_Logo_Small 1.png')}></img>
                        <p className="xl:font-extrabold font-bold self-center xl:text-3xl text-xl">Aga Khan Health Services</p>
                    </div>
                </div>
                {(toggleMenu || screenWidth > 1024) && (
                    <div className="lg:w-3/4 lg:block hidden">
                        <div className="bg-gray-100 w-full h-auto">
                            <nav className="list-none relative start-24 gap-3 flex p-4">
                                <li>
                                    <a className="font-semibold text-sm text-black">Programs</a>
                                </li>
                                <li>
                                    <a className="border-s border-black"></a>
                                </li>
                                <li>
                                    <a className="font-semibold text-sm text-black">Education</a>
                                </li>
                                <li>
                                    <a className="border-s border-black"></a>
                                </li>
                                <li>
                                    <a className="font-semibold text-sm text-black">Research</a>
                                </li>
                                <li className="w-2/4 flex justify-end">
                                    <input className="txt px-2 w-3/4" type="text" />
                                </li>
                            </nav>
                        </div>
                        <nav className="relative start-24 list-none gap-4 flex">
                            <li>
                                <a href="#" className="font-semibold text-sm text-red-600">Home</a>
                            </li>
                            <li>
                                <a href="#" className="font-semibold text-sm text-black">About Us </a>
                            </li>
                            <li>
                                <a href="#" className="font-semibold text-sm text-black">Hospitals & Medical Centers</a>
                            </li>
                            <li ref={ref}>
                                <a href="#" onMouseEnter={toggleCenter} className="font-semibold text-sm text-black">Regional Outreach Centers</a>
                                {(toggleCenters) && (
                                    <nav className="list-none lg:absolute w-full lg:border-red-700 lg:border lg:w-1/6 bg-white list6 lg:flex flex-col hidden">
                                        <li className="hover:bg-red-300">
                                            <a href="#" className="text-black font-medium text-xs pb-3 hover:text-red-700 p-3 inline-flex">Pakistan</a>
                                        </li>
                                        <li onMouseEnter={toggleCountry} ref={ref1} className="hover:bg-red-300">
                                            <a href="#" className="text-black font-medium hover:text-red-700 p-3 text-xs pb-2 inline-flex">Tanzania</a>
                                            {(toggleCountries) && (
                                                <nav className="list-none lg:absolute lg:top-9 lg:left-full w-full lg:border-red-700 lg:border lg:w-full bg-white list6 lg:flex flex-col hidden">
                                                    <li>
                                                        <a href="#" className="text-black font-normal text-sm pb-2 p-3 inline-flex">Tanzania</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="text-black font-normal text-sm pb-2 p-3 inline-flex">Tanzania</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="text-black font-normal text-sm pb-2 p-3 inline-flex">Tanzania</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="text-black font-normal text-sm pb-2 p-3 inline-flex">Tanzania</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="text-black font-normal text-sm pb-2 p-3 inline-flex">Tanzania</a>
                                                    </li>
                                                </nav>
                                            )}
                                        </li>
                                        <li className="hover:bg-red-300">
                                            <a href="#" className="text-black font-medium hover:text-red-700 p-3 text-xs pb-3 inline-flex">India</a>
                                        </li>
                                        <li className="hover:bg-red-300">
                                            <a href="#" className="text-black font-medium hover:text-red-700 p-3 text-xs pb-3 inline-flex">Tajkistan</a>
                                        </li>
                                        <li className="hover:bg-red-300">
                                            <a href="#" className="text-black font-medium hover:text-red-700 p-3 text-xs pb-3 inline-flex">Syria</a>
                                        </li>
                                        <li className="hover:bg-red-300">
                                            <a href="#" className="text-black font-medium hover:text-red-700 p-3 text-xs pb-3 inline-flex">Kenya</a>
                                        </li>
                                    </nav>
                                )}
                            </li>
                            <li>
                                <a href="#" className="font-semibold text-sm text-black">Media Resources</a>
                            </li>
                            <li>
                                <a href="#" className="font-semibold text-sm text-black">Join Us!</a>
                            </li>
                        </nav>
                    </div>
                )}
                <button onClick={toggleNav} className="flex justify-end items-center p-2 ms-3 text-sm  md:hidden">
                    <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.667969 0H27.3346V2.66667H0.667969V0ZM7.33463 6.66667H27.3346V9.33333H7.33463V6.66667ZM15.668 13.3333H27.3346V16H15.668V13.3333Z" fill="red" />
                    </svg>
                </button>
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