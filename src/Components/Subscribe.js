import React, { useState } from "react"

function Subscribe() {
    return (
        <section>
            <div className="container sm:p-20 mx-auto bg-white">
                <div className="flex justify-end">
                    <img src={require('./assets/Group 77.png')} className="relative h-12 w-12 -bottom-7 -end-4"></img>
                </div>
                <div className="bg-purple-50 sm:py-20 px-10 p-8 rounded-ts-7xl rounded-te-3xl rounded-bs-3xl rounded-be-3xl">
                    <h3 className="text-center text-3xl text-purple-650 font-semibold">Subscribe to get information, latest news and other
                        <br />
                        interesting offers about WindTravel</h3>
                    <div className="flex flex-wrap justify-center gap-6 mt-20">
                        <input type="email" id="email" name="email" placeholder="Your Email" className="text1 lg:w-1/3 w-full h-14 bg-white border rounded-2xl border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm font-normal outline-none placeholder-blue-1000 text-blue-1000 p-8 leading-8 transition-colors duration-200 ease-in-out" />
                        <button className="bg-peach-10 lg:w-1/6 w-full px-10 h-16 rounded-xl text-white">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="lg:flex hidden justify-end">
                    <img src={require('./assets/Group 5.png')} className="relative bottom-24 lg:-end-20"></img>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;