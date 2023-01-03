import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './style.css';

// import required modules
import { Pagination } from "swiper";

function Featured() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div class="flex flex-wrap md:-m-4 -mx-4 -mb-10 md:mt-36 mt-20 md:space-y-0 space-y-6">
                        <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                            <img src={require('./assets/Rectangle 1450.png')}></img>
                            <div class="flex-grow mt-7">
                                <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                <p class="text-hex text-lg text-center font-normal">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                            <img src={require('./assets/Rectangle 1450.png')}></img>
                            <div class="flex-grow mt-7">
                                <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                <p class="text-lg text-hex text-center font-normal">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 lg:px-14 w-full flex flex-col text-center items-center">
                            <img src={require('./assets/Rectangle 1450.png')}></img>
                            <div class="flex-grow mt-7">
                                <h2 class="text-center font-bold text-3xl text-black mb-3">Warm Invitation</h2>
                                <h3 class="text-center font-medium text-base text-black mb-3">You're invited to SIGNAL 2021</h3>
                                <p class="text-lg text-hex text-center font-normal">Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    )
}

export default Featured;