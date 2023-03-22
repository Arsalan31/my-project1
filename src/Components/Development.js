import React from "react"
import './style.css';


function Development() {
    return (
        <section className="py-13">
            <div className="lg:px-28 sm:px-16 px-9 py-13 flex lg:flex-row flex-col">
                <div className="lg:w-1/2 w-full px-4">
                    <h1 className="text-blue-80 sm:text-5xl text-4xl leading-12 font-light">
                        WHAT IS
                        ORGANIZATIONAL
                        DEVELOPMENT?
                    </h1>
                </div>
                <div className="lg:w-1/2 w-full px-4">
                    <p className="font-light text-lg pb-4 text-gray-10">
                        Organizational Development (OD) seeks to align the strategies, structure, people, and metrics within an organization to achieve greater effectiveness.
                    </p>
                    <p className="font-light text-lg pb-4 text-gray-10">
                        The practice of OD is a combination of psychology, human resource management, organizational behavior, adult education, and culture. Its focus on data and research seeks to provide system-wide improvements to an organization's performance.
                    </p>
                    <p className="font-light text-lg pb-4 text-gray-10">
                        OD emerged from human relations studies in the 1930s, during which psychologists realized that organizational structures and processes influence worker behavior and motivation.
                    </p>
                </div>
            </div>
            <div>
                <h6 className="w-full flex justify-center text-center text-3xl font-light text-blue-80">
                    <p className="font-black text-green-40">/&nbsp;</p>
                    the intersection of people and operations
                    <p className="font-black text-green-40"> &nbsp;/</p>
                </h6>
            </div>
        </section>
    )
}

export default Development;