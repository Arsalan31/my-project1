import React, { useState } from "react"

function Info() {

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true)
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore)
        }
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 158) : text}
                <div className="flex md:mt-3 mt-2 justify-start">
                    <button className="flex gap-4 font-medium text-base text-blue-70 justify-start focus:outline-none" onClick={toggleReadMore}>{isReadMore ? 'See more' : 'Show less'}
                        <svg className="transform rotate-90 mt-2" width="6" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L1 1" stroke="#084C61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </p>
        );
    };

    return (
        <section className="p-12 container mx-auto w-full h-full">
            <h4 className="font-bold text-2xl uppercase text-start">Our work</h4>
            <div className="md:flex mt-6">
                <div className="md:w-1/3 w-full">
                    <p className="font-normal text-base text-gray-5 uppercase text-start">Early Childhood Development</p>
                </div>
                <div className="md:w-3/4 w-full">
                    <p className="text-gray-5 font-normal text-xl">
                        <ReadMore className="text-gray-5 font-normal text-xl">
                            Globally, the AKDN's activities in early childhood development provide 750,000 children aged pre-natal-8 with quality early learning opportunities, annually. The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT),It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.For over 100 years the Aga Khan Development Network (AKDN) has worked to ensure that students of all ages have access to quality learning opportunities.
                        </ReadMore>
                    </p>
                </div>
            </div>
            <div className="md:flex mt-6">
                <div className="md:w-1/3 w-full">
                    <p className="font-normal text-base text-gray-5 uppercase text-start">Primary & Secondary
                    </p>
                </div>
                <div className="md:w-3/4 w-full">
                    <p className="text-gray-5 font-normal text-xl">
                        <ReadMore className="text-gray-5 font-normal text-xl">
                            Globally, the AKDN's activities in early childhood development provide 750,000 children aged pre-natal-8 with quality early learning opportunities, annually. The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT),It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.For over 100 years the Aga Khan Development Network (AKDN) has worked to ensure that students of all ages have access to quality learning opportunities.
                        </ReadMore>
                    </p>
                </div>
            </div>
            <div className="md:flex mt-6">
                <div className="md:w-1/3 w-full">
                    <p className="font-normal text-base text-gray-5 uppercase text-start">Higher Education</p>
                </div>
                <div className="md:w-3/4 w-full">
                    <p className="text-gray-5 font-normal text-xl">
                        <ReadMore className="text-gray-5 font-normal text-xl">
                            Globally, the AKDN's activities in early childhood development provide 750,000 children aged pre-natal-8 with quality early learning opportunities, annually. The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT),It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.For over 100 years the Aga Khan Development Network (AKDN) has worked to ensure that students of all ages have access to quality learning opportunities.
                        </ReadMore>
                    </p>
                </div>
            </div>
            <div className="md:flex mt-6">
                <div className="md:w-1/3 w-full">
                    <p className="font-normal text-base text-gray-5 uppercase text-start">Continuing Education</p>
                </div>
                <div className="md:w-3/4 w-full">
                    <p className="text-gray-5 font-normal text-xl">
                        <ReadMore className="text-gray-5 font-normal text-xl">
                            Globally, the AKDN's activities in early childhood development provide 750,000 children aged pre-natal-8 with quality early learning opportunities, annually. The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT),It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.For over 100 years the Aga Khan Development Network (AKDN) has worked to ensure that students of all ages have access to quality learning opportunities.
                        </ReadMore>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Info;