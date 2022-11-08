import React from "react";
import './style.css';

function Feature() {

    return (

        <section class="feature text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="text-center mb-20">
                    <h1 class="con sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Features</h1>
                    <p class="sub-con text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Most calendars are designed for teams.
                        <br />Slate is designed for freelancers</p>

                </div>
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6042 0.625C18.3117 0.625 21.8673 2.0978 24.4889 4.7194C27.1105 7.34101 28.5833 10.8967 28.5833 14.6042C28.5833 17.9846 27.3888 21.0854 25.3808 23.5H46.375V46.375H23.5V25.3808C21.0854 27.3888 17.9846 28.5833 14.6042 28.5833C10.8967 28.5833 7.34101 27.1105 4.7194 24.4889C2.0978 21.8673 0.625 18.3117 0.625 14.6042C0.625 10.8967 2.0978 7.34101 4.7194 4.7194C7.34101 2.0978 10.8967 0.625 14.6042 0.625Z" fill="#2091F9" />
                        </svg>

                        <div class="flex-grow">
                            <h3 class="f mb-3">OpenType features
                                <br />Variable fonts</h3>
                            <p class="sub-f">Slate helps you see how <br /> many more days you need <br /> to work to reach your <br />financial goal.</p>

                        </div>
                    </div>
                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.2486 48.65C27.402 47.0167 26.492 42.5134 24.392 39.6667C22.3153 36.75 19.4453 34.7434 16.552 32.8067C14.4876 31.5055 12.6443 29.8829 11.092 28C10.4386 27.23 9.10863 25.8067 10.462 25.5267C11.8386 25.2467 14.2186 26.6 15.432 27.1134C17.5553 28 19.6553 29.0267 21.6153 30.24L23.972 26.2734C20.332 23.87 15.6653 21.7467 11.3253 21.1167C8.85197 20.7434 6.23863 21.2567 5.39863 23.94C4.65197 26.25 5.84197 28.5834 7.1953 30.4034C10.392 34.6734 15.362 36.7267 19.072 40.4134C19.8653 41.1834 20.822 42.0934 21.2886 43.1667C21.7786 44.1934 21.662 44.2634 20.5653 44.2634C17.672 44.2634 14.0553 42 11.6986 40.5067L9.34197 44.4734C12.912 46.6667 18.8853 50.0967 23.2486 48.65ZM49.1253 12.25C49.6386 11.7367 49.6386 10.8967 49.1253 10.4067L46.092 7.37337C45.8476 7.13783 45.5214 7.00623 45.182 7.00623C44.8425 7.00623 44.5164 7.13783 44.272 7.37337L41.892 9.75337L46.7453 14.6067L49.1253 12.25ZM26.1653 25.48V30.3334H31.0186L45.3686 15.9834L40.5153 11.13L26.1653 25.48Z" fill="#2091F9" />
                        </svg>
                        <div class="flex-grow">
                            <h3 class="f mb-3">Design with real data</h3>
                            <p class="sub-f">Slate helps you see how <br /> many more days you need <br /> to work to reach your <br />financial goal.</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <svg width="49" height="47" viewBox="0 0 49 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.6366 4.76792L44.2308 1.36209C43.2904 0.37084 41.6383 0.37084 40.647 1.36209L17.8737 24.1354L24.8633 31.125L47.6366 8.35167C48.6279 7.36042 48.6279 5.70834 47.6366 4.76792ZM12.7904 28.5833C10.7681 28.5833 8.82864 29.3867 7.39868 30.8167C5.96871 32.2466 5.16536 34.1861 5.16536 36.2083C5.16536 39.5379 2.21703 41.2917 0.0820312 41.2917C2.42036 44.3925 6.4362 46.375 10.2487 46.375C12.9451 46.375 15.531 45.3039 17.4376 43.3973C19.3442 41.4906 20.4154 38.9047 20.4154 36.2083C20.4154 34.1861 19.612 32.2466 18.1821 30.8167C16.7521 29.3867 14.8126 28.5833 12.7904 28.5833Z" fill="#2091F9" />
                        </svg>

                        <div class="flex-grow">
                            <h3 class="f mb-3">Fastest way to
                                <br />take action</h3>
                            <p class="sub-f">Slate helps you see how <br /> many more days you need <br /> to work to reach your <br />financial goal.</p>

                        </div>
                    </div>
                </div>
            </div>
            <screen>
                    
            </screen>
        </section>
    )
}

export default Feature;
