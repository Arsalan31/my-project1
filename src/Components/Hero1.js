import React, { useState } from "react"
import './style.css';

function Hero1(props) {

    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <p className="extra-content sm:px-0 px-10 font-normal text-2xl leading-9 lg:text-start text-center flex-none flex-grow-0 text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
    </div>
    const linkName = readMore ? 'Read Less << ' : 'Read More >>'

    console.log(props)

    const [directions, setdirections] = useState(props)
    const setDirection = () => {
        props.setIsRtl(!props.isRtl)
    }

    return (
        <section className="sm:pb-52 pb-80 lg:pb-0">
            <div className="background2">
                <div className="container flex flex-wrap mx-auto lg:pt-72 pt-32 justify-center">
                    <div className="lg:w-1/2 pt-7 w-full">
                        <div className="flex lg:justify-start justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.757 0.494555L13.3899 6.07863L19.2779 6.97258C19.5957 7.02188 19.8595 7.2556 19.9588 7.57561C20.0577 7.89562 19.9753 8.24668 19.7455 8.48237L15.4827 12.8293L16.4905 18.9691C16.5432 19.3004 16.4128 19.6348 16.1533 19.8325C16.0087 19.9419 15.8345 20.0006 15.6565 19.9991C15.5199 20.0011 15.3857 19.9661 15.2656 19.8981L9.99977 16.9998L4.73392 19.8981C4.44995 20.0548 4.10571 20.0292 3.84576 19.832C3.58581 19.6347 3.45537 19.3004 3.50905 18.9691L4.51682 12.8293L0.254039 8.48237C0.0247002 8.24668 -0.0577112 7.89562 0.0411823 7.57561C0.140547 7.2556 0.404264 7.02188 0.722137 6.97258L6.61007 6.07863L9.243 0.494555C9.38428 0.191807 9.67813 0 9.99977 0C10.3219 0 10.6157 0.191807 10.757 0.494555Z" fill="white" />
                            </svg>
                            <h5 className="ms-3 text-white font-bold text-base leading-6">Top market company</h5>
                        </div>
                        <h1 id="#Home" className="text-6xl leading-12 sm:text-6xl mt-5 font-bold w-full  lg:text-start text-center text-red-300">Focus on the
                            <br className="hidden sm:block" /> work that <br className="hidden sm:block" /> matters
                        </h1>
                        <h4 className='lg:w-2/3 sm:px-0 px-10 font-normal text-2xl leading-9 lg:text-start text-center flex-none flex-grow-0 mt-10 sm:mt-8 text-white'>udix is the world's first smart workspace.We bring all your team's content together while letting you use the tools you love.{readMore && extraContent}
                        </h4>
                        <div className="flex sm:mt-20 md:mt-8 mt-5 lg:justify-start justify-center">
                            <h4 className="font-bold text-red-300 lg:text-start text-center text-base leading-6 me-3">Read More</h4>
                            <button onClick={() => { setReadMore(!readMore) }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47716 2 2 6.47715 2 12ZM3.29016e-06 12C3.00047e-06 18.6274 5.37259 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 -2.34843e-07 12 -5.24537e-07C5.37259 -8.1423e-07 3.57985e-06 5.37258 3.29016e-06 12Z" fill="#FFA3A3" />
                                    <path d="M7.80179 9.42772C8.21765 8.99019 8.90301 8.99023 9.3188 9.4279L12 12.2501L14.681 9.42799C15.0969 8.99045 15.7823 8.99023 16.1982 9.42791C16.6004 9.85119 16.6004 10.5275 16.1983 10.9507L12.7584 14.5715C12.5535 14.787 12.2788 14.8996 12 14.8996C11.721 14.8996 11.4461 14.7868 11.2414 14.5713L7.80162 10.9506C7.39942 10.5274 7.39944 9.85098 7.80179 9.42772Z" fill="#FFA3A3" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <div className='flex lg:justify-start justify-center mt-5'>
                                <label className="form-check-label inline-block me-2  text-white" for="flexSwitchCheckChecked">LTR</label>
                                <div onClick={setDirection} type="checkbox" className='toggle cursor-pointer'>
                                    {directions ? <div className='toggle-end'></div> :
                                        <div className='toggle-start'></div>}
                                </div>
                                <label className="form-check-label inline-block ms-2  text-white" for="flexSwitchCheckChecked">RTL</label>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/5 xl:w-1/3 sm:w-2/3 lg:mt-0 w-4/5 mt-16 justify-center">
                        <div className="bg-white flex flex-nowrap">
                            <div className="sm:w-2/3 w-full flex flex-col sm:p-10 p-8">
                                <h3 className="con-1 h-7 font-bold sm:text-2xl text-xl text-black flex-none flex-grow-0 text-start mb-5">Get started now</h3>
                                <div className="relative mb-5">
                                    <label for="name" className="leading-7 text-sm text-gray-600"></label>
                                    <input type="text" id="name" name="name" placeholder="Your Name" className="w-full h-14 placeholder-gray-400 border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-5">
                                    <label for="email" className="leading-7 text-sm text-black"></label>
                                    <input type="email" id="email" name="email" placeholder="Your Email" className="w-full h-14 placeholder-gray-400 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-5">
                                    <label for="email" className="leading-7 text-sm text-black"></label>
                                    <input type="email" id="email" name="email" placeholder="Phone Number" className="w-full h-14 placeholder-gray-400 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-8">
                                    <label for="email" className="leading-7 text-sm text-black"></label>
                                    <input type="email" id="email" name="email" placeholder="Company Name" className="w-full h-14 placeholder-gray-400 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="flex">
                                    <div>
                                        <button className="text-white  font-bold text-base leading-5 bg-indigo-650 border-0 py-3 px-4 w-28 h-14 sm:w-32 sm:h-14 focus:outline-none hover:bg-indigo-700">Sign Up</button>
                                        {/* <div className="sm:hidden flex relative justify-end content h-20 w-20">
                                    </div> */}
                                        <h6 className="flex text-gray-600 mt-5">Support:<h6 className="text-indigo-650 ms-2">help@udix.com</h6></h6>
                                    </div>
                                    <div className="sm:hidden flex relative justify-end content h-20 w-20">
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/6 sm:flex hidden ms-14 mx-3 my-5 bg-indigo-700 opacity-5 ">
                            </div>
                            <div className="sm:flex hidden relative end-4 -bottom-96  items-end content sm:h-36 sm:w-36 h-20 w-40 sm:-ms-36">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero1;