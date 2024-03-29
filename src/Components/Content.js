import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import './style.css';


function Content(props) {

    const swiperRef = useRef(null)

    useEffect(() => {
        console.log(swiperRef.current.swiper.rtl)
        // swiperRef.current.swiper.changeLanguageDirection(props.isRtl)
        // swiperRef.current.swiper.update()
        swiperRef.current.swiper.rtl = props.isRtl
        swiperRef.current.swiper.rtlTranslate = props.isRtl
        swiperRef.current.swiper.slideToLoop(0)
    }, [props.isRtl])

    return (

        <section className="sm:mt-10 lg:mt-0 flex flex-col items-start w-full h-full md:bg-transparent flex-none order-2 flex-grow-0">
            <div className="container sm:px-20 pb-6 mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="flex flex-col flex-none flex-grow-0 text-center w-full">
                        <div class="flex flex-wrap lg:-m-4 -mb-10 lg:space-y-0 space-y-6">
                            <div class="p-4 lg:w-1/2 lg:px-14 px-8 w-full lg:order-1 order-2 flex flex-col lg:items-start items-center">
                                <img src={require('./assets/image.png')} className="lg:w-100 lg:h-92 sm:w-120 sm:h-98 w-80 h-60 lg:mt-36"></img>
                            </div>
                            <>
                                <Swiper
                                    pagination={{
                                        el: '.swiper-pagination1',
                                        type: 'fraction',
                                    }
                                    }
                                    ref={swiperRef}
                                    loop={true}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev"
                                    }}
                                    modules={[Pagination, Navigation]}
                                    className="lg:order-1 order-0 w-full lg:h-3/4 lg:w-1/2"
                                >
                                    <SwiperSlide>
                                        <div class="p-4 lg:px-22 w-full order-0 lg:order-1 flex flex-col text-center">
                                            <img src={require('./assets/udix.png')} className="lg:self-end self-center lg:mt-24"/>
                                            <h1 className="w-full font-bold text-black mt-8 lg:text-end text-center md:text-4xl text-2xl md:leading-10 lg:px-0 px-4">is a leading provider of digital marketing services</h1>
                                            <p className="w-full mt-10 font-normal md:text-base text-sm lg:text-end text-center text-hex lg:px-0 px-4">Using proprietary tools and we run thousands of simultaneous self-funded
                                                campaigns across different platforms such as paid search, social advertising,
                                                mobile and video ads and many more. The campaigns either support our
                                                publishing assets or (in most cases) direct users directly to our clients.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div class="p-4 lg:px-22 w-full order-0 lg:order-1 flex flex-col text-center">
                                            <img src={require('./assets/udix.png')} className="lg:self-end self-center lg:mt-24"/>
                                            <h1 className="w-full font-bold text-black mt-8 lg:text-end text-center md:text-4xl text-2xl md:leading-10 lg:px-0 px-4">is a leading provider of digital marketing services</h1>
                                            <p className="w-full mt-10 font-normal md:text-base text-sm lg:text-end text-center text-hex lg:px-0 px-4">Using proprietary tools and we run thousands of simultaneous self-funded
                                                campaigns across different platforms such as paid search, social advertising,
                                                mobile and video ads and many more. The campaigns either support our
                                                publishing assets or (in most cases) direct users directly to our clients.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div class="p-4 lg:px-22 w-full order-0 lg:order-1 flex flex-col text-center">
                                            <img src={require('./assets/udix.png')} className="lg:self-end self-center lg:mt-24"/>
                                            <h1 className="w-full font-bold text-black mt-8 lg:text-end text-center md:text-4xl text-2xl md:leading-10 lg:px-0 px-4">is a leading provider of digital marketing services</h1>
                                            <p className="w-full mt-10 font-normal md:text-base text-sm lg:text-end text-center text-hex lg:px-0 px-4">Using proprietary tools and we run thousands of simultaneous self-funded
                                                campaigns across different platforms such as paid search, social advertising,
                                                mobile and video ads and many more. The campaigns either support our
                                                publishing assets or (in most cases) direct users directly to our clients.</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </>
                            <div className="flex w-full relative lg:bottom-24 lg:justify-end lg:order-2 order-1 justify-center text-gray-400 md:text-gray-400 mt-6">
                                <button className="swiper-button-prev focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" className="me-3" width="60" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg></button>
                                <div class="swiper-pagination1"></div>
                                <button className="swiper-button-next focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" className="ms-3" width="60" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >

    );
}
export default Content;