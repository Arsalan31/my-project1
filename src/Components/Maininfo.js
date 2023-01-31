import React, { useState } from "react";

function Maininfo() {
    const slidesData2 = [
        {
            "id": 1,
            "img": <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.875 24.6548L18 29.0844L10.125 24.6548V19.9746L7.875 18.7246V25.9706L18 31.6659L28.125 25.9706V18.7246L25.875 19.9746V24.6548Z" fill="#084C61" />
                <path d="M18 3.23291L2.25 11.3996V13.3496L18 22.0994L31.5 14.5996V20.8127H33.75V11.3996L18 3.23291ZM29.25 13.2757L27 14.5257L18 19.5259L9 14.5257L6.75 13.2757L5.19054 12.4093L18 5.7674L30.8095 12.4093L29.25 13.2757Z" fill="#084C61" />
            </svg>,
            "title": "2,000,000",
            "subTitle": "Students reached"
        },
        {
            "id": 2,
            "img": <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.875 24.6548L18 29.0844L10.125 24.6548V19.9746L7.875 18.7246V25.9706L18 31.6659L28.125 25.9706V18.7246L25.875 19.9746V24.6548Z" fill="#084C61" />
                <path d="M18 3.23291L2.25 11.3996V13.3496L18 22.0994L31.5 14.5996V20.8127H33.75V11.3996L18 3.23291ZM29.25 13.2757L27 14.5257L18 19.5259L9 14.5257L6.75 13.2757L5.19054 12.4093L18 5.7674L30.8095 12.4093L29.25 13.2757Z" fill="#084C61" />
            </svg>,
            "title": "200",
            "subTitle": "Schools"
        },
        {
            "id": 3,
            "img": <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.875 24.6548L18 29.0844L10.125 24.6548V19.9746L7.875 18.7246V25.9706L18 31.6659L28.125 25.9706V18.7246L25.875 19.9746V24.6548Z" fill="#084C61" />
                <path d="M18 3.23291L2.25 11.3996V13.3496L18 22.0994L31.5 14.5996V20.8127H33.75V11.3996L18 3.23291ZM29.25 13.2757L27 14.5257L18 19.5259L9 14.5257L6.75 13.2757L5.19054 12.4093L18 5.7674L30.8095 12.4093L29.25 13.2757Z" fill="#084C61" />
            </svg>,
            "title": "2",
            "subTitle": "Universities"
        },
        {
            "id": 4,
            "img": <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.875 24.6548L18 29.0844L10.125 24.6548V19.9746L7.875 18.7246V25.9706L18 31.6659L28.125 25.9706V18.7246L25.875 19.9746V24.6548Z" fill="#084C61" />
                <path d="M18 3.23291L2.25 11.3996V13.3496L18 22.0994L31.5 14.5996V20.8127H33.75V11.3996L18 3.23291ZM29.25 13.2757L27 14.5257L18 19.5259L9 14.5257L6.75 13.2757L5.19054 12.4093L18 5.7674L30.8095 12.4093L29.25 13.2757Z" fill="#084C61" />
            </svg>,
            "title": "2",
            "subTitle": "Universities"
        }
    ]
    return (
        <section className="bg-blue-30 mt-20">
            <div className="md:px-24 p-6 md:pt-12 container mx-auto w-full h-full">
                <h4 className="flex text-2xl font-bold text-gray-5 md:justify-center justify-start">AKDN | Education</h4>
                <p className="text-gray-5 mt-3 md:mt-9 font-normal text-2xl md:text-center px-5">For over 100 years the Aga Khan Development Network (AKDN) has worked to ensure that students of all ages have access to quality learning opportunities.  The Network operates programmes and institutions that span the educational ladder, from early childhood programmes to primary and secondary schools, from vocational studies for youth and adults to university degrees and continuing professional development.  Each year, the AKDN reaches 2 million learners across 16 countries.</p>
            </div>
            <div className="flex flex-wrap justify-center md:p-12 md:pt-20 md:px-0 px-28">
                <div class="flex flex-wrap md:-m-4 -mx-4 -mb-1 md:space-y-0 space-y-6">
                    {
                        slidesData2.map((Impact) => {
                            return (
                                <div class="p-4 lg:px-20 md:w-1/4 w-full flex md:flex-col flex-row lg:border-e-2 border-blue-30 border-opacity-60 text-center items-center">
                                    <div>{Impact.img}</div>
                                    <div className="md:flex-wrap flex-wrap-reverse">
                                        <div className="md:w-full md:ps-0 ps-5 w-auto flex flex-wrap md:flex-col flex-row">
                                            <div className="text-center font-medium text-2xl text-black mt-7">{Impact.title}</div>
                                        </div>
                                        <div className="md:w-full w-auto md:ps-0 ps-5 flex flex-wrap md:flex-col flex-row">
                                            <div className="mt-3 text-base font-normal text-gray-600 text-center">{Impact.subTitle}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
            <div className="container mx-auto py-16 w-1/3">
                <div className="text-center p-7 flex bg-blue-30">
                    <p className="text-lg font-normal text-blue-70">Overview Document: AKDN Afghanistan</p>
                    <button className="ms-10 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.67" height="18.67" fill="#084C61" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Maininfo;