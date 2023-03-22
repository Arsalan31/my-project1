import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import './style.css';


function Header3() {

    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }


    return (
        <header className="w-full lg:fixed">
            <div className="lg:bg-transparent bg-blue-80">
                <div className="h-24 flex-wrap lg:mx-auto lg:container items-center justify-center flex">
                    <button onClick={toggleNav} className="lg:hidden flex justify-end items-center p-2 ms-3 text-sm hover:text-green-40">
                        <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", }} />
                    </button>
                    <a className="lg:flex hidden" href="rivers-roads">
                        <img className="h-full" src={require('./assets/RVR-sticky.png')} />
                    </a>
                    <a href="rivers-roads" className="lg:hidden flex justify-center w-3/4 h-full">
                        <img className="h-full" src={require('./assets/RVR-sticky.png')} />
                    </a>
                    {(toggleMenu) && (
                        <div className="lg:px-0 px-5 list-none justify-center flex lg:flex-row flex-col lg:bg-transparent bg-blue-80 lg:w-2/3 w-full lg:justify-end lg:items-center">
                            <li className="lg:py-0 py-3 lg:border-b-0 border-b border-white">
                                <a href="#Solution" className="text-white text-base font-medium px-3">Solutions</a>
                            </li>
                            <li className="lg:py-0 py-3 lg:border-b-0 border-b border-white">
                                <a className="text-white text-base font-medium px-3">Our Process</a>
                            </li>
                            <li className="lg:py-0 py-3 lg:border-b-0 border-b border-white">
                                <a className="text-white text-base font-medium px-3">Organizational Development</a>
                            </li>
                            <li className="lg:py-0 py-3 lg:border-b-0 border-b border-white">
                                <a className="text-white text-base font-medium px-3">About</a>
                            </li>
                            <li className="lg:py-0 py-3">
                                <a className="text-white text-base font-medium px-3">Contact</a>
                            </li>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header3;