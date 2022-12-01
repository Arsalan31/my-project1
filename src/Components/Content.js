import React from "react";
import './style.css';


function Content() {
    return (
        <section className="flex flex-col items-start w-full h-full bg-white flex-none order-2 flex-grow-0">
            <div className=" flex flex-col text-center w-full mt-32 mb-20">
            <img className="image self-center mt-24"></img>
                <h1 className="w-full font-bold text-black mt-8 text-center sm:text-4xl text-4xl leading-7 sm:leading-12 mb-2">is a leading provider of digital<br/> marketing services</h1>
                <p className="w-full mt-10 font-normal text-base text-center text-hex mb-20">Using proprietary tools and we run thousands of simultaneous self-funded 
                <br/>campaigns across different platforms such as paid search, social advertising,
                <br/>mobile and video ads and many more. The campaigns either support our
                <br/> publishing assets or (in most cases) direct users directly to our clients.</p>
                <center>
                    
                </center>
            </div>


        </section>
    )
}

export default Content;