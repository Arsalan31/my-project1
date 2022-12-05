import React from "react";
import './style.css';


function Content() {
    return (
        <section className="flex flex-col items-start w-full h-full md:bg-transparent bg-gray-200 flex-none order-2 flex-grow-0">
            <div className="container px-28 pb-6 mx-auto">
                <div className="flex flex-wrap-reverse lg:flex-wrap justify-center">
                    <div className="flex flex-col flex-none flex-grow-0 order-1 text-center lg:w-1/2 mt-32 mb-20">
                    
                    </div>
                    <div className="flex flex-col flex-none flex-grow-0 order-0 md:order-1 text-center lg:w-1/2 mt-32 mb-20">
                        <img className="image md:self-end self-center mt-24"></img>
                        <h1 className="w-full font-bold text-black mt-8 md:text-end text-center sm:text-4xl text-2xl sm:leading-10 mb-2">is a leading provider of digital<br className="sm:block" /> marketing services</h1>
                        <p className="w-full mt-10 font-normal sm:text-base text-sm md:text-end text-center text-hex mb-20">Using proprietary tools and we run thousands of simultaneous self-funded
                            <br className="sm:block" />campaigns across different platforms such as paid search, social advertising,
                            <br className="sm:block" />mobile and video ads and many more. The campaigns either support our
                            <br className="sm:block" /> publishing assets or (in most cases) direct users directly to our clients.</p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Content;