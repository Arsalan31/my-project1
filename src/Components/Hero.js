import React, { useState} from 'react'
import './style.css';

function Hero(props) {

    console.log(props)

    const toggle = () => {
        props.setShowFeature(!props.ShowFeature)
    }

    const toggle1 = () => {
       props.setShowPartner(!props.showPartner)
    }
    const [showPartner, setShowPartner] = useState(false)
    const handleClick = () => {
        var x = document.getElementById("feature")
        var y = document.getElementById("partner")

        if (x.style.display === "none",
            y.style.display === "none") {
            x.style.display = "block";
            y.style.display = "block";
        }

        else {
            x.style.display = "block";
            y.style.display = "none";
        }
        setShowPartner(!showPartner)
    }

    const [directions, setdirections] = useState(props)
    const setDirection = () => {
        props.setIsRtl(!props.isRtl)
    }

    return (
        <hero className="w-full pb-40 h-full">
            <div className='background h-full w-full bg-no-repeat bg-cover bg-center m-auto'>

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
                        <div onClick={handleClick} type="checkbox" className='toggle cursor-pointer'>
                            {showPartner ? <div className='toggle-end'></div> :
                                <div className='toggle-start'></div>}
                        </div>
                        <label className="form-check-label inline-block ms-2  text-white" for="flexSwitchCheckChecked">Show Both</label>
                    </div>

                    <div className='flex justify-center mt-3'>
                    <label className="form-check-label inline-block me-2  text-white" for="flexSwitchCheckChecked">LTR</label>
                        <div onClick={setDirection} type="checkbox" className='toggle cursor-pointer'>
                            {directions ? <div className='toggle-end'></div> :
                                <div className='toggle-start'></div>}
                        </div>
                        <label className="form-check-label inline-block ms-2  text-white" for="flexSwitchCheckChecked">RTL</label>
                    </div>
                    {/* <label className="form-check-label inline-block me-2  text-white">LTR</label>
                    <label className="switch mt-3">
                        <input type="checkbox" />
                        <span onClick={setDirection} className="slider" />
                    </label>
                    <label className="form-check-label inline-block ms-2  text-white">RTL</label> */}
                </center>
            </div>
        </hero>

    )
}


export default Hero;

