import React from "react"
// import GoogleMapReact from 'google-map-react';
import './style.css';

function Contact() {
  // const defaultProps = {
  //   center: {
  //     lat: 24.8607,
  //     lng: 67.0011
  //   },
  //   zoom: 11
  // };
  return (
    <section className="flex flex-col items-center p-13 gap-26 w-full h-full bg-white flex-none order-4 flex-grow-0 overflow-hidden">
      <div className="container px-auto py-28 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 id="Contact" className=" w-full font-normal text-blue-1000 text-center text-5xl leading-12">Contact Us</h1>
          <p className="w-full font-normal text-2.5xl leading-10 text-center text-hex lg:w-2/3 mx-auto px-5 mt-5">Most calendars are designed for teams.
            <br />Slate is designed for freelancers</p>
        </div>
        <div class="flex flex-wrap-reverse lg:flex-wrap justify-center">
          <div className="flex box-border flex-col items-start p-13 gap-11 h-100 bg-white border shadow-3xl rounded-2.5xl flex-none self-stretch flex-grow-0 border-gray-300 xl:w-1/3 lg:w-1/3 sm:w-1/2 w-60 justify-center ">
            <div className=" bg-white flex flex-col w-full">
              <h3 className="con-1 h-7 font-normal text-xl text-blue-1000 flex-none flex-grow-0 text-center mb-10">Contact Us</h3>
              <div className="relative mb-10">
                <label for="name" className="leading-7 text-sm text-gray-600"></label>
                <input type="text" id="name" name="name" placeholder="Your Name" className="w-full h-14 placeholder-black bg-gray-100 rounded-3xl border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-10">
                <label for="email" className="leading-7 text-sm text-black"></label>
                <input type="email" id="email" name="email" placeholder="Your Email" className="w-full h-14 placeholder-black bg-gray-100 rounded-3xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-10">
                <label for="message" className="leading-7 text-sm text-gray-600"></label>
                <textarea id="message" name="message" placeholder="Your Message" className="w-full placeholder-black bg-gray-100 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="rounded-4xl text-white bg-blue-0 border-0 py-3 px-4 w-28 sm:w-32 sm:h-14 focus:outline-none hover:bg-blue-600">Send</button>
            </div>
          </div>
          <div class="flex flex-wrap-reverse lg:flex-wrap xl:w-1/2 lg:w-1/2 w-60 md:mt-10 mt-20 lg:justify-start justify-center">
            <div className="container flex flex-wrap lg:m-1 mx-52">
              <div class="lg:w-1/3 w-full flex lg:flex-col flex-row text-center items-center lg:justify-start pb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex" width="25" height="30" fill="#2091F9" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" /><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>

                <div class="lg:flex-grow lg:mt-6 ms-5">
                  <p class="font-normal text-hex text-sm md:text-center text-left">6386 Spring St undefined Anchorage,
                    <br />Georgia 12473 United States</p>
                </div>
              </div>
              <div class="lg:w-1/3 w-full flex lg:flex-col flex-row text-center items-center lg:justify-start pb-8 ">
                <svg width="25" className="inline-flex" height="30" viewBox="0 0 21 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3346 0.761719H4.66797C2.24714 0.761719 0.292969 2.71589 0.292969 5.13672V28.4701C0.292969 30.8909 2.24714 32.8451 4.66797 32.8451H16.3346C18.7555 32.8451 20.7096 30.8909 20.7096 28.4701V5.13672C20.7096 2.71589 18.7555 0.761719 16.3346 0.761719ZM13.418 29.9284H7.58464V28.4701H13.418V29.9284ZM18.1576 25.5534H2.84505V5.13672H18.1576V25.5534Z" fill="#2091F9" />
                </svg>
                <div class="lg:flex-grow lg:mt-6 ms-5">
                  <p class="font-normal text-hex text-sm md:text-center text-left">(843) 555-0130</p>
                </div>
              </div>
              <div class="lg:w-1/3 w-full flex lg:flex-col flex-row text-center items-center lg:justify-start pb-8">
                <svg width="25" height="30" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.8125 0.904785H1.4375C0.918945 0.904785 0.5 1.32373 0.5 1.84229V20.5923C0.5 21.1108 0.918945 21.5298 1.4375 21.5298H25.8125C26.3311 21.5298 26.75 21.1108 26.75 20.5923V1.84229C26.75 1.32373 26.3311 0.904785 25.8125 0.904785ZM24.6406 4.15088V19.4204H2.60938V4.15088L1.80078 3.521L2.95215 2.0415L4.20605 3.01709H23.0469L24.3008 2.0415L25.4521 3.521L24.6406 4.15088ZM23.0469 3.01416L13.625 10.3384L4.20312 3.01416L2.94922 2.03857L1.79785 3.51807L2.60645 4.14795L12.6143 11.9292C12.9021 12.1528 13.2561 12.2742 13.6206 12.2742C13.9851 12.2742 14.3391 12.1528 14.627 11.9292L24.6406 4.15088L25.4492 3.521L24.2979 2.0415L23.0469 3.01416Z" fill="#2091F9" />
                </svg>


                <div class="lg:flex-grow lg:mt-6 ms-5 ">
                  <p class="font-normal text-hex text-sm md:text-center text-left">willie.jennings@example.com</p>
                </div>
              </div>
            </div>
            <div class="container px-5 py-2 mx-auto hidden lg:flex flex-wrap md:ms-14 mb-8">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14471.924190586524!2d67.0583741!3d24.93271555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1668600381189!5m2!1sen!2s" width="580" height="320"/>
              {/* <div class="map h-48 lg:w-2/3 md:w-1/2 sm:me-10 p-10 flex items-end justify-start">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "#0061ff" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                ></GoogleMapReact>
              </div> */}
            </div>
            <div className="justify-items-center pb-20">
              <div className="md:justify-items-start justify-items-center flex gap-6 lg:ms-5">
                <a href="https://twitter.com/figma?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <svg width="35" height="33" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.1455 3.48168C32.9207 4.01002 31.5878 4.39027 30.2149 4.53837C31.6403 3.69156 32.7077 2.35375 33.2168 0.775924C31.8793 1.5716 30.414 2.12954 28.886 2.42499C28.2474 1.74226 27.475 1.19836 26.617 0.827188C25.7589 0.456017 24.8337 0.26553 23.8988 0.267595C20.1163 0.267595 17.0744 3.33358 17.0744 7.09603C17.0744 7.62437 17.1384 8.15271 17.2425 8.66104C11.5788 8.36485 6.52753 5.65909 3.16936 1.5164C2.55746 2.56154 2.2368 3.75156 2.24075 4.96264C2.24075 7.33218 3.44553 9.42153 5.28273 10.6503C4.20004 10.6077 3.14271 10.3101 2.19672 9.78177V9.86582C2.19672 13.184 4.54225 15.9338 7.66827 16.5662C7.08133 16.7186 6.47753 16.7966 5.87111 16.7983C5.42682 16.7983 5.00655 16.7543 4.58227 16.6943C5.44683 19.4 7.96447 21.3653 10.9624 21.4293C8.61689 23.2665 5.67898 24.3472 2.48891 24.3472C1.91654 24.3472 1.3882 24.3272 0.839844 24.2632C3.86581 26.2044 7.45614 27.3252 11.3226 27.3252C23.8748 27.3252 30.7432 16.9264 30.7432 7.90055C30.7432 7.60436 30.7432 7.30816 30.7232 7.01197C32.0521 6.03934 33.2168 4.83456 34.1455 3.48168Z" fill="#2091F9" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/figmadesign/">
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.2126 0.786133H1.75349C1.04503 0.786133 0.472656 1.3585 0.472656 2.06696V31.5261C0.472656 32.2345 1.04503 32.8069 1.75349 32.8069H31.2126C31.9211 32.8069 32.4934 32.2345 32.4934 31.5261V2.06696C32.4934 1.3585 31.9211 0.786133 31.2126 0.786133ZM27.5142 10.1322H24.9565C22.9512 10.1322 22.563 11.0848 22.563 12.4857V15.5717H27.3501L26.7257 20.4029H22.563V32.8069H17.5718V20.4069H13.397V15.5717H17.5718V12.0094C17.5718 7.87473 20.0974 5.62127 23.7878 5.62127C25.5569 5.62127 27.0739 5.75336 27.5182 5.8134V10.1322H27.5142Z" fill="#2091F9" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/figma?original_referer=https%3A%2F%2Fwww.google.com%2F">
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.197 0.786133H1.73786C1.0294 0.786133 0.457031 1.3585 0.457031 2.06696V31.5261C0.457031 32.2345 1.0294 32.8069 1.73786 32.8069H31.197C31.9054 32.8069 32.4778 32.2345 32.4778 31.5261V2.06696C32.4778 1.3585 31.9054 0.786133 31.197 0.786133ZM9.95519 28.0718H5.20411V12.7899H9.95519V28.0718ZM7.58165 10.7006C7.03701 10.7006 6.50459 10.5391 6.05173 10.2365C5.59887 9.93388 5.24591 9.5038 5.03749 9.00061C4.82906 8.49742 4.77453 7.94372 4.88078 7.40954C4.98704 6.87536 5.24931 6.38468 5.63443 5.99956C6.01956 5.61443 6.51023 5.35216 7.04442 5.24591C7.5786 5.13965 8.13229 5.19418 8.63548 5.40261C9.13867 5.61104 9.56875 5.964 9.87134 6.41686C10.1739 6.86972 10.3354 7.40213 10.3354 7.94678C10.3314 9.46777 9.09864 10.7006 7.58165 10.7006ZM27.7427 28.0718H22.9957V20.639C22.9957 18.8659 22.9636 16.5884 20.5261 16.5884C18.0565 16.5884 17.6762 18.5176 17.6762 20.5109V28.0718H12.9331V12.7899H17.4881V14.8793H17.5521C18.1845 13.6785 19.7335 12.4097 22.047 12.4097C26.8582 12.4097 27.7427 15.5757 27.7427 19.6904V28.0718Z" fill="#2091F9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Contact;