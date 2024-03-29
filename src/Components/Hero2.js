import React from "react";
import './style.css';

function Hero2() {

    return (
        <section>
            <div className="mx-auto">
                <div className="bg p-12 pt-40 rounded-ts-3xl px-16 rounded-te-3xl rounded-bs-3xl rounded-be-4xl lg:rounded-be-9xl">
                    <h3 className="sm:text-6xl text-4xl leading-12 lg:w-2/3 w-full lg:text-start text-center text-white font-semibold">Practice your Photography skills with ease</h3>
                    <div className="flex lg:flex-nowrap flex-wrap">
                        <div className="lg:w-3/4 w-full">
                            <h4 className="text-white lg:w-7/12 w-full lg:text-start text-center text-semibold text-xl lg:mt-0 mt-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </h4>
                            <div className="flex flex-wrap lg:justify-start justify-center gap-4 mt-8 pb-10">
                                <button className="text-white px-8 py-2 text-xl font-bold bg-pink-10 rounded-xl focus:outline-none">Get Started</button>
                                <button className="text-white border border-white px-8 py-2 rounded-xl text-xl font-bold focus:outline-none">Discount</button>
                            </div>
                        </div>
                        <div className="flex justify-center lg:w-10/12 w-full lg:me-5 lg:-mt-52">
                            <img className="lg:flex hidden" src={require('./assets/Saly-10 1.png')}></img>
                            <img className="lg:hidden flex" src={require('./assets/Saly-10.png')}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero2;