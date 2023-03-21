import React from "react"
import './style.css';


function Development() {
    return (
        <section className="py-13">
            <div className="px-36 py-13 flex">
                <div className="w-1/2">
                    <h1 className="text-blue-80 text-5xl leading-12 font-light">
                        WHAT IS
                        ORGANIZATIONAL
                        DEVELOPMENT?
                    </h1>
                </div>
                <div className="w-1/2">
                    <p className="font-light text-lg pb-4">
                        Organizational Development (OD) seeks to align the strategies, structure, people, and metrics within an organization to achieve greater effectiveness.
                    </p>
                    <p className="font-light text-lg pb-4">
                        The practice of OD is a combination of psychology, human resource management, organizational behavior, adult education, and culture. Its focus on data and research seeks to provide system-wide improvements to an organization's performance.
                    </p>
                    <p className="font-light text-lg pb-4">
                        OD emerged from human relations studies in the 1930s, during which psychologists realized that organizational structures and processes influence worker behavior and motivation.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Development;