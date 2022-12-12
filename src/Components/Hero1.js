import React from "react"
import './style.css';

function Hero1() {
    return (
        <section>
            <div className="background2">
                <div className="container mx-auto">
                    <div className="lg:w-1/2 sm:mx-32 mx-auto pt-56 sm:pt-72">
                        <div className="flex  lg:justify-start justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.757 0.494555L13.3899 6.07863L19.2779 6.97258C19.5957 7.02188 19.8595 7.2556 19.9588 7.57561C20.0577 7.89562 19.9753 8.24668 19.7455 8.48237L15.4827 12.8293L16.4905 18.9691C16.5432 19.3004 16.4128 19.6348 16.1533 19.8325C16.0087 19.9419 15.8345 20.0006 15.6565 19.9991C15.5199 20.0011 15.3857 19.9661 15.2656 19.8981L9.99977 16.9998L4.73392 19.8981C4.44995 20.0548 4.10571 20.0292 3.84576 19.832C3.58581 19.6347 3.45537 19.3004 3.50905 18.9691L4.51682 12.8293L0.254039 8.48237C0.0247002 8.24668 -0.0577112 7.89562 0.0411823 7.57561C0.140547 7.2556 0.404264 7.02188 0.722137 6.97258L6.61007 6.07863L9.243 0.494555C9.38428 0.191807 9.67813 0 9.99977 0C10.3219 0 10.6157 0.191807 10.757 0.494555Z" fill="white" />
                            </svg>
                            <h5 className="ms-3 text-white font-bold text-base leading-6">Top market company</h5>
                        </div>
                        <h1 id="#Home" className="text-6xl leading-12 sm:text-6xl mt-5 font-bold w-full lg:text-start text-center text-red-300">Focus on the
                            <br className="hidden sm:block" /> work that <br className="hidden sm:block" /> matters
                        </h1>
                        <h4 className='w-full font-normal text-2xl leading-9 lg:text-start text-center flex-none flex-grow-0 mt-10 sm:mt-8 text-white'>udix is the world's first smart workspace. <br className="hidden sm:block" /> We bring all your team's content together
                            <br className="hidden sm:block" /> while letting you use the tools you love.
                        </h4>
                        <h4 className="font-bold text-red-300 mt-20 lg:text-start text-center text-base leading-6">Read More</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero1;