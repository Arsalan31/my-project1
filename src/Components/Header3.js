import React, { useEffect, useRef, useState } from "react";
import './style.css';


function Header3() {
    return (
        <header className="w-full fixed">
            <div className="h-32 mx-auto container justify-center flex">
                <img className="h-full" src={require('./assets/RVR-sticky.png')} />
                <div className="list-none flex w-2/3 justify-end items-center">
                    <li>
                        <a href="#Solution" className="text-white text-base font-medium px-3">Solutions</a>
                    </li>
                    <li>
                        <a className="text-white text-base font-medium px-3">Our Process</a>
                    </li>
                    <li>
                        <a className="text-white text-base font-medium px-3">Organizational Development</a>
                    </li>
                    <li>
                        <a className="text-white text-base font-medium px-3">About</a>
                    </li>
                    <li>
                        <a className="text-white text-base font-medium px-3">Contact</a>
                    </li>
                </div>
            </div>
        </header>
    )
}

export default Header3;