import React from "react"
import './style.css';


function Footer3() {
    return (
        <footer>
            <div className="bg-blue-80 border-t border-b border-blue-80 flex justify-center">
                <img className="h-full" src={require('./assets/RVR-sticky.png')} />
                <div className="w-1/2 flex justify-center gap-10">
                    <div className="list-none flex justify-center flex-col">
                        <li>
                            <a href="#Solution" className="text-white text-base font-medium px-3 hover:text-green-40">Solutions</a>
                        </li>
                        <li>
                            <a href="#" className="text-white text-base font-medium px-3 hover:text-green-40">Our Process</a>
                        </li>
                        <li>
                            <a href="#" className="text-white text-base font-medium px-3 hover:text-green-40">ORG Development</a>
                        </li>
                        <li>
                            <a href="#" className="text-white text-base font-medium px-3 hover:text-green-40">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-white text-base font-medium px-3 hover:text-green-40">Contact</a>
                        </li>
                    </div>
                    <div className="flex justify-center items-start gap-4 w-1/5">
                        <a href="#">
                            <svg width="18" height="30" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 18.2658H0.5V5.14073H4.25V18.2658ZM2.49123 4.33638C1.51998 4.33638 0.734379 3.54887 0.734379 2.57761C0.734379 1.60636 1.52189 0.818848 2.49123 0.818848C3.46249 0.820698 4.25 1.60821 4.25 2.57761C4.25 3.54887 3.46249 4.33638 2.49123 4.33638ZM17.375 18.2658H13.625V10.1508C13.625 9.20011 13.3531 8.53454 12.185 8.53454C10.2481 8.53454 9.87497 10.1508 9.87497 10.1508V18.2658H6.12497V5.14073H9.87497V6.39509C10.4112 5.9845 11.7499 5.14258 13.625 5.14258C14.84 5.14258 17.375 5.87008 17.375 10.2651V18.2658Z" fill="#FFFFFF" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg className="hover:text-green-40" width="10" height="30" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.73041 9.52795H6.29003C6.29003 13.4269 6.29003 18.2261 6.29003 18.2261H2.67386C2.67386 18.2261 2.67386 13.4734 2.67386 9.52795H0.954895V6.45376H2.67386V4.46532C2.67386 3.04121 3.35057 0.815918 6.32326 0.815918L9.00291 0.82619V3.81036C9.00291 3.81036 7.37458 3.81036 7.05797 3.81036C6.74137 3.81036 6.29124 3.96866 6.29124 4.64779V6.45436H9.04641L8.73041 9.52795Z" fill="#FFFFFF" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </footer>
    )
}

export default Footer3;