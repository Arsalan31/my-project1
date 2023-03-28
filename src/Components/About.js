import React from "react"
import './style.css';


function About() {
    return (
        <section className="bg-white py-13">
            <h2 className="uppercase text-blue-80 text-4.5xl font-light text-center py-13">About</h2>
            <div className="flex pb-13 justify-center mx-auto container">
                <div className="w-5/12 px-4">
                    <p className="text-gray-10 text-lg font-light">
                        Rivers & Roads is an organizational development consulting firm that brings a unique expertise to help your organization achieve its goals. We have a complete understanding of the people side of the organization as well as operations to provide executives with solutions to overcome challenges and pain points associated with the intricate dynamics of organizational systems and culture.
                    </p>
                </div>
                <div className="w-5/12 px-4">
                    <p className="text-gray-10 text-lg font-light">
                        We spend time to understand the financial performance and inner workings of your company so we can align the strategy, structure, and people. Sometimes we will look upstream at where you have been, others, we will look down the road at where you're going, and
                        <strong className="font-bold text-blue-80 text-lg">
                            our commitment is that we meet you with authenticity, passion, and purpose at every turn.
                        </strong>
                    </p>
                </div>
            </div>
            <div className="px-4">
                <div className="flex justify-center">
                    <img src={require('./assets/Zavy-Lyndi-2.jpeg')} />
                </div>
                <div className="flex justify-center px-4 py-3">
                    <h6 className="text-3xl font-medium text-center text-blue-80">Lyndi Zavy, MA, <br/> PHR</h6>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-center text-lg font-semibold text-gray-10 pb-1">READ BIO</p>
            </div>
        </section>
    )
}

export default About;