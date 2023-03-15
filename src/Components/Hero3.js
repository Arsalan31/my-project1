import React from "react"
import './style.css';


function Hero3() {
    return (
        <section>
            <div>
                <img src={require('./assets/RVR-quote1.jpg')} />
                <h2 className="w-full absolute flex justify-center text-center top-60 text-4.5xl font-light text-white">
                    <span className="font-black text-green-40">/&nbsp;</span>
                    touring the facility and picking up slack
                    <span className="font-black text-green-40"> &nbsp;/</span>
                </h2>
                <h5 className="text-green-40 w-full absolute flex justify-center text-4xl text-center top-72">
                    are you a guide who needs a map?
                </h5>
            </div>
        </section>
    )
}

export default Hero3;