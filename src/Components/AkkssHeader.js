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
            if (toggleCountries && ref1.current && !ref1.current.contains(e.target)) {
                setTogglecountries(false)
            }
        }

        document.addEventListener("mouseout", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mouseout", checkIfClickedOutside)
        }
    }, [toggleCountries])

    const ref2 = useRef()

    const [toggleMedia, setTogglemedia] = useState(false)

    const toggleMd = () => {
        setTogglemedia(!toggleMedia)

    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleMedia && ref2.current && !ref2.current.contains(e.target)) {
                setTogglemedia(false)
            }
        }

        document.addEventListener("mouseout", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mouseout", checkIfClickedOutside)
        }
    }, [toggleMedia])
    return (
        <section className="w-full z-50">
            <div className="flex">
                <div className="xl:w-5/12 lg:w-1/3 w-11/12">
                    <img className="lg:flex relative hidden" src={require('./assets/Rectangle 80.png')}></img>
                    <div className="inline-flex p-3 justify-center lg:absolute xl:top-5 lg:top-3">
                        <img className="xl:w-18 lg:w-12" src={require('./assets/AKH_Logo_Small 1.png')}></img>
                        <p className="xl:font-extrabold font-bold self-center xl:text-2.5xl text-xl">Aga Khan Health Services</p>
                    </div>
                </div>
                {(toggleMenu || screenWidth > 1024) && (
                    <div className="lg:w-2/3 lg:relative absolute w-full lg:bg-transparent bg-red-600 bg-opacity-80 flex lg:flex-wrap flex-wrap-reverse">
                        <div className="lg:bg-gray-100 lg:border-gray-200 lg:border xl:ps-10 w-full h-auto">
                            <nav className="list-none lg:flex-row flex-col gap-3 flex p-4">
                                <li>
                                    <a className="font-semibold text-sm lg:text-black text-white">Programs</a>
                                </li>
                                <li className="lg:flex hidden">
                                    <a className="border-s border-black"></a>
                                </li>
                                <li>
                                    <a className="font-semibold text-sm lg:text-black text-white">Education</a>
                                </li>
                                <li className="lg:flex hidden">
                                    <a className="border-s border-black"></a>
                                </li>
                                <li>
                                    <a className="font-semibold text-sm lg:text-black text-white">Research</a>
                                </li>
                                <li className="w-2/3 lg:flex hidden justify-end">
                                    <input className="txt px-2 w-3/4" type="text" />
                                </li>
                            </nav>
                        </div>
                        <nav className="list-none w-full lg:flex-row flex-col xl:ps-12 xl:h-16 xl:py-4 lg:px-0 px-4 gap-4 flex">
                            <button onClick={toggleNav} className="p-8 lg:hidden flex w-auto justify-end">
                                <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5.87109" y="0.786377" width="36" height="6" rx="3" transform="rotate(48.7268 5.87109 0.786377)" fill="#FFF9F9" />
                                    <rect x="0.640625" y="26.9001" width="36" height="6" rx="3" transform="rotate(-45 0.640625 26.9001)" fill="#FFF9F9" />
                                </svg>
                            </button>
                            <li>
                                <a href="#" className="font-semibold text-sm lg:text-red-600 text-white">Home</a>
                            </li>
                            <div className="pb-4 lg:hidden">
                                <li className="border-4 border-white rounded w-28"></li>
                            </div>
                            <li>
                                <a href="#" className="font-semibold text-sm lg:text-black  text-white">About Us </a>
                            </li>
                            <li>
                                <a href="#" className="font-semibold text-sm lg:text-black  text-white">Hospitals & Medical Centers</a>
                            </li>
                            <li ref={ref}>
                                <a href="#" onMouseEnter={toggleCenter} className="font-semibold text-sm text-white lg:contents hidden lg:text-black">Regional Outreach Centers</a>
                                <a href="#" onMouseEnter={toggleCenter} className="font-semibold text-sm lg:hidden text-white lg:text-black">Regional Outreach Centers</a>
                                {(toggleCenters) && (
                                    <nav className="list-none lg:absolute w-full lg:border-red-700 lg:border lg:w-1/6 lg:bg-white lg:flex flex-col">
                                        <li className="hover:bg-red-300">
                                            <a href="#" className="lg:text-black text-white font-medium text-xs pb-3 hover:text-red-700 lg:p-3 py-3 inline-flex">Pakistan</a>
                                        </li>
                                        <li onMouseEnter={toggleCountry} ref={ref1} className="lg:hover:bg-red-300">
                                            <a href="#" onClick={toggleCountry} className="lg:text-black text-white font-medium lg:hover:text-red-700 lg:p-3 py-3 text-xs pb-2 inline-flex">Tanzania</a>
                                            {(toggleCountries) && (
                                                <nav className="list-none lg:absolute lg:top-5 lg:left-full w-full lg:border-red-700 lg:border lg:w-full lg:bg-white lg:flex flex-col">
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tanzania</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tanzania</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tanzania</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tanzania</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tanzania</a>
                                                    </li>
                                                </nav>
                                            )}
                                        </li>
                                        <li className="hover:bg-red-300">
                                            <a href="#" className="lg:text-black text-white font-medium hover:text-red-700 lg:p-3 py-3 text-xs pb-3 inline-flex">India</a>
                                        </li>
                                        <li className="hover:bg-red-300">
                                            <a href="#" className="lg:text-black text-white font-medium hover:text-red-700 lg:p-3 py-3 text-xs pb-3 inline-flex">Tajkistan</a>
                                        </li>
                                        <li className="hover:bg-red-300">
                                            <a href="#" className="lg:text-black text-white font-medium hover:text-red-700 lg:p-3 py-3 text-xs pb-3 inline-flex">Syria</a>
                                        </li>
                                        <li className="hover:bg-red-300">
                                            <a href="#" className="lg:text-black text-white font-medium hover:text-red-700 lg:p-3 py-3 text-xs pb-3 inline-flex">Kenya</a>
                                        </li>
                                    </nav>
                                )}
                            </li>
                            <li>
                                <a href="#" onMouseEnter={toggleMd} ref={ref2} className="font-semibold lg:contents hidden text-sm lg:text-black text-white">Media Resources</a>
                                <a href="#" onclick={toggleMd} ref={ref2} className="font-semibold text-sm lg:hidden lg:text-black text-white">Media Resources</a>
                                {(toggleMedia) && (
                                    <nav className="lg:pt-0 pt-2 lg:px-2 list-none lg:absolute w-full lg:border-red-700 lg:border lg:w-1/6 lg:bg-white lg:flex flex-col">
                                        <li className="pb-3">
                                            <a className="uppercase lg:text-black text-green-100 font-bold text-xs leading-5">multimedia</a>
                                        </li>
                                        <div className="pb-4">
                                            <li className="border border-gray-3 lg:w-7/12 w-7"></li>
                                        </div>
                                        <li>
                                            <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 inline-flex">Photographs</a>
                                        </li>
                                        <li>
                                            <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 inline-flex">Videos</a>
                                        </li>
                                    </nav>
                                )}
                            </li>
                            <li>
                                <a href="#" className="font-semibold text-sm lg:text-black text-white">Join Us!</a>
                            </li>
                            <div className="py-4 lg:hidden">
                                <li className="border-2 rounded border-white w-full"></li>
                            </div>
                        </nav>
                    </div>
                )}
                <button onClick={toggleNav} className="flex justify-end items-center p-2 ms-3 text-sm  lg:hidden">
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