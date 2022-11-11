import React from "react"
import './style.css';

function Footer() {
  return (
    <footer className="h-1/2 w-full flex flex-wrap md:flex-row flex-col justify-around items-center p-20">
      <div className="text-center">
        <h2 className="title-font font-medium text-white tracking-widest text-xl pb-6">Pages</h2>
        <nav className="list-none">
          <li className="pb-4">
            <a href="#Home" className="text-white font-normal text-sm pb-2 ">Home</a>
          </li>
          <li className="pb-4">
            <a href="#" className="text-white font-normal text-sm pb-2">Product</a>
          </li>
          <li className="pb-4">
            <a href="#Pricing" className="text-white font-normal text-sm pb-2">Pricing</a>
          </li>
          <li className="pb-4">
            <a href="#" className="text-white font-normal text-sm pb-2">About</a>
          </li>
          <li className="pb-4">
            <a href="#Contact" className="text-white font-normal text-sm pb-2">Contact</a>
          </li>
        </nav>
      </div>
      <div className="text-center">
        <h2 className="title-font font-medium text-white tracking-widest text-xl pb-6">Tomothy</h2>
        <nav className="list-none">
          <li className="pb-4">
            <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Eleanor Edwards</a>
          </li>
          <li className="pb-4">
            <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Ted Robertson</a>
          </li>
          <li className="pb-4">
            <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Annette Russell</a>
          </li>
          <li className="pb-4">
            <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Jennie Mckinney</a>
          </li>
          <li className="pb-4">
            <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Gloria Richards</a>
          </li>
        </nav>
      </div>
      <div className="text-center">
        <h2 className="title-font font-medium text-white tracking-widest text-xl pb-6">Jane Black</h2>
        <nav className="list-none ">
          <li className="pb-4">
            <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Philip Jones</a>
          </li>
          <li className="pb-4">
            <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Product</a>
          </li>
          <li className="pb-4">
            <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Colleen Russell</a>
          </li>
          <li className="pb-4">
            <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Marvin Hawkins</a>
          </li>
          <li className="pb-4">
            <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Bruce Simmmons</a>
          </li>
        </nav>

      </div>
      <div className="p-8 -mt-14">

        <p className="  text-white font-normal text-sm  pb-3"><svg width="32" className="inline-flex " height="39" viewBox="0 0 32 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.8898 38.1136C15.2142 38.3452 15.6029 38.4697 16.0015 38.4697C16.4001 38.4697 16.7887 38.3452 17.1131 38.1136C17.6958 37.7015 31.3904 27.8134 31.3348 15.4701C31.3348 7.01564 24.4559 0.136719 16.0015 0.136719C7.54705 0.136719 0.668137 7.01564 0.668137 15.4605C0.612554 27.8134 14.3071 37.7015 14.8898 38.1136ZM16.0015 3.97005C22.3437 3.97005 27.5015 9.1278 27.5015 15.4796C27.5417 23.9858 19.0911 31.6237 16.0015 34.1288C12.9137 31.6218 4.46122 23.982 4.50147 15.4701C4.50147 9.1278 9.65922 3.97005 16.0015 3.97005Z" fill="white" />
        </svg>     7480 Mockingbird Hill undefined
        </p>
        <br />
        <p className=" text-white text-sm font-normal  pb-3"><svg width="21" className="inline-flex" height="33" viewBox="0 0 21 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.3346 0.761719H4.66797C2.24714 0.761719 0.292969 2.71589 0.292969 5.13672V28.4701C0.292969 30.8909 2.24714 32.8451 4.66797 32.8451H16.3346C18.7555 32.8451 20.7096 30.8909 20.7096 28.4701V5.13672C20.7096 2.71589 18.7555 0.761719 16.3346 0.761719ZM13.418 29.9284H7.58464V28.4701H13.418V29.9284ZM18.1576 25.5534H2.84505V5.13672H18.1576V25.5534Z" fill="white" />
        </svg>         (239) 555-0108
        </p>
        <br />
        <div className="flex justify-items-center gap-6">
          <a class="text-white">
            <svg width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.1455 3.48168C32.9207 4.01002 31.5878 4.39027 30.2149 4.53837C31.6403 3.69156 32.7077 2.35375 33.2168 0.775924C31.8793 1.5716 30.414 2.12954 28.886 2.42499C28.2474 1.74226 27.475 1.19836 26.617 0.827188C25.7589 0.456017 24.8337 0.26553 23.8988 0.267595C20.1163 0.267595 17.0744 3.33358 17.0744 7.09603C17.0744 7.62437 17.1384 8.15271 17.2425 8.66104C11.5788 8.36485 6.52753 5.65909 3.16936 1.5164C2.55746 2.56154 2.2368 3.75156 2.24075 4.96264C2.24075 7.33218 3.44553 9.42153 5.28273 10.6503C4.20004 10.6077 3.14271 10.3101 2.19672 9.78177V9.86582C2.19672 13.184 4.54225 15.9338 7.66827 16.5662C7.08133 16.7186 6.47753 16.7966 5.87111 16.7983C5.42682 16.7983 5.00655 16.7543 4.58227 16.6943C5.44683 19.4 7.96447 21.3653 10.9624 21.4293C8.61689 23.2665 5.67898 24.3472 2.48891 24.3472C1.91654 24.3472 1.3882 24.3272 0.839844 24.2632C3.86581 26.2044 7.45614 27.3252 11.3226 27.3252C23.8748 27.3252 30.7432 16.9264 30.7432 7.90055C30.7432 7.60436 30.7432 7.30816 30.7232 7.01197C32.0521 6.03934 33.2168 4.83456 34.1455 3.48168Z" fill="white" />
            </svg>
          </a>
          <a class="ml-3 text-white">
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.2126 0.786133H1.75349C1.04503 0.786133 0.472656 1.3585 0.472656 2.06696V31.5261C0.472656 32.2345 1.04503 32.8069 1.75349 32.8069H31.2126C31.9211 32.8069 32.4934 32.2345 32.4934 31.5261V2.06696C32.4934 1.3585 31.9211 0.786133 31.2126 0.786133ZM27.5142 10.1322H24.9565C22.9512 10.1322 22.563 11.0848 22.563 12.4857V15.5717H27.3501L26.7257 20.4029H22.563V32.8069H17.5718V20.4069H13.397V15.5717H17.5718V12.0094C17.5718 7.87473 20.0974 5.62127 23.7878 5.62127C25.5569 5.62127 27.0739 5.75336 27.5182 5.8134V10.1322H27.5142Z" fill="white" />
            </svg>
          </a>
          <a class="ml-3 text-white">
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.197 0.786133H1.73786C1.0294 0.786133 0.457031 1.3585 0.457031 2.06696V31.5261C0.457031 32.2345 1.0294 32.8069 1.73786 32.8069H31.197C31.9054 32.8069 32.4778 32.2345 32.4778 31.5261V2.06696C32.4778 1.3585 31.9054 0.786133 31.197 0.786133ZM9.95519 28.0718H5.20411V12.7899H9.95519V28.0718ZM7.58165 10.7006C7.03701 10.7006 6.50459 10.5391 6.05173 10.2365C5.59887 9.93388 5.24591 9.5038 5.03749 9.00061C4.82906 8.49742 4.77453 7.94372 4.88078 7.40954C4.98704 6.87536 5.24931 6.38468 5.63443 5.99956C6.01956 5.61443 6.51023 5.35216 7.04442 5.24591C7.5786 5.13965 8.13229 5.19418 8.63548 5.40261C9.13867 5.61104 9.56875 5.964 9.87134 6.41686C10.1739 6.86972 10.3354 7.40213 10.3354 7.94678C10.3314 9.46777 9.09864 10.7006 7.58165 10.7006ZM27.7427 28.0718H22.9957V20.639C22.9957 18.8659 22.9636 16.5884 20.5261 16.5884C18.0565 16.5884 17.6762 18.5176 17.6762 20.5109V28.0718H12.9331V12.7899H17.4881V14.8793H17.5521C18.1845 13.6785 19.7335 12.4097 22.047 12.4097C26.8582 12.4097 27.7427 15.5757 27.7427 19.6904V28.0718Z" fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;