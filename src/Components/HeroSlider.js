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
                <div className="w-full lg:px-0">
                    <>
                        <Swiper
                            pagination={{
                                el: '.swiper-pagination5',
                                type: 'bullets',
                                clickable: true
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.05,
                                    spaceBetween: 20
                                },
                                1024: {
                                    slidesPerView: 1,
                                },
                            }}
                            ref={swiperRef}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper lg:h-3/4 w-full"
                        >
                            <SwiperSlide>
                                <img className="w-full" src={require('./assets/Rectangle 275.png')} />
                                <div className="lg:bg-white bg-blue-30 backdrop-blur-md">
                                    <h3 className="relative px-4 lg:text-white text-gray-5 lg:bottom-28 lg:font-medium lg:text-4xl text-sm font-bold">AWARDING SUSTAINABLE ARCHITECTURE</h3>
                                    <p className="xl:bottom-28 lg:bottom-32 lg:w-2/3 w-full px-4 py-2 lg:text-white text-gray-5 text-sm font-normal relative">"Sustainable architecture" is now well known, especially as a reaction to the risks inherent in climate change, but the Aga Khan Award for Architecture has been giving out its prize to projects that are good for people and the planet for at least 40 years.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <video className="h-full bg-black w-full" controls poster={require('./assets/Rectangle 275.png')}>
                                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
                                </video>
                                <div className="lg:bg-white bg-blue-30 backdrop-blur-md">
                                    <h3 className="relative px-4 lg:text-white text-gray-5 lg:bottom-28 lg:font-medium lg:text-4xl text-sm font-bold">AWARDING SUSTAINABLE ARCHITECTURE</h3>
                                    <p className="xl:bottom-28 lg:bottom-32 lg:w-2/3 w-full px-4 py-2 lg:text-white text-gray-5 text-sm font-normal relative">"Sustainable architecture" is now well known, especially as a reaction to the risks inherent in climate change, but the Aga Khan Award for Architecture has been giving out its prize to projects that are good for people and the planet for at least 40 years.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="w-full" src={require('./assets/Rectangle 275.png')} />
                                <div className="lg:bg-white bg-blue-30 backdrop-blur-md">
                                    <h3 className="relative px-4 lg:text-white text-gray-5 lg:bottom-28 lg:font-medium lg:text-4xl text-sm font-bold">AWARDING SUSTAINABLE ARCHITECTURE</h3>
                                    <p className="xl:bottom-28 lg:bottom-32 lg:w-2/3 w-full px-4 py-2 lg:text-white text-gray-5 text-sm font-normal relative">"Sustainable architecture" is now well known, especially as a reaction to the risks inherent in climate change, but the Aga Khan Award for Architecture has been giving out its prize to projects that are good for people and the planet for at least 40 years.</p>
                                </div>
                            </SwiperSlide>
                            <div className="w-full relative z-50 2xl:bottom-40 xl:bottom-40 lg:bottom-40 flex 2xl:end-7 lg:end-6 lg:justify-end justify-start">
                                <div className="lg:flex hidden justify-start">
                                    <button className="seemore swiper-button-prev flex justify-center text-gray-400 transform rotate-180 focus:outline-none sm:px-2">
                                        <svg width="7.41" height="15.19" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 13L7 7L1 1" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="lg:px-0 px-2 flex relative lg:w-1/5 w-full lg:mt-0 mt-2 justify-end">
                                    <div class="flex items-center lg:w-1/5 w-full gap-2 swiper-pagination5">
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