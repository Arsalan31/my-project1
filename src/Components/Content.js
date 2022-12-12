import React, { Component } from "react";
import Slider from "react-slick";
import './style.css';


export default class SimpleSlider extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (

            <section className="mt-96 lg:mt-0 flex flex-col items-start w-full h-full md:bg-transparent bg-gray-200 flex-none order-2 flex-grow-0">
                <div className="container px-16 pb-6 mx-auto">
                    <div className="flex-wrap justify-center">
                        <Slider {...settings}>
                            <div className="flex flex-col flex-none flex-grow-0 text-center w-full lg:w-1/2 mb-20">
                                <div class="flex flex-wrap lg:-m-4 -mx-4 -mb-10 lg:mt-32 mt-20 lg:space-y-0 space-y-6">
                                    <div class="p-4 lg:w-1/2 lg:px-14 w-full order-1 lg:order-0 flex flex-col text-center items-center">
                                        <div className="image1 lg:w-100 lg:h-92 sm:w-120 sm:h-98 w-70 h-60 lg:mt-36"></div>
                                    </div>
                                    {/* <div class="p-4 lg:w-1/2 lg:px-14 w-full order-0 lg:order-1 flex flex-col text-center items-center">
                                        <div className="image lg:self-end self-center mt-24"></div>
                                        <h1 className="w-full font-bold text-black mt-8 lg:text-end text-center md:text-4xl text-2xl md:leading-10 mb-2">is a leading provider of digital<br className="sm:block" /> marketing services</h1>
                                        <p className="w-full mt-10 font-normal md:text-base text-sm lg:text-end text-center text-hex mb-20">Using proprietary tools and we run thousands of simultaneous self-funded
                                            <br className="sm:block" />campaigns across different platforms such as paid search, social advertising,
                                            <br className="sm:block" />mobile and video ads and many more. The campaigns either support our
                                            <br className="sm:block" /> publishing assets or (in most cases) direct users directly to our clients.</p>
                                    </div> */}
                                    <div class="p-4 lg:w-1/2 lg:px-14 w-full order-0 lg:order-1 flex flex-col text-center items-center">
                                        <div className="image lg:self-end self-center mt-24"></div>
                                        <h1 className="w-full font-bold text-black mt-8 lg:text-end text-center md:text-4xl text-2xl md:leading-10 mb-2">is a leading provider of digital marketing services</h1>
                                        <p className="w-full mt-10 font-normal md:text-base text-sm lg:text-end text-center text-hex mb-20">Using proprietary tools and we run thousands of simultaneous self-funded
                                            campaigns across different platforms such as paid search, social advertising,
                                            mobile and video ads and many more. The campaigns either support our
                                            publishing assets or (in most cases) direct users directly to our clients.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-none flex-grow-0 order-0 lg:order-1 text-center w-full lg:w-1/2 mb-20">
                                <div class="flex flex-wrap lg:-m-4 -mx-4 -mb-10 lg:mt-32 mt-20 lg:space-y-0 space-y-6">
                                    <div class="p-4 lg:w-1/2 lg:px-14 w-full order-1 lg:order-0 flex flex-col text-center items-center">
                                        <div className="image1 lg:w-100 lg:h-92 sm:w-120 sm:h-98 w-70 h-60 lg:mt-36"></div>
                                    </div>
                                    {/* <div class="p-4 lg:w-1/2 lg:px-14 w-full order-0 lg:order-1 flex flex-col text-center items-center">
                                        <div className="image lg:self-end self-center mt-24"></div>
                                        <h1 className="w-full font-bold text-black mt-8 lg:text-end text-center md:text-4xl text-2xl md:leading-10 mb-2">is a leading provider of digital<br className="sm:block" /> marketing services</h1>
                                        <p className="w-full mt-10 font-normal md:text-base text-sm lg:text-end text-center text-hex mb-20">Using proprietary tools and we run thousands of simultaneous self-funded
                                            <br className="sm:block" />campaigns across different platforms such as paid search, social advertising,
                                            <br className="sm:block" />mobile and video ads and many more. The campaigns either support our
                                            <br className="sm:block" /> publishing assets or (in most cases) direct users directly to our clients.</p>
                                    </div> */}
                                    <div class="p-4 lg:w-1/2 lg:px-14 w-full order-0 lg:order-1 flex flex-col text-center items-center">
                                        <div className="image lg:self-end self-center mt-24"></div>
                                        <h1 className="w-full font-bold text-black mt-8 lg:text-end text-center md:text-4xl text-2xl md:leading-10 mb-2">is a leading provider of digital marketing services</h1>
                                        <p className="w-full mt-10 font-normal md:text-base text-sm lg:text-end text-center text-hex mb-20">Using proprietary tools and we run thousands of simultaneous self-funded
                                            campaigns across different platforms such as paid search, social advertising,
                                            mobile and video ads and many more. The campaigns either support our
                                            publishing assets or (in most cases) direct users directly to our clients.</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

        );
    }
}