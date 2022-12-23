import React from "react";
import './style.css';


function Agency() {
    return (
        <section>
            <div className="container sm:p-14 p-2 py-6 mx-auto bg-white">
                <div className="flex flex-wrap lg:flex-wrap justify-center">
                    <div className="w-1/2">
                        <p className="font-bold sm:text-2xl text-xl uppercase">our agency</p>
                    </div>
                    <div className="sm:flex hidden w-1/2 justify-end">
                        <p className="font-medium text-base text-blue-70">How We Work </p>
                    </div>
                    <div className="flex sm:hidden w-1/2 justify-end">
                        <p className="font-medium text-base text-blue-70">See More </p>
                    </div>
                    <div class="flex flex-wrap justify-center mt-10 ">
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex flex-col text-center items-center border border-gray-300 md:mb-auto mb-7">
                            <div class="flex-grow px-6 py-5">
                                <div className="aka sm:ms-0 ms-6">
                                </div>
                                <p className="text-xs sm:hidden flex font-bold">Aga Khan Academies</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex sm:flex-col flex-row text-center items-center border border-gray-300 md:mb-auto mb-7">
                            <div class="sm:flex-grow sm:w-auto w-full flex-none px-6 py-3">
                                <div className="akh"></div>
                                <p class="text-xs font-bold mt-3">Aga Khan Agency For Habitat</p>
                            </div>

                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex flex-col text-center items-center border border-gray-300 mb-7">
                            <div class="flex-grow px-6 py-4">
                                <div className="akm"></div>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex flex-col text-center items-center border border-gray-300 mb-7">
                            <div class="flex-grow px-6 py-5">
                                <div className="aks"></div>
                                <p class="text-xs font-bold mt-1">Aga Khan Education Services</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex flex-col text-center items-center border border-gray-300 mb-7">
                            <div class="flex-grow px-6 py-3">
                                <div className="akf"></div>
                                <p class="text-xs mt-1 font-bold">Aga Khan Foundation</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex flex-col text-center items-center border border-gray-300 md:mb-7">
                            <div class="flex-grow py-6">
                                <div className="aked xl:ms-14 ms-14"></div>
                                <p class="text-xs font-bold mt-3">Aga Khan Fund For Economic Development</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex flex-col text-center items-center border border-gray-300 md:mb-7">
                            <div class="flex-grow px-6 py-3">
                                <div className="akhs"></div>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex flex-col text-center items-center border border-gray-300 md:mb-7">
                            <div class="flex-grow px-6 py-5">
                                <div className="aktc"></div>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex flex-col text-center items-center border border-gray-300 md:mb-7">
                            <div class="flex-grow px-6 py-3">
                                <div className="aku"></div>
                                <p class="text-xs font-bold uppercase">The Aga Khan University</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex flex-col text-center items-center border border-gray-300 md:mb-7">
                            <div class="flex-grow px-6 py-3">
                                <div className="uca xl:ms-14 ms-14"></div>
                                <p class="text-xs mt-3 font-bold uppercase">University Of Central Asia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agency;