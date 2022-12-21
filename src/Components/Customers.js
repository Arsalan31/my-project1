import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination, Navigation } from "swiper";


function Customers() {

    return (

        <section className="w-full h-full md:bg-transparent bg-gray-200">
            <div className="container px-16 pb-6 mx-auto">
                <h1 className="w-full font-bold text-black mt-8 text-center sm:text-4xl text-4xl sm:leading-10 mb-2">Working with a diverse global customer base</h1>
                <div className="flex justify-center text-center mt-10 mb-10">
                    <>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                el: '.swiper-pagination',
                                type: 'fraction',
                            }}
                            navigation={{
                                nextEl: ".swiper-button-next1",
                                prevEl: ".swiper-button-prev1"
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Pagination, Navigation]}
                            className="swiper1">
                            <SwiperSlide>
                                <div class="flex sm:w-64 sm:h-28 w-52 h-24 justify-center sm:p-7 pe-10 p-6 lg:bg-gray-100 bg-gray-300">
                                    <svg viewBox="0 -0.10000000000000853 960.6 264.50000000000006" xmlns="http://www.w3.org/2000/svg" width="120px" height="50px" className="sm:h-16 sm:w-44"><path d="M232.2 0v204l26.2.1V107h63.3V81.3h-63.3V25.7h82.4V0zM388.1 41.4c9.5 0 17.1-7.7 17.1-17.1s-7.7-17.1-17.1-17.1c-9.5 0-17.1 7.7-17.1 17.1s7.7 17.1 17.1 17.1zM374.8 67.1V204H401V67.1z" /><path clip-rule="evenodd" d="M498.3 63.1c-34.9 0-59.2 29.5-59.2 64.5s24.3 64.5 59.2 64.5c16 0 29.1-6.2 38.7-16.2V194c0 22.7-17.8 41.6-41.1 41.6-8.4 0-16.7-3.2-23.3-7.8l-13.2 22.8c10.5 6.8 23 10.7 36.4 10.7 37.2 0 67.3-30.1 67.3-67.3V67.1H537v12.2c-9.6-10-22.7-16.2-38.7-16.2zm-32.9 64.5c0-21.7 16.6-38.8 35.8-38.8s35.8 17.1 35.8 38.8-16.6 38.8-35.8 38.8-35.8-17.1-35.8-38.8z" fill-rule="evenodd" /><path d="M657.8 88.8c-15.5 0-28.1 13.2-28.1 28.7V204h-26.2V67.1h26.2v12.5c7.7-9.9 19-16.5 33.8-16.5 18.4 0 32.5 9.1 40.7 23.1 9.1-13.5 23.9-23.1 41.8-23.1 29.9 0 48.5 24.1 48.6 53.9v87h-26.2v-86.6c0-15.5-12.6-28.7-28.1-28.7s-28.1 13.2-28.1 28.7V204H686v-86.6c-.1-15.5-12.7-28.6-28.2-28.6z" /><path clip-rule="evenodd" d="M934.4 82.6c-11.7-12.1-27.7-19.5-46.2-19.5-39 0-66.8 33.1-66.8 72.5s27.7 72.5 66.8 72.5c18.5 0 34.5-7.5 46.2-19.5V204h26.2V67.1h-26.2zm-86.7 53c0-26.1 20-46.8 43.4-46.8 23.3 0 43.4 20.6 43.4 46.8 0 26.1-20 46.8-43.4 46.8-23.4-.1-43.4-20.7-43.4-46.8z" fill-rule="evenodd" /><path d="M0 0h176.3v264.4H0z" fill="none" /><path d="M88.1 132.2c0-24.3 19.7-44.1 44.1-44.1 24.3 0 44.1 19.7 44.1 44.1 0 24.3-19.7 44.1-44.1 44.1-24.3 0-44.1-19.8-44.1-44.1z" fill="#1abcfe" /><path d="M0 220.3c0-24.3 19.7-44.1 44.1-44.1h44.1v44.1c0 24.3-19.7 44.1-44.1 44.1-24.4 0-44.1-19.7-44.1-44.1z" fill="#0acf83" /><path d="M88.1 0v88.1h44.1c24.3 0 44.1-19.7 44.1-44.1 0-24.3-19.7-44.1-44.1-44.1H88.1z" fill="#ff7262" /><path d="M0 44.1c0 24.3 19.7 44.1 44.1 44.1h44.1V0H44.1C19.7 0 0 19.7 0 44.1z" fill="#f24e1e" /><path d="M0 132.2c0 24.3 19.7 44.1 44.1 44.1h44.1V88.1H44.1C19.7 88.1 0 107.9 0 132.2z" fill="#a259ff" /></svg>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex sm:w-64 sm:h-28 w-52 h-24 justify-center sm:p-7 pe-10 p-6 lg:bg-gray-100 bg-gray-300">
                                    <svg width="120px" height="50px" className="sm:h-16 sm:w-44" viewBox="0 0 512 126" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                        <g>
                                            <path d="M156.433566,50.3217928 C162.293279,50.3217928 167.043422,45.5700082 167.043422,39.7086531 C167.043422,33.847298 162.293279,29.0955133 156.433566,29.0955133 C150.573305,29.0955133 145.823161,33.847298 145.823161,39.7086531 C145.823161,45.5700082 150.573305,50.3217928 156.433566,50.3217928 L156.433566,50.3217928 Z M506.593862,86.5830801 C504.979842,85.4477947 503.73349,85.2601307 502.69997,87.4644992 C484.879547,126.059824 454.849472,106.80046 457.833494,108.495455 C464.494199,105.447966 482.01261,91.3977841 479.365069,71.9983566 C477.756521,60.1421478 467.581081,54.8831778 456.77973,56.7663837 C437.926334,60.0529663 430.989877,80.3885256 434.521025,98.3933303 C435.139277,101.484589 436.243376,104.035288 437.345834,106.532916 C416.040221,123.858738 407.579473,91.0224561 406.619268,87.0990194 C406.580969,86.8894703 423.070236,73.1451315 427.656242,40.3936542 C432.462739,6.06864392 421.513117,-0.180623125 410.3151,0.0141535402 C389.595459,0.375256346 383.997271,43.6660115 391.518605,79.7456531 C390.889411,79.9097908 387.956818,81.5336592 383.246068,81.7153048 C379.855531,71.0490939 365.371479,61.6992668 361.5799,65.3015409 C352.09165,74.3154329 363.881109,91.9356085 372.175531,93.3181945 C367.19286,124.009197 336.030235,116.407436 341.831406,77.9565529 C351.979489,59.1124576 359.697241,31.091427 358.319579,14.1754019 C357.83209,8.18601947 353.404204,0.161877415 343.389072,0.558543377 C324.128614,1.32123627 322.034765,44.6240282 324.293299,75.3577069 C324.180591,74.6010324 323.10932,79.0918382 315.216488,81.3252044 C313.349149,70.9615538 296.662916,60.5596045 292.734555,65.5608784 C285.382283,74.9211008 298.124288,91.6095217 304.160724,92.7743518 C299.178052,123.464808 268.015974,115.863046 273.817145,77.412163 C283.964681,58.5680678 291.682433,30.5470372 290.304771,13.6310121 C289.817282,7.64162963 285.389943,-0.382512421 275.374264,0.0141535402 C256.113807,0.777393562 254.019957,44.0796384 256.278491,74.8133171 C256.164689,74.0451529 255.06825,78.6831355 246.853161,80.8803914 C246.577957,67.4353302 229.830994,61.2708676 225.80798,65.5608784 C218.638448,73.2069567 227.449904,88.8974208 235.602073,92.7743518 C230.619401,123.464808 199.457323,115.863046 205.258495,77.412163 C215.406031,58.5680678 223.123783,30.5470372 221.746121,13.6310121 C221.258632,7.64162963 216.831293,-0.382512421 206.815614,0.0141535402 C187.555156,0.777393562 186.005697,46.2566506 188.264231,76.9903293 C181.920311,104.170975 160.645337,138.115186 163.408868,70.1178864 C163.681884,65.3485937 163.980067,63.5365141 161.60226,61.7512438 C159.819725,60.3626393 155.767714,61.0301324 153.553497,61.0859392 C150.861093,61.1937229 150.18594,62.7694442 149.591214,65.1499871 C148.204799,71.298036 147.956404,77.2578737 147.758344,85.3897994 C147.628128,89.1939628 147.322832,90.9688378 145.858725,96.1555872 C144.394617,101.342337 136.048765,110.820738 131.478079,109.23681 C125.138536,107.055421 127.217066,89.1583996 128.405969,76.8612077 C129.396266,67.1426181 126.226769,62.7792925 118.104144,61.1920815 C113.349077,60.2006902 110.459707,60.3533382 105.508222,58.7923892 C100.825375,57.3162447 99.7655927,48.4577364 89.7789116,51.4100254 C84.3147696,53.0256869 87.826768,64.6012203 86.514214,73.1806947 C80.0592278,115.381029 66.6278447,116.539841 60.3966328,96.0395966 C88.4597921,27.3102429 68.5148805,0.21440146 56.8414116,0.21440146 C44.681001,0.21440146 30.7807315,8.58979806 36.6667072,62.1818315 C33.8046939,61.346918 32.9249162,60.8971809 29.7920758,60.8971809 C12.0728705,60.8971809 0,75.2214727 0,92.8914367 C0,110.561401 12.0728705,124.885692 29.7920758,124.885692 C40.2525675,124.885692 47.5955384,120.128984 53.1581629,112.769599 C56.786699,117.966744 61.2058314,124.96612 69.2868745,124.650976 C93.3735259,123.713203 100.379467,74.3039433 101.205627,71.5480723 C103.780946,71.9447383 106.217296,72.6959415 108.594556,73.0926075 C112.556839,73.68788 112.84408,75.2559416 112.754898,79.2412035 C111.705512,112.844555 117.906085,124.610488 131.971586,124.610488 C139.808611,124.610488 146.794309,116.911339 151.606278,111.405068 C155.200345,118.822995 160.927107,124.383978 168.609843,124.610488 C187.227428,125.072809 194.354831,95.400554 193.705393,99.3053885 C193.195473,102.369291 199.745111,124.443068 218.910916,124.523495 C242.652332,124.622525 247.064899,98.5147922 247.59178,94.1416183 C247.657435,93.2711417 247.685886,93.3625117 247.59178,94.1416183 C247.585762,94.2225929 247.579197,94.3090387 247.572631,94.4069742 C255.109831,93.0052388 258.999346,88.9641701 258.999346,88.9641701 C258.999346,88.9641701 265.051101,124.929462 287.469567,124.523495 C310.748114,124.101662 315.138249,100.502499 315.715466,95.9000796 C315.790969,94.8080172 315.836381,94.9360445 315.715466,95.9000796 C315.712183,95.945491 315.709448,95.9854312 315.706165,96.0352196 C324.659326,92.7776346 327.013607,89.5085599 327.013607,89.5085599 C327.013607,89.5085599 331.824481,124.758759 355.483828,125.067338 C376.568402,125.342542 384.3819,103.752424 384.427859,94.7150058 C387.984174,94.7527575 394.561717,92.6058372 394.407427,92.4827339 C394.407427,92.4827339 402.13065,123.302858 423.697242,124.885692 C433.823987,125.628689 441.41973,119.188475 445.749681,116.249864 C455.926215,124.491215 489.811336,135.016815 511.206677,98.7418492 C514.226263,93.5359505 507.733525,87.3857131 506.593862,86.5830801 L506.593862,86.5830801 Z M28.9369187,112.918964 C18.598983,112.918964 11.9700109,103.360135 11.9700109,93.0533858 C11.9700109,82.7466363 18.0545932,73.1878073 28.3925288,73.1878073 C33.0452838,73.1878073 35.632093,73.6999168 39.2557049,76.8513594 C39.9133497,79.43981 41.7746705,85.4122316 42.6812574,88.1243325 C43.8947817,91.7528686 45.3386458,94.8419389 46.7950938,98.2040249 C44.7143757,106.827269 37.8960981,112.918964 28.9369187,112.918964 L28.9369187,112.918964 Z M54.1287635,77.1544669 C53.69927,76.4694659 53.7884515,76.8902053 53.3075282,76.2429559 C51.4128327,71.0884869 47.7607702,59.5818913 47.3378423,46.5121582 C46.8596546,31.7288282 49.3239077,14.4002705 56.5880925,14.4002705 C61.5100332,14.4002705 66.7410997,49.5197069 54.1287635,77.1544669 L54.1287635,77.1544669 Z M199.690399,61.7512438 C198.523927,52.9780869 198.463197,13.8679174 207.852417,14.9446603 C213.035883,17.0445279 204.565287,53.9503289 199.690399,61.7512438 L199.690399,61.7512438 Z M268.249049,61.7512438 C267.082578,52.9780869 267.021847,13.8679174 276.411067,14.9446603 C281.594534,17.0445279 273.123937,53.9503289 268.249049,61.7512438 L268.249049,61.7512438 Z M336.263857,62.2956336 C335.096839,53.5224768 335.036655,14.4123072 344.425328,15.4890502 C349.609342,17.5889177 341.138198,54.4947187 336.263857,62.2956336 L336.263857,62.2956336 Z M411.351903,12.6554874 C419.936302,11.7658614 419.581764,49.2521625 402.351689,72.9175273 C400.13036,64.364315 396.723409,15.593004 411.351903,12.6554874 L411.351903,12.6554874 Z M447.432639,93.3181945 C444.675127,79.3911158 451.799247,70.2437252 459.143312,69.2408442 C461.709878,68.8305001 465.429784,70.4937615 466.171686,73.6025284 C467.391776,79.461695 465.994964,88.1522359 449.557674,99.1795496 C449.582295,99.2736552 448.046514,96.4193017 447.432639,93.3181945 L447.432639,93.3181945 Z" fill="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex sm:w-64 sm:h-28 w-52 h-24 justify-center pe-5 lg:bg-gray-100 bg-gray-300">
                                    <svg width="120px" height="100px" class="sm:h-32 sm:w-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M43.73,68.62l0-.32H41v.36c.17,4.06,2.9,6.75,7.77,6.75,4.64,0,7.8-2.41,7.8-6.06a5,5,0,0,0-2-4.33,10.54,10.54,0,0,0-4.19-1.58L50,63.35l-.43-.09c-3.61-.76-4.76-1.42-4.76-3.38s1.66-3.32,4.44-3.32a4.15,4.15,0,0,1,4.49,4.25v.34H56.4V60.8C56.3,56.74,53.58,54,49.18,54S42,56.61,42,60a4.8,4.8,0,0,0,2,4.26A10.53,10.53,0,0,0,48.2,65.7l.31.06.31.06a11,11,0,0,1,3.55,1.07,2.73,2.73,0,0,1,1.44,2.6c0,2.15-1.81,3.37-5,3.37S43.94,71.34,43.73,68.62Zm18.52-15v-.35H59.57V75h2.69V70.92l2.83-2.76,5.05,6.71.11.14h3.34l-.43-.56L67,66.33l5.69-5.66.6-.6H69.63l-.1.1-7.27,7.32Zm25.12,14.8h.33l0-.33c0-.06,0-.15,0-.27s0-.18,0-.26,0-.17,0-.25c0-4.39-2.91-7.63-7.21-7.63s-7.35,3.45-7.35,7.8,2.92,7.83,7.38,7.83a7,7,0,0,0,6.92-5l.14-.45H84.83l-.08.23a4.26,4.26,0,0,1-4.15,2.76,4.63,4.63,0,0,1-4.68-4.4ZM76,66.14a4.53,4.53,0,0,1,4.55-3.92A4.32,4.32,0,0,1,85,66.14Zm20.58-3.7h.35V60.06H93.65V56H91v4.06H88.24v2.38H91v8.39c0,2.75,1.43,4.24,4,4.24A8.67,8.67,0,0,0,96.19,75l.42-.08.26-.07V72.36l-.42.09-.1,0-.28,0a5.9,5.9,0,0,1-.74.07h-.07c-1.15,0-1.61-.54-1.61-1.89V62.44Zm8.36,12.91a6.86,6.86,0,0,0,7-5.69l.08-.42h-2.71l-.07.26a4.2,4.2,0,0,1-4.31,3.35c-2.76,0-4.66-2.18-4.66-5.31s1.9-5.33,4.66-5.33a4.2,4.2,0,0,1,4.31,3.35l.07.26H112l-.08-.42a6.86,6.86,0,0,0-7-5.69c-4.32,0-7.38,3.47-7.38,7.83S100.62,75.35,104.93,75.35Zm12-21.69v-.35h-2.69V75H117V66.24a3.72,3.72,0,0,1,3.93-4.07c2.26,0,3.4,1.31,3.4,3.79V75H127V65.57c0-3.51-2.17-5.84-5.75-5.84A5.89,5.89,0,0,0,117,61.37Z" /><path fill="#fdb300" d="M8,50.61l9-.94,9,.94,7,9.28L17,78.33,1,59.89Z" /><polygon fill="#ea6c00" points="7.47 59.89 16.97 78.33 1 59.89 7.47 59.89" /><polygon fill="#ea6c00" points="26.47 59.89 16.97 78.33 32.94 59.89 26.47 59.89" /><polygon fill="#fdad00" points="7.47 59.89 26.47 59.89 16.97 78.33 7.47 59.89" /><polygon fill="#fdd231" points="16.97 49.66 7.97 50.61 7.47 59.89 16.97 49.66" /><polygon fill="#fdd231" points="16.97 49.66 25.97 50.61 26.47 59.89 16.97 49.66" /><polygon fill="#fdad00" points="32.94 59.89 25.97 50.61 26.47 59.89 32.94 59.89" /><polygon fill="#fdad00" points="1 59.89 7.97 50.61 7.47 59.89 1 59.89" /><polygon fill="#feeeb7" points="16.97 49.66 7.47 59.89 26.47 59.89 16.97 49.66" /></svg>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex sm:w-64 sm:h-28 w-52 h-24 justify-center sm:p-7 pe-10 p-6 lg:bg-gray-100 bg-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="50px" className="sm:h-16 sm:w-44" viewBox="0 0 7.317 3.66"><path d="M.858 1.202a.61.61 0 0 1 .16.018c.05.01.09.027.124.05s.062.053.08.093.027.09.027.142c0 .062-.013.115-.044.155s-.07.075-.124.102c.075.022.133.062.17.115a.35.35 0 0 1 .058.195c0 .062-.013.115-.035.16s-.058.084-.098.11-.09.05-.142.062a.66.66 0 0 1-.16.022H.277V1.202zM.823 1.7c.05 0 .09-.013.12-.035s.044-.062.044-.11c0-.027-.004-.053-.013-.07s-.022-.03-.04-.044-.035-.018-.058-.022-.044-.004-.07-.004H.548V1.7zm.013.523c.027 0 .053-.004.075-.01s.044-.013.062-.027.03-.027.044-.05.018-.05.018-.08c0-.062-.018-.106-.053-.138S.898 1.88.84 1.88H.548v.342zm.856-.004c.035.035.09.053.16.053.05 0 .093-.013.13-.035s.058-.053.067-.08h.217c-.035.106-.09.182-.16.23s-.155.07-.257.07a.52.52 0 0 1-.191-.036c-.058-.022-.102-.053-.142-.098s-.07-.09-.09-.146a.52.52 0 0 1-.031-.191c0-.067.01-.13.03-.186a.48.48 0 0 1 .093-.151.45.45 0 0 1 .142-.098.5.5 0 0 1 .186-.035c.075 0 .142.013.2.044a.36.36 0 0 1 .138.12c.035.05.062.106.08.17a.93.93 0 0 1 .009.195H1.63c0 .07.027.138.062.173zm.28-.466c-.03-.03-.08-.05-.138-.05a.21.21 0 0 0-.098.022c-.027.013-.044.03-.062.05s-.027.04-.03.062-.01.04-.01.058h.4c-.01-.067-.03-.11-.062-.142zm.648-.55v.46h.004a.26.26 0 0 1 .12-.111c.05-.022.093-.035.142-.035a.4.4 0 0 1 .16.027c.04.018.075.044.098.075s.04.07.05.115.013.093.013.15v.546H2.96v-.5c0-.075-.013-.13-.035-.164s-.062-.053-.12-.053c-.067 0-.115.022-.142.058s-.044.106-.044.195v.466h-.244v-1.23zm.763.47c.027-.04.058-.067.098-.093s.084-.04.133-.05.098-.013.146-.013.09.004.138.01.09.018.124.035a.26.26 0 0 1 .093.075c.022.03.035.075.035.13v.466c0 .04.004.08.01.115s.018.067.03.084h-.248c-.01-.01-.013-.027-.018-.04s-.004-.03-.004-.044a.34.34 0 0 1-.138.084c-.053.018-.106.022-.16.022-.044 0-.08-.004-.12-.018s-.067-.027-.098-.05-.05-.05-.067-.084a.32.32 0 0 1-.022-.12c0-.05.01-.093.027-.124a.29.29 0 0 1 .067-.08.33.33 0 0 1 .098-.044l.11-.022.106-.013.093-.013c.027-.01.05-.018.067-.03s.022-.03.022-.058-.004-.05-.013-.062-.022-.027-.035-.035-.03-.013-.05-.018-.04-.004-.062-.004c-.05 0-.084.01-.11.03s-.044.058-.05.102h-.244c0-.053.018-.102.04-.138zm.484.346a.72.72 0 0 1-.049.013c-.018.004-.035.004-.058.01s-.04.004-.058.01l-.053.013c-.018.004-.035.013-.044.022s-.022.022-.03.035-.013.035-.013.058.004.04.013.053.018.027.03.035.03.013.05.018.035.004.058.004c.05 0 .084-.01.11-.022s.044-.035.058-.058.022-.044.022-.067.004-.04.004-.053v-.093c-.013.01-.027.018-.04.022zm.652-.48v.124h.004a.26.26 0 0 1 .12-.111c.05-.022.102-.035.15-.035a.4.4 0 0 1 .16.027c.044.018.075.044.098.075s.04.07.053.115.013.093.013.15v.546h-.244v-.5c0-.075-.013-.13-.036-.164s-.062-.058-.124-.058-.115.027-.146.067-.044.106-.044.195v.466H4.28V1.54zm1.144.16c-.04 0-.07.01-.098.027s-.05.04-.067.07-.027.058-.036.093-.01.067-.01.102a.73.73 0 0 0 .009.098c.01.036.018.062.036.09s.035.05.062.067.058.027.098.027a.2.2 0 0 0 .138-.049c.03-.03.053-.075.058-.133h.235c-.018.12-.062.21-.138.27s-.173.093-.293.093c-.067 0-.13-.013-.182-.035s-.102-.053-.142-.093a.44.44 0 0 1-.093-.142.49.49 0 0 1-.031-.182.52.52 0 0 1 .031-.191.49.49 0 0 1 .089-.155c.04-.044.09-.075.142-.102a.52.52 0 0 1 .191-.035c.053 0 .102.01.15.022s.093.035.13.062.07.062.093.106.036.093.04.15h-.24c-.01-.106-.066-.16-.173-.16zm-4.08-.413h.497v.12H1.58zm4.876.932c.036.035.093.053.16.053.05 0 .093-.013.13-.035s.058-.053.067-.08h.213c-.036.106-.09.182-.16.23s-.155.07-.257.07a.52.52 0 0 1-.191-.036.355.355 0 0 1-.142-.098c-.04-.04-.07-.09-.09-.146a.52.52 0 0 1-.031-.191c0-.067.01-.13.03-.186a.477.477 0 0 1 .093-.151.45.45 0 0 1 .142-.098c.058-.022.12-.035.186-.035.075 0 .142.013.195.044a.36.36 0 0 1 .138.12c.035.05.062.106.08.17a.59.59 0 0 1 .018.2h-.643c0 .067.027.133.062.17zm.284-.466c-.03-.03-.08-.05-.138-.05-.04 0-.07.01-.098.022s-.05.03-.062.05-.027.04-.03.062-.01.04-.01.058h.4c-.013-.067-.036-.11-.062-.142z" /></svg>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex sm:w-64 sm:h-28 w-52 h-24 justify-center sm:p-7 pe-10 p-6 lg:bg-gray-100 bg-gray-300">
                                    <svg width="120px" height="50px" className="sm:h-16 sm:w-44" viewBox="0 0 512 126" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                        <g>
                                            <path d="M156.433566,50.3217928 C162.293279,50.3217928 167.043422,45.5700082 167.043422,39.7086531 C167.043422,33.847298 162.293279,29.0955133 156.433566,29.0955133 C150.573305,29.0955133 145.823161,33.847298 145.823161,39.7086531 C145.823161,45.5700082 150.573305,50.3217928 156.433566,50.3217928 L156.433566,50.3217928 Z M506.593862,86.5830801 C504.979842,85.4477947 503.73349,85.2601307 502.69997,87.4644992 C484.879547,126.059824 454.849472,106.80046 457.833494,108.495455 C464.494199,105.447966 482.01261,91.3977841 479.365069,71.9983566 C477.756521,60.1421478 467.581081,54.8831778 456.77973,56.7663837 C437.926334,60.0529663 430.989877,80.3885256 434.521025,98.3933303 C435.139277,101.484589 436.243376,104.035288 437.345834,106.532916 C416.040221,123.858738 407.579473,91.0224561 406.619268,87.0990194 C406.580969,86.8894703 423.070236,73.1451315 427.656242,40.3936542 C432.462739,6.06864392 421.513117,-0.180623125 410.3151,0.0141535402 C389.595459,0.375256346 383.997271,43.6660115 391.518605,79.7456531 C390.889411,79.9097908 387.956818,81.5336592 383.246068,81.7153048 C379.855531,71.0490939 365.371479,61.6992668 361.5799,65.3015409 C352.09165,74.3154329 363.881109,91.9356085 372.175531,93.3181945 C367.19286,124.009197 336.030235,116.407436 341.831406,77.9565529 C351.979489,59.1124576 359.697241,31.091427 358.319579,14.1754019 C357.83209,8.18601947 353.404204,0.161877415 343.389072,0.558543377 C324.128614,1.32123627 322.034765,44.6240282 324.293299,75.3577069 C324.180591,74.6010324 323.10932,79.0918382 315.216488,81.3252044 C313.349149,70.9615538 296.662916,60.5596045 292.734555,65.5608784 C285.382283,74.9211008 298.124288,91.6095217 304.160724,92.7743518 C299.178052,123.464808 268.015974,115.863046 273.817145,77.412163 C283.964681,58.5680678 291.682433,30.5470372 290.304771,13.6310121 C289.817282,7.64162963 285.389943,-0.382512421 275.374264,0.0141535402 C256.113807,0.777393562 254.019957,44.0796384 256.278491,74.8133171 C256.164689,74.0451529 255.06825,78.6831355 246.853161,80.8803914 C246.577957,67.4353302 229.830994,61.2708676 225.80798,65.5608784 C218.638448,73.2069567 227.449904,88.8974208 235.602073,92.7743518 C230.619401,123.464808 199.457323,115.863046 205.258495,77.412163 C215.406031,58.5680678 223.123783,30.5470372 221.746121,13.6310121 C221.258632,7.64162963 216.831293,-0.382512421 206.815614,0.0141535402 C187.555156,0.777393562 186.005697,46.2566506 188.264231,76.9903293 C181.920311,104.170975 160.645337,138.115186 163.408868,70.1178864 C163.681884,65.3485937 163.980067,63.5365141 161.60226,61.7512438 C159.819725,60.3626393 155.767714,61.0301324 153.553497,61.0859392 C150.861093,61.1937229 150.18594,62.7694442 149.591214,65.1499871 C148.204799,71.298036 147.956404,77.2578737 147.758344,85.3897994 C147.628128,89.1939628 147.322832,90.9688378 145.858725,96.1555872 C144.394617,101.342337 136.048765,110.820738 131.478079,109.23681 C125.138536,107.055421 127.217066,89.1583996 128.405969,76.8612077 C129.396266,67.1426181 126.226769,62.7792925 118.104144,61.1920815 C113.349077,60.2006902 110.459707,60.3533382 105.508222,58.7923892 C100.825375,57.3162447 99.7655927,48.4577364 89.7789116,51.4100254 C84.3147696,53.0256869 87.826768,64.6012203 86.514214,73.1806947 C80.0592278,115.381029 66.6278447,116.539841 60.3966328,96.0395966 C88.4597921,27.3102429 68.5148805,0.21440146 56.8414116,0.21440146 C44.681001,0.21440146 30.7807315,8.58979806 36.6667072,62.1818315 C33.8046939,61.346918 32.9249162,60.8971809 29.7920758,60.8971809 C12.0728705,60.8971809 0,75.2214727 0,92.8914367 C0,110.561401 12.0728705,124.885692 29.7920758,124.885692 C40.2525675,124.885692 47.5955384,120.128984 53.1581629,112.769599 C56.786699,117.966744 61.2058314,124.96612 69.2868745,124.650976 C93.3735259,123.713203 100.379467,74.3039433 101.205627,71.5480723 C103.780946,71.9447383 106.217296,72.6959415 108.594556,73.0926075 C112.556839,73.68788 112.84408,75.2559416 112.754898,79.2412035 C111.705512,112.844555 117.906085,124.610488 131.971586,124.610488 C139.808611,124.610488 146.794309,116.911339 151.606278,111.405068 C155.200345,118.822995 160.927107,124.383978 168.609843,124.610488 C187.227428,125.072809 194.354831,95.400554 193.705393,99.3053885 C193.195473,102.369291 199.745111,124.443068 218.910916,124.523495 C242.652332,124.622525 247.064899,98.5147922 247.59178,94.1416183 C247.657435,93.2711417 247.685886,93.3625117 247.59178,94.1416183 C247.585762,94.2225929 247.579197,94.3090387 247.572631,94.4069742 C255.109831,93.0052388 258.999346,88.9641701 258.999346,88.9641701 C258.999346,88.9641701 265.051101,124.929462 287.469567,124.523495 C310.748114,124.101662 315.138249,100.502499 315.715466,95.9000796 C315.790969,94.8080172 315.836381,94.9360445 315.715466,95.9000796 C315.712183,95.945491 315.709448,95.9854312 315.706165,96.0352196 C324.659326,92.7776346 327.013607,89.5085599 327.013607,89.5085599 C327.013607,89.5085599 331.824481,124.758759 355.483828,125.067338 C376.568402,125.342542 384.3819,103.752424 384.427859,94.7150058 C387.984174,94.7527575 394.561717,92.6058372 394.407427,92.4827339 C394.407427,92.4827339 402.13065,123.302858 423.697242,124.885692 C433.823987,125.628689 441.41973,119.188475 445.749681,116.249864 C455.926215,124.491215 489.811336,135.016815 511.206677,98.7418492 C514.226263,93.5359505 507.733525,87.3857131 506.593862,86.5830801 L506.593862,86.5830801 Z M28.9369187,112.918964 C18.598983,112.918964 11.9700109,103.360135 11.9700109,93.0533858 C11.9700109,82.7466363 18.0545932,73.1878073 28.3925288,73.1878073 C33.0452838,73.1878073 35.632093,73.6999168 39.2557049,76.8513594 C39.9133497,79.43981 41.7746705,85.4122316 42.6812574,88.1243325 C43.8947817,91.7528686 45.3386458,94.8419389 46.7950938,98.2040249 C44.7143757,106.827269 37.8960981,112.918964 28.9369187,112.918964 L28.9369187,112.918964 Z M54.1287635,77.1544669 C53.69927,76.4694659 53.7884515,76.8902053 53.3075282,76.2429559 C51.4128327,71.0884869 47.7607702,59.5818913 47.3378423,46.5121582 C46.8596546,31.7288282 49.3239077,14.4002705 56.5880925,14.4002705 C61.5100332,14.4002705 66.7410997,49.5197069 54.1287635,77.1544669 L54.1287635,77.1544669 Z M199.690399,61.7512438 C198.523927,52.9780869 198.463197,13.8679174 207.852417,14.9446603 C213.035883,17.0445279 204.565287,53.9503289 199.690399,61.7512438 L199.690399,61.7512438 Z M268.249049,61.7512438 C267.082578,52.9780869 267.021847,13.8679174 276.411067,14.9446603 C281.594534,17.0445279 273.123937,53.9503289 268.249049,61.7512438 L268.249049,61.7512438 Z M336.263857,62.2956336 C335.096839,53.5224768 335.036655,14.4123072 344.425328,15.4890502 C349.609342,17.5889177 341.138198,54.4947187 336.263857,62.2956336 L336.263857,62.2956336 Z M411.351903,12.6554874 C419.936302,11.7658614 419.581764,49.2521625 402.351689,72.9175273 C400.13036,64.364315 396.723409,15.593004 411.351903,12.6554874 L411.351903,12.6554874 Z M447.432639,93.3181945 C444.675127,79.3911158 451.799247,70.2437252 459.143312,69.2408442 C461.709878,68.8305001 465.429784,70.4937615 466.171686,73.6025284 C467.391776,79.461695 465.994964,88.1522359 449.557674,99.1795496 C449.582295,99.2736552 448.046514,96.4193017 447.432639,93.3181945 L447.432639,93.3181945 Z" fill="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex sm:w-64 sm:h-28 w-52 h-24 justify-center sm:p-7 pe-10 p-6 lg:bg-gray-100 bg-gray-300">
                                    <svg viewBox="0 -0.10000000000000853 960.6 264.50000000000006" xmlns="http://www.w3.org/2000/svg" width="120px" height="50px" className="sm:h-16 sm:w-44"><path d="M232.2 0v204l26.2.1V107h63.3V81.3h-63.3V25.7h82.4V0zM388.1 41.4c9.5 0 17.1-7.7 17.1-17.1s-7.7-17.1-17.1-17.1c-9.5 0-17.1 7.7-17.1 17.1s7.7 17.1 17.1 17.1zM374.8 67.1V204H401V67.1z" /><path clip-rule="evenodd" d="M498.3 63.1c-34.9 0-59.2 29.5-59.2 64.5s24.3 64.5 59.2 64.5c16 0 29.1-6.2 38.7-16.2V194c0 22.7-17.8 41.6-41.1 41.6-8.4 0-16.7-3.2-23.3-7.8l-13.2 22.8c10.5 6.8 23 10.7 36.4 10.7 37.2 0 67.3-30.1 67.3-67.3V67.1H537v12.2c-9.6-10-22.7-16.2-38.7-16.2zm-32.9 64.5c0-21.7 16.6-38.8 35.8-38.8s35.8 17.1 35.8 38.8-16.6 38.8-35.8 38.8-35.8-17.1-35.8-38.8z" fill-rule="evenodd" /><path d="M657.8 88.8c-15.5 0-28.1 13.2-28.1 28.7V204h-26.2V67.1h26.2v12.5c7.7-9.9 19-16.5 33.8-16.5 18.4 0 32.5 9.1 40.7 23.1 9.1-13.5 23.9-23.1 41.8-23.1 29.9 0 48.5 24.1 48.6 53.9v87h-26.2v-86.6c0-15.5-12.6-28.7-28.1-28.7s-28.1 13.2-28.1 28.7V204H686v-86.6c-.1-15.5-12.7-28.6-28.2-28.6z" /><path clip-rule="evenodd" d="M934.4 82.6c-11.7-12.1-27.7-19.5-46.2-19.5-39 0-66.8 33.1-66.8 72.5s27.7 72.5 66.8 72.5c18.5 0 34.5-7.5 46.2-19.5V204h26.2V67.1h-26.2zm-86.7 53c0-26.1 20-46.8 43.4-46.8 23.3 0 43.4 20.6 43.4 46.8 0 26.1-20 46.8-43.4 46.8-23.4-.1-43.4-20.7-43.4-46.8z" fill-rule="evenodd" /><path d="M0 0h176.3v264.4H0z" fill="none" /><path d="M88.1 132.2c0-24.3 19.7-44.1 44.1-44.1 24.3 0 44.1 19.7 44.1 44.1 0 24.3-19.7 44.1-44.1 44.1-24.3 0-44.1-19.8-44.1-44.1z" fill="#1abcfe" /><path d="M0 220.3c0-24.3 19.7-44.1 44.1-44.1h44.1v44.1c0 24.3-19.7 44.1-44.1 44.1-24.4 0-44.1-19.7-44.1-44.1z" fill="#0acf83" /><path d="M88.1 0v88.1h44.1c24.3 0 44.1-19.7 44.1-44.1 0-24.3-19.7-44.1-44.1-44.1H88.1z" fill="#ff7262" /><path d="M0 44.1c0 24.3 19.7 44.1 44.1 44.1h44.1V0H44.1C19.7 0 0 19.7 0 44.1z" fill="#f24e1e" /><path d="M0 132.2c0 24.3 19.7 44.1 44.1 44.1h44.1V88.1H44.1C19.7 88.1 0 107.9 0 132.2z" fill="#a259ff" /></svg>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex sm:w-64 sm:h-28 w-52 h-24 justify-center sm:p-7 pe-10 p-6 lg:bg-gray-100 bg-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="50px" className="sm:h-16 sm:w-44" viewBox="0 0 7.317 3.66"><path d="M.858 1.202a.61.61 0 0 1 .16.018c.05.01.09.027.124.05s.062.053.08.093.027.09.027.142c0 .062-.013.115-.044.155s-.07.075-.124.102c.075.022.133.062.17.115a.35.35 0 0 1 .058.195c0 .062-.013.115-.035.16s-.058.084-.098.11-.09.05-.142.062a.66.66 0 0 1-.16.022H.277V1.202zM.823 1.7c.05 0 .09-.013.12-.035s.044-.062.044-.11c0-.027-.004-.053-.013-.07s-.022-.03-.04-.044-.035-.018-.058-.022-.044-.004-.07-.004H.548V1.7zm.013.523c.027 0 .053-.004.075-.01s.044-.013.062-.027.03-.027.044-.05.018-.05.018-.08c0-.062-.018-.106-.053-.138S.898 1.88.84 1.88H.548v.342zm.856-.004c.035.035.09.053.16.053.05 0 .093-.013.13-.035s.058-.053.067-.08h.217c-.035.106-.09.182-.16.23s-.155.07-.257.07a.52.52 0 0 1-.191-.036c-.058-.022-.102-.053-.142-.098s-.07-.09-.09-.146a.52.52 0 0 1-.031-.191c0-.067.01-.13.03-.186a.48.48 0 0 1 .093-.151.45.45 0 0 1 .142-.098.5.5 0 0 1 .186-.035c.075 0 .142.013.2.044a.36.36 0 0 1 .138.12c.035.05.062.106.08.17a.93.93 0 0 1 .009.195H1.63c0 .07.027.138.062.173zm.28-.466c-.03-.03-.08-.05-.138-.05a.21.21 0 0 0-.098.022c-.027.013-.044.03-.062.05s-.027.04-.03.062-.01.04-.01.058h.4c-.01-.067-.03-.11-.062-.142zm.648-.55v.46h.004a.26.26 0 0 1 .12-.111c.05-.022.093-.035.142-.035a.4.4 0 0 1 .16.027c.04.018.075.044.098.075s.04.07.05.115.013.093.013.15v.546H2.96v-.5c0-.075-.013-.13-.035-.164s-.062-.053-.12-.053c-.067 0-.115.022-.142.058s-.044.106-.044.195v.466h-.244v-1.23zm.763.47c.027-.04.058-.067.098-.093s.084-.04.133-.05.098-.013.146-.013.09.004.138.01.09.018.124.035a.26.26 0 0 1 .093.075c.022.03.035.075.035.13v.466c0 .04.004.08.01.115s.018.067.03.084h-.248c-.01-.01-.013-.027-.018-.04s-.004-.03-.004-.044a.34.34 0 0 1-.138.084c-.053.018-.106.022-.16.022-.044 0-.08-.004-.12-.018s-.067-.027-.098-.05-.05-.05-.067-.084a.32.32 0 0 1-.022-.12c0-.05.01-.093.027-.124a.29.29 0 0 1 .067-.08.33.33 0 0 1 .098-.044l.11-.022.106-.013.093-.013c.027-.01.05-.018.067-.03s.022-.03.022-.058-.004-.05-.013-.062-.022-.027-.035-.035-.03-.013-.05-.018-.04-.004-.062-.004c-.05 0-.084.01-.11.03s-.044.058-.05.102h-.244c0-.053.018-.102.04-.138zm.484.346a.72.72 0 0 1-.049.013c-.018.004-.035.004-.058.01s-.04.004-.058.01l-.053.013c-.018.004-.035.013-.044.022s-.022.022-.03.035-.013.035-.013.058.004.04.013.053.018.027.03.035.03.013.05.018.035.004.058.004c.05 0 .084-.01.11-.022s.044-.035.058-.058.022-.044.022-.067.004-.04.004-.053v-.093c-.013.01-.027.018-.04.022zm.652-.48v.124h.004a.26.26 0 0 1 .12-.111c.05-.022.102-.035.15-.035a.4.4 0 0 1 .16.027c.044.018.075.044.098.075s.04.07.053.115.013.093.013.15v.546h-.244v-.5c0-.075-.013-.13-.036-.164s-.062-.058-.124-.058-.115.027-.146.067-.044.106-.044.195v.466H4.28V1.54zm1.144.16c-.04 0-.07.01-.098.027s-.05.04-.067.07-.027.058-.036.093-.01.067-.01.102a.73.73 0 0 0 .009.098c.01.036.018.062.036.09s.035.05.062.067.058.027.098.027a.2.2 0 0 0 .138-.049c.03-.03.053-.075.058-.133h.235c-.018.12-.062.21-.138.27s-.173.093-.293.093c-.067 0-.13-.013-.182-.035s-.102-.053-.142-.093a.44.44 0 0 1-.093-.142.49.49 0 0 1-.031-.182.52.52 0 0 1 .031-.191.49.49 0 0 1 .089-.155c.04-.044.09-.075.142-.102a.52.52 0 0 1 .191-.035c.053 0 .102.01.15.022s.093.035.13.062.07.062.093.106.036.093.04.15h-.24c-.01-.106-.066-.16-.173-.16zm-4.08-.413h.497v.12H1.58zm4.876.932c.036.035.093.053.16.053.05 0 .093-.013.13-.035s.058-.053.067-.08h.213c-.036.106-.09.182-.16.23s-.155.07-.257.07a.52.52 0 0 1-.191-.036.355.355 0 0 1-.142-.098c-.04-.04-.07-.09-.09-.146a.52.52 0 0 1-.031-.191c0-.067.01-.13.03-.186a.477.477 0 0 1 .093-.151.45.45 0 0 1 .142-.098c.058-.022.12-.035.186-.035.075 0 .142.013.195.044a.36.36 0 0 1 .138.12c.035.05.062.106.08.17a.59.59 0 0 1 .018.2h-.643c0 .067.027.133.062.17zm.284-.466c-.03-.03-.08-.05-.138-.05-.04 0-.07.01-.098.022s-.05.03-.062.05-.027.04-.03.062-.01.04-.01.058h.4c-.013-.067-.036-.11-.062-.142z" /></svg>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex sm:w-64 sm:h-28 w-52 h-24 justify-center pe-5 lg:bg-gray-100 bg-gray-300">
                                    <svg width="120px" height="100px" class="sm:h-32 sm:w-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M43.73,68.62l0-.32H41v.36c.17,4.06,2.9,6.75,7.77,6.75,4.64,0,7.8-2.41,7.8-6.06a5,5,0,0,0-2-4.33,10.54,10.54,0,0,0-4.19-1.58L50,63.35l-.43-.09c-3.61-.76-4.76-1.42-4.76-3.38s1.66-3.32,4.44-3.32a4.15,4.15,0,0,1,4.49,4.25v.34H56.4V60.8C56.3,56.74,53.58,54,49.18,54S42,56.61,42,60a4.8,4.8,0,0,0,2,4.26A10.53,10.53,0,0,0,48.2,65.7l.31.06.31.06a11,11,0,0,1,3.55,1.07,2.73,2.73,0,0,1,1.44,2.6c0,2.15-1.81,3.37-5,3.37S43.94,71.34,43.73,68.62Zm18.52-15v-.35H59.57V75h2.69V70.92l2.83-2.76,5.05,6.71.11.14h3.34l-.43-.56L67,66.33l5.69-5.66.6-.6H69.63l-.1.1-7.27,7.32Zm25.12,14.8h.33l0-.33c0-.06,0-.15,0-.27s0-.18,0-.26,0-.17,0-.25c0-4.39-2.91-7.63-7.21-7.63s-7.35,3.45-7.35,7.8,2.92,7.83,7.38,7.83a7,7,0,0,0,6.92-5l.14-.45H84.83l-.08.23a4.26,4.26,0,0,1-4.15,2.76,4.63,4.63,0,0,1-4.68-4.4ZM76,66.14a4.53,4.53,0,0,1,4.55-3.92A4.32,4.32,0,0,1,85,66.14Zm20.58-3.7h.35V60.06H93.65V56H91v4.06H88.24v2.38H91v8.39c0,2.75,1.43,4.24,4,4.24A8.67,8.67,0,0,0,96.19,75l.42-.08.26-.07V72.36l-.42.09-.1,0-.28,0a5.9,5.9,0,0,1-.74.07h-.07c-1.15,0-1.61-.54-1.61-1.89V62.44Zm8.36,12.91a6.86,6.86,0,0,0,7-5.69l.08-.42h-2.71l-.07.26a4.2,4.2,0,0,1-4.31,3.35c-2.76,0-4.66-2.18-4.66-5.31s1.9-5.33,4.66-5.33a4.2,4.2,0,0,1,4.31,3.35l.07.26H112l-.08-.42a6.86,6.86,0,0,0-7-5.69c-4.32,0-7.38,3.47-7.38,7.83S100.62,75.35,104.93,75.35Zm12-21.69v-.35h-2.69V75H117V66.24a3.72,3.72,0,0,1,3.93-4.07c2.26,0,3.4,1.31,3.4,3.79V75H127V65.57c0-3.51-2.17-5.84-5.75-5.84A5.89,5.89,0,0,0,117,61.37Z" /><path fill="#fdb300" d="M8,50.61l9-.94,9,.94,7,9.28L17,78.33,1,59.89Z" /><polygon fill="#ea6c00" points="7.47 59.89 16.97 78.33 1 59.89 7.47 59.89" /><polygon fill="#ea6c00" points="26.47 59.89 16.97 78.33 32.94 59.89 26.47 59.89" /><polygon fill="#fdad00" points="7.47 59.89 26.47 59.89 16.97 78.33 7.47 59.89" /><polygon fill="#fdd231" points="16.97 49.66 7.97 50.61 7.47 59.89 16.97 49.66" /><polygon fill="#fdd231" points="16.97 49.66 25.97 50.61 26.47 59.89 16.97 49.66" /><polygon fill="#fdad00" points="32.94 59.89 25.97 50.61 26.47 59.89 32.94 59.89" /><polygon fill="#fdad00" points="1 59.89 7.97 50.61 7.47 59.89 1 59.89" /><polygon fill="#feeeb7" points="16.97 49.66 7.47 59.89 26.47 59.89 16.97 49.66" /></svg>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </>
                </div>
                <div className="flex  lg:order-2 order-1 justify-center text-gray-400 md:text-gray-400">
                    <button className="swiper-button-prev1"><svg xmlns="http://www.w3.org/2000/svg" className="me-3" width="60" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></button>
                    <div class="swiper-pagination"></div>
                    <button className="swiper-button-next1"><svg xmlns="http://www.w3.org/2000/svg" className="ms-3" width="60" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg></button>
                </div>
            </div>
        </section >
    )
}

export default Customers;