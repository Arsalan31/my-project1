import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import './style.css';

function Featured(props) {
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
        <section>
            <h3 className=" font-bold text-3xl uppercase text-center text-black">Featured Videos</h3>
            <div className="flex flex-wrap justify-center px-5 -mt-9 mb-10">
                <>
                    <Swiper
                        pagination={{
                            el: '.swiper-pagination',
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
                    // className="mySwiper"
                    >
                        <SwiperSlide>
                            <div class="flex flex-wrap md:-m-4 -mx-4 -mb-10 md:mt-36 mt-20 md:space-y-0 space-y-6">
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>
                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="flex flex-wrap md:-m-4 -mx-4 -mb-10 md:mt-36 mt-20 md:space-y-0 space-y-6">
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>
                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="flex flex-wrap md:-m-4 -mx-4 -mb-10 md:mt-36 mt-20 md:space-y-0 space-y-6">
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>
                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="flex flex-wrap md:-m-4 -mx-4 -mb-10 md:mt-36 mt-20 md:space-y-0 space-y-6">
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>
                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="flex flex-wrap md:-m-4 -mx-4 -mb-10 md:mt-36 mt-20 md:space-y-0 space-y-6">
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>
                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="flex flex-wrap md:-m-4 -mx-4 -mb-10 md:mt-36 mt-20 md:space-y-0 space-y-6">
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>
                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="flex flex-wrap md:-m-4 -mx-4 -mb-10 md:mt-36 mt-20 md:space-y-0 space-y-6">
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>
                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                                    <img src={require('./assets/Rectangle 1450.png')}></img>
                                    <div class="flex-grow mt-7">
                                        <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                        <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                        <p class="text-gray-600 text-base text-center px-6 font-medium">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
                <div className="w-full flex justify-center mt-16">
                    <div className="flex justify-start">
                        <button className="swiper-button-prev text-gray-400 focus:outline-none px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="me-3" width="57" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                        </button>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div className="flex justify-end">
                        <button className="swiper-button-next text-gray-400 focus:outline-none px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="ms-3" width="57" height="40" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured;