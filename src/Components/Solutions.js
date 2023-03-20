import React from "react"
import './style.css';


function Solutions() {
    return (
        <section id="Solution" className="bg-blue-80 py-12 px-6 w-full h-full">
            <div>
                <h2 className="text-center py-6 text-white font-light text-4.5xl">
                    Solutions
                </h2>
                <div className="flex text-start pb-8 font-light text-lg justify-center text-white gap-12">
                    <p className="w-5/12 text-start">
                        Rivers &amp; Roads has the complete picture of how people and operations intersect. Once the two are in sync, we can improve the overall function of your organization.
                    </p>
                    <p className="w-5/12 text-start">
                        We recognize that each client is unique, so we work to understand your objectives to implement the solutions below or develop custom solutions to address business needs.
                    </p>
                </div>
                <div className="flex lg:flex-row flex-col justify-center text-center w-full">
                    <div className="flex flex-col items-center text-center fade-in-image p-3 w-1/6">
                        <img className="w-21 h-21 mt-0 m-5" src={require('./assets/RVR-strategic-planning.png')}></img>
                        <h4 className="text-white text-lg">
                            Strategic Planning
                        </h4>
                    </div>
                    <div className="flex flex-col items-center text-center fade-in-image p-3 w-1/6">
                        <img className="w-21 h-21 mt-0 m-5" src={require('./assets/RVR-org-structure.png')}></img>
                        <h4 className="text-white text-lg">
                            Organizational Structure & Design
                        </h4>
                    </div>
                    <div className="flex flex-col items-center text-center fade-in-image p-3 w-1/6">
                        <img className="w-21 h-21 mt-0 m-5" src={require('./assets/RVR-speaking.png')}></img>
                        <h4 className="text-white text-lg">
                            Keynote Speaking
                        </h4>
                    </div>
                    <div className="flex flex-col items-center text-center fade-in-image p-3 w-1/6">
                        <img className="w-21 h-21 mt-0 m-5" src={require('./assets/RVR-training.png')}></img>
                        <h4 className="text-white text-lg">
                            Training & Facilitation
                        </h4>
                    </div>
                    <div className="flex flex-col items-center text-center fade-in-image p-3 w-1/6">
                        <img className="w-21 h-21 mt-0 m-5" src={require('./assets/RVR-coaching.png')}></img>
                        <h4 className="text-white text-lg">
                            Individual Coaching
                        </h4>
                    </div>
                    <div className="flex flex-col items-center text-center fade-in-image p-3 w-1/6">
                        <img className="w-21 h-21 mt-0 m-5" src={require('./assets/RVR-change-readiness.png')}></img>
                        <h4 className="text-white text-lg">
                            Change Readiness
                        </h4>
                    </div>
                    <div className="flex flex-col items-center text-center fade-in-image p-3 w-1/6">
                        <img className="w-21 h-21 mt-0 m-5" src={require('./assets/RVR-merger-prep.png')}></img>
                        <h4 className="text-white text-lg">
                            Merger/Acquisition Preparation
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solutions;