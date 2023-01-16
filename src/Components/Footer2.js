import React, { useEffect, useState } from "react"
import './style.css';

function Footer() {
    const [toggleSection, setTogglesection] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const togglediv = () => {
        setTogglesection(!toggleSection)
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
    const [toggleSection1, setTogglesection1] = useState(false)

    const togglediv1 = () => {
        setTogglesection1(!toggleSection1)
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
    const [toggleSection2, setTogglesection2] = useState(false)

    const togglediv2 = () => {
        setTogglesection2(!toggleSection2)
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
    const [toggleSection3, setTogglesection3] = useState(false)

    const togglediv3 = () => {
        setTogglesection3(!toggleSection3)
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
    const [toggleSection4, setTogglesection4] = useState(false)

    const togglediv4 = () => {
        setTogglesection4(!toggleSection4)
    }
    const [toggleSection5, setTogglesection5] = useState(false)

    const togglediv5 = () => {
        setTogglesection5(!toggleSection5)
    }
    const [toggleSection6, setTogglesection6] = useState(false)

    const togglediv6 = () => {
        setTogglesection6(!toggleSection6)
    }
    const [toggleSection7, setTogglesection7] = useState(false)

    const togglediv7 = () => {
        setTogglesection7(!toggleSection7)
    }
    const [toggleSection8, setTogglesection8] = useState(false)

    const togglediv8 = () => {
        setTogglesection8(!toggleSection8)
    }
    const [toggleSection9, setTogglesection9] = useState(false)

    const togglediv9 = () => {
        setTogglesection9(!toggleSection9)
    }
    const [toggleSection10, setTogglesection10] = useState(false)

    const togglediv10 = () => {
        setTogglesection10(!toggleSection10)
    }
    const [toggleSection11, setTogglesection11] = useState(false)

    const togglediv11 = () => {
        setTogglesection11(!toggleSection11)
    }
    return (
        <footer className="bg-gray-5 py-8">
            <div className="flex flex-wrap lg:flex-wrap justify-center px-5">
                <div className="lg:w-1/3 inline-flex lg:ps-10">
                    <img src={require('./assets/AKDN Logo 1.png')} className="sm:w-14 sm:h-12 w-8 h-8" />
                    <img src={require('./assets/AKDN Logo 2.png')} className="sm:w-24 sm:h-6 w-16 h-4 sm:mt-3 mt-2 ms-2" />
                    <div className="border-s border-gray-600 ms-5 h-7 self-center">
                        <img src={require('./assets/Tag Line 2 1.png')} className="sm:w-32 sm:h-6 w-32 h-7 ms-3" />
                    </div>
                </div>
                <div className="lg:w-2/3 w-full lg:order-1 order-2">
                    <div className="lg:justify-end justify-center flex sm:gap-6 gap-6 lg:me-32 lg:mt-0 mt-7">
                        <a href="https://www.facebook.com/figmadesign/">
                            <svg width="10" height="30" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.73041 9.52795H6.29003C6.29003 13.4269 6.29003 18.2261 6.29003 18.2261H2.67386C2.67386 18.2261 2.67386 13.4734 2.67386 9.52795H0.954895V6.45376H2.67386V4.46532C2.67386 3.04121 3.35057 0.815918 6.32326 0.815918L9.00291 0.82619V3.81036C9.00291 3.81036 7.37458 3.81036 7.05797 3.81036C6.74137 3.81036 6.29124 3.96866 6.29124 4.64779V6.45436H9.04641L8.73041 9.52795Z" fill="#FFFFFF" />
                            </svg>
                        </a>
                        <a href="https://twitter.com/figma?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="text-white">
                            <svg width="21" height="30" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.1455 3.48168C32.9207 4.01002 31.5878 4.39027 30.2149 4.53837C31.6403 3.69156 32.7077 2.35375 33.2168 0.775924C31.8793 1.5716 30.414 2.12954 28.886 2.42499C28.2474 1.74226 27.475 1.19836 26.617 0.827188C25.7589 0.456017 24.8337 0.26553 23.8988 0.267595C20.1163 0.267595 17.0744 3.33358 17.0744 7.09603C17.0744 7.62437 17.1384 8.15271 17.2425 8.66104C11.5788 8.36485 6.52753 5.65909 3.16936 1.5164C2.55746 2.56154 2.2368 3.75156 2.24075 4.96264C2.24075 7.33218 3.44553 9.42153 5.28273 10.6503C4.20004 10.6077 3.14271 10.3101 2.19672 9.78177V9.86582C2.19672 13.184 4.54225 15.9338 7.66827 16.5662C7.08133 16.7186 6.47753 16.7966 5.87111 16.7983C5.42682 16.7983 5.00655 16.7543 4.58227 16.6943C5.44683 19.4 7.96447 21.3653 10.9624 21.4293C8.61689 23.2665 5.67898 24.3472 2.48891 24.3472C1.91654 24.3472 1.3882 24.3272 0.839844 24.2632C3.86581 26.2044 7.45614 27.3252 11.3226 27.3252C23.8748 27.3252 30.7432 16.9264 30.7432 7.90055C30.7432 7.60436 30.7432 7.30816 30.7232 7.01197C32.0521 6.03934 33.2168 4.83456 34.1455 3.48168Z" fill="white" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="24" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9996 8.87579C10.2793 8.87579 8.8754 10.2797 8.8754 12C8.8754 13.7203 10.2793 15.1242 11.9996 15.1242C13.7199 15.1242 15.1238 13.7203 15.1238 12C15.1238 10.2797 13.7199 8.87579 11.9996 8.87579ZM21.3699 12C21.3699 10.7063 21.3817 9.42423 21.309 8.13283C21.2363 6.63283 20.8942 5.30158 19.7973 4.2047C18.6981 3.10548 17.3692 2.76564 15.8692 2.69298C14.5754 2.62033 13.2934 2.63204 12.002 2.63204C10.7082 2.63204 9.42619 2.62033 8.13478 2.69298C6.63478 2.76564 5.30353 3.10783 4.20665 4.2047C3.10744 5.30392 2.76759 6.63283 2.69494 8.13283C2.62228 9.42658 2.634 10.7086 2.634 12C2.634 13.2914 2.62228 14.5758 2.69494 15.8672C2.76759 17.3672 3.10978 18.6985 4.20665 19.7953C5.30587 20.8945 6.63478 21.2344 8.13478 21.307C9.42853 21.3797 10.7106 21.368 12.002 21.368C13.2957 21.368 14.5777 21.3797 15.8692 21.307C17.3692 21.2344 18.7004 20.8922 19.7973 19.7953C20.8965 18.6961 21.2363 17.3672 21.309 15.8672C21.384 14.5758 21.3699 13.2938 21.3699 12ZM11.9996 16.807C9.33947 16.807 7.19259 14.6602 7.19259 12C7.19259 9.33986 9.33947 7.19298 11.9996 7.19298C14.6598 7.19298 16.8067 9.33986 16.8067 12C16.8067 14.6602 14.6598 16.807 11.9996 16.807ZM17.0035 8.11876C16.3824 8.11876 15.8809 7.6172 15.8809 6.99611C15.8809 6.37501 16.3824 5.87345 17.0035 5.87345C17.6246 5.87345 18.1262 6.37501 18.1262 6.99611C18.1264 7.14359 18.0975 7.28966 18.0411 7.42595C17.9848 7.56224 17.9021 7.68607 17.7978 7.79036C17.6935 7.89464 17.5697 7.97733 17.4334 8.03368C17.2971 8.09004 17.151 8.11895 17.0035 8.11876Z" fill="white" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.4098 9.25995C29.2504 8.66799 28.9384 8.12826 28.5049 7.69479C28.0715 7.26131 27.5317 6.94929 26.9398 6.78995C24.7598 6.19995 15.9998 6.19995 15.9998 6.19995C15.9998 6.19995 7.23978 6.19995 5.05978 6.78995C4.46782 6.94929 3.92809 7.26131 3.49461 7.69479C3.06113 8.12826 2.74911 8.66799 2.58978 9.25995C2.18272 11.4832 1.98519 13.7398 1.99978 16C1.98519 18.2601 2.18272 20.5167 2.58978 22.74C2.74911 23.3319 3.06113 23.8716 3.49461 24.3051C3.92809 24.7386 4.46782 25.0506 5.05978 25.2099C7.23978 25.7999 15.9998 25.7999 15.9998 25.7999C15.9998 25.7999 24.7598 25.7999 26.9398 25.2099C27.5317 25.0506 28.0715 24.7386 28.5049 24.3051C28.9384 23.8716 29.2504 23.3319 29.4098 22.74C29.8168 20.5167 30.0144 18.2601 29.9998 16C30.0144 13.7398 29.8168 11.4832 29.4098 9.25995ZM13.1998 20.2V11.8L20.4698 16L13.1998 20.2Z" fill="white" />
                            </svg>

                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:mt-12 w-full lg:ps-10 lg:order-0 order-1 border-b lg:pb-14 pb-7 border-gray-600">
                    <div className="text-start">
                        <p className="sm:w-5/12 w-full lg:w-60 lg:mx-0 mx-auto sm:px-0 px-1 lg:mt-0 mt-7 font-normal text-sm text-start text-gray-400">
                            We work with communities to address the inter-related dimensions of poverty in order to improve quality of life, promote pluralism, and enhance self-reliance.                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full lg:order-2 order-2 border-b pb-14 border-gray-600">
                    <div className="flex lg:justify-end justify-center lg:me-32 lg:mt-0 mt-5">
                        <p className="text-white text-md tracking-wider">Subscribe to our newsletter</p>
                    </div>
                    <div className="flex items-center flex-col mt-3 lg:items-end lg:px-0 sm:px-48 px-20 lg:me-32">
                        <button className="text-white  xl:w-1/3 lg:w-1/2 md:w-1/3 sm:w-1/2 w-36 text-sm py-3 xl:px-2 sm:px-2 px-4 font-bold inline-flex text-start border-gray-400 border">
                            <p className="w-9/12">Sign Up</p>
                            <svg className="w-1/5 seemore mt-1 flex justify-end" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 13L7 7L1 1" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className="text-white xl:w-1/3 lg:w-1/2 md:w-1/3 sm:w-1/2 w-36 text-sm py-3 xl:px-2 sm:px-1 px-3 font-bold inline-flex  text-start border-gray-400 border mt-5">
                            <p className="w-9/12">Contact Us</p>
                            <svg className="w-1/5 flex justify-end seemore mt-1" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 13L7 7L1 1" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <footer className="w-full flex flex-wrap lg:flex-row flex-col mt-7 lg:pb-0 pb-7 h-full">
                <div className="lg:w-1/5 px-5 text-start lg:ps-10 mt-7">
                    <h3 className="font-bold text-sm text-white uppercase tracking-widest pb-6">Quick Links</h3>
                    <nav className="list-none">
                        <li className="pb-4">
                            <a href="#Home" className="text-white font-normal text-sm pb-2 ">Careers at AKDN</a>
                        </li>
                        <li className="pb-4">
                            <a href="#" className="text-white font-normal text-sm pb-2">Partners with Us</a>
                        </li>
                        <li className="pb-4">
                            <a href="#Pricing" className="text-white font-normal text-sm pb-2">Donate</a>
                        </li>
                        <li className="pb-4">
                            <a href="#" className="text-white font-normal text-sm pb-2">FreQuently Asked Questions</a>
                        </li>
                        <li className="pb-4">
                            <a href="#Contact" className="text-white font-normal text-sm pb-2">Covid-19 Resources Library</a>
                        </li>
                        <li className="pb-4">
                            <a href="#Contact" className="text-white font-normal w-1/5 text-sm pb-2">International Scholarship Programme</a>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/5 px-5 text-start lg:ps-10 mt-7">
                    <div className="flex">
                        <h3 className="w-11/12 font-bold text-sm text-white uppercase tracking-widest pb-6">who we are</h3>
                        <div className="lg:hidden border-gray-400 border-s h-8"></div>
                        <button className="lg:hidden w-1/12 mt-2 ms-3 flex justify-center" onClick={togglediv}>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    {(toggleSection || screenWidth > 1023) && (
                        <nav className="lg:list-none list4 lg:flex flex-col hidden">
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Founder & Chairman</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Leadership</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Awards Received by AKDN</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Our Partners</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Fact Sheet</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Frequently Asked Questions</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Contact Us</a>
                            </li>
                        </nav>
                    )}
                </div>
                <div className="lg:w-1/5 px-5 text-start lg:ps-10 mt-7">
                    <div className="flex">
                        <h3 className="w-11/12 font-bold text-sm text-white tracking-widest uppercase pb-6">what we do</h3>
                        <div className="lg:hidden border-gray-400 border-s h-8"></div>
                        <button className="lg:hidden w-1/12 mt-2 ms-3 flex justify-center" onClick={togglediv1}>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    {(toggleSection1 || screenWidth > 1023) && (
                        <nav className="lg:list-none list4 lg:flex flex-col hidden">
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Education</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Health</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Architecture</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Culture</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Climate & Environment</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-sm pb-2 cursor-pointer">Civil Society</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-sm pb-2 inline-flex cursor-pointer">See More
                                    <svg className="mt-2 ms-3" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </li>
                        </nav>
                    )}
                </div>
                <div className="lg:w-1/5 px-5 text-start lg:ps-10 mt-7">
                    <div className="flex">
                        <h3 className="w-11/12 font-bold text-sm text-white tracking-widest uppercase pb-6">our agencies</h3>
                        <div className="lg:hidden border-gray-400 border-s h-8"></div>
                        <button className="lg:hidden w-1/12 mt-2 ms-3 flex justify-center" onClick={togglediv2}>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    {(toggleSection2 || screenWidth > 1023) && (
                        <nav className="lg:list-none list4 lg:flex flex-col hidden">
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-start text-sm pb-2 inline-flex cursor-pointer"><p className="me-3">AKAH</p>
                                    Aga Khan Agency for Habitat</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-start text-sm pb-2 inline-flex cursor-pointer"><p className="me-2">AKAM</p>
                                    Aga Khan Agency for Microfinance</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-start text-sm pb-2 inline-flex cursor-pointer"><p className="me-6">AKF</p>
                                    Aga Khan Foundation</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-start text-sm pb-2 inline-flex cursor-pointer"><p className="me-2">AKFED</p>
                                    Aga Khan Fund for Economic Development</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-start text-sm pb-2 inline-flex cursor-pointer"><p className="me-4">AKHS</p>
                                    Aga Khan Health Services</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-start text-sm pb-2 inline-flex cursor-pointer"><p className="me-7">AKS</p>
                                    Aga Khan Schools</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-start text-sm pb-2 inline-flex cursor-pointer"><p className="me-5">AKTC</p>
                                    Aga Khan Trust for Culture</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-start text-sm pb-2 inline-flex cursor-pointer"><p className="me-6">AKU</p>
                                    Aga Khan University</a>
                            </li>
                            <li className="pb-4">
                                <a href="#" className="text-white font-normal text-start text-sm pb-2 inline-flex cursor-pointer"><p className="me-6">UCA</p>
                                    University of Central Asia</a>
                            </li>
                        </nav>
                    )}
                </div>
                <div className="lg:w-1/5 px-5 text-start lg:ps-10 mt-7">
                    <div className="flex">
                        <h3 className="w-11/12 font-bold text-sm text-white tracking-widest uppercase pb-6">where we work</h3>
                        <div className="lg:hidden border-gray-400 border-s h-8"></div>
                        <button className="lg:hidden w-1/12 mt-2 ms-3 flex justify-center" onClick={togglediv3}>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    {(toggleSection3 || screenWidth > 1023) && (
                        <nav className="lg:list-none list4 lg:flex flex-col hidden">
                            <li className="pb-4">
                                <a className="text-white font-normal text-sm pb-2 inline-flex">Eastern Africa
                                    <button onClick={togglediv4}>
                                        <svg className="mt-2 ms-3" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </a>
                                {(toggleSection4) && (
                                    <nav className="lg:list-none list5 lg:flex flex-col hidden">
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Kenya</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Madagascar</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Mozambique</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Rwanda</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Tanzania</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Uganda</a>
                                        </li>
                                    </nav>
                                )}
                            </li>
                            <li className="pb-4">
                                <a className="text-white font-normal text-sm pb-2 inline-flex cursor-pointer">West Africa
                                    <button onClick={togglediv5}>
                                        <svg className="mt-2 ms-3" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </a>
                                {(toggleSection5) && (
                                    <nav className="lg:list-none list5 lg:flex flex-col hidden">
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Burkina Faso</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Côte d'Ivoire</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Mali</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Senegal</a>
                                        </li>
                                    </nav>
                                )}
                            </li>
                            <li className="pb-4">
                                <a className="text-white font-normal text-sm pb-2 inline-flex cursor-pointer">Middle East
                                    <button onClick={togglediv6}>
                                        <svg className="mt-2 ms-3" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </a>
                                {(toggleSection6) && (
                                    <nav className="lg:list-none list5 lg:flex flex-col hidden">
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Egypt</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Syria</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">United Arab Emirates</a>
                                        </li>
                                    </nav>
                                )}
                            </li>
                            <li className="pb-4">
                                <a className="text-white font-normal text-sm pb-2 inline-flex cursor-pointer">Central Asia
                                    <button onClick={togglediv7}>
                                        <svg className="mt-2 ms-3" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </a>
                                {(toggleSection7) && (
                                    <nav className="lg:list-none list5 lg:flex flex-col hidden">
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Afghanistan</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Kazakhstan</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Kyrgyz Republic</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Tajikistan</a>
                                        </li>
                                    </nav>
                                )}
                            </li>
                            <li className="pb-4">
                                <a className="text-white font-normal text-sm pb-2 inline-flex cursor-pointer">South Asia
                                    <button onClick={togglediv8}>
                                        <svg className="mt-2 ms-3" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </a>
                                {(toggleSection8) && (
                                    <nav className="lg:list-none list5 lg:flex flex-col hidden">
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Bangladesh</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">India</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Pakistan</a>
                                        </li>
                                    </nav>
                                )}
                            </li>
                            <li className="pb-4">
                                <a className="text-white font-normal text-sm inline-flex pb-2 cursor-pointer">Asia-Pacific
                                    <button onClick={togglediv9}>
                                        <svg className="mt-2 ms-3" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </a>
                                {(toggleSection9) && (
                                    <nav className="lg:list-none list5 lg:flex flex-col hidden">
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Malaysia</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Singapore</a>
                                        </li>
                                    </nav>
                                )}
                            </li>
                            <li className="pb-4">
                                <a className="text-white font-normal inline-flex text-sm pb-2 cursor-pointer">North America
                                    <button onClick={togglediv10}>
                                        <svg className="mt-2 ms-3" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </a>
                                {(toggleSection10) && (
                                    <nav className="lg:list-none list5 lg:flex flex-col hidden">
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Canada</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">United States of America</a>
                                        </li>
                                    </nav>
                                )}
                            </li>
                            <li className="pb-4">
                                <a className="text-white font-normal inline-flex text-sm pb-2 cursor-pointer">Europe
                                    <button onClick={togglediv11}>
                                        <svg className="mt-2 ms-3" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </a>
                                {(toggleSection11) && (
                                    <nav className="lg:list-none list5 lg:flex flex-col hidden">
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">France</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Germany</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Norway</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Portugal</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">Switzerland</a>
                                        </li>
                                        <li className="pb-4">
                                            <a className="text-white font-normal text-sm pb-2 inline-flex">United Kingdom</a>
                                        </li>
                                    </nav>
                                )}
                            </li>
                        </nav>
                    )}
                </div>
            </footer>
            <div className="container mx-auto lg:border-gray-600 border-b w-full px-5 flex justify-center mt-5"></div>
            <div className="lg:mt-8 w-full lg:ps-10">
                <div className="flex-col justify-center">
                    <p className="w-full lg:mx-0 mx-auto sm:px-0 px-8 lg:mt-0 mt-7 font-normal text-sm text-center text-gray-400">
                        © 2021 Aga Khan Foundation, an agency of the Aga Khan Development Network. All rights reserved.
                    </p>
                    <p className="w-full flex justify-center gap-5 lg:mx-0 mx-auto sm:px-0 px-10 mt-3 font-normal text-sm text-center text-gray-400">
                        Terms & Conditions
                        <p>
                            Privacy Policy
                        </p>
                    </p>
                </div>
            </div>
        </footer >
    )
}

export default Footer;