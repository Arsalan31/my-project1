import React, { useEffect, useRef, useState } from "react";
import './style.css';


function Header2() {

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

    const lang = useRef()

    const [toggleLanguage, setTogglelanguage] = useState(false)

    const toggleLang = () => {
        setTogglelanguage(!toggleLanguage)
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleLanguage && lang.current && !lang.current.contains(e.target)) {
                setTogglelanguage(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [toggleLanguage])

    const ref = useRef()

    const [toggleAbout, setToggleabout] = useState(false)

    const toggleAbt = () => {
        setToggleabout(!toggleAbout)

    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleAbout && ref.current && !ref.current.contains(e.target)) {
                setToggleabout(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [toggleAbout])

    const ref1 = useRef()

    const [toggleAbout1, setToggleabout1] = useState(false)

    const toggleAbt1 = () => {
        setToggleabout1(!toggleAbout1)
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleAbout1 && ref1.current && !ref1.current.contains(e.target)) {
                setToggleabout1(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [toggleAbout1])

    const ref2 = useRef()

    const [toggleAbout2, setToggleabout2] = useState(false)

    const toggleAbt2 = () => {
        setToggleabout2(!toggleAbout2)
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleAbout2 && ref2.current && !ref2.current.contains(e.target)) {
                setToggleabout2(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [toggleAbout2])

    const [toggleAbout3, setToggleabout3] = useState(false)

    const ref3 = useRef()

    const toggleAbt3 = () => {
        setToggleabout3(!toggleAbout3)
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleAbout3 && ref3.current && !ref3.current.contains(e.target)) {
                setToggleabout3(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [toggleAbout3])

    const ref4 = useRef()

    const [toggleAbout4, setToggleabout4] = useState(false)

    const toggleAbt4 = () => {
        setToggleabout4(!toggleAbout4)
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleAbout4 && ref4.current && !ref4.current.contains(e.target)) {
                setToggleabout4(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [toggleAbout4])


    const ref5 = useRef()

    const [toggleAbout5, setToggleabout5] = useState(false)

    const toggleAbt5 = () => {
        setToggleabout5(!toggleAbout5)
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toggleAbout5 && ref5.current && !ref5.current.contains(e.target)) {
                setToggleabout5(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [toggleAbout5])

    return (
        <header className="w-full absolute">
            <div className="flex flex-wrap justify-between content-center items-center bg-white">
                <img href="Akdn" className="img flex" src={require('./assets/AKDN Identity with Tag Line 1.png')}></img>
                <button onClick={toggleNav} className="flex items-center lg:order-1 order-0 focus:outline-none p-2 ms-3 text-sm font-semibold uppercase border-white border-2 px-6 py-3 text-gray-5 lg:hidden">
                    <img src={require('./assets/Menu.png')}></img>
                </button>
                {(toggleMenu || screenWidth > 1023) && (
                    <div className="list7 list-none lg:bg-white bg-green-20 flex lg:flex-row flex-col py-6 order-0 lg:justify-center justify-start">
                        <li ref={ref}>
                            <div className="flex">
                                <a onClick={toggleAbt} className="lg:w-auto w-1/2 cursor-pointer uppercase lg:block hidden py-3 lg:py-2 px-2 font-bold text-xs leading-7 lg:text-gray-5 text-white focus:outline-none">Who We Are</a>
                                <a className="lg:hidden lg:w-auto w-1/2 cursor-pointer uppercase block py-3 lg:py-2 px-2 font-bold text-xs leading-7 lg:text-gray-5 text-white focus:outline-none">Who We Are</a>
                                <button className="lg:hidden w-1/2 flex justify-end py-3 px-2 focus:outline-none" onClick={toggleAbt}>
                                    <div className="lg:hidden border-gray-400 border-s me-4 h-6"></div>
                                    <svg className="mt-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            {(toggleAbout) && (
                                <nav className="lg:list-none bg-gray-4 lg:p-5 list6 lg:flex flex-col hidden">
                                    <li>
                                        <a className="text-white font-normal text-sm pb-2 inline-flex">Founder & Chairman</a>
                                    </li>
                                    <li>
                                        <a className="text-white font-normal text-sm pb-2 inline-flex">AKDN Leadership</a>
                                    </li>
                                    <li>
                                        <a className="text-white font-normal text-sm pb-2 inline-flex">Our Partners</a>
                                    </li>
                                    <li>
                                        <a className="text-white font-normal text-sm pb-2 inline-flex">Fact sheet</a>
                                    </li>
                                    <li>
                                        <a className="text-white font-normal text-sm pb-2 inline-flex">Awards Received by AKDN</a>
                                    </li>
                                    <li>
                                        <a className="text-white font-normal text-sm pb-2 inline-flex">Frequently Asked Questions</a>
                                    </li>
                                    <li>
                                        <a className="text-white font-normal text-sm pb-2 inline-flex">Contact Us</a>
                                    </li>
                                </nav>
                            )}
                        </li>
                        <li>
                            <div className="flex">
                                <a onClick={toggleAbt1} className="hidden lg:w-auto w-1/2 cursor-pointer uppercase lg:block py-3 lg:py-2 px-2 font-bold text-xs leading-7 lg:text-gray-5 text-white focus:outline-none">What We Do</a>
                                <a className="lg:hidden lg:w-auto w-1/2 cursor-pointer uppercase block py-3 lg:py-2 px-2 font-bold text-xs leading-7 lg:text-gray-5 text-white focus:outline-none">What We Do</a>
                                <button className="lg:hidden w-1/2 flex justify-end py-3 px-2 focus:outline-none" onClick={toggleAbt1}>
                                    <div className="lg:hidden border-gray-400 border-s me-4 h-6"></div>
                                    <svg className="mt-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            {(toggleAbout1) && (
                                <nav ref={ref1} className="lg:list-none lg:gap-28 bg-gray-4 lg:p-5 list6 lg:flex lg:flex-row flex-col hidden">
                                    <nav>
                                        <li className="pb-3">
                                            <a className="uppercase text-green-100 font-bold text-xs leading-5">developing human capacity</a>
                                        </li>
                                        <div className="pb-4">
                                            <li className="border border-gray-3 w-1/4"></li>
                                        </div>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Early Childhood Development</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Education</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Health</a>
                                        </li>
                                        <nav className="lg:pt-16 pt-2">
                                            <li className="pb-3">
                                                <a className="uppercase text-green-100 font-bold text-xs leading-5">building resilient communities</a>
                                            </li>
                                            <div className="pb-4">
                                                <li className="border border-gray-3 w-1/4"></li>
                                            </div>
                                            <li>
                                                <a className="text-white font-normal text-sm pb-2 inline-flex">Addressing Climate Change</a>
                                            </li>
                                            <li>
                                                <a className="text-white font-normal text-sm pb-2 inline-flex">Agriculture & Food Security</a>
                                            </li>
                                            <li>
                                                <a className="text-white font-normal text-sm pb-2 inline-flex">Civil Society</a>
                                            </li>
                                            <li>
                                                <a className="text-white font-normal text-sm pb-2 inline-flex">Disaster Preparedness & Response</a>
                                            </li>
                                        </nav>
                                    </nav>
                                    <nav className="lg:pt-0 pt-2">
                                        <li className="pb-3">
                                            <a className="uppercase text-green-100 font-bold text-xs leading-5">GENERATING ECONOMIC GROWTH</a>
                                        </li>
                                        <div className="pb-4">
                                            <li className="border border-gray-3 w-1/4"></li>
                                        </div>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Enterprise Development</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Financial Inclusion</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Industrial Development</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Infrastructure Development</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Media</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Tourism Promotion</a>
                                        </li>
                                        <nav className="lg:pt-16 pt-2">
                                            <li className="pb-3">
                                                <a className="uppercase text-green-100 font-bold text-xs leading-5">honoUring cultural heritage</a>
                                            </li>
                                            <div className="pb-4">
                                                <li className="border border-gray-3 w-1/4"></li>
                                            </div>
                                            <li>
                                                <a className="text-white font-normal text-sm pb-2 inline-flex">Architecture & Planning</a>
                                            </li>
                                            <li>
                                                <a className="text-white font-normal text-sm pb-2 inline-flex">Culture</a>
                                            </li>
                                            <li>
                                                <a className="text-white font-normal text-sm pb-2 inline-flex">Historic Cities</a>
                                            </li>
                                            <li>
                                                <a className="text-white font-normal text-sm pb-2 inline-flex">Music</a>
                                            </li>
                                        </nav>
                                    </nav>
                                </nav>
                            )}
                        </li>
                        <li ref={ref2}>
                            <div className="flex">
                                <a onClick={toggleAbt2} className="hidden lg:w-auto w-1/2 cursor-pointer uppercase lg:block py-3 lg:py-2 px-2 font-bold text-xs leading-7 lg:text-gray-5 text-white focus:outline-none">How We Work</a>
                                <a className="lg:hidden lg:w-auto w-1/2 cursor-pointer uppercase block py-3 lg:py-2 px-2 font-bold text-xs leading-7 lg:text-gray-5 text-white focus:outline-none">How We Work</a>
                                <button className="lg:hidden w-1/2 flex justify-end py-3 px-2 focus:outline-none" onClick={toggleAbt2}>
                                    <div className="lg:hidden border-gray-400 border-s me-4 h-6"></div>
                                    <svg className="mt-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            {(toggleAbout2) && (
                                <nav className="lg:list-none bg-gray-4 lg:p-5 list6 lg:flex lg:flex-row flex-col hidden">
                                    <nav className="list-none lg:px-8">
                                        <li className="pb-3">
                                            <a className="uppercase text-green-100 font-bold text-xs leading-5">Eastern africa</a>
                                        </li>
                                        <div className="pb-4">
                                            <li className="border border-gray-3 w-7/12"></li>
                                        </div>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 ">Kenya</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2">Madagascar</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2">Mozambique</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2">Rwanda</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2">Tanzania</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2">Uganda</a>
                                        </li>
                                        <nav className="lg:pt-16 pt-2">
                                            <li className="pb-3">
                                                <a className="uppercase text-green-100 font-bold text-xs leading-5">west africa</a>
                                            </li>
                                            <div className="pb-4">
                                                <li className="border border-gray-3 w-7/12"></li>
                                            </div>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2 ">Burkina Faso</a>
                                            </li>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2">Côte d'Ivoire</a>
                                            </li>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2">Mali</a>
                                            </li>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2">Senegal</a>
                                            </li>
                                        </nav>
                                    </nav>
                                    <nav className="list-none lg:px-8">
                                        <li className="pb-3">
                                            <a className="uppercase text-green-100 font-bold text-xs leading-5">middle east</a>
                                        </li>
                                        <div className="pb-4">
                                            <li className="border border-gray-3 w-7/12"></li>
                                        </div>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 cursor-pointer">Egypt</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 cursor-pointer">Syria</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 cursor-pointer">United Arab Emirates</a>
                                        </li>
                                        <nav className="lg:pt-16 pt-2">
                                            <li className="pb-3">
                                                <a className="uppercase text-green-100 font-bold text-xs leading-5">central asia</a>
                                            </li>
                                            <div className="pb-4">
                                                <li className="border border-gray-3 w-7/12"></li>
                                            </div>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2 ">Afghanistan</a>
                                            </li>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2">Kazakhstan</a>
                                            </li>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2">Kyrgyz Republic</a>
                                            </li>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2">Tajikistan</a>
                                            </li>
                                        </nav>
                                    </nav>

                                    <nav className="list-none lg:px-8">
                                        <li className="pb-3">
                                            <a className="uppercase text-green-100 font-bold text-xs leading-5">south asia</a>
                                        </li>
                                        <div className="pb-4">
                                            <li className="border border-gray-3 w-7/12"></li>
                                        </div>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 cursor-pointer">Bangladesh</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 cursor-pointer">India</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 cursor-pointer">Pakistan</a>
                                        </li>
                                        <nav className="lg:pt-16 pt-2">
                                            <li className="pb-3">
                                                <a className="uppercase text-green-100 font-bold text-xs leading-5">ASIA-PACIFIC</a>
                                            </li>
                                            <div className="pb-4">
                                                <li className="border border-gray-3 w-7/12"></li>
                                            </div>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2 cursor-pointer">Malaysia</a>
                                            </li>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2 cursor-pointer">Singapore</a>
                                            </li>
                                        </nav>
                                    </nav>
                                    <nav className="list-none lg:px-8">
                                        <li className="pb-3">
                                            <a className="uppercase text-green-100 font-bold text-xs leading-5">north america</a>
                                        </li>
                                        <div className="pb-4">
                                            <li className="border border-gray-3 w-7/12"></li>
                                        </div>
                                        <li className="pb-4">
                                            <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Canada</a>
                                        </li>
                                        <li className="pb-4">
                                            <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">United States of America</a>
                                        </li>
                                        <nav className="lg:pt-16 pt-2">
                                            <li className="pb-3">
                                                <a className="uppercase text-green-100 font-bold text-xs leading-5">europe</a>
                                            </li>
                                            <div className="pb-4">
                                                <li className="border border-gray-3 w-2/5"></li>
                                            </div>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2 ">France</a>
                                            </li>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2">Germany</a>
                                            </li>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2">Norway</a>
                                            </li>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2">Portugal</a>
                                            </li>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2">Switzerland</a>
                                            </li>
                                            <li className="pb-4">
                                                <a className="text-white font-normal text-sm pb-2">United Kingdom</a>
                                            </li>
                                        </nav>
                                    </nav>
                                </nav>
                            )}
                        </li>
                        <li ref={ref3}>
                            <div className="flex">
                                <a onClick={toggleAbt3} className="hidden lg:w-auto w-1/2 cursor-pointer uppercase lg:block py-3 lg:py-2 px-2 font-bold text-xs leading-7 lg:text-gray-5 text-white focus:outline-none">Where We Work</a>
                                <a className="lg:hidden lg:w-auto w-1/2 cursor-pointer uppercase block py-3 lg:py-2 px-2 font-bold text-xs leading-7 lg:text-gray-5 text-white focus:outline-none">Where We Work</a>
                                <button className="lg:hidden w-1/2 flex justify-end py-3 px-2 focus:outline-none" onClick={toggleAbt3}>
                                    <div className="lg:hidden border-gray-400 border-s me-4 h-6"></div>
                                    <svg className="mt-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            {(toggleAbout3) && (
                                <nav className="lg:list-none list6 bg-gray-4 lg:p-5 lg:flex lg:flex-row flex-col hidden">
                                    <nav>
                                        <li className="pb-3">
                                            <a className="uppercase text-green-100 font-bold text-xs leading-5">Our agencies</a>
                                        </li>
                                        <div className="pb-4">
                                            <li className="border border-gray-3 w-1/5"></li>
                                        </div>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Aga Khan Academies</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Aga Khan Agency for Habitat</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Aga Khan Agency for Microfinance</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Aga Khan Education Services</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Aga Khan Foundation</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Aga Khan Fund for Economic Development</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Aga Khan Health Services</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Aga Khan Trust for Culture</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Aga Khan University</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">University of Central Asia</a>
                                        </li>
                                    </nav>
                                    <nav className="list-none lg:pt-0 pt-2 lg:px-8">
                                        <li className="pb-3">
                                            <a className="uppercase text-green-100 font-bold text-xs leading-5">Our approach</a>
                                        </li>
                                        <div className="pb-4">
                                            <li className="border border-gray-3 w-1/3"></li>
                                        </div>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 cursor-pointer">Our Approach to Development</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 cursor-pointer">Frequently Asked Questions</a>
                                        </li>
                                    </nav>
                                </nav>
                            )}
                        </li>
                        <li ref={ref4}>
                            <div className="flex">
                                <a onClick={toggleAbt4} className="hidden lg:w-auto w-1/2 cursor-pointer uppercase lg:block py-3 lg:py-2 px-2 font-bold text-xs leading-7 lg:text-gray-5 text-white focus:outline-none">RESOURCES & MEDIA</a>
                                <a className="lg:hidden lg:w-auto w-1/2 cursor-pointer uppercase block py-3 lg:py-2 px-2 font-bold text-xs leading-7 lg:text-gray-5 text-white focus:outline-none">RESOURCES & MEDIA</a>
                                <button className="lg:hidden w-1/2 flex justify-end py-3 px-2 focus:outline-none" onClick={toggleAbt4}>
                                    <div className="lg:hidden border-gray-400 border-s me-4 h-6"></div>
                                    <svg className="mt-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            {(toggleAbout4) && (
                                <nav className="lg:list-none list6 bg-gray-4 lg:p-5 lg:flex lg:flex-row flex-col hidden">
                                    <nav>
                                        <li className="pb-3">
                                            <a className="uppercase text-green-100 font-bold text-xs leading-5">What's New</a>
                                        </li>
                                        <div className="pb-4">
                                            <li className="border border-gray-3 w-1/2"></li>
                                        </div>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Our Stories</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Project Spotlights</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Press Releases</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Event Summaries</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">AKDN in the Media</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">COVID-19 Responses</a>
                                        </li>
                                    </nav>
                                    <nav className="lg:pt-0 pt-2 lg:px-8">
                                        <li className="pb-3">
                                            <a className="uppercase text-green-100 font-bold text-xs leading-5">multimedia</a>
                                        </li>
                                        <div className="pb-4">
                                            <li className="border border-gray-3 w-7/12"></li>
                                        </div>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Photographs</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Videos</a>
                                        </li>
                                    </nav>
                                    <nav className="lg:px-8 lg:pt-0 pt-2">
                                        <li className="pb-3">
                                            <a className="uppercase text-green-100 font-bold text-xs leading-5">Resources</a>
                                        </li>
                                        <div className="pb-4">
                                            <li className="border border-gray-3 w-7/12"></li>
                                        </div>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Fact Sheet</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Annual Reports</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Briefs</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Speeches</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Research</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Publications</a>
                                        </li>
                                    </nav>
                                </nav>
                            )}
                        </li>
                        <li ref={ref5}>
                            <div className="flex">
                                <a onClick={toggleAbt5} className="hidden lg:w-auto w-1/2 cursor-pointer uppercase lg:block py-3 lg:py-2 px-2 font-bold text-xs leading-7 lg:text-gray-5 text-white focus:outline-none">Get Involved</a>
                                <a className="lg:hidden lg:w-auto w-1/2 cursor-pointer uppercase block py-3 lg:py-2 px-2 font-bold text-xs leading-7 lg:text-gray-5 text-white focus:outline-none">Get Involved</a>
                                <button className="lg:hidden w-1/2 flex justify-end py-3 px-2 focus:outline-none">
                                    <div className="lg:hidden border-gray-400 border-s me-4 h-6"></div>
                                    <svg className="mt-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            {(toggleAbout5) && (
                                <nav className="lg:list-none list6 bg-gray-4 lg:p-5 lg:flex flex-col hidden">
                                    <li>
                                        <a className="text-white font-normal text-sm pb-2 inline-flex">Careers</a>
                                    </li>
                                    <li>
                                        <a className="text-white font-normal text-sm pb-2 inline-flex">Donate</a>
                                    </li>
                                    <li>
                                        <a className="text-white font-normal text-sm pb-2 inline-flex">Events</a>
                                    </li>
                                    <li>
                                        <a className="text-white font-normal text-sm pb-2 inline-flex">Partner with Us</a>
                                    </li>
                                    <li>
                                        <a className="text-white font-normal text-sm pb-2 inline-flex">Contact Us</a>
                                    </li>
                                </nav>
                            )}
                        </li>
                        <li className="lg:hidden">
                            <li ref={lang}>
                                <a className="flex">
                                    <h3 className="w-1/2 flex font-bold text-xs leading-7 py-3 lg:py-2 px-2 text-white tracking-widest uppercase pb-6">
                                        <svg className="mt-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_4295_1327)">
                                                <path d="M9.99175 1.66663C5.39175 1.66663 1.66675 5.39996 1.66675 9.99996C1.66675 14.6 5.39175 18.3333 9.99175 18.3333C14.6001 18.3333 18.3334 14.6 18.3334 9.99996C18.3334 5.39996 14.6001 1.66663 9.99175 1.66663ZM15.7667 6.66663H13.3084C13.0417 5.62496 12.6584 4.62496 12.1584 3.69996C13.6917 4.22496 14.9667 5.29163 15.7667 6.66663ZM10.0001 3.36663C10.6917 4.36663 11.2334 5.47496 11.5917 6.66663H8.40842C8.76675 5.47496 9.30842 4.36663 10.0001 3.36663ZM3.55008 11.6666C3.41675 11.1333 3.33341 10.575 3.33341 9.99996C3.33341 9.42496 3.41675 8.86663 3.55008 8.33329H6.36675C6.30008 8.88329 6.25008 9.43329 6.25008 9.99996C6.25008 10.5666 6.30008 11.1166 6.36675 11.6666H3.55008ZM4.23341 13.3333H6.69175C6.95841 14.375 7.34175 15.375 7.84175 16.3C6.30841 15.775 5.03341 14.7166 4.23341 13.3333V13.3333ZM6.69175 6.66663H4.23341C5.03341 5.28329 6.30841 4.22496 7.84175 3.69996C7.34175 4.62496 6.95841 5.62496 6.69175 6.66663V6.66663ZM10.0001 16.6333C9.30842 15.6333 8.76675 14.525 8.40842 13.3333H11.5917C11.2334 14.525 10.6917 15.6333 10.0001 16.6333ZM11.9501 11.6666H8.05008C7.97508 11.1166 7.91675 10.5666 7.91675 9.99996C7.91675 9.43329 7.97508 8.87496 8.05008 8.33329H11.9501C12.0251 8.87496 12.0834 9.43329 12.0834 9.99996C12.0834 10.5666 12.0251 11.1166 11.9501 11.6666ZM12.1584 16.3C12.6584 15.375 13.0417 14.375 13.3084 13.3333H15.7667C14.9667 14.7083 13.6917 15.775 12.1584 16.3V16.3ZM13.6334 11.6666C13.7001 11.1166 13.7501 10.5666 13.7501 9.99996C13.7501 9.43329 13.7001 8.88329 13.6334 8.33329H16.4501C16.5834 8.86663 16.6667 9.42496 16.6667 9.99996C16.6667 10.575 16.5834 11.1333 16.4501 11.6666H13.6334Z" fill="#FFFFFF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_4295_1327">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        English
                                    </h3>

                                    <button className="lg:hidden w-1/2 flex justify-end py-3 px-2 focus:outline-none" onClick={toggleLang}>
                                        <div className="lg:hidden border-gray-400 border-s me-4 h-6"></div>
                                        <svg className="mt-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </a>
                                {(toggleLanguage) && (
                                    <nav className="lg:list-none list6 p-5 text-start lg:flex flex-col bg-gray-4 hidden">
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Arabic</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">English</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Français</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Português</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Pyccкий</a>
                                        </li>
                                    </nav>
                                )}
                            </li>
                        </li>
                    </div >
                )
                }
                <div className="lg:hidden flex me-10 lg:order-1 order-2">
                    <button className="font-bold uppercase ms-3 py-2 focus:outline-none">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3604 9.16667C15.3604 12.2963 12.8234 14.8333 9.69377 14.8333C6.56415 14.8333 4.0271 12.2963 4.0271 9.16667C4.0271 6.03705 6.56415 3.5 9.69377 3.5C12.8234 3.5 15.3604 6.03705 15.3604 9.16667Z" stroke="#535052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.0271 17.5L14.4021 13.875" stroke="#535052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="list-none relative text-center lg:flex hidden md:bg-transparent lg:order-1 order-2 md:p-0 p-5 md:w-52 w-full bg-white">
                    <button className="font-bold uppercase ms-3 py-2 focus:outline-none">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3604 9.16667C15.3604 12.2963 12.8234 14.8333 9.69377 14.8333C6.56415 14.8333 4.0271 12.2963 4.0271 9.16667C4.0271 6.03705 6.56415 3.5 9.69377 3.5C12.8234 3.5 15.3604 6.03705 15.3604 9.16667Z" stroke="#535052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.0271 17.5L14.4021 13.875" stroke="#535052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <li ref={lang}>
                        <a>
                            <button onClick={toggleLang} className="lg:text-gray-5 text-white ms-5 text-sm font-bold uppercase flex px-5 py-2 focus:outline-none">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4295_1327)">
                                        <path d="M9.99175 1.66663C5.39175 1.66663 1.66675 5.39996 1.66675 9.99996C1.66675 14.6 5.39175 18.3333 9.99175 18.3333C14.6001 18.3333 18.3334 14.6 18.3334 9.99996C18.3334 5.39996 14.6001 1.66663 9.99175 1.66663ZM15.7667 6.66663H13.3084C13.0417 5.62496 12.6584 4.62496 12.1584 3.69996C13.6917 4.22496 14.9667 5.29163 15.7667 6.66663ZM10.0001 3.36663C10.6917 4.36663 11.2334 5.47496 11.5917 6.66663H8.40842C8.76675 5.47496 9.30842 4.36663 10.0001 3.36663ZM3.55008 11.6666C3.41675 11.1333 3.33341 10.575 3.33341 9.99996C3.33341 9.42496 3.41675 8.86663 3.55008 8.33329H6.36675C6.30008 8.88329 6.25008 9.43329 6.25008 9.99996C6.25008 10.5666 6.30008 11.1166 6.36675 11.6666H3.55008ZM4.23341 13.3333H6.69175C6.95841 14.375 7.34175 15.375 7.84175 16.3C6.30841 15.775 5.03341 14.7166 4.23341 13.3333V13.3333ZM6.69175 6.66663H4.23341C5.03341 5.28329 6.30841 4.22496 7.84175 3.69996C7.34175 4.62496 6.95841 5.62496 6.69175 6.66663V6.66663ZM10.0001 16.6333C9.30842 15.6333 8.76675 14.525 8.40842 13.3333H11.5917C11.2334 14.525 10.6917 15.6333 10.0001 16.6333ZM11.9501 11.6666H8.05008C7.97508 11.1166 7.91675 10.5666 7.91675 9.99996C7.91675 9.43329 7.97508 8.87496 8.05008 8.33329H11.9501C12.0251 8.87496 12.0834 9.43329 12.0834 9.99996C12.0834 10.5666 12.0251 11.1166 11.9501 11.6666ZM12.1584 16.3C12.6584 15.375 13.0417 14.375 13.3084 13.3333H15.7667C14.9667 14.7083 13.6917 15.775 12.1584 16.3V16.3ZM13.6334 11.6666C13.7001 11.1166 13.7501 10.5666 13.7501 9.99996C13.7501 9.43329 13.7001 8.88329 13.6334 8.33329H16.4501C16.5834 8.86663 16.6667 9.42496 16.6667 9.99996C16.6667 10.575 16.5834 11.1333 16.4501 11.6666H13.6334Z" fill="#535052" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4295_1327">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                en
                            </button>
                        </a>
                        {(toggleLanguage) && (
                            <nav className="lg:list-none list6 p-5 text-start lg:flex flex-col bg-gray-4 hidden">
                                <li>
                                    <a className="text-white font-normal text-sm pb-2 inline-flex">Arabic</a>
                                </li>
                                <li>
                                    <a className="text-white font-normal text-sm pb-2 inline-flex">English</a>
                                </li>
                                <li>
                                    <a className="text-white font-normal text-sm pb-2 inline-flex">Français</a>
                                </li>
                                <li>
                                    <a className="text-white font-normal text-sm pb-2 inline-flex">Português</a>
                                </li>
                                <li>
                                    <a className="text-white font-normal text-sm pb-2 inline-flex">Pyccкий</a>
                                </li>
                            </nav>
                        )}
                    </li>
                    {/* {(togglelanguage) && (
                        <nav className="lg:list-none list6 p-5 lg:flex flex-col bg-gray-5 hidden">
                            <li className="pb-4">
                                <a className="text-white font-normal text-sm pb-2 inline-flex">Arabic</a>
                            </li>
                            <li className="pb-4">
                                <a className="text-white font-normal text-sm pb-2 inline-flex">English</a>
                            </li>
                            <li className="pb-4">
                                <a className="text-white font-normal text-sm pb-2 inline-flex">Français</a>
                            </li>
                            <li className="pb-4">
                                <a className="text-white font-normal text-sm pb-2 inline-flex">Português</a>
                            </li>
                            <li className="pb-4">
                                <a className="text-white font-normal text-sm pb-2 inline-flex">Pyccкий</a>
                            </li>
                        </nav>
                    )} */}
                </div>
            </div >
        </header >
    )
}
export default Header2;