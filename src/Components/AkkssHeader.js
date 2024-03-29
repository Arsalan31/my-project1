import { Dialog } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";


function AkhssHeader() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(true)
    }

    const handleClose = () => {
        setToggleMenu(false)
    };

    const ref = useRef()

    const [toggleCenters, setTogglecenters] = useState(false)

    const toggleCenter = () => {
        setTogglecenters(!toggleCenters)

    }

    // useEffect(() => {
    //     const checkIfClickedOutside = e => {
    //         // If the menu is open and the clicked target is not within the menu,
    //         // then close the menu
    //         if (toggleCenters && ref.current && !ref.current.contains(e.target)) {
    //             setTogglecenters(false)
    //         }
    //     }

    //     document.addEventListener("mouseout", checkIfClickedOutside)

    //     return () => {
    //         // Cleanup the event listener
    //         document.removeEventListener("mouseout", checkIfClickedOutside)
    //     }
    // }, [toggleCenters])


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

    const [toggleCountries1, setTogglecountries1] = useState(false)

    const toggleCountry1 = () => {
        setTogglecountries1(!toggleCountries1)

    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleCountries1 && ref2.current && !ref2.current.contains(e.target)) {
                setTogglecountries1(false)
            }
        }

        document.addEventListener("mouseout", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mouseout", checkIfClickedOutside)
        }
    }, [toggleCountries1])

    const ref3 = useRef()

    const [toggleCountries2, setTogglecountries2] = useState(false)

    const toggleCountry2 = () => {
        setTogglecountries2(!toggleCountries2)

    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleCountries2 && ref3.current && !ref3.current.contains(e.target)) {
                setTogglecountries2(false)
            }
        }

        document.addEventListener("mouseout", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mouseout", checkIfClickedOutside)
        }
    }, [toggleCountries2])

    const ref4 = useRef()

    const [toggleCountries3, setTogglecountries3] = useState(false)

    const toggleCountry3 = () => {
        setTogglecountries3(!toggleCountries3)

    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleCountries3 && ref4.current && !ref4.current.contains(e.target)) {
                setTogglecountries3(false)
            }
        }

        document.addEventListener("mouseout", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mouseout", checkIfClickedOutside)
        }
    }, [toggleCountries3])

    const ref5 = useRef()

    const [toggleCountries4, setTogglecountries4] = useState(false)

    const toggleCountry4 = () => {
        setTogglecountries4(!toggleCountries4)

    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleCountries4 && ref5.current && !ref5.current.contains(e.target)) {
                setTogglecountries4(false)
            }
        }

        document.addEventListener("mouseout", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mouseout", checkIfClickedOutside)
        }
    }, [toggleCountries4])

    const ref6 = useRef()

    const [toggleCountries5, setTogglecountries5] = useState(false)

    const toggleCountry5 = () => {
        setTogglecountries5(!toggleCountries5)

    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleCountries5 && ref6.current && !ref6.current.contains(e.target)) {
                setTogglecountries5(false)
            }
        }

        document.addEventListener("mouseout", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mouseout", checkIfClickedOutside)
        }
    }, [toggleCountries5])

    const ref7 = useRef()

    const [toggleMedia, setTogglemedia] = useState(false)

    const toggleMd = () => {
        setTogglemedia(!toggleMedia)

    }

    // useEffect(() => {
    //     const checkIfClickedOutside = e => {
    //         // If the menu is open and the clicked target is not within the menu,
    //         // then close the menu
    //         if (toggleMedia && ref7.current && !ref7.current.contains(e.target)) {
    //             setTogglemedia(false)
    //         }
    //     }

    //     document.addEventListener("mouseout", checkIfClickedOutside)

    //     return () => {
    //         // Cleanup the event listener
    //         document.removeEventListener("mouseout", checkIfClickedOutside)
    //     }
    // }, [toggleMedia])
    return (
        <section className="w-full fixed z-50">
            <div className="flex bg-white lg:border lg:p-0 p-4">
                <div className="relative lg:w-2/5 w-11/12">
                    <div className="lg:flex hidden bg-gray-100 h-18"></div>
                    <div className="filter lg:drop-shadow-3xl">
                        <div className="clip lg:absolute w-full -bottom-20 lg:h-40 h-full">
                            <div className="flex items-center relative lg:top-10">
                                <img className="akhs relative lg:w-18 lg:h-auto h-9" src={require('./assets/AKH_Logo_Small 1.png')}></img>
                                <p className="lg:font-extrabold font-bold self-center xl:text-2.5xl sm:text-xl text-lg">Aga Khan Health Services</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 lg:relative absolute w-full lg:bg-transparent bg-red-600 bg-opacity-80 lg:flex hidden lg:flex-wrap flex-wrap-reverse">
                    <div className="w-full h-auto">
                        <nav className="list-none lg:bg-gray-100 lg:border-t lg:border-b lg:border-end lg:border-gray-200 lg:items-center lg:flex-row flex-col gap-3 flex p-4">
                            <li>
                                <a className="font-semibold text-sm lg:text-black text-white">Programs</a>
                            </li>
                            <li className="lg:flex h-8 hidden">
                                <a className="border-s border-black"></a>
                            </li>
                            <li>
                                <a className="font-semibold text-sm lg:text-black text-white">Education</a>
                            </li>
                            <li className="lg:flex h-8 hidden">
                                <a className="border-s border-black"></a>
                            </li>
                            <li>
                                <a className="font-semibold text-sm lg:text-black text-white">Research</a>
                            </li>
                            <label className="w-full lg:flex hidden justify-end">
                                <svg className="absolute top-7 end-8" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.7584 13.3646L11.925 10.5834C12.8392 9.43682 13.3352 8.02095 13.3334 6.56335C13.3334 5.26524 12.9424 3.99628 12.2098 2.91695C11.4773 1.83761 10.4361 0.996372 9.21792 0.499608C7.99974 0.00284377 6.6593 -0.127132 5.36609 0.126116C4.07287 0.379364 2.88498 1.00446 1.95263 1.92236C1.02028 2.84026 0.385337 4.00974 0.128102 5.2829C-0.129134 6.55607 0.00288855 7.87573 0.507474 9.07503C1.01206 10.2743 1.86655 11.2994 2.96288 12.0206C4.05921 12.7418 5.34815 13.1267 6.66669 13.1267C8.14724 13.1285 9.58541 12.6402 10.75 11.7402L13.575 14.5296C13.6525 14.6065 13.7447 14.6675 13.8462 14.7092C13.9478 14.7508 14.0567 14.7723 14.1667 14.7723C14.2767 14.7723 14.3856 14.7508 14.4872 14.7092C14.5887 14.6675 14.6809 14.6065 14.7584 14.5296C14.8365 14.4533 14.8985 14.3626 14.9408 14.2626C14.9831 14.1626 15.0049 14.0554 15.0049 13.9471C15.0049 13.8388 14.9831 13.7316 14.9408 13.6316C14.8985 13.5316 14.8365 13.4409 14.7584 13.3646ZM1.66667 6.56335C1.66667 5.58977 1.95992 4.63805 2.50933 3.82855C3.05874 3.01905 3.83963 2.38812 4.75327 2.01554C5.6669 1.64297 6.67224 1.54549 7.64215 1.73542C8.61205 1.92536 9.50297 2.39418 10.2022 3.08261C10.9015 3.77103 11.3777 4.64814 11.5706 5.60301C11.7636 6.55789 11.6645 7.54764 11.2861 8.44711C10.9077 9.34658 10.2668 10.1154 9.44455 10.6563C8.6223 11.1972 7.6556 11.4859 6.66669 11.4859C5.3406 11.4859 4.06883 10.9672 3.13115 10.0441C2.19346 9.12094 1.66667 7.86888 1.66667 6.56335Z" fill="#A6A6A6" />
                                </svg>
                                <input type="email" id="search" name="Search" className="w-96 h-9 bg-white border border-gray-200 text-sm font-normal leading-8" />
                            </label>
                        </nav>
                    </div>
                    <nav className="list-none w-full lg:items-center lg:bg-white h-full lg:flex-row flex-col lg:h-18 xl:py-4 lg:px-0 px-4 gap-3 flex">
                        <li>
                            <a href="rivers-roads" className="font-semibold text-sm lg:text-red-600 text-white">Home</a>
                        </li>
                        <div className="pb-4 lg:hidden">
                            <li className="border-4 border-white rounded w-28"></li>
                        </div>
                        <li>
                            <a href="#" className="font-semibold text-xs lg:text-black text-white">About Us </a>
                        </li>
                        <li>
                            <a href="#" className="font-semibold text-sm lg:text-black text-white">Hospitals & Medical Centers</a>
                        </li>
                        <li className="py-4" onMouseEnter={toggleCenter} onMouseLeave={toggleCenter} ref={ref}>
                            <a href="#" className="font-semibold text-sm text-white lg:contents hidden lg:text-black">Regional Outreach Centers</a>
                            {(toggleCenters) && (
                                <nav className="list-none lg:absolute w-full top-32 lg:border-red-700 lg:border lg:w-1/6 lg:bg-white lg:flex flex-col">
                                    <li onMouseEnter={toggleCountry5} ref={ref6} className="hover:bg-red-300">
                                        <a onClick={toggleCountry5} href="#" className="lg:text-black w-full text-white font-medium text-xs pb-3 hover:text-red-700 lg:p-3 py-3 inline-flex">Pakistan</a>
                                        {(toggleCountries5) && (
                                            <nav className="list-none lg:absolute lg:top-5 lg:start-full w-full lg:border-red-700 bg-red-400 lg:border lg:w-full lg:bg-off-white-10 lg:flex flex-col">
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Pakistan</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Pakistan</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Pakistan</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Pakistan</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Pakistan</a>
                                                </li>
                                            </nav>
                                        )}
                                    </li>
                                    <li onMouseEnter={toggleCountry} ref={ref1} className="lg:hover:bg-red-300">
                                        <a href="#" onClick={toggleCountry} className="lg:text-black text-white w-full font-medium lg:hover:text-red-700 lg:p-3 py-3 text-xs pb-2 inline-flex">Tanzania</a>
                                        {(toggleCountries) && (
                                            <nav className="list-none lg:absolute lg:top-5 lg:start-full w-full lg:border-red-700 lg:border lg:w-full lg:bg-white lg:flex flex-col">
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
                                    <li onMouseEnter={toggleCountry1} ref={ref2} className="hover:bg-red-300">
                                        <a href="#" onClick={toggleCountry1} className="lg:text-black text-white font-medium w-full hover:text-red-700 lg:p-3 py-3 text-xs pb-3 inline-flex">India</a>
                                        {(toggleCountries1) && (
                                            <nav className="list-none lg:absolute lg:top-5 lg:start-full w-full lg:border-red-700 lg:border lg:w-full lg:bg-white lg:flex flex-col">
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">India</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">India</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">India</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">India</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">India</a>
                                                </li>
                                            </nav>
                                        )}
                                    </li>
                                    <li onMouseEnter={toggleCountry2} ref={ref3} className="hover:bg-red-300">
                                        <a href="#" onClick={toggleCountry2} className="lg:text-black text-white font-medium w-full hover:text-red-700 lg:p-3 py-3 text-xs pb-3 inline-flex">Tajkistan</a>
                                        {(toggleCountries2) && (
                                            <nav className="list-none lg:absolute lg:top-5 lg:start-full w-full lg:border-red-700 lg:border lg:w-full lg:bg-white lg:flex flex-col">
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tajkistan</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tajkistan</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tajkistan</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tajkistan</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tajkistan</a>
                                                </li>
                                            </nav>
                                        )}
                                    </li>
                                    <li onMouseEnter={toggleCountry3} ref={ref4} className="hover:bg-red-300">
                                        <a href="#" onClick={toggleCountry3} className="lg:text-black text-white font-medium w-full hover:text-red-700 lg:p-3 py-3 text-xs pb-3 inline-flex">Syria</a>
                                        {(toggleCountries3) && (
                                            <nav className="list-none lg:absolute lg:top-5 lg:start-full w-full lg:border-red-700 lg:border lg:w-full lg:bg-white lg:flex flex-col">
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Syria</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Syria</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Syria</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Syria</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Syria</a>
                                                </li>
                                            </nav>
                                        )}
                                    </li>
                                    <li onMouseEnter={toggleCountry4} ref={ref5} className="hover:bg-red-300">
                                        <a href="#" onClick={toggleCountry4} className="lg:text-black text-white font-medium w-full hover:text-red-700 lg:p-3 py-3 text-xs pb-3 inline-flex">Kenya</a>
                                        {(toggleCountries4) && (
                                            <nav className="list-none lg:absolute lg:top-5 lg:start-full w-full lg:border-red-700 lg:border lg:w-full lg:bg-white lg:flex flex-col">
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Kenya</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Kenya</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Kenya</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Kenya</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Kenya</a>
                                                </li>
                                            </nav>
                                        )}
                                    </li>
                                </nav>
                            )}
                        </li>
                        <li className="py-4" onMouseEnter={toggleMd} onMouseLeave={toggleMd} ref={ref7}>
                            <a href="#" className="font-semibold lg:contents hidden text-sm lg:text-black text-white">Media Resources</a>
                            {(toggleMedia) && (
                                <nav className="lg:pt-0 pt-2 list-none top-32 lg:absolute w-full lg:border-red-700 lg:border lg:w-1/6 lg:bg-white lg:flex flex-col">
                                    <li className="hover:bg-red-300">
                                        <a href="#" className="lg:text-black w-full text-white font-medium text-xs pb-3 hover:text-red-700 lg:p-3 py-3 inline-flex">Multimedia</a>
                                    </li>
                                    <li className="hover:bg-red-300">
                                        <a href="#" className="lg:text-black w-full text-white font-medium text-xs pb-3 hover:text-red-700 lg:p-3 py-3 inline-flex">Photographs</a>
                                    </li>
                                    <li className="hover:bg-red-300">
                                        <a href="#" className="lg:text-black w-full text-white font-medium text-xs pb-3 hover:text-red-700 lg:p-3 py-3 inline-flex">Videos</a>
                                    </li>
                                </nav>
                            )}
                        </li>
                        <li>
                            <a href="#" className="font-semibold text-sm lg:text-black text-white">Join Us!</a>
                        </li>
                        <div className="py-4 lg:hidden">
                            <li className="border rounded border-white w-full"></li>
                        </div>
                    </nav>
                </div>
                <Dialog
                    fullScreen
                    fullWidth
                    open={toggleMenu}
                    onClose={handleClose}
                    className="lg:hidden flex-col"
                >
                    <div className="w-full h-auto bg-red-600 bg-opacity-80 flex flex-wrap-reverse">
                        <div className="w-full h-auto">
                            <nav className="list-none flex-col gap-3 flex p-4">
                                <li>
                                    <a className="font-semibold text-sm text-white">Programs</a>
                                </li>
                                <li>
                                    <a className="font-semibold text-sm text-white">Education</a>
                                </li>
                                <li>
                                    <a className="font-semibold text-sm text-white">Research</a>
                                </li>
                            </nav>
                        </div>
                        <nav className="list-none w-full h-auto flex-col gap-3 flex">
                            <button onClick={handleClose} className="p-8 flex w-auto justify-end">
                                <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5.87109" y="0.786377" width="36" height="6" rx="3" transform="rotate(48.7268 5.87109 0.786377)" fill="#FFF9F9" />
                                    <rect x="0.640625" y="26.9001" width="36" height="6" rx="3" transform="rotate(-45 0.640625 26.9001)" fill="#FFF9F9" />
                                </svg>
                            </button>
                            <li className="px-4">
                                <a href="Slack" className="font-semibold text-sm text-white">Home</a>
                            </li>
                            <div className="pb-4 px-4">
                                <li className="border-4 border-white rounded w-28"></li>
                            </div>
                            <li className="px-4">
                                <a href="#" className="font-semibold text-xs py-3 text-white">About Us </a>
                            </li>
                            <li className="px-4">
                                <a href="#" className="font-semibold text-sm text-white">Hospitals & Medical Centers</a>
                            </li>
                            <li ref={ref} className={toggleCenters ? 'bg-red-400 bg-opacity-70' : 'bg-transparent'}>
                                <a href="#" onMouseEnter={toggleCenter} className="font-semibold text-sm text-white lg:contents hidden lg:text-black">Regional Outreach Centers</a>
                                <div className="flex px-4 py-1">
                                    <a href="#" onClick={toggleCenter} className="font-semibold text-sm lg:w-auto sm:w-1/2 w-full lg:hidden text-white lg:text-black">Regional Outreach Centers</a>
                                    <button className="lg:hidden sm:w-full flex justify-end px-2 focus:outline-none" onClick={toggleCenter}>
                                        <div className="lg:hidden border-gray-400 border-s me-4 h-6"></div>
                                        <svg className="mt-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                {(toggleCenters) && (
                                    <nav className="list-none lg:absolute px-4 w-full top-28 lg:border-red-700 lg:border lg:w-1/6 lg:bg-white lg:flex flex-col">
                                        <li onMouseEnter={toggleCountry5} ref={ref6} className="hover:bg-red-300">
                                            <a onClick={toggleCountry5} href="#" className="lg:text-black w-full text-white font-medium text-xs pb-3 hover:text-red-700 lg:p-3 py-3 inline-flex">Pakistan</a>
                                            {(toggleCountries5) && (
                                                <nav className="list-none lg:absolute lg:top-5 lg:left-full w-full lg:border-red-700 lg:border lg:w-full lg:bg-off-white-10 lg:flex flex-col">
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Pakistan</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Pakistan</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Pakistan</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Pakistan</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Pakistan</a>
                                                    </li>
                                                </nav>
                                            )}
                                        </li>
                                        <li onMouseEnter={toggleCountry} ref={ref1} className="lg:hover:bg-red-300">
                                            <a href="#" onClick={toggleCountry} className="lg:text-black text-white w-full font-medium lg:hover:text-red-700 lg:p-3 py-3 text-xs pb-2 inline-flex">Tanzania</a>
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
                                        <li onMouseEnter={toggleCountry1} ref={ref2} className="hover:bg-red-300">
                                            <a href="#" onClick={toggleCountry1} className="lg:text-black text-white font-medium w-full hover:text-red-700 lg:p-3 py-3 text-xs pb-3 inline-flex">India</a>
                                            {(toggleCountries1) && (
                                                <nav className="list-none lg:absolute lg:top-5 lg:left-full w-full lg:border-red-700 lg:border lg:w-full lg:bg-white lg:flex flex-col">
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">India</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">India</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">India</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">India</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">India</a>
                                                    </li>
                                                </nav>
                                            )}
                                        </li>
                                        <li onMouseEnter={toggleCountry2} ref={ref3} className="hover:bg-red-300">
                                            <a href="#" onClick={toggleCountry2} className="lg:text-black text-white font-medium w-full hover:text-red-700 lg:p-3 py-3 text-xs pb-3 inline-flex">Tajkistan</a>
                                            {(toggleCountries2) && (
                                                <nav className="list-none lg:absolute lg:top-5 lg:left-full w-full lg:border-red-700 lg:border lg:w-full lg:bg-white lg:flex flex-col">
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tajkistan</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tajkistan</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tajkistan</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tajkistan</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Tajkistan</a>
                                                    </li>
                                                </nav>
                                            )}
                                        </li>
                                        <li onMouseEnter={toggleCountry3} ref={ref4} className="hover:bg-red-300">
                                            <a href="#" onClick={toggleCountry3} className="lg:text-black text-white font-medium w-full hover:text-red-700 lg:p-3 py-3 text-xs pb-3 inline-flex">Syria</a>
                                            {(toggleCountries3) && (
                                                <nav className="list-none lg:absolute lg:top-5 lg:left-full w-full lg:border-red-700 lg:border lg:w-full lg:bg-white lg:flex flex-col">
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Syria</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Syria</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Syria</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Syria</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Syria</a>
                                                    </li>
                                                </nav>
                                            )}
                                        </li>
                                        <li onMouseEnter={toggleCountry4} ref={ref5} className="hover:bg-red-300">
                                            <a href="#" onClick={toggleCountry4} className="lg:text-black text-white font-medium w-full hover:text-red-700 lg:p-3 py-3 text-xs pb-3 inline-flex">Kenya</a>
                                            {(toggleCountries4) && (
                                                <nav className="list-none lg:absolute lg:top-5 lg:left-full w-full lg:border-red-700 lg:border lg:w-full lg:bg-white lg:flex flex-col">
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Kenya</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Kenya</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Kenya</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Kenya</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="lg:text-black text-white font-normal text-sm pb-2 lg:p-3 inline-flex">Kenya</a>
                                                    </li>
                                                </nav>
                                            )}
                                        </li>
                                    </nav>
                                )}
                            </li>
                            <li onMouseEnter={toggleMd} ref={ref7} className={toggleMedia ? 'bg-red-400 bg-opacity-70' : 'bg-transparent'}>
                                <a href="#" className="font-semibold lg:contents hidden text-sm lg:text-black text-white">Media Resources</a>
                                <div className="flex px-4 py-1">
                                    <a href="#" onclick={toggleMd} ref={ref7} className="font-semibold lg:w-auto sm:w-1/2 w-full text-sm lg:hidden lg:text-black text-white">Media Resources</a>
                                    <button className="lg:hidden sm:w-full flex justify-end px-2 focus:outline-none" onClick={toggleMd}>
                                        <div className="lg:hidden border-gray-400 border-s me-4 h-6"></div>
                                        <svg className="mt-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                {(toggleMedia) && (
                                    <nav className="lg:pt-0 pt-2 list-none top-28 px-4 lg:absolute w-full lg:border-red-700 lg:border lg:w-1/6 lg:bg-white lg:flex flex-col">
                                        <li className="hover:bg-red-300">
                                            <a href="#" className="lg:text-black w-full text-white font-medium text-xs pb-3 hover:text-red-700 lg:p-3 py-3 inline-flex">Multimedia</a>
                                        </li>
                                        <li className="hover:bg-red-300">
                                            <a href="#" className="lg:text-black w-full text-white font-medium text-xs pb-3 hover:text-red-700 lg:p-3 py-3 inline-flex">Photographs</a>
                                        </li>
                                        <li className="hover:bg-red-300">
                                            <a href="#" className="lg:text-black w-full text-white font-medium text-xs pb-3 hover:text-red-700 lg:p-3 py-3 inline-flex">Videos</a>
                                        </li>
                                    </nav>
                                )}
                            </li>
                            <li className="px-4">
                                <a href="#" className="font-semibold text-sm lg:text-black py-3 text-white">Join Us!</a>
                            </li>
                            <div className="py-4 lg:hidden px-4">
                                <li className="border rounded border-white w-full"></li>
                            </div>
                        </nav>
                    </div>
                </Dialog>
                <button onClick={toggleNav} className="flex justify-end items-center p-2 ms-3 text-sm  lg:hidden">
                    <svg width="36" height="18" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="36" height="6" rx="3" fill="#FF0000" />
                        <rect x="12" y="12" width="24" height="6" rx="3" fill="#FF0000" />
                    </svg>
                </button>
            </div>
        </section>
    )
}


export default AkhssHeader;