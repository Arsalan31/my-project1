import React, { useState } from "react"

function Subscribe() {
    return (
        <section>
            <div className="container mt-36 sm:p-14 px-5 py-6 mx-auto bg-white">
                <div className="bg-purple-50 rounded-ts-7xl p-20 rounded-te-3xl rounded-bs-3xl rounded-be-3xl">
                    <h3 className="text-center text-3xl text-purple-650 font-semibold">Subscribe to get information, latest news and other
                        <br />
                        interesting offers about WindTravel</h3>
                    <div className="flex flex-wrap justify-center gap-6 mt-20">
                        <label for="email" className="leading-7 text-sm text-black"></label>
                        <input type="email" id="email" name="email" placeholder="Your Email" className="lg:w-1/3 w-full h-14 placeholder-black bg-white border rounded-2xl border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm font-normal outline-none text-blue-1000 p-8 leading-8 transition-colors duration-200 ease-in-out" />
                        <button className="bg-peach-10 px-16 h-14 rounded-xl text-white">
                                Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;