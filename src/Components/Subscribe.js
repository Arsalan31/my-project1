import React, { useState } from "react"

function Subscribe() {
    return (
        <section>
            <div className="container sm:p-20 p-10 mx-auto bg-white">
                <div className="flex justify-end">
                    <img src={require('./assets/Group 77.png')} className="relative sm:h-12 sm:w-12 w-8 h-8 sm:-bottom-7 -bottom-5 -end-2 sm:-end-4"></img>
                </div>
                <div className="flex justify-end">
                    <img className="seemore absolute opacity-10" src={require('./assets/Group 42 (1).png')}></img>
                </div>
                <div className="bg-purple-50 sm:py-20 sm:px-10 p-8 md:rounded-ts-7xl rounded-ts-4xl rounded-ts-3xl rounded-te-3xl rounded-bs-3xl rounded-be-3xl">
                    <h3 className="text-center text-3xl text-purple-650 font-semibold">Subscribe to get information, latest news and other
                        <br />
                        interesting offers about WindTravel
                    </h3>
                    <div className="flex absolute justify-start">
                        <img className="relative md:bottom-12 -bottom-7 opacity-10" src={require('./assets/Group 42.png')}></img>
                    </div>
                    <div className="flex md:flex-nowrap flex-wrap justify-center gap-6 mt-20">
                        <label class="relative text-gray-400 w-2/5 focus-within:text-gray-600 block">
                            <input type="email" id="email" name="email" placeholder="Your Email" className="w-full h-14 bg-white filter drop-shadow-3xl border rounded-2xl border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm font-normal outline-none placeholder-blue-1000 text-blue-1000 p-8 px-14 leading-8 transition-colors duration-200 ease-in-out" />
                            <img src={require('./assets/Group 46.png')} class="text2 pointer-events-none absolute top-6 left-3"></img>
                        </label>
                        <button className="bg-peach-10 lg:w-1/5 md:w-1/3 w-full px-10 h-16 rounded-xl text-white">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="sm:flex hidden justify-end absolute 2xl:end-24 xl:end-28 lg:end-28 sm:end-20">
                    <img src={require('./assets/Group 5.png')} className="sm:flex hidden justify-end relative bottom-24 sm:-end-20"></img>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;