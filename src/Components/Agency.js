import React from "react";
import './style.css';


function Agency() {
    return (
        <section>
            <div className="container sm:p-14 px-5 py-6 mx-auto bg-white">
                <div className="flex flex-wrap lg:flex-wrap justify-center">
                    <div className="w-2/3">
                        <p className="font-bold sm:text-2xl text-xl uppercase">our agency</p>
                    </div>
                    <div className="flex w-1/3 justify-end">
                        <a href="#" className="flex gap-4 focus:outline-none">
                            <p className="font-medium text-base text-blue-70">See More </p>
                            <svg className="mt-1" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 13L7 7L1 1" stroke="#084C61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <div class="flex flex-wrap sm:justify-center justify-start mt-10 ">
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 sm:flex-col text-center items-start sm:items-center sm:border border-b border-gray-300 md:mb-auto sm:mb-7">
                            <div class="flex-grow sm:px-6 py-5 sm:block inline-flex">
                                <div className="aka sm:-mt-0 -mt-8 sm:w-18 sm:h-18 w-18 h-18">
                                </div>
                                <p className="text-xs sm:hidden sm:ms-0 ms-5 flex font-bold">Aga Khan Academies</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 sm:flex-col text-center items-start sm:items-center sm:border border-b border-gray-300 md:mb-auto sm:mb-7">
                            <div class="sm:flex-grow sm:w-auto w-full flex-none sm:block inline-flex sm:px-6 py-3">
                                <div className="akh sm:-ms-0 -ms-14 sm:h-12 sm:w-42 w-28 h-12"></div>
                                <p class="text-xs sm:ms-0 ms-3 font-bold mt-3 sm:w-full">Aga Khan Agency For Habitat</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow sm:px-6 py-7 sm:block inline-flex">
                                <div className="akm flex xl:ms-16 lg:ms-7 sm:ms-12 sm:h-9 sm:w-12 w-12 h-9 bg-no-repeat"></div>
                                <p class="text-xs sm:ms-0 ms-6 flex font-bold mt-2 w-full">Aga Khan Agency For Microfinance</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow sm:px-6 py-5 sm:block inline-flex">
                                <div className="aks sm:-ms-0 -ms-12 sm:h-13 sm:w-36 w-24 h-12"></div>
                                <p class="text-xs sm:ms-0 ms-4 font-bold sm:mt-1 mt-3">Aga Khan Education Services</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow sm:px-6 py-3 sm:block inline-flex">
                                <div className="akf sm:-ms-0 -ms-12 sm:h-15 sm:w-36 w-32 h-15"></div>
                                <p class="text-xs sm:-ms-0 -ms-4 sm:mt-1 mt-6 font-bold">Aga Khan Foundation</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow py-6 sm:block inline-flex">
                                <div className="aked -ms-10 h-10 w-36 xl:ms-12 lg:ms-7 sm:ms-11"></div>
                                <p class="text-xs sm:-ms-0 -ms-10 font-bold mt-3">Aga Khan Fund For Economic Development</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow sm:px-6 py-3 sm:block inline-flex">
                                <div className="akhs flex xl:ms-12 lg:ms-7 sm:ms-12 h-10 w-11"></div>
                                <p class="text-xs sm:ms-0 ms-5 flex font-bold mt-3">Aga Khan Health Services</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow sm:px-6 py-5 sm:block inline-flex">
                                <div className="aktc flex xl:ms-12 lg:ms-7 sm:ms-12 h-7 w-11"></div>
                                <p class="text-xs sm:ms-0 ms-5 flex font-bold mt-3">Aga Khan Trust for Culture</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow sm:px-6 py-3 sm:block inline-flex">
                                <div className="aku -ms-4 sm:ms-8 h-16 w-20 sm:h-16 sm:w-20"></div>
                                <p class="text-xs font-bold uppercase sm:mt-0 mt-7">The Aga Khan University</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow sm:px-6 py-3 sm:block inline-flex">
                                <div className="uca -ms-2 w-14 h-14 sm:w-14 sm:h-14 xl:ms-12 lg:ms-6 md:ms-10 sm:ms-14"></div>
                                <p class="text-xs sm:ms-0 ms-4 sm:mt-3 font-bold uppercase mt-4">University Of Central Asia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agency;