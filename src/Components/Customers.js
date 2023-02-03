import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination, Navigation } from "swiper";


function Customers(props) {

    const swiperRef = useRef(null)

    useEffect(() => {
        console.log(swiperRef.current.swiper.rtl)
        swiperRef.current.swiper.rtl = props.isRtl
        swiperRef.current.swiper.rtlTranslate = props.isRtl
        swiperRef.current.swiper.slideToLoop(0)
    }, [props.isRtl])

    return (

        <section className="w-full h-full md:bg-transparent">
            <div className="container xl:px-28 lg:px-16 md:px-32 sm:px-20 px-3 pb-6 mx-auto">
                <h1 className="w-full font-bold text-black pt-8 text-center sm:text-4xl text-2.5xl leading-9 mb-2">Working with a diverse global customer base</h1>
                <div className="flex justify-center items-center text-center mt-10 mb-10">
                    <>
                        <Swiper
                            ref={swiperRef}
                            loop={true}
                            pagination={{
                                el: '.swiper-pagination2',
                                type: 'fraction',
                            }}
                            navigation={{
                                nextEl: ".swiper-button-next1",
                                prevEl: ".swiper-button-prev1"
                            }}
                            
                            // loopPreventsSlide='true'
                            breakpoints={{
                                0: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20,
                                },
                                320: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                420: {
                                    slidesPerView: 4.5,
                                    spaceBetween: 30,
                                },
                                540: {
                                    slidesPerView: 5.5,
                                    spaceBetween:20,
                                },
                                640: {
                                    slidesPerView: 4.5,
                                    spaceBetween: 50,
                                },
                                768: {
                                    slidesPerView: 4.5,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 80,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 5,
                                },
                            }}
                            modules={[Pagination, Navigation]}
                            className="swiper1">
                            <SwiperSlide>
                                <div class="flex px-5 xl:w-56 xl:h-20 lg:w-40 lg:h-16 sm:w-28 sm:h-12 w-24 h-12 items-center justify-center bg-gray-100">
                                    <img src={require('./assets/Group 687.png')} className="lg:w-52 lg:h-18"></img>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex px-5 xl:w-56 xl:h-20 lg:w-40 lg:h-16 sm:w-28 sm:h-12 w-24 h-12 items-center justify-center bg-gray-100">
                                    <img src={require('./assets/Group 688.png')} className="lg:w-48 lg:h-18"></img>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex px-5 xl:w-56 xl:h-20 lg:w-40 lg:h-16 sm:w-28 sm:h-12 w-24 h-12 items-center justify-center bg-gray-100">
                                    <img src={require('./assets/Group 689.png')} className="lg:w-48 lg:h-18"></img>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex px-5 xl:w-56 xl:h-20 lg:w-40 lg:h-16 sm:w-28 sm:h-12 w-24 h-12 items-center justify-center bg-gray-100">
                                    <img src={require('./assets/Group 690.png')} className="lg:w-48 lg:h-18"></img>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex px-5 xl:w-56 xl:h-20 lg:w-40 lg:h-16 sm:w-28 sm:h-12 w-24 h-12 items-center justify-center bg-gray-100">
                                    <img src={require('./assets/Group 691.png')} className="lg:w-48 lg:h-18"></img>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex px-5 xl:w-56 xl:h-20 lg:w-40 lg:h-16 sm:w-28 sm:h-12 w-24 h-12 items-center justify-center bg-gray-100">
                                    <img src={require('./assets/Group 687.png')} className="lg:w-48 lg:h-18"></img>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex px-5 xl:w-56 xl:h-20 lg:w-40 lg:h-16 sm:w-28 sm:h-12 w-24 h-12 items-center justify-center bg-gray-100">
                                    <img src={require('./assets/Group 691.png')} className="lg:w-48 lg:h-18"></img>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex px-5 xl:w-56 xl:h-20 lg:w-40 lg:h-16 sm:w-28 sm:h-12 w-24 h-12 items-center justify-center bg-gray-100">
                                    <img src={require('./assets/Group 692.png')} className="lg:w-48 lg:h-18"></img>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </>
                </div>
                <div className="flex lg:order-2 order-1 justify-center text-gray-400 md:text-gray-400">
                    <button className="swiper-button-prev1 focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" className="me-3" width="60" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></button>
                    <div class="swiper-pagination2"></div>
                    <button className="swiper-button-next1 focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" className="ms-3" width="60" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg></button>
                </div>
            </div>
        </section >
    )
}

export default Customers;