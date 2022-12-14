import React from "react"
import './style.css';

function Footer() {
  return (
    <footer className="sm:bg-gray-100 bg-gray-300">
      <div className="flex flex-wrap py-10 lg:flex-wrap justify-center">
        <div className="lg:w-1/2 mt-6 lg:ps-16">
          <svg className="flex md:self-start self-center" width="70" height="26" viewBox="0 0 70 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4611 20.4072C14.4611 20.9842 14.7233 21.2727 15.2477 21.2727C15.7923 21.2727 16.2461 21.1618 16.6091 20.9398L16.4579 24.7017C15.4897 25.5672 14.4006 26 13.1905 26C10.9114 26 9.67101 25.0346 9.46932 23.1037C8.25918 25.0346 6.6255 26 4.56826 26C2.5312 26 1.21014 25.4895 0.605068 24.4686C0.201689 23.825 0 23.0926 0 22.2715C0 21.4503 0.0605068 20.6957 0.18152 20.0077L1.87571 9.52113H7.01879L5.59688 18.3764C5.53637 18.7759 5.50612 19.1754 5.50612 19.5749C5.50612 20.6402 6.05068 21.1729 7.13981 21.1729C8.04741 21.1729 8.77349 20.8289 9.31805 20.1408L11.0425 9.52113H16.1856L14.4914 20.0077C14.4712 20.1408 14.4611 20.274 14.4611 20.4072Z" fill="#381DDB" />
            <path d="M32.6808 20.4072C32.6808 20.9842 32.943 21.2727 33.4674 21.2727C34.0119 21.2727 34.4657 21.1618 34.8288 20.9398L34.6775 24.7017C33.7094 25.5672 32.6203 26 31.4101 26C29.1915 26 27.9612 25.1123 27.7192 23.3368C26.7108 25.1123 25.2283 26 23.272 26C19.9643 26 18.3104 24.4353 18.3104 21.306C18.3104 20.7734 18.3608 20.1852 18.4617 19.5416L19.097 15.6466C19.4197 13.6492 20.1559 12.0623 21.3055 10.886C22.4753 9.68758 24.0888 9.08835 26.146 9.08835C27.4167 9.08835 28.4251 9.38796 29.1714 9.9872L30.7143 0.266324H35.8876L32.711 20.0077C32.6909 20.1408 32.6808 20.274 32.6808 20.4072ZM23.7258 18.8092C23.6854 19.009 23.6653 19.2864 23.6653 19.6415C23.6653 19.9966 23.8165 20.3517 24.1191 20.7068C24.4216 21.0397 24.9258 21.2061 25.6317 21.2061C26.3578 21.2061 26.983 20.8954 27.5074 20.274L28.415 14.6812C28.1932 14.1263 27.6688 13.8489 26.8419 13.8489C25.2889 13.8489 24.3813 14.6701 24.1191 16.3124L23.7258 18.8092Z" fill="#381DDB" />
            <path d="M43.6656 21.2727C44.1295 21.2727 44.5429 21.1618 44.906 20.9398L44.7547 24.7017C43.8068 25.5672 42.7277 26 41.5176 26C39.6822 26 38.4923 25.5339 37.9477 24.6018C37.5847 23.9804 37.4031 23.3257 37.4031 22.6376C37.4031 21.9274 37.4435 21.306 37.5242 20.7734L39.3394 9.52113H44.4824L42.7882 20.0077C42.7681 20.1408 42.758 20.2629 42.758 20.3739C42.758 20.9731 43.0605 21.2727 43.6656 21.2727ZM39.9444 4.09475C39.9444 2.67435 40.2268 1.64234 40.7915 0.998719C41.3764 0.332906 42.2739 0 43.4841 0C45.1783 0 46.0254 0.82117 46.0254 2.46351C46.0254 3.86172 45.7329 4.88263 45.148 5.52625C44.5833 6.16987 43.6858 6.49168 42.4555 6.49168C40.7814 6.49168 39.9444 5.6927 39.9444 4.09475Z" fill="#381DDB" />
            <path d="M61.8926 25.5339H56.2654L54.1174 20.9065L50.487 25.5339H44.8599L51.3946 17.3444L47.4617 9.28809H53.1796L55.2368 13.8489L58.7765 9.28809H64.4944L57.9294 17.3777L61.8926 25.5339Z" fill="#381DDB" />
            <path d="M63.9191 23.6031C63.9191 22.1827 64.2014 21.1507 64.7662 20.507C65.3309 19.8412 66.2284 19.5083 67.4587 19.5083C69.1529 19.5083 70 20.3295 70 21.9718C70 23.37 69.7076 24.391 69.1227 25.0346C68.5579 25.6782 67.6604 26 66.4301 26C64.7561 26 63.9191 25.201 63.9191 23.6031Z" fill="#381DDB" />
          </svg>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="flex flex-wrap lg:justify-end justify-center">
            <a href="Udix" className="mt-6 cursor-pointer block py-2 sm:pe-4 pe-1 ps-3 text-black font-semibold text-sm fon uppercase rounded md:bg-transparent focus-within: dark:text-white" aria-current="page">Home</a>
            <a href="#Pricing" className="mt-6 cursor-pointer block py-2 sm:pe-4 pe-1 ps-3 text-black font-semibold text-sm uppercase rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
            <a href="#Partners" className="mt-6 cursor-pointer block py-2 sm:pe-4 pe-1 ps-3 text-black font-semibold text-sm uppercase rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Product</a>
            <a href="#Contact" className="mt-6 cursor-pointer block py-2 sm:pe-4 pe-1 ps-3 font-semibold text-sm uppercase text-black rounded md:hover:bg-transparent md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Contacts</a>
            <div className="m-5 xl:ms-26 xl:me-16">
              <button className="text-indigo-700 uppercase text-sm py-2 pe-4 ps-3 font-semibold">SIGN IN</button>
              <button className="text-indigo-700 uppercase text-sm pe-4 ps-3 font-semibold ms-5 border-indigo-700 border-2 px-6 py-3">SIGN UP</button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:ps-16 lg:order-0 order-2">
          <div className="lg:text-start mt-4 text-center">
            <p className="font-normal text-xs text-gray-400 lg:w-96 w-1/2">
              udix is a market-leading provider of digital marketing services, using proprietary tools and methodologies to generate high-value engagement for our customers.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:order-2">
          <div className="lg:justify-end justify-center flex m-4 sm:gap-12 gap-6 lg:me-16">
            <a href="https://www.facebook.com/figmadesign/">
              <svg width="10" height="30" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.73041 9.52795H6.29003C6.29003 13.4269 6.29003 18.2261 6.29003 18.2261H2.67386C2.67386 18.2261 2.67386 13.4734 2.67386 9.52795H0.954895V6.45376H2.67386V4.46532C2.67386 3.04121 3.35057 0.815918 6.32326 0.815918L9.00291 0.82619V3.81036C9.00291 3.81036 7.37458 3.81036 7.05797 3.81036C6.74137 3.81036 6.29124 3.96866 6.29124 4.64779V6.45436H9.04641L8.73041 9.52795Z" fill="#222222" />
              </svg>
            </a>
            <a href="#">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6878 7.016H16.6686V11.4766C16.6686 11.8746 16.7026 12.1444 16.7591 12.3153C16.8616 12.6008 17.0887 12.7343 17.4177 12.7343C17.7906 12.7343 18.1785 12.5081 18.5855 12.0416V12.6566H19.6075V7.016H18.5855V11.3274C18.3587 11.6475 18.1442 11.8059 17.9398 11.8059C17.8029 11.8059 17.7225 11.7248 17.7001 11.5665C17.6878 11.533 17.6878 11.4087 17.6878 11.169V7.016ZM13.1281 7.52638C12.9108 7.8115 12.8083 8.25221 12.8083 8.85528V10.8305C12.8083 11.4299 12.9108 11.8749 13.1281 12.157C13.4108 12.5418 13.8088 12.7343 14.3183 12.7343C14.8302 12.7343 15.2279 12.5418 15.5106 12.157C15.7248 11.8749 15.8273 11.4302 15.8273 10.8305V8.85528C15.8273 8.25221 15.7248 7.81119 15.5106 7.52638C15.2279 7.1406 14.8302 6.94786 14.3183 6.94786C13.8088 6.94786 13.4108 7.1406 13.1281 7.52638ZM10.8797 8.05978L10.075 5.0874H8.88268C9.00068 5.43427 9.12115 5.78181 9.24165 6.12944L9.24168 6.12951L9.24169 6.12956L9.2417 6.12959L9.24171 6.1296L9.24172 6.12964C9.36503 6.48537 9.48837 6.84119 9.60912 7.19646C9.97281 8.25221 10.1996 9.04802 10.3024 9.59124V12.6569H11.4355V9.59124L12.7991 5.0874H11.6528L10.8797 8.05978ZM21.2663 24.6812C22.1425 24.5833 22.8702 23.9265 23.0752 23.0368C23.3671 21.7696 23.3683 20.3857 23.3683 19.0808V19.0563C23.3683 17.7585 23.3683 16.3843 23.0792 15.1247C22.8739 14.2347 22.1459 13.5782 21.2697 13.4803C19.1944 13.2486 17.0939 13.2474 15.003 13.2486C12.9114 13.2474 10.811 13.2486 8.73567 13.4803C7.85946 13.5779 7.13209 14.2347 6.92738 15.1247C6.63582 16.3923 6.63214 17.7758 6.63214 19.0808C6.63214 20.3857 6.63214 21.7696 6.92401 23.0368C7.12841 23.9268 7.85639 24.5833 8.7326 24.6812C10.8076 24.9129 12.9084 24.9141 14.9993 24.9129C17.0912 24.9141 19.1907 24.9129 21.2663 24.6812ZM19.4036 17.4661C19.6957 17.084 20.0975 16.894 20.6149 16.894C21.1225 16.894 21.5249 17.0843 21.8075 17.4655C22.0196 17.7479 22.1206 18.1843 22.1206 18.7806V19.9367H20.0975V20.9268C20.0975 21.443 20.2675 21.7008 20.6149 21.7008C20.8638 21.7008 21.0093 21.5658 21.067 21.2954C21.0759 21.2404 21.0891 21.0155 21.0891 20.6104H22.1206V20.7574C22.1206 21.0836 22.1086 21.308 22.0991 21.4092C22.0653 21.6333 21.9856 21.8361 21.8628 22.0154C21.5829 22.4208 21.1683 22.6206 20.6401 22.6206C20.111 22.6206 19.708 22.43 19.4161 22.0488C19.2007 21.7692 19.0911 21.3297 19.0911 20.7365V18.7812C19.0911 18.1849 19.189 17.7485 19.4036 17.4661ZM20.0981 19.0952H21.1096V18.5786C21.1096 18.0627 20.9402 17.8043 20.6057 17.8043C20.2678 17.8043 20.0981 18.0624 20.0981 18.5786V19.0952ZM13.4503 21.2278C13.2259 21.5449 13.0138 21.7011 12.8107 21.7011C12.6756 21.7011 12.5986 21.6216 12.574 21.4645C12.5648 21.4319 12.5648 21.3086 12.5648 21.0716V16.9622H11.5533V21.3752C11.5533 21.7695 11.5873 22.0359 11.6426 22.2053C11.7442 22.4883 11.9688 22.6209 12.2942 22.6209C12.6664 22.6209 13.0482 22.3962 13.4503 21.9353V22.5442H14.4624V16.9622H13.4503V21.2278ZM16.3485 17.4994C16.6747 17.0973 17.0218 16.8942 17.3938 16.8942C17.7958 16.8942 18.0671 17.1059 18.2019 17.5246C18.2697 17.7489 18.3044 18.1178 18.3044 18.6463V20.8689C18.3044 21.3854 18.2697 21.7571 18.2019 21.9937C18.0668 22.4093 17.7961 22.621 17.3938 22.621C17.0338 22.621 16.687 22.4209 16.3485 22.0032V22.544H15.3372V15.0527H16.3485V17.4994ZM16.8524 21.7012C17.1446 21.7012 17.2925 21.4526 17.2925 20.9481V18.5659C17.2925 18.0626 17.1443 17.8041 16.8524 17.8041C16.6864 17.8041 16.5173 17.8833 16.3482 18.0506V21.4523C16.5173 21.6217 16.6864 21.7012 16.8524 21.7012ZM7.88019 16.107H9.06945V22.5437H10.1946V16.107H11.4059V15.0527H7.88019V16.107ZM14.806 11.0226C14.806 11.5443 14.6479 11.8055 14.3186 11.8055C13.989 11.8055 13.8306 11.5446 13.8306 11.0226V8.64991C13.8306 8.12818 13.989 7.86792 14.3186 7.86792C14.6479 7.86792 14.806 8.12787 14.806 8.64991V11.0226Z" fill="#222222" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/figma?original_referer=https%3A%2F%2Fwww.google.com%2F">
              <svg width="18" height="30" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.25 18.2658H0.5V5.14073H4.25V18.2658ZM2.49123 4.33638C1.51998 4.33638 0.734379 3.54887 0.734379 2.57761C0.734379 1.60636 1.52189 0.818848 2.49123 0.818848C3.46249 0.820698 4.25 1.60821 4.25 2.57761C4.25 3.54887 3.46249 4.33638 2.49123 4.33638ZM17.375 18.2658H13.625V10.1508C13.625 9.20011 13.3531 8.53454 12.185 8.53454C10.2481 8.53454 9.87497 10.1508 9.87497 10.1508V18.2658H6.12497V5.14073H9.87497V6.39509C10.4112 5.9845 11.7499 5.14258 13.625 5.14258C14.84 5.14258 17.375 5.87008 17.375 10.2651V18.2658Z" fill="#222222" />
              </svg>
            </a>
            <a href="#">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2709 22.3043C12.7041 22.4681 12.0908 22.5508 11.4474 22.5508C10.7308 22.5508 10.042 22.4687 9.39971 22.3061C8.15686 21.9926 7.23847 21.398 6.80948 20.6319C6.6246 20.3008 6.53094 19.9479 6.53094 19.5824C6.53094 19.206 6.62097 18.8241 6.79861 18.4459C7.47955 16.9946 9.27464 16.0182 11.2631 16.0182H11.3199C11.1586 15.7336 11.0806 15.4387 11.0806 15.1288C11.0806 14.9747 11.1012 14.8176 11.1422 14.6575C9.05652 14.6104 7.49586 13.0829 7.49586 11.0691C7.49586 9.64743 8.63237 8.26199 10.2577 7.7025C10.7441 7.53453 11.2401 7.44873 11.7277 7.44873H16.188C16.3396 7.44873 16.4744 7.54722 16.5215 7.69162C16.5686 7.83542 16.5166 7.99372 16.394 8.08254L15.3964 8.80457C15.3366 8.84686 15.2647 8.86982 15.1904 8.86982H14.8333C15.2943 9.42267 15.5644 10.2112 15.5644 11.0963C15.5644 12.0733 15.0702 12.9971 14.1705 13.701C13.4757 14.2424 13.4485 14.3917 13.4485 14.7004C13.4569 14.8702 13.9409 15.4242 14.475 15.8019C15.7191 16.6816 16.1819 17.545 16.1819 18.9854C16.1813 20.4905 15.0388 21.7907 13.2709 22.3043ZM23.3436 14.6539C23.3436 14.8472 23.1859 15.0043 22.9931 15.0043H20.4585V17.5402C20.4585 17.7335 20.3008 17.8906 20.1092 17.8906H19.3872C19.1927 17.8906 19.0356 17.7335 19.0356 17.5402V15.0043H16.5027C16.3094 15.0043 16.1523 14.8484 16.1523 14.6539V13.9331C16.1523 13.7397 16.3094 13.5814 16.5027 13.5814H19.0356V11.048C19.0356 10.854 19.1927 10.6975 19.3872 10.6975H20.1092C20.3008 10.6975 20.4585 10.854 20.4585 11.048V13.5814H22.9925C23.1853 13.5814 23.343 13.7385 23.343 13.9319L23.3436 14.6539ZM12.8179 17.3685L12.8179 17.3684C12.7757 17.3394 12.7328 17.31 12.6891 17.2804C12.3852 17.1873 12.0625 17.139 11.732 17.1348H11.6921C10.1732 17.1348 8.84149 18.0538 8.84149 19.1027C8.84149 20.2446 9.98284 21.137 11.439 21.137C13.3597 21.137 14.3331 20.4736 14.3331 19.1685C14.3331 19.0453 14.3186 18.9172 14.2878 18.7885C14.1584 18.2841 13.6968 17.9686 12.9987 17.4913L12.9906 17.4858C12.934 17.4482 12.8766 17.4088 12.8179 17.3685ZM11.9149 13.5053H11.9137H11.8998C10.9349 13.4751 9.97059 12.3349 9.79778 11.0154C9.70171 10.2776 9.857 9.6142 10.2237 9.19549C10.46 8.92481 10.7712 8.78101 11.1198 8.78101L11.1591 8.78221C12.1445 8.81061 13.0889 9.91026 13.2611 11.2311C13.359 11.97 13.194 12.666 12.8218 13.0902C12.5844 13.3621 12.278 13.5053 11.9149 13.5053Z" fill="#222222" />
              </svg>
            </a>
            <a href="#">
              <svg width="18" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.382 8.76885C12.0214 8.5276 11.5792 8.31978 11.0679 8.15135C10.5629 7.9851 9.99198 7.83135 9.37042 7.69447C8.87917 7.57728 8.52104 7.48697 8.30792 7.42666C8.09948 7.36697 7.89167 7.28447 7.68979 7.17947C7.4951 7.07947 7.34104 6.95916 7.23198 6.82197C7.12885 6.69228 7.07885 6.54197 7.07885 6.36197C7.07885 6.06853 7.23448 5.82072 7.55479 5.60447C7.88698 5.3801 8.33479 5.26666 8.8851 5.26666C9.47792 5.26666 9.90917 5.36916 10.1673 5.57135C10.4329 5.77916 10.6648 6.07385 10.8564 6.44885C11.0214 6.74197 11.1707 6.94572 11.3145 7.07635C11.4692 7.21666 11.692 7.28885 11.9764 7.28885C12.2889 7.28885 12.5545 7.17478 12.7648 6.94978C12.9739 6.72603 13.0798 6.46978 13.0798 6.18728C13.0798 5.89416 12.9989 5.59041 12.8398 5.28572C12.6817 4.98447 12.4307 4.69385 12.0929 4.4226C11.7579 4.15291 11.331 3.93385 10.8248 3.77166C10.3217 3.61072 9.71823 3.52916 9.03292 3.52916C8.1751 3.52916 7.41698 3.65228 6.77948 3.89447C6.13385 4.1401 5.6326 4.49853 5.28917 4.95916C4.94292 5.42322 4.7676 5.96135 4.7676 6.55822C4.7676 7.18416 4.93479 7.71728 5.26448 8.14103C5.58948 8.55947 6.03323 8.89385 6.58385 9.13478C7.12229 9.3701 7.79917 9.57885 8.59635 9.75447C9.18229 9.88041 9.65635 10.001 10.0054 10.1132C10.3395 10.2207 10.6157 10.377 10.8248 10.5779C11.0242 10.7704 11.1214 11.0151 11.1214 11.3273C11.1214 11.722 10.9351 12.0442 10.5529 12.3129C10.1614 12.5879 9.64104 12.7276 9.00635 12.7276C8.54448 12.7276 8.16948 12.6585 7.89104 12.5232C7.61448 12.3882 7.3976 12.2163 7.24698 12.011C7.09042 11.7973 6.94167 11.527 6.80573 11.206C6.68385 10.912 6.5326 10.6835 6.35573 10.5295C6.17073 10.3685 5.94292 10.2873 5.67948 10.2873C5.35792 10.2873 5.08823 10.3904 4.87791 10.5938C4.66541 10.7995 4.5576 11.0504 4.5576 11.3398C4.5576 11.8029 4.72291 12.2835 5.04916 12.7673C5.37229 13.2467 5.7976 13.6351 6.31354 13.9217C7.03542 14.3157 7.9601 14.5151 9.06292 14.5151C9.98135 14.5151 10.7889 14.3688 11.4626 14.081C12.1426 13.7901 12.6673 13.3804 13.0226 12.8635C13.3792 12.3438 13.5601 11.7507 13.5601 11.1001C13.5601 10.5557 13.4551 10.0876 13.2476 9.70854C13.041 9.33166 12.7498 9.0151 12.382 8.76885ZM12.5954 17.4001C11.8335 17.4001 11.117 17.2026 10.4904 16.8563C10.0348 16.9432 9.56479 16.9892 9.08417 16.9892C4.84354 16.9892 1.40542 13.4517 1.40542 9.08822C1.40542 8.54385 1.45916 8.0126 1.56104 7.49947C1.1726 6.81916 0.948853 6.0276 0.948853 5.18197C0.948853 2.65166 2.9426 0.600098 5.40198 0.600098C6.27323 0.600098 7.08479 0.858223 7.77135 1.30322C8.19823 1.2276 8.63698 1.1876 9.08417 1.1876C13.3254 1.1876 16.7632 4.7251 16.7632 9.08822C16.7632 9.6701 16.7014 10.2373 16.5857 10.7835C16.8817 11.3967 17.0485 12.0876 17.0485 12.8188C17.0482 15.3482 15.0548 17.4001 12.5954 17.4001Z" fill="#222222" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer;