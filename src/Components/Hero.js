import React, { useState, useEffect } from 'react'
import './style.css';

function Hero() {
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

    }, []);
    const toggle = () => {
        var x = document.getElementById("feature")

        if (x.style.display === "none") {
            x.style.display = "block";
        }

        else {
            x.style.display = "none";
        }
    }
    const toggle1 = () => {
        var x = document.getElementById("partner")

        if (x.style.display === "none") {
            x.style.display = "block";
        }

        else {
            x.style.display = "none";
        }
    }
    const toggle2 = () => {
        var x = document.getElementById("feature")
        var y = document.getElementById("partner")

        if (x.style.display === "block",
            y.style.display === "block") {
            x.style.display = "none";
            y.style.display = "none";
        }

        else {
            x.style.display = "block";
            y.style.display = "block";
        }
    }
    const [toggleButton, setToggleButton] = useState(false)
    const handleClick = () => {
        var x = document.getElementById("feature")
        var y = document.getElementById("partner")

        if (x.style.display === "none",
            y.style.display === "none") {
            x.style.display = "block";
            y.style.display = "block";
        }

        else {
            x.style.display = "none";
            y.style.display = "none";
        }
        setToggleButton(!toggleButton)
    }
    return (
        <hero>
            <div className='background'>

                <h1 id="#Home" className="text-5xl leading-12 pt-56 sm:pt-72 sm:text-7xl sm:leading-16 font-normal w-full text-center text-white">The best products
                    <br className="hidden sm:block" /> start with Figma
                </h1>
                <h4 className='w-full font-normal text-2.5xl leading-10 text-center flex-none flex-grow-0 px-5 mt-10 sm:mt-8 text-white'>Most calendars are designed for teams. <br className="sm:hidden" />Slate is designed
                    <br className="hidden sm:block" /> for freelancers
                </h4>
                <center>
                    <button onClick={toggle} className="text-center  text-white sm:mt-24 mt-16 border-0 py-3 px-4 w-60 h-14 focus:outline-none rounded-4xl bg-blue-0 hover:bg-blue-600">Show/Hide Features</button>
                    <br />
                    <button onClick={toggle1} className="text-center mt-3 text-white  border-0 py-3 px-4 w-60 h-14 focus:outline-none rounded-4xl bg-blue-0 hover:bg-blue-600">Show/Hide Partners</button>
                    <br />

                    {/* <label onClick={handleClick} className="switch mt-3">
                        <input type="checkbox" />
                        <span onClick={toggle2} className="slider" />
                    </label> */}

                    <div className='flex justify-center mt-3'>
                        <div onClick={handleClick} type="checkbox" className='toggle'>
                            {toggleButton ? <div className='toggle-left'></div> :
                                <div className='toggle-right'></div>}
                        </div>
                        <label className="form-check-label inline-block ms-2  text-white" for="flexSwitchCheckChecked">Show Both</label>
                    </div>
                    <br />
                    <label className="switch1 mt-3">
                        <input type="checkbox" />
                        <span className="slider1" />
                    </label>
                </center>
            </div>
        </hero>

    )
}


export default Hero;

