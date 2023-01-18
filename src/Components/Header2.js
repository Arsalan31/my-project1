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


    const [toggleAbout2, setToggleabout2] = useState(false)

    const toggleAbt2 = () => {
        setToggleabout2(!toggleAbout2)
    }

    const [toggleAbout3, setToggleabout3] = useState(false)

    const toggleAbt3 = () => {
        setToggleabout3(!toggleAbout3)
    }

    const [toggleAbout4, setToggleabout4] = useState(false)

    const toggleAbt4 = () => {
        setToggleabout4(!toggleAbout4)
    }

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
                setToggleabout5 (false)
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
            <div className="flex flex-wrap justify-between content-center items-center bg-white ">
                <img href="Akdn" className="flex order-0 " src={require('./assets/AKDN Identity with Tag Line 1.png')}></img>
                <button onClick={toggleNav} className="flex items-center lg:order-1 order-0 focus:outline-none p-2 ms-3 text-sm font-semibold uppercase border-white border-2 px-6 py-3 text-gray-5 md:hidden">Menu
                </button>
                {(toggleMenu || screenWidth > 1023) && (
                    <div className="list-none flex flex-row p-6 order-0 lg:justify-center justify-start">
                        <li ref={ref}>
                            <a onClick={toggleAbt} className="cursor-pointer uppercase block py-2 px-2 md:text-gray-5 text-white font-bold text-xs leading-7 rounded">Who We Are</a>
                            {(toggleAbout) && (
                                <nav className="lg:list-none bg-gray-4 p-5 list6 lg:flex flex-col hidden">
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
                            <a onClick={toggleAbt1} className="cursor-pointer uppercase block py-2 px-2 md:text-gray-5 text-white font-bold text-xs leading-7 rounded">What We Do</a>
                            {(toggleAbout1) && (
                                <div className="flex">
                                    <div className="w-1/2" ref={ref1}>
                                        <nav className="lg:list-none bg-gray-4 p-5 list6 lg:flex flex-col hidden">
                                            <li className="pb-3">
                                                <a className="uppercase text-blue-200 font-bold text-xs leading-5">developing human capacity</a>
                                            </li>
                                            <div className="pb-4">
                                                <li className="border border-gray-3 w-1/3"></li>
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
                                        </nav>
                                    </div>
                                    {/* <div className="w-1/2">
                                        <nav className="lg:list-none bg-gray-4 p-5 list6 lg:flex flex-col">
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
                                    </div> */}
                                </div>
                            )}
                        </li>
                        <li>
                            <a className="cursor-pointer uppercase block py-2 px-2 md:text-gray-5 text-white font-bold text-xs leading-7 rounded">Where We Work</a>
                        </li>
                        <li>
                            <a className="cursor-pointer uppercase block py-2 px-2 font-bold text-xs leading-7 md:text-gray-5 text-white rounded">How We Work</a>
                        </li>
                        <li>
                            <a className="cursor-pointer uppercase block py-2 px-2 font-bold text-xs leading-7 md:text-gray-5 text-white rounded">RESOURCES & MEDIA</a>
                        </li>
                        <li ref={ref5}>
                            <a onClick={toggleAbt5} className="cursor-pointer uppercase block py-2 px-2 font-bold text-xs leading-7 md:text-gray-5 text-white rounded">Get Involved</a>
                            {(toggleAbout5) && (
                                <nav className="lg:list-none list6 bg-gray-4 p-5 lg:flex flex-col hidden">
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
                    </div>
                )}
                <div className="list3 text-center flex md:bg-transparent lg:order-1 order-2 md:p-0 p-5 md:w-52 w-full bg-white">
                    <button className="font-bold uppercase ms-3 py-2 focus:outline-none">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3604 9.16667C15.3604 12.2963 12.8234 14.8333 9.69377 14.8333C6.56415 14.8333 4.0271 12.2963 4.0271 9.16667C4.0271 6.03705 6.56415 3.5 9.69377 3.5C12.8234 3.5 15.3604 6.03705 15.3604 9.16667Z" stroke="#535052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.0271 17.5L14.4021 13.875" stroke="#535052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    {(toggleMenu || screenWidth > 1024) && (
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
                    )}
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
            </div>
        </header >
    )
}
export default Header2;