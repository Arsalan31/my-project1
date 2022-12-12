import React, { useEffect, useState } from "react";


function Header1(props) {

    console.log(props)

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

    const [directions, setdirections] = useState(props)
    const setDirection = () => {
        props.setIsRtl(!props.isRtl)
    }

    return (
        <header className="w-full absolute">
            <nav className="flex justify-between bg-transparent">
                <div className="container nav md:my-0 my-10 flex flex-wrap justify-between content-center px-2 items-center xl:mx-52 mx-auto bg-transparent ">
                    <div className="logo1 bg-no-repeat flex-none order-0 flex-grow-0 block cursor-pointer" />
                    <div className="">
                        <div className='flex justify-center mt-3'>
                            <label className="form-check-label inline-block me-2  text-white" for="flexSwitchCheckChecked">LTR</label>
                            <div onClick={setDirection} type="checkbox" className='toggle cursor-pointer'>
                                {directions ? <div className='toggle-end'></div> :
                                    <div className='toggle-start'></div>}
                            </div>
                            <label className="form-check-label inline-block ms-2  text-white" for="flexSwitchCheckChecked">RTL</label>
                        </div>
                    </div>
                    <button onClick={toggleNav} className="block items-center p-2 ms-3 text-sm  md:hidden">
                        <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.667969 0H27.3346V2.66667H0.667969V0ZM7.33463 6.66667H27.3346V9.33333H7.33463V6.66667ZM15.668 13.3333H27.3346V16H15.668V13.3333Z" fill="white" />
                        </svg>
                    </button>
                    {(toggleMenu || screenWidth > 767) && (
                        <div className="list2 flex flex-col md:p-4 md:mt-10 mt-10 bg-transparent  md:border-transparent border-t-2 border-white md:flex-row md:text-sm md:font-medium  w-full md:block md:w-auto">
                            <li>
                                <a href="Udix" className="cursor-pointer uppercase block py-2 pe-4 ps-3 text-white font-normal text-1xl leading-7 rounded md:bg-transparent focus-within: dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#Pricing" className="cursor-pointer uppercase block py-2 pe-4 ps-3 text-white font-normal text-1xl leading-7 rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
                            </li>
                            <li>
                                <a href="#Partners" className="cursor-pointer uppercase block py-2 pe-4 ps-3 text-white font-normal text-1xl leading-7 rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Product</a>
                            </li>
                            <li>
                                <a href="#Contact" className="cursor-pointer uppercase block py-2 pe-4 ps-3 font-normal text-1xl leading-7 text-white rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Contacts</a>
                            </li>
                        </div>
                    )}
                    {(toggleMenu || screenWidth > 767) && (
                        <div className="justify-items-center md:mt-0 mt-10">
                            <button className="text-indigo-700">SIGN IN</button>
                            <button className="text-indigo-700 ms-5 border-indigo-700 border-2 rounded-md px-6 py-3">SIGN UP</button>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
export default Header1;