import React from "react";
import './style.css';


function Content() {
    return (
        <section className="flex flex-col items-start w-full h-full md:bg-transparent bg-gray-200 flex-none order-2 flex-grow-0">
            <div className="container px-16 pb-6 mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="lg:order-1 order-2 lg:w-1/2 lg:mt-32 mb-20">
                        <div className="image1 lg:w-100 lg:h-92 sm:w-120 sm:h-98 w-70 h-60 lg:mt-36"></div>
                    </div>
                    <div className="flex flex-col flex-none flex-grow-0 order-0 lg:order-1 text-center w-full lg:w-1/2 mt-32 mb-20">
                        <img className="image md:self-end self-center mt-24"></img>
                        <h1 className="w-full font-bold text-black mt-8 md:text-end text-center sm:text-4xl text-2xl sm:leading-10 mb-2">is a leading provider of digital<br className="sm:block" /> marketing services</h1>
                        <p className="w-full mt-10 font-normal sm:text-base text-sm md:text-end text-center text-hex mb-20">Using proprietary tools and we run thousands of simultaneous self-funded
                            <br className="sm:block" />campaigns across different platforms such as paid search, social advertising,
                            <br className="sm:block" />mobile and video ads and many more. The campaigns either support our
                            <br className="sm:block" /> publishing assets or (in most cases) direct users directly to our clients.</p>
                    </div>
                    <div className="flex md:justify-end lg:order-2 order-1 justify-center text-gray-400 md:text-gray-300">
                    <button><svg xmlns="http://www.w3.org/2000/svg" className="me-3" width="60" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></button>
                    <h4>1 / 2</h4>
                    <button><svg xmlns="http://www.w3.org/2000/svg" className="ms-3" width="60" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg></button>
                </div>
                </div>
            </div>


        </section>
    )
}

export default Content;