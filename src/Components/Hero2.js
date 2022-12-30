import React from "react";
import './style.css';


function Hero2() {
    return (
        <section>
            <div className="container mt-36 sm:p-14 px-5 py-6 mx-auto bg-white">
                <div className="bg rounded-ts-3xl p-20 rounded-te-3xl rounded-bs-3xl rounded-be-7xl">
                    <div className="">
                        <h3 className="text-start text-6xl w-8/12 text-white font-semibold">Practice your Photography skills with ease</h3>
                        <h4 className="text-white w-1/3 text-semibold text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </h4>
                        <div className="flex gap-4 mt-8">
                            <button className="text-white px-8 py-2 text-xl font-bold bg-pink-10 rounded-xl">Get Started</button>
                            <button className="text-white border border-white px-8 py-2 rounded-xl text-xl font-bold">Discount</button>
                        </div>
                    </div>
                    <div className="w-1/2 flex content-end">
                        <div className="flex justify-center gap-6 mt-20">
                            <img src={require('./assets/Saly-10.png')}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero2;