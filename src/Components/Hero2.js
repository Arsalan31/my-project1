import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import './style.css';
import "swiper/css/pagination";


function Hero2(props) {
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
            <div className="mx-auto pt-24">
                <div className="bg p-12 pt-32 rounded-ts-3xl px-16 rounded-te-3xl rounded-bs-3xl rounded-be-4xl lg:rounded-be-9xl">
                    <h3 className="sm:text-6xl text-4xl leading-12 lg:w-2/3 w-full lg:text-start text-center text-white font-semibold">Practice your Photography skills with ease</h3>
                    <div className="flex lg:flex-nowrap flex-wrap">
                        <div className="lg:w-3/4 w-full">
                            <h4 className="text-white lg:w-7/12 w-full lg:text-start text-center text-semibold text-xl lg:mt-0 mt-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </h4>
                            <div className="flex flex-wrap lg:justify-start justify-center gap-4 mt-8 pb-10">
                                <button className="text-white px-8 py-2 text-xl font-bold bg-pink-10 rounded-xl focus:outline-none">Get Started</button>
                                <button className="text-white border border-white px-8 py-2 rounded-xl text-xl font-bold focus:outline-none">Discount</button>
                            </div>
                        </div>
                        <div className="flex justify-center lg:w-10/12 w-full lg:me-5 lg:-mt-52">
                            <img className="lg:flex hidden" src={require('./assets/Saly-10 1.png')}></img>
                            <img className="lg:hidden flex" src={require('./assets/Saly-10.png')}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <>
                    <Swiper
                        pagination={{
                            el: '.swiper-pagination5',
                            type: 'bullets',
                        }
                        }
                        ref={swiperRef}
                        loop={true}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper w-full lg:h-3/4 lg:w-1/2"
                    >
                        <SwiperSlide>
                            <img src={require('./assets/Rectangle 275.png')} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={require('./assets/Rectangle 275.png')} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={require('./assets/Rectangle 275.png')} />
                        </SwiperSlide>
                        <div className="w-full flex justify-center xl:mt-16">
                            <div className="flex justify-start">
                                <button className="swiper-button-prev text-gray-400 focus:outline-none sm:px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="me-3" width="57" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex justify-center w-full">
                                <div class="flex justify-center sm:gap-5 gap-2 mt-3 swiper-pagination5"></div>
                            </div>
                            <div className="flex justify-end">
                                <button className="swiper-button-next text-gray-400 focus:outline-none sm:px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ms-3" width="57" height="40" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Swiper>
                </>
            </div>
        </section >
    )
}

export default Hero2;