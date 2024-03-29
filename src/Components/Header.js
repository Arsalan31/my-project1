import React, { useState, useEffect } from 'react'
import './style.css';

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])
    
    return (
        <header className='w-full absolute'>
            <nav className="container flex  justify-between px-1 lg:px-36 py-8 mx-auto bg-transparent">
                <div className="container nav flex flex-wrap justify-between content-center px-2 items-center mx-auto bg-transparent ">
                        <img src={require('./assets/Rectangle 4.png')} className="h-16 w-44 bg-no-repeat flex-none order-1 flex-grow-0 block cursor-pointer" />
                    <button onClick={toggleNav} className="block order-1 items-center p-2 ms-3 text-sm  md:hidden">
                        <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.667969 0H27.3346V2.66667H0.667969V0ZM7.33463 6.66667H27.3346V9.33333H7.33463V6.66667ZM15.668 13.3333H27.3346V16H15.668V13.3333Z" fill="white" />
                        </svg>
                    </button>
                    {(toggleMenu || screenWidth > 767) && (
                        <div className="list flex flex-col md:p-4 md:mt-10 bg-transparent  md:border-transparent border-t-2 border-white md:flex-row md:text-sm md:font-medium  w-full md:block md:w-auto">
                            <li>
                                <a href="Udix" className="cursor-pointer block py-2 pe-4 ps-3 text-white font-normal text-1xl leading-7 rounded md:bg-transparent focus-within: dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#Partners" className="cursor-pointer block py-2 pe-4 ps-3 text-white font-normal text-1xl leading-7 rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Product</a>
                            </li>
                            <li>
                                <a href="#Pricing" className="cursor-pointer block py-2 pe-4 ps-3 text-white font-normal text-1xl leading-7 rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="cursor-pointer block py-2 pe-4 ps-3 text-white font-normal text-1xl leading-7 rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                            <a href="#Contact" className="cursor-pointer block py-2 pe-4 ps-3 font-normal text-1xl leading-7 text-white rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </div>
                    )}
                    {(toggleMenu || screenWidth > 767) && (
                        <div className="list1 items-center w-full md:block md:w-auto flex flex-wrap">
                            <div className="lg:w-2/5 justify-center md:inline-flex inline-flex lg:justify-center md:ms-5 w-full lg:ms-0 md:justify-items-start justify-items-center">
                                <a href="https://twitter.com/figma?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="tw text-white cursor-pointer">
                                    <svg width="33" height="33" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M34.1455 3.48168C32.9207 4.01002 31.5878 4.39027 30.2149 4.53837C31.6403 3.69156 32.7077 2.35375 33.2168 0.775924C31.8793 1.5716 30.414 2.12954 28.886 2.42499C28.2474 1.74226 27.475 1.19836 26.617 0.827188C25.7589 0.456017 24.8337 0.26553 23.8988 0.267595C20.1163 0.267595 17.0744 3.33358 17.0744 7.09603C17.0744 7.62437 17.1384 8.15271 17.2425 8.66104C11.5788 8.36485 6.52753 5.65909 3.16936 1.5164C2.55746 2.56154 2.2368 3.75156 2.24075 4.96264C2.24075 7.33218 3.44553 9.42153 5.28273 10.6503C4.20004 10.6077 3.14271 10.3101 2.19672 9.78177V9.86582C2.19672 13.184 4.54225 15.9338 7.66827 16.5662C7.08133 16.7186 6.47753 16.7966 5.87111 16.7983C5.42682 16.7983 5.00655 16.7543 4.58227 16.6943C5.44683 19.4 7.96447 21.3653 10.9624 21.4293C8.61689 23.2665 5.67898 24.3472 2.48891 24.3472C1.91654 24.3472 1.3882 24.3272 0.839844 24.2632C3.86581 26.2044 7.45614 27.3252 11.3226 27.3252C23.8748 27.3252 30.7432 16.9264 30.7432 7.90055C30.7432 7.60436 30.7432 7.30816 30.7232 7.01197C32.0521 6.03934 33.2168 4.83456 34.1455 3.48168Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/figmadesign/" class="fb md:ms-3 ms-4 text-white cursor-pointer">
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.2126 0.786133H1.75349C1.04503 0.786133 0.472656 1.3585 0.472656 2.06696V31.5261C0.472656 32.2345 1.04503 32.8069 1.75349 32.8069H31.2126C31.9211 32.8069 32.4934 32.2345 32.4934 31.5261V2.06696C32.4934 1.3585 31.9211 0.786133 31.2126 0.786133ZM27.5142 10.1322H24.9565C22.9512 10.1322 22.563 11.0848 22.563 12.4857V15.5717H27.3501L26.7257 20.4029H22.563V32.8069H17.5718V20.4069H13.397V15.5717H17.5718V12.0094C17.5718 7.87473 20.0974 5.62127 23.7878 5.62127C25.5569 5.62127 27.0739 5.75336 27.5182 5.8134V10.1322H27.5142Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/figma?original_referer=https%3A%2F%2Fwww.google.com%2F" class="li md:ms-3 ms-4 text-white cursor-pointer">
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.197 0.786133H1.73786C1.0294 0.786133 0.457031 1.3585 0.457031 2.06696V31.5261C0.457031 32.2345 1.0294 32.8069 1.73786 32.8069H31.197C31.9054 32.8069 32.4778 32.2345 32.4778 31.5261V2.06696C32.4778 1.3585 31.9054 0.786133 31.197 0.786133ZM9.95519 28.0718H5.20411V12.7899H9.95519V28.0718ZM7.58165 10.7006C7.03701 10.7006 6.50459 10.5391 6.05173 10.2365C5.59887 9.93388 5.24591 9.5038 5.03749 9.00061C4.82906 8.49742 4.77453 7.94372 4.88078 7.40954C4.98704 6.87536 5.24931 6.38468 5.63443 5.99956C6.01956 5.61443 6.51023 5.35216 7.04442 5.24591C7.5786 5.13965 8.13229 5.19418 8.63548 5.40261C9.13867 5.61104 9.56875 5.964 9.87134 6.41686C10.1739 6.86972 10.3354 7.40213 10.3354 7.94678C10.3314 9.46777 9.09864 10.7006 7.58165 10.7006ZM27.7427 28.0718H22.9957V20.639C22.9957 18.8659 22.9636 16.5884 20.5261 16.5884C18.0565 16.5884 17.6762 18.5176 17.6762 20.5109V28.0718H12.9331V12.7899H17.4881V14.8793H17.5521C18.1845 13.6785 19.7335 12.4097 22.047 12.4097C26.8582 12.4097 27.7427 15.5757 27.7427 19.6904V28.0718Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header;