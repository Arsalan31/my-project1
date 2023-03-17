import React, { useState } from "react"
import './style.css';


function Hero3(props) {

    console.log(props);

    const [directions, setdirections] = useState(props)
    const setDirection = () => {
        props.setIsRtl(!props.isRtl)
    }

    return (
        <section>
            <div>
                <img className="bg-cover bg-fixed bg-center w-full" src={require('./assets/RVR-quote1.jpg')} />
                <h2 className="w-full absolute flex justify-center text-center top-60 text-4.5xl font-light text-white">
                    <p className="font-black text-green-40">/&nbsp;</p>
                    touring the facility and picking up slack
                    <p className="font-black text-green-40"> &nbsp;/</p>
                </h2>
                <h5 className="text-green-40 w-full absolute flex justify-center text-4xl text-center top-72">
                    are you a guide who needs a map?
                </h5>
                <div className="absolute w-full flex justify-center top-80">
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