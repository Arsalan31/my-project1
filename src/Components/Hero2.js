import React from "react";
import './style.css';


function Hero2() {
    return (
        <section>
            <div className="container mt-36 sm:p-14 px-5 py-6 mx-auto bg-white">
                <div className="bg rounded-ts-3xl px-16 pt-32 rounded-te-3xl rounded-bs-3xl rounded-be-7xl">
                    <h3 className="text-6xl lg:w-2/3 w-full lg:text-start text-center text-white font-semibold">Practice your Photography skills with ease</h3>
                    <div className="flex lg:flex-nowrap flex-wrap">
                        <div className="lg:w-3/4 w-full">
                            <h4 className="text-white lg:w-7/12 w-full lg:text-start text-center text-semibold text-xl lg:mt-0 mt-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </h4>
                            <div className="flex lg:justify-start justify-center gap-4 mt-8 pb-10">
                                <button className="text-white px-8 py-2 text-xl font-bold bg-pink-10 rounded-xl focus:outline-none">Get Started</button>
                                <button className="text-white border border-white px-8 py-2 rounded-xl text-xl font-bold focus:outline-none">Discount</button>
                            </div>
                        </div>
                        <div className="lg:w-10/12 w-full lg:-mt-52 mt-16">
                            <img src={require('./assets/Saly-10.png')}></img>
                        </div>
                    </div>
                    {/* <div className="w-1/2 flex content-end">
                        <div className="flex justify-center gap-6 mt-20">
                            <img src={require('./assets/Saly-10.png')}></img>
                        </div>
                    </div> */}
                </div>
            </div>
        </section >
    )
}

export default Hero2;