import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import './style.css';
import "swiper/css/pagination";


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

    // const read = useRef()

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true)
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore)
        }

        // useEffect(() => {
        //     const checkIfClickedOutside = a => {
        //         // If the menu is open and the clicked target is not within the menu,
        //         // then close the menu
        //         if (isReadMore && read.current && !read.current.contains(a.target)) {
        //             setIsReadMore(false)
        //         }
        //     }

        //     document.addEventListener("mousedown", checkIfClickedOutside)

        //     return () => {
        //         // Cleanup the event listener
        //         document.removeEventListener("mousedown", checkIfClickedOutside)
        //     }
        // }, [isReadMore])

        return (
            <p className="text">
                {isReadMore ? text.slice(0, 125) : text}
                <div className="flex md:mt-8 mt-5 justify-center">
                    <h4 className="font-bold text-red-300 lg:text-start text-center text-base leading-6 me-3"></h4>
                    <button className="flex justify-center focus:outline-none" onClick={toggleReadMore}>
                        <svg width="27" height="12" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L13.6575 10L25 2" stroke="#131313" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </p>
        );
    };
    // const feature = [
    //     {
    //         id: 1,
    //         "title": "The Tanzania Cancer Care Project (TCCP)",
    //         "para": "The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania."
    //     },
    //     {
    //         id: 2,
    //         "title1": "The Tanzania Cancer Care Project (TCCP)",
    //         "para": "The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania."
    //     },
    //     {
    //         id: 3,
    //         "title2": "The Tanzania Cancer Care Project (TCCP)",
    //         "para": "The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania."
    //     }
    // ]

    // {
    //     feature.map((feature, key) => (
    //         <div
    //             key={feature.key}
    //             title={feature.title}
    //         />
    //     ))
    // }
    return (
        <section className="flex flex-col items-start w-full h-full bg-transparent">
            <div className="container mt-8 sm:px-16 px-8 pb-6 mx-auto">
                <h4 className="text-red-500 text-3xl font-bold text-center">Our Partnership Projects</h4>
                <div className="container mx-auto border-b lg:border border-red-500 border-4 lg:w-1/5 w-1/4 flex justify-center mt-5"></div>
                <div className="flex flex-wrap justify-center mt-9">
                    <>
                        <Swiper
                            pagination={{
                                el: '.swiper-pagination3',
                                type: 'bullets'
                            }}
                            ref={swiperRef}
                            loop={true}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            }}
                            modules={[Pagination, Navigation]}
                        >
                            <SwiperSlide>
                                <div className="flex flex-col flex-none flex-grow-0 text-center w-full lg:px-6 mb-20">
                                    <div class="flex flex-wrap lg:-m-4 -mx-4 -mb-10">
                                        <div class="p-4 lg:w-3/5 lg:px-22 w-full order-0 lg:order-1 flex flex-col text-center">
                                            <h1 className="w-full font-bold text-black text-start md:text-4xl text-2xl md:leading-10 mb-2">The Tanzania Cancer Care Project (TCCP)</h1>
                                            <p className="lg:w-9/12 w-full font-normal font-sans md:text-base text-xs text-start text-black">The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.
                                                <p className="text-gray-300 text-start">
                                                    <ReadMore>
                                                        The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT),It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.For over 100 years the Aga Khan Development Network (AKDN) has worked to ensure that students of all ages have access to quality learning opportunities.
                                                    </ReadMore>
                                                </p>
                                            </p>
                                        </div>
                                        <div class="p-4 lg:w-2/5 w-full order-1 lg:order-0 flex items-center flex-col">
                                            <img src={require('./assets/Rectangle 6.png')} className="w-full lg:h-80 sm:h-98 h-60"></img>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col flex-none flex-grow-0 text-center w-full lg:px-6 mb-20">
                                    <div class="flex flex-wrap lg:-m-4 -mx-4 -mb-10">
                                        <div class="p-4 lg:w-3/5 lg:px-22 w-full order-0 lg:order-1 flex flex-col text-center">
                                            <h1 className="w-full font-bold text-black text-start md:text-4xl text-2xl md:leading-10 mb-2">The Tanzania Cancer Care Project (TCCP)</h1>
                                            <p className="lg:w-9/12 w-full font-normal md:text-base text-xs text-start text-black">The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.
                                                <p className="text-gray-300 text-start">
                                                    <ReadMore>
                                                        The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT),It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.For over 100 years the Aga Khan Development Network (AKDN) has worked to ensure that students of all ages have access to quality learning opportunities.
                                                    </ReadMore>
                                                </p>
                                            </p>
                                        </div>
                                        <div class="p-4 lg:w-2/5 w-full order-1 lg:order-0 flex flex-col items-center">
                                            <img src={require('./assets/Rectangle 218.png')} className="w-full lg:h-80 sm:h-98 h-60"></img>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col flex-none flex-grow-0 text-center w-full lg:px-6 mb-20">
                                    <div class="flex flex-wrap lg:-m-4 -mx-4 -mb-10">
                                        <div class="p-4 lg:w-3/5 lg:px-22 w-full order-0 lg:order-1 flex flex-col text-center">
                                            <h1 className="w-full font-bold text-black text-start md:text-4xl text-2xl md:leading-10 mb-2">The Tanzania Cancer Care Project (TCCP)</h1>
                                            <p className="lg:w-9/12 w-full font-normal md:text-base text-xs text-start text-black">The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.
                                                <p className="text-gray-300 text-start">
                                                    <ReadMore>
                                                        The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT),It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.For over 100 years the Aga Khan Development Network (AKDN) has worked to ensure that students of all ages have access to quality learning opportunities.
                                                    </ReadMore>
                                                </p>
                                            </p>
                                        </div>
                                        <div class="p-4 lg:w-2/5 w-full order-1 lg:order-0 flex flex-col items-center">
                                            <img src={require('./assets/Rectangle 6.png')} className="lg:h-80 sm:h-98 w-full h-60"></img>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </>
                    <div className="w-full lg:block flex justify-center lg:order-2 order-1 lg:gap-3 lg:absolute">
                        <div className="lg:flex hidden justify-start absolute -bottom-44 start-8">
                            <button className="swiper-button-prev text-white bg-red-600 focus:outline-none px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="me-3" width="20" height="35" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg>
                            </button>
                        </div>
                        <div class="lg:hidden flex swiper-pagination3 gap-2 justify-center"></div>
                        <div className="lg:flex hidden justify-end absolute -bottom-44 end-8">
                            <button className="swiper-button-next text-white bg-red-600 focus:outline-none px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ms-3" width="20" height="35" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Partners2;