import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import './style.css';
import "swiper/css/pagination";


function HeroSlider(props) {
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
            <div className="py-10">
                <div className="w-full">
                    <>
                        <Swiper
                            pagination={{
                                el: '.swiper-pagination5',
                                type:'bullets'
                            }
                            }
                            ref={swiperRef}
                            loop={true}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper lg:h-3/4 w-11/12"
                        >
                            <SwiperSlide>
                                <img src={require('./assets/Rectangle 275.png')} />
                                <div className="lg:bg-white bg-blue-30 backdrop-blur-md">
                                    <h3 className="relative px-3 lg:text-white text-gray-5 lg:bottom-28 lg:font-medium lg:text-4xl text-sm font-bold">AWARDING SUSTAINABLE ARCHITECTURE</h3>
                                    <p className="lg:bottom-24 w-2/3 px-3 lg:text-white text-gray-5 text-sm font-normal relative">"Sustainable architecture" is now well known, especially as a reaction to the risks inherent in climate change, but the Aga Khan Award for Architecture has been giving out its prize to projects that are good for people and the planet for at least 40 years.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <video className="rounded-t-2xl h-full bg-black w-full" controls poster={require('./assets/Rectangle 275.png')}>
                                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
                                </video>
                                <div className="lg:bg-white bg-blue-30 backdrop-blur-md">
                                    <h3 className="relative px-3 lg:text-white text-gray-5 lg:bottom-28 lg:font-medium lg:text-4xl text-sm font-bold">AWARDING SUSTAINABLE ARCHITECTURE</h3>
                                    <p className="lg:bottom-24 w-2/3 px-3 lg:text-white text-gray-5 text-sm font-normal relative">"Sustainable architecture" is now well known, especially as a reaction to the risks inherent in climate change, but the Aga Khan Award for Architecture has been giving out its prize to projects that are good for people and the planet for at least 40 years.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require('./assets/Rectangle 275.png')} />
                                <div className="lg:bg-white bg-blue-30 backdrop-blur-md">
                                    <h3 className="relative px-3 lg:text-white text-gray-5 lg:bottom-28 lg:font-medium lg:text-4xl text-sm font-bold">AWARDING SUSTAINABLE ARCHITECTURE</h3>
                                    <p className="lg:bottom-24 w-2/3 px-3 lg:text-white text-gray-5 text-sm font-normal relative">"Sustainable architecture" is now well known, especially as a reaction to the risks inherent in climate change, but the Aga Khan Award for Architecture has been giving out its prize to projects that are good for people and the planet for at least 40 years.</p>
                                </div>
                            </SwiperSlide>
                            <div className="w-full relative z-50 xl:bottom-32 lg:bottom-36 flex lg:justify-end justify-start">
                                <div className="lg:flex hidden justify-start">
                                    <button className="seemore swiper-button-prev flex justify-center text-gray-400 transform rotate-180 focus:outline-none sm:px-2">
                                        <svg width="7.41" height="15.19" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 13L7 7L1 1" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex relative lg:mt-0 mt-2 justify-center">
                                    <div class="flex items-center gap-2 swiper-pagination5">
                                    </div>
                                </div>
                                <div className="lg:flex hidden justify-end">
                                    <button className="seemore swiper-button-next text-gray-400 focus:outline-none sm:px-2">
                                        <svg width="7.41" height="15.19" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 13L7 7L1 1" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Swiper>
                    </>
                </div>
            </div>
        </section>
    )
}

export default HeroSlider;