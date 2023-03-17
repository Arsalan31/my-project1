import React, { useState } from "react"
import './style.css';


function Hero3(props) {

    console.log(props);

    const [directions, setdirections] = useState(props)
    const setDirection = () => {
        props.setIsRtl(!props.isRtl)
    }

    return (
        <section className="h-full ">
            <div className="background1 w-full h-full">
                <h2 className="w-full flex justify-center pt-40 text-center text-4.5xl font-light text-white">
                    <p className="font-black text-green-40">/&nbsp;</p>
                    touring the facility and picking up slack
                    <p className="font-black text-green-40"> &nbsp;/</p>
                </h2>
                <h5 className="text-green-40 w-full flex justify-center text-4xl text-center">
                    are you a guide who needs a map?
                </h5>
                <div className="w-full flex justify-center">
                    <div className='flex justify-center mt-5'>
                        <label className="form-check-label inline-block me-2  text-white" for="flexSwitchCheckChecked">LTR</label>
                        <div onClick={setDirection} type="checkbox" className='toggle cursor-pointer'>
                            {directions ? <div className='toggle-end'></div> :
                                <div className='toggle-start'></div>}
                        </div>
                        <label className="form-check-label inline-block ms-2  text-white" for="flexSwitchCheckChecked">RTL</label>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero3;