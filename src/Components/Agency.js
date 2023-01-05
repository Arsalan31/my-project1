import React from "react";
import './style.css';


function Agency() {
    return (
        <section>
            <div className="container sm:p-12 px-5 py-6 mx-auto bg-white">
                <div className="flex flex-wrap lg:flex-wrap justify-center">
                    <div className="w-2/3">
                        <p className="font-bold sm:text-2xl text-xl uppercase">our agency</p>
                    </div>
                    <div className="flex w-1/3 justify-end">
                        <a href="#" className="flex gap-4 focus:outline-none">
                            <p className="font-medium text-base text-blue-70">See More </p>
                            <svg className="seemore mt-1" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 13L7 7L1 1" stroke="#084C61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <div class="flex flex-wrap sm:justify-center justify-start mt-10 ">
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 sm:flex-col sm:text-center items-start sm:items-center sm:border border-b border-gray-300 md:mb-auto sm:mb-7">
                            <div class="flex-grow sm:px-6 py-5 sm:flex-col sm:items-center items-start inline-flex">
                                {/* <div className="aka sm:-mt-0 -mt-8 sm:w-18 sm:h-18 w-18 h-18">
                                </div> */}
                                <img className="sm:-mt-0 sm:w-18 sm:h-18 h-12 w-20" src={require('./assets/image\ 3.png')}>
                                </img>
                                <p className="text-xs sm:hidden sm:ms-0 ms-9 flex font-bold mt-4">Aga Khan Academies</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col sm:text-center items-start sm:items-center sm:border border-b border-gray-300 md:mb-auto sm:mb-7">
                            <div class="sm:flex-grow sm:w-auto w-full flex-none sm:flex-col sm:items-center items-start inline-flex sm:px-6 py-5">
                                <img className="xl:w-24 sm:h-12 sm:w-20 w-20 h-12" src={require('./assets/Screen Shot 2021-02-27 at 8.14 1.png')}></img>
                                <p class="text-xs sm:ms-0 -ms-5 font-bold mt-3 sm:w-full">Aga Khan Agency For Habitat</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col sm:text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow sm:px-6 py-5 sm:flex-col sm:items-center items-start inline-flex">
                                <img className="sm:w-20 sm:h-15 h-12 w-20" src={require('./assets/Micofinance.png')}></img>
                                <p class="text-xs sm:ms-0 ms-7 flex font-bold w-full sm:mt-0 mt-3">Aga Khan Agency For Microfinance</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col sm:text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow sm:px-6 py-5 sm:flex-col sm:items-center items-start inline-flex">
                                <img className="sm:h-13 sm:w-20 w-20 h-12" src={require('./assets/Screen Shot 2021-02-27 at 8.14 3.png')}></img>
                                <p class="text-xs sm:ms-0 -ms-1 font-bold sm:mt-1 mt-3">Aga Khan Education Services</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col sm:text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow sm:px-6 py-3 sm:flex-col sm:items-center items-start inline-flex">
                                <img className="sm:h-15 sm:w-20 w-20 h-16" src={require('./assets/Screen Shot 2021-02-27 at 8.15 1.png')}></img>
                                <p class="text-xs sm:-ms-0 -ms-3 sm:mt-1 mt-5 font-bold">Aga Khan Foundation</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col sm:text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow py-6 sm:flex-col sm:items-center items-start inline-flex">
                                <img className="h-10 w-20 sm:w-20" src={require('./assets/Screen Shot 2021-02-27 at 8.14 .png')}></img>
                                <p class="text-xs font-bold mt-3">Aga Khan Fund For Economic Development</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col sm:text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow sm:px-6 py-5 sm:flex-col sm:items-center items-start inline-flex">
                                <img className="sm:w-20 sm:h-15 h-12 w-20" src={require('./assets/aku.png')}></img>
                                <p class="text-xs sm:ms-0 ms-8 flex font-bold sm:mt-0 mt-4">Aga Khan Health Services</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col sm:text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow sm:px-6 py-5 sm:flex-col sm:items-center items-start inline-flex">
                                <img className="sm:w-20 sm:h-15 h-12 w-20" src={require('./assets/aktc.png')}></img>
                                <p class="text-xs sm:ms-0 ms-9 flex font-bold sm:mt-0 mt-3">Aga Khan Trust for Culture</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col sm:text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow sm:px-6 py-3 sm:flex-col sm:items-center items-start inline-flex">
                                <img className="h-12 w-20 sm:h-16 sm:w-20" src={require('./assets/Screen Shot 2021-02-27 at 8.14 6.png')}></img>
                                <p class="text-xs font-bold uppercase sm:ms-0 ms-8 sm:mt-1 mt-5">The Aga Khan University</p>
                            </div>
                        </div>
                        <div class="sm:p-4 lg:w-1/5 md:w-1/3 w-full sm:w-60 sm:h-36 flex h-20 flex-col sm:text-center items-start sm:items-center sm:border border-b border-gray-300 sm:mb-7">
                            <div class="flex-grow sm:px-6 py-3 sm:flex-col sm:items-center items-start inline-flex">
                                <img className="h-12 w-20 sm:w-14 sm:h-14" src={require('./assets/Screen Shot 2021-02-27 at 8.14 7.png')}></img>
                                <p class="text-xs sm:ms-0 ms-8 sm:mt-3 font-bold uppercase mt-4">University Of Central Asia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agency;