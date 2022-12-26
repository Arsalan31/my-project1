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
                    <div class="flex flex-wrap sm:justify-center justify-start mt-10 ">
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex sm:flex-col text-center sm:items-center sm:border border-b border-gray-300 md:mb-auto mb-7">
                            <div class="flex-grow sm:px-6 sm:py-5 sm:block inline-flex">
                                <div className="aka sm:w-18 sm:h-18 w-18 h-18 sm:ms-0 ms-6">
                                </div>
                                <p className="text-xs sm:hidden flex mt-7 font-bold">Aga Khan Academies</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full h-14 sm:w-60 sm:h-36 flex sm:flex-col text-center sm:items-center sm:border border-b border-gray-300 md:mb-auto mb-7">
                            <div class="sm:flex-grow sm:w-auto w-full flex-none sm:block inline-flex sm:px-6 sm:py-3">
                                <div className="akh sm:h-12 sm:w-42 w-28 h-12"></div>
                                <p class="text-xs font-bold mt-3 sm:w-full w-1/2">Aga Khan Agency For Habitat</p>
                            </div>

                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full h-14 sm:w-60 sm:h-36 flex flex-col text-center sm:items-center sm:border border-b border-gray-300 mb-7">
                            <div class="flex-grow sm:px-6 sm:py-4 sm:block inline-flex">
                                <div className="akm sm:flex hidden sm:h-19 sm:w-48"></div>
                                <div className="akm1 sm:hidden flex sm:h-19 sm:w-48 w-10 h-9"></div>
                                <p class="text-xs sm:hidden flex font-bold mt-2 sm:w-full w-1/2">Aga Khan Agency For Microfinance</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full h-14 sm:w-60 sm:h-36 flex flex-col text-center sm:items-center sm:border border-b border-gray-300 mb-7">
                            <div class="flex-grow sm:px-6 sm:py-5 sm:block inline-flex">
                                <div className="aks sm:h-13 sm:w-36 w-24 h-12"></div>
                                <p class="text-xs font-bold sm:mt-1 mt-3">Aga Khan Education Services</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full h-14 sm:w-60 sm:h-36 flex flex-col text-center sm:items-center sm:border border-b border-gray-300 mb-7">
                            <div class="flex-grow sm:px-6 sm:py-3 sm:block inline-flex">
                                <div className="akf sm:h-15 sm:w-36 w-32 h-15"></div>
                                <p class="text-xs sm:mt-1 mt-6 font-bold">Aga Khan Foundation</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full h-14 sm:w-60 sm:h-36 flex flex-col text-center sm:items-center sm:border border-b border-gray-300 md:mb-7">
                            <div class="flex-grow sm:py-6 sm:block inline-flex">
                                <div className="aked sm:h-10 sm:w-41 xl:ms-14 ms-14"></div>
                                <p class="text-xs font-bold mt-3">Aga Khan Fund For Economic Development</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full h-14 sm:w-60 sm:h-36 flex flex-col text-center sm:items-center sm:border border-b border-gray-300 md:mb-7">
                            <div class="flex-grow sm:px-6 sm:py-3">
                                <div className="akhs sm:flex hidden sm:h-22 sm:w-42"></div>
                                <div className="akhs sm:hidden flex sm:h-22 sm:w-42"></div>
                                <p class="text-xs sm:hidden flex font-bold mt-3">Aga Khan Fund For Economic Development</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full h-14 sm:w-60 sm:h-36 flex flex-col text-center sm:items-center sm:border border-b border-gray-300 md:mb-7">
                            <div class="flex-grow sm:px-6 sm:py-5">
                                <div className="aktc sm:flex hidden sm:h-18 sm:w-42"></div>
                                <div className="aktc sm:hidden flex sm:h-18 sm:w-42"></div>
                                <p class="text-xs sm:hidden flex font-bold mt-3">Aga Khan Fund For Economic Development</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full h-14 sm:w-60 sm:h-36 flex flex-col text-center sm:items-center sm:border border-b border-gray-300 md:mb-7">
                            <div class="flex-grow sm:px-6 sm:py-3 sm:block inline-flex">
                                <div className="aku sm:h-16 sm:w-56"></div>
                                <p class="text-xs font-bold uppercase mt-7">The Aga Khan University</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full h-14 sm:w-60 sm:h-36 flex flex-col text-center sm:items-center sm:border border-b border-gray-300 md:mb-7">
                            <div class="flex-grow sm:px-6 sm:py-3 sm:block inline-flex">
                                <div className="uca sm:w-14 sm:h-14 xl:ms-12 lg:ms-6 md:ms-10 sm:ms-14 ms-16"></div>
                                <p class="text-xs sm:mt-3 font-bold uppercase mt-4">University Of Central Asia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agency;