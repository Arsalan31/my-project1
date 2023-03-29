import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react"
import './style.css';


function About() {

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                <div className="flex flex-col justify-center">
                    <button className="focus:outline-none" onClick={toggleReadMore}>
                        <h4 className={isReadMore ? 'text-center text-lg font-semibold text-gray-10 pb-1' : 'text-center text-lg font-semibold text-green-40 pb-1'}> {isReadMore ? "READ BIO" : "COLLAPSE"}</h4>
                        {isReadMore ? <FontAwesomeIcon icon={faChevronDown} style={{ color: "#3b3b3b", }} /> :
                            <FontAwesomeIcon icon={faChevronUp} style={{ color: "#00e7ff", }} />}
                    </button>
                </div>
                {isReadMore ? text.slice(0, 0) : text}
            </p>
        );
    };

    return (
        <section id="About" className="bg-white py-13">
            <h2 className="uppercase text-blue-80 text-4.5xl font-light text-center py-13">About</h2>
            <div className="flex lg:flex-row flex-col pb-13 gap-3 justify-center mx-auto container">
                <div className="lg:w-5/12 px-4">
                    <p className="text-gray-10 text-lg font-light">
                        Rivers & Roads is an organizational development consulting firm that brings a unique expertise to help your organization achieve its goals. We have a complete understanding of the people side of the organization as well as operations to provide executives with solutions to overcome challenges and pain points associated with the intricate dynamics of organizational systems and culture.
                    </p>
                </div>
                <div className="lg:w-5/12 px-4">
                    <p className="text-gray-10 text-lg font-light">
                        We spend time to understand the financial performance and inner workings of your company so we can align the strategy, structure, and people. Sometimes we will look upstream at where you have been, others, we will look down the road at where you're going, and
                        <strong className="font-bold text-blue-80 text-lg">
                            our commitment is that we meet you with authenticity, passion, and purpose at every turn.
                        </strong>
                    </p>
                </div>
            </div>
            <div className="px-4">
                <div className="flex overflow-hidden justify-center">
                    <img className="zoom w-70 h-70" src={require('./assets/Zavy-Lyndi-2.jpeg')} />
                </div>
                <div className="flex justify-center px-4 py-3">
                    <h6 className="text-3xl font-medium text-center text-blue-80">Lyndi Zavy, MA, <br /> PHR</h6>
                </div>
            </div>
            <div className="lg:w-1/2 container mx-auto flex flex-col justify-center text-lg font-light text-gray-10 px-5">
                <ReadMore>
                    <p>Lyndi Zavy, M.A., PHR is an organizational development consultant and founder of Rivers & Roads. A creative visionary and strategic thinker, Lyndi is committed to the study of organizations and uses her intellectual curiosity and business acumen to envision new ways to work and contribute to broader society.</p>
                    <p>&nbsp;</p>
                    <p>She has extensive experience in developing and managing all aspects of an organization's quality and business improvement efforts such as developing and administering programs, training and coaching employees, and facilitating organization-wide change.</p>
                    <p>&nbsp;</p>
                    <p>Lyndi is a respected and sought-after speaker on the topics of strategic and operational planning, the impacts of work/life balance, and program evaluation.</p>
                    <p>&nbsp;</p>
                    <p>She holds a BA in psychology from the University of Oklahoma and Master's in Industrial and Organizational Psychology from Middle Tennessee State University.</p>
                    <p>&nbsp;</p>
                    <p> Lyndi is passionate about giving back to the community through participation in several non-profit boards and committees. She and her husband have two precocious kids, a beloved rescue dog, and a leopard gecko.</p>
                    <p>&nbsp;</p>
                    <p> When working with Lyndi, you can expect song lyrics, movie quotes, and some dad jokes to be woven into each presentation and conversation.</p>
                </ReadMore>
            </div>
        </section>
    )
}

export default About;