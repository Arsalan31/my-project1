import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import './style.css';


function Partners2(props) {

    const swiperRef = useRef(null)

    useEffect(() => {
        console.log(swiperRef.current.swiper.rtl)
        // swiperRef.current.swiper.changeLanguageDirection(props.isRtl)
        // swiperRef.current.swiper.update()
        swiperRef.current.swiper.rtl = props.isRtl
        swiperRef.current.swiper.rtlTranslate = props.isRtl
        swiperRef.current.swiper.slideToLoop(0)
    }, [props.isRtl])

    const feature = [
        {
            "title": "Title 1"
        },
        {
            "title": "Title 2"
        }
    ]

    return (
        <section className="sm:mt-10 lg:mt-0 flex flex-col items-start w-full h-full md:bg-transparent bg-gray-200 flex-none order-2 flex-grow-0">
            <div className="container mt-8 sm:px-16 px-8 pb-6 mx-auto">
                <h4 className="text-red-500 text-3xl font-bold text-center">Our Partnership Projects</h4>
                <div className="container mx-auto border-gray-400 border-b w-1/5 flex justify-center mt-5"></div>
                <div className="flex flex-wrap justify-center mt-32">
                    <>
                        <Swiper
                            pagination={{
                                el: '.swiper-pagination1',
                                dynamicBullets: true,
                            }
                            }
                            ref={swiperRef}
                            loop={true}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            }}
                            modules={[Pagination, Navigation]}
                        >
                            <SwiperSlide>
                                <div className="flex flex-col flex-none flex-grow-0 text-center w-full mb-20">
                                    <div class="flex flex-wrap lg:-m-4 -mx-4 -mb-10 lg:space-y-0 space-y-6">
                                        <div class="p-4 lg:w-3/5 lg:px-22 w-full order-0 lg:order-1 flex flex-col text-center">
                                            <h1 className="w-full font-bold text-black mt-8 lg:text-start text-center md:text-4xl text-2xl md:leading-10 mb-2">The Tanzania Cancer Care Project (TCCP)</h1>
                                            <p className="w-full mt-10 font-normal md:text-base text-sm lg:text-start text-center text-hex lg:mb-20">The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.
                                                <p className="text-gray-300 text-start">The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT), </p>
                                            </p>
                                        </div>
                                        <div class="p-4 lg:w-2/5 lg:px-14 w-full order-1 lg:order-0 flex flex-col">
                                            <img src={require('./assets/Rectangle 6.png')} className="image1 lg:w-98 lg:h-80 sm:w-120 sm:h-98 w-80 h-60"></img>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col flex-none flex-grow-0 order-0 lg:order-1 text-center w-full mb-20">
                                    <div class="flex flex-wrap lg:-m-4 -mx-4 -mb-10 lg:space-y-0 space-y-6">
                                        <div class="p-4 lg:w-3/5 lg:px-22 w-full order-0 lg:order-1 flex flex-col text-center">
                                            <h1 className="w-full font-bold text-black mt-8 lg:text-start text-center md:text-4xl text-2xl md:leading-10 mb-2">The Tanzania Cancer Care Project (TCCP)</h1>
                                            <p className="w-full mt-10 font-normal md:text-base text-sm lg:text-start text-center text-hex lg:mb-20">The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.
                                                <p className="text-gray-300 text-start">The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT), </p>
                                            </p>
                                        </div>
                                        <div class="p-4 lg:w-2/5 lg:px-14 w-full order-1 lg:order-0 flex flex-col lg:items-start items-center">
                                            <img src={require('./assets/Rectangle 6.png')} className="image1 lg:w-98 lg:h-80 sm:w-120 sm:h-98 w-80 h-60"></img>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col flex-none flex-grow-0 order-0 lg:order-1 text-center w-full mb-20">
                                    <div class="flex flex-wrap lg:-m-4 -mx-4 -mb-10 lg:space-y-0 space-y-6">
                                        <div class="p-4 lg:w-3/5 lg:px-22 w-full order-0 lg:order-1 flex flex-col text-center">
                                            <h1 className="w-full font-bold text-black mt-8 lg:text-start text-center md:text-4xl text-2xl md:leading-10 mb-2">The Tanzania Cancer Care Project (TCCP)</h1>
                                            <p className="w-full mt-10 font-normal md:text-base text-sm lg:text-start text-center text-hex lg:mb-20">The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.
                                                <p className="text-gray-300 text-start">The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT), </p>
                                            </p>
                                        </div>
                                        <div class="p-4 lg:w-2/5 lg:px-14 w-full order-1 lg:order-0 flex flex-col lg:items-start items-center">
                                            <img src={require('./assets/Rectangle 6.png')} className="image1 lg:w-98 lg:h-80 sm:w-120 sm:h-98 w-80 h-60"></img>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </>
                    <div className="flex w-full lg:justify-end lg:order-2 order-1 justify-center text-gray-400 md:text-gray-400">
                        {/* <button className="swiper-button-prev focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" className="me-3" width="60" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg></button> */}
                        <div class="swiper-pagination1 justify-center"></div>
                        {/* <button className="swiper-button-next focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" className="ms-3" width="60" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></button> */}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Partners2;