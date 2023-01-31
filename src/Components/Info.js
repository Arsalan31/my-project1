import React, { useState } from "react"

function Info() {
    return (
        <section className="p-12 container mx-auto w-full h-full">
            <h4 className="font-bold text-2xl uppercase text-start">Our work</h4>
            <div className="md:flex mt-6">
                <div className="md:w-2/3 w-full">
                    <p className="font-normal text-base text-gray-5 uppercase text-start">Early Childhood Development</p>
                </div>
                <div className="md:w-1/2 w-full">
                    <p className="text-gray-5">Globally, the AKDN's activities in early childhood development provide 750,000 children aged pre-natal-8 with quality early learning opportunities, annually.</p>
                </div>
            </div>
        </section>
    )
}

export default Info;