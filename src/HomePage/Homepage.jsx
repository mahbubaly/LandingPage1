import React, { useState } from 'react';
import '../HomePage/Style.css'
import right_arrow from '../assets/Image/right_arrow.png';
import watchVideo from '../assets/Image/Polygon 1.png';
import frame52 from '../assets/Image/Frame 20351.png';
import circle from '../assets/Image/circle.png';
import imgMan from '../assets/Image/man.png';
import ElipseImg from '../assets/Image/Ellipse 563.png';
import frame24 from '../assets/Image/Frame 24.png';
import frame25 from '../assets/Image/Frame 25.png';
import frame26 from '../assets/Image/Frame 26.png';
import frame27 from '../assets/Image/Frame 27.png';
import frame28 from '../assets/Image/Frame 28.png';
import imgF1 from '../assets/Image/f1.png'
import imgF2 from '../assets/Image/f2.png'
import imgF3 from '../assets/Image/f3.png'
import imgB1 from '../assets/Image/b1.png'
import imgB2 from '../assets/Image/b2.png'
import imgB3 from '../assets/Image/b3.png'
import GroupImg from '../assets/Image/GroupImg.png'
import imgGroup35 from '../assets/Image/Group 35.png'
import web1 from '../assets/Image/web 2.png'
import web2 from '../assets/Image/web1.png'
import web3 from '../assets/Image/web3.png'
import web4 from '../assets/Image/web4.png'
import imgP1 from '../assets/Image/p1.png'
import imgP2 from '../assets/Image/p2.png'
import imgP3 from '../assets/Image/p3.png'
import imgVector from '../assets/Image/Vector.png'
import client1 from '../assets/Image/client1.png'
import ChevronRight from '../assets/Image/chevron right.png'
import ChevronLeft from '../assets/Image/chevron.left.png'
import quatations from '../assets/Image/quationBg.png'
import icon1 from '../assets/Image/icon1.png'
import icon2 from '../assets/Image/icon2.png'
import icon3 from '../assets/Image/icon3.png'
import icon4 from '../assets/Image/icon4.png'
import icon5 from '../assets/Image/icon5.png'
import groupImgBanner from '../assets/Image/groupImgBanner.png'
import { FaBars, FaTimes } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';




const Homepage = () => {

    const [open, setOpen] = useState(false);
    return (
        <>

            <header className="container mx-auto">

                <div className="flex justify-between items-center pt-[40px] lg:pt-[60px]">
                    <h1 className="Logo font-semibold text-[34px]">LOGO</h1>

                    <div className="text-[#999]   xl:w-[912px] hidden lg:flex justify-center gap-[16px] ">
                        <button className="custom-btn btn-1"><span>Home</span></button>
                        <button className="custom-btn btn-2"><span>About</span></button>
                        <button className="custom-btn btn-3"><span>Contact Us</span></button>
                        <button className="custom-btn btn-4"><span>Blog</span></button>
                        <button className="custom-btn btn-5"><span>Page</span></button>



                    </div>



                    <div className={`block lg:hidden bg-red-600  absolute lg:static lg:w-auto top-0 left-0 overflow-hidden h-[600px]   duration-500 full-back   lg:bg-[transparent] lg:p-0 z-50 ${open ? "w-full   p-[30px]" : "w-0"}`}>



                        <div className='flex justify-between'>

                            <div>
                                <div className="text-[#999] flex flex-col ">
                                    <button className="custom-btn btn-1"><span>Home</span></button>
                                    <button className="custom-btn btn-2"><span>About</span></button>
                                    <button className="custom-btn btn-3"><span>Contact Us</span></button>
                                    <button className="custom-btn btn-4"><span>Blog</span></button>
                                    <button className="custom-btn btn-5"><span>Page</span></button>

                                    <button className="w-[153px] mt-[15px]  text-[#000] h-[48px] font-semibold  btn_primary mr_right">
                                        Lets Connect
                                    </button>



                                </div>



                            </div>

                            <FaTimes onClick={() => setOpen(!open)} className='w-[24px] h-[24px] text-[#FFFFFF]' />
                        </div>






                    </div>


                    <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <> </> : <FaBars className='w-[24px] h-[24px] text-[#FFFFFF]' />}</button>









                    <button className="w-[162px] lg:block hidden  text-[#000] h-[52px] font-semibold  btn_primary mr_right">
                        Lets Connect
                    </button>

                </div>

            </header>

            <main>
                <div className="container  lg:flex justify-between mx-auto mt-[40px] lg:mt-[120px] ">

                    <div className="lg:w-[564px] w-[320px] absolute ">
                        <h3 className="text-[#B0F403] text-lg font-normal">make your dream with us</h3>
                        <h1 className="lg:text-[66px] text-[36px]  font-semibold mt-[20px] text-[#fff]">We're a Creative Design Agency</h1>
                        <p className="ParaGrpah text-[14px] w-[353px] lg:w-auto lg:text-[20px] mt-[20px]">Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim  in eros elementum tristique. Duis cursus, mi Lorem ipsum dolor sit amet, consect adipis elit.</p>

                        <div className="flex gap-[30px]  mt-[30px]">
                            <div className="flex lg:gap-5 gap-[10px] ">
                                <h3 className="text-[28px] lg:text-[34px] font-semibold text-[#fff]">31+ </h3>
                                <p className="lg:text-[16px] text-[14px] font-medium NormalPara w-[63px] lg:w-[69px]">Trusted partner</p>
                            </div>
                            <div className="flex lg:gap-5 gap-[10px]">
                                <h3 className="text-[28px] lg:text-[34px]  font-semibold text-[#fff]">200K+ </h3>
                                <p className="lg:text-[16px] text-[14px] font-medium NormalPara w-[50px] lg:w-[69px]">Active Users</p>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center mt-[50px]">
                            <div
                                className="w-[155px] lg:w-[192px] h-[45px] lg:h-[60px] cursor-pointer text-[#000] flex justify-center gap-[10px] items-center  font-semibold  btn_primary">

                                <p className='lg:text-[16px] text-[14px]'> Get in Touch</p>
                                <img src={right_arrow} className="w-[20px] h-[20px] flex items-center mt-[2px]" alt="" />

                            </div>

                            <div className="w-[192px] lg:w-[256px] flex items-center gap-[12px]  border-red-400">
                                <button className="playBtn ">
                                    <img src={watchVideo} className="w-[20px] h-[20px] lg:w-[24px]   
                                    lg:h-[24px] ml-[5px] cursor-pointer" alt="" />
                                </button>
                                <p className="text-[14px] lg:text-[20px] font-medium cursor-pointer  text-[#fff]">Watch video</p>

                            </div>
                        </div>

                    </div>

                    <div className="bg_line lg:block hidden">
                        <div className="">


                            <div className="flex justify-end items-end  mr-12  manGroup ">
                                <img src={imgMan} className="h-[521px] w-[424px] z-10" alt="" />
                            </div>




                            <div className="flex justify-start Frame_bg ">
                                <img src={frame52} className="h-[157.001px] w-[192px] z-40 " alt="" />
                            </div>
                            <div className="flex justify-start  CircleBg">
                                <img src={circle} className="h-[212px] w-[197px] z-40" alt="" />
                            </div>


                            <div className="flex justify-end items-center ElipseImg ">
                                <img src={ElipseImg} className="h-[192px] w-[192px] z-50" alt="" />

                            </div>

                        </div>



                    </div>

                    {/* Mobile */}

                    <div className='block lg:hidden bg_lineMobile  '>
                        <img src={groupImgBanner} className='w-[353px] ' alt="" />


                    </div>

                </div>





                <div className=" bg-[#1C1C1C] relative top-[480px] lg:-top-[91px]" >
                    <div className="justify-center flex lg:w-full w-[393px]  mx-auto py-5 lg:py-[40px]">
                        <div className="flex gap-[23px]">
                            <img src={frame24} className="w-[65px] h-[19px] lg:w-[234px] lg:h-[70px] " alt="" />
                            <img src={frame25} className="w-[65px] h-[19px] lg:w-[234px] lg:h-[70px]  " alt="" />
                            <img src={frame26} className="w-[65px] h-[19px] lg:w-[234px] lg:h-[70px]  " alt="" />
                            <img src={frame27} className="w-[65px] h-[19px] lg:w-[234px] lg:h-[70px]  " alt="" />
                            <img src={frame28} className="w-[65px] h-[19px] lg:w-[234px] lg:h-[70px]  " alt="" />
                        </div>
                    </div>
                </div>






            </main>




            {/* How do we work */}

            <div className="flex justify-center mt-[500px]  lg:mt-[29px]">
                <div className="">
                    <h1 className="text-[#B0F403] text-[20px] font-normal text-center">How do we work</h1>
                    <p className="text-[26px]  lg:text-[48px] w-[393px] lg:w-[910px] text-center font-semibold text-[#fff] mt-[20px]">
                        Save Time Managing Your Business with Our Best Service</p>
                </div>
            </div>




            {/* <!--  Find out what you need --> */}

            <div className="container mx-auto lg:flex gap-[30px] justify-center mt-[100px]">
                <div className="w-[370px] py-[26px] px-[21px]">
                    <img src={imgF1} className="w-[80px] h-[70px]" alt="" />

                    <div className="w-[328px] mt-[34px]">
                        <p className="text-[24px] font-semibold text-[#fff] mt-[34px]">
                            Find out what you need
                        </p>
                        <p className="text-lg font-normal NormalPara mt-[8px]">Lorem ipsum dolor sit amet, consect adipis elit.
                            Lorem ipsum dolor sit amet, consect adipis elit.
                        </p>
                    </div>


                </div>
                <div className="w-[370px] py-[26px] px-[21px]">
                    <img src={imgF2} className="w-[80px] h-[70px]" alt="" />
                    <div className="w-[328px] mt-[34px]">
                        <p className="text-[24px] font-semibold text-[#fff] ">
                            Work out the details
                        </p>
                        <p className="text-lg font-normal NormalPara mt-[8px]">Lorem ipsum dolor sit amet, consect adipis elit.
                            Lorem ipsum dolor sit amet, consect adipis elit.
                        </p>
                    </div>


                </div>
                <div className="w-[370px] py-[26px] px-[21px]">
                    <img src={imgF3} className="w-[80px] h-[70px]" alt="" />
                    <div className="w-[328px] mt-[34px]">
                        <p className="text-[24px] font-semibold text-[#fff] ">
                            We get to work fast
                        </p>
                        <p className="text-lg font-normal NormalPara mt-[8px] ">Lorem ipsum dolor sit amet, consect adipis elit.
                            Lorem ipsum dolor sit amet, consect adipis elit.
                        </p>

                    </div>

                </div>
            </div>




            {/* Why Choose us */}


            <section className='p-5 lg:p-0'>
                <div className=" lg:mt-[150px] mt-[50px]  lg:flex justify-center items-center gap-[45px]">


                    <div className="lg:w-[690px] lg:order-2 order-1">
                        <p className="text-[#B0F403] text-[14px] lg:text-[20px] font-normal ">Why Choose us</p>
                        <h1 className="text-[26px] lg:text-[48px] font-semibold text-[#fff] mt-[20px]">Specialist in advising clients on design challenges</h1>

                        <p className="NormalPara text-[20px] mt-[30px] ">Lorem ipsum dolor sit amet, consect adipis elit. Lorem ipsum dolor sit amet, consect adipis elit. </p>

                        <img src={GroupImg} className=" lg:hidden block w-[313px] mx-auto mt-[40px]" alt="" />




                        <div className="flex gap-[34px]  mt-[40px]">
                            <img src={imgB2} className="w-[51px] h-[51px] lg:w-[58.88px] lg:h-[58.88px]" alt="" />
                            <div>
                                <p className="text-[20px] lg:text-[24px] font-semibold text-[#fff] ">
                                    Find out what you need
                                </p>
                                <p className="NormalPara text-[14px] lg:text-[20px] mt-[8px]">Lorem ipsum dolor sit amet, consect adipis elit. Lorem ipsum  dolor sit amet, consect adipis elit.
                                </p>
                            </div>

                        </div>
                        <div className="flex gap-[34px]  mt-[26px]">
                            <img src={imgB3} className="w-[44px] h-[44px] lg:w-[58.88px] lg:h-[58.88px]" alt="" />
                            <div>
                                <p className="text-[20px] lg:text-[24px] font-semibold text-[#fff] ">
                                    Find out what you need
                                </p>
                                <p className="NormalPara text-[14px] lg:text-[20px] mt-[8px]">Lorem ipsum dolor sit amet, consect adipis elit.
                                    Lorem ipsum
                                    dolor sit amet, consect adipis elit.
                                </p>
                            </div>

                        </div>
                        <div className="flex gap-[34px] mt-[26px]">
                            <img src={imgB1} className="w-[44px] h-[44px] lg:w-[58.88px] lg:h-[58.88px]" alt="" />
                            <div>
                                <p className="text-[20px] lg:text-[24px] font-semibold text-[#fff] ">
                                    Find out what you need
                                </p>
                                <p className="NormalPara text-[14px] lg:text-[20px] mt-[8px]">Lorem ipsum dolor sit amet, consect adipis elit.
                                    Lorem ipsum
                                    dolor sit amet, consect adipis elit.
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="lg:order-1 lg:block hidden order-2">
                        <img src={GroupImg} className="lg:w-[517px] lg:h-[677px]" alt="" />

                    </div>
                </div>

            </section>

            {/* <!-- About Us --> */}

            <section>


                <div className="container mx-auto mt-[50px] lg:mt-[150px]">




                    <div className="lg:flex gap-[92px] justify-center items-center">
                        <div className="lg:w-[498px]">
                            <h3 className="text-[#B0F403] text-[14px]  lg:text-[20px]  font-normal ">About Us</h3>
                            <h1 className="text-[27px] lg:text-[48px] font-semibold text-[#fff] mt-[10px] lg:mt-[20px] lg:leading-[78px] ">Our agency started  back in 2010</h1>

                            <p className="NormalPara mt-[18px] lg:mt-[30px]">Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim  in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam.</p>



                            <div className="lg:w-[207px] w-full h-[49px]  lg:h-[60px] mt-[30px] lg:mt-[60px] cursor-pointer flex justify-center gap-[10px] items-center font-semibold  btn_primary">

                                <p> More about us</p>
                                <img src={right_arrow} className="w-[20px] h-[20px] flex items-center mt-[2px]" alt="" />

                            </div>
                        </div>

                        <div className='mt-[50px] lg:mt-0'>
                            <img src={imgGroup35} className="w-[353px] lg:w-[580px] lg:h-[593px]" alt="" />
                        </div>
                    </div>
                </div>

            </section>






            {/* <!-- Our Services --> */}

            <div className="flex justify-center mt-[100px] lg:mt-[120px] lg:px-0 px-5">
                <div className="">
                    <p className="text-[#B0F403] text-[14px] lg:text-[20px] font-normal text-center">Our Services</p>
                    <h1 className="text-[26px] lg:text-[48px] lg:w-[910px] text-center font-semibold text-[#fff] mt-[10px] lg:mt-[20px] ">
                        Services provide for you</h1>
                    <p className="lg:w-[934px] text-[14px] lg:text-[20px] NormalPara text-center mt-[30px]">Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,  eros dolor.</p>
                </div>
            </div>



            <div className="container mx-auto mt-[100px]">
                <div className="flex flex-col lg:flex-row gap-[30px] justify-center">

                    <div className="w-[353px] lg:w-[270px] bg-[#252525] rounded-[10px] py-[50px] px-[26px] ">
                        <img src={web2} className="w-[52px] h-[52px]" alt="" />
                        <h2 className="text-[24px] font-semibold mt-[23px] text-[#fff] ">
                            UI/UX Design
                        </h2>
                        <p className="text-[14px] NormalPara mt-[8px]">
                            Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros elementum
                            tristique.
                        </p>




                    </div>

                    <div className="w-[353px] lg:w-[270px] bg-[#252525] rounded-[10px] py-[50px] px-[26px] ">
                        <img src={web1} className="w-[52px] h-[52px]" alt="" />
                        <h2 className="text-[24px] font-semibold mt-[23px] text-[#fff] ">
                            Branding
                        </h2>
                        <p className="text-[14px] NormalPara mt-[8px]">
                            Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros elementum
                            tristique.
                        </p>




                    </div>
                    <div className="w-[353px] lg:w-[270px] bg-[#252525] rounded-[10px] py-[50px] px-[26px] ">
                        <img src={web3} className="w-[52px] h-[52px]" alt="" />
                        <h2 className="text-[24px] font-semibold mt-[23px] text-[#fff] ">
                            illustration
                        </h2>
                        <p className="text-[14px] NormalPara mt-[8px]">
                            Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros elementum
                            tristique.
                        </p>




                    </div>
                    <div className="w-[353px] lg:w-[270px] bg-[#252525] rounded-[10px] py-[50px] px-[26px] ">
                        <img src={web4} className="w-[52px] h-[52px]" alt="" />
                        <h2 className="text-[24px] font-semibold mt-[23px] text-[#fff] ">
                            Development
                        </h2>
                        <p className="text-[14px] NormalPara mt-[8px]">
                            Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros elementum
                            tristique.
                        </p>




                    </div>
                </div>





            </div>





            {/*portfolios  */}

            <div className="container mx-auto mt-[100px] lg:mt-[150px]">
                <p className="text-[#B0F403] text-[14px] lg:text-[20px] font-normal ">portfolios</p>
                <h1 className="text-[26px] lg:text-[48px]  font-semibold text-[#fff] mt-[10px] lg:mt-[20px]">Our latest projects</h1>
                <div className="flex justify-between">
                    <p className=" text-[20px] NormalPara w-[762px] mt-[30px]">Lorem ipsum dolor sit amet, consect adipis elit.  Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
                        dolor.
                    </p>
                    <div className="w-[153px]  h-[60px] text-[#000] mt-[35px]  cursor-pointer hidden lg:flex justify-center gap-[10px] items-center  font-semibold  btn_primary">

                        <p> View all</p>
                        <img src={right_arrow} className="w-[20px] h-[20px] flex items-center mt-[2px]" alt="" />

                    </div>
                </div>

                <div className="w-full h-[49px] text-[#000] mt-[35px]  cursor-pointer lg:hidden flex justify-center gap-[10px] items-center  font-semibold  btn_primary">

                    <p> View all</p>
                    <img src={right_arrow} className="w-[20px] h-[20px] flex items-center mt-[2px]" alt="" />

                </div>
            </div>



            {/* <!-- Apart design app --> */}


            <section className="container mx-auto mt-[50px] lg:mt-[60px]">
                <div className="lg:flex 2xl:grid justify-center grid-cols-3 gap-[30px] ">
                    <div >
                        <img src={imgP1} className="w-[353px]  lg:w-[370px] 2xl:w-auto" alt="" />
                        <div className="bg_apart_shadow ">
                            <h1 className="text-[24px] font-semibold text-[#fff] ">Apart design app</h1>
                            <div className="mt-[6px] flex gap-5 items-center">
                                <p className="NormalPara w-[250px]">Lorem ipsum dolor sit amet, consect adipis elit.</p>
                                <button className="rounded-[50%] RoundedButton lg:w-[60px] lg:h-[60px] w-[48px] h-[48px]">
                                    <img src={imgVector} className="w-[20px] h-[20px] mx-auto" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='img2BG'>
                        <img src={imgP2} className="w-[353px] lg:w-[370px] 2xl:w-auto" alt="" />
                        <div className="bg_apart_shadow ">
                            <h1 className="text-[24px] font-semibold text-[#fff] ">Financial Service app</h1>
                            <div className="mt-[6px] flex gap-5 items-center">
                                <p className="NormalPara w-[250px]">Lorem ipsum dolor sit amet, consect adipis elit.</p>
                                <button className="rounded-[50%] RoundedButton lg:w-[60px] lg:h-[60px] w-[48px] h-[48px]">
                                    <img src={imgVector} className="w-[20px] h-[20px] mx-auto" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='img3BG'>
                        <div className=''>
                            <img src={imgP3} className="w-[353px] lg:w-[370px] 2xl:w-auto" alt="" />
                            <div className="bg_apart_shadow ">
                                <h1 className="text-[24px] font-semibold text-[#fff] ">Financial Service app</h1>
                                <div className="mt-[6px] flex gap-5 items-center">
                                    <p className="NormalPara w-[250px]">Lorem ipsum dolor sit amet, consect adipis elit.</p>
                                    <button className="rounded-[50%] RoundedButton lg:w-[60px] lg:h-[60px] w-[48px] h-[48px]">
                                        <img src={imgVector} className="w-[20px] h-[20px] mx-auto" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            {/* Testimonials */}



            <div className="flex justify-center container lg:static relative -top-[280px] mx-auto mt-[2px]">
                <div className="">
                    <p className="text-[#B0F403] text-[14px] lg:text-[20px] font-normal lg:text-center">Testimonials</p>
                    <h1 className="text-[26px] lg:text-[48px] lg:w-[788px]  mx-auto lg:text-center font-semibold text-[#fff] mt-[10px] lg:mt-[20px] "> What our loving users are saying about us</h1>
                    <p className="lg:w-[1035px] text-[14px] lg:text-[20px] NormalPara lg:text-center mt-[30px]">Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor..</p>
                </div>
            </div>





            {/* carousel */}





            <div className='lg:mt-[50px] lg:static relative -top-[220px] container mx-auto'>

                <Swiper
                    spaceBetween={400}


                    breakpoints={{
                        640: {
                            slidesPerView: 1,

                        },
                        768: {
                            slidesPerView: 2,

                        },
                        1024: {
                            slidesPerView: 2,

                        },
                        1280: {
                            slidesPerView: 2,

                        },
                    }}



                    navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>


                        <div className=" lg:w-[750px]">

                            <div className="bg-[#212121] p-5 lg:p-[30px] mx-auto lg:w-[750px] w-[393px] flex justify-center items-center rounded-[10px]">

                                {/* laptop */}
                                <div className="lg:flex gap-[28px]  h-[290px] hidden">

                                    <img src={client1} className=" lg:w-[224px]  " alt="" />




                                    <div className="w-[438px]  mt-[20px]">
                                        <h1 className="text-white text-[24px] font-semibold">Mr. Adam smith</h1>
                                        <p className="text-[#fff] ">CEO at ABC Company</p>

                                        <div className="flex justify-end relative -top-[10px]">
                                            <img src={quatations} className="w-[108px] h-[82px] " alt="" />
                                        </div>

                                        <p className="mt-[34px] NormalPara text-lg relative -top-[75px]">Lorem ipsum dolor sit
                                            amet,
                                            consect adipis elit. Suspend
                                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,
                                            eros
                                            dolor
                                            interdum nulla, ut commodo diam libero vuere. Lorem ipsum dolor sit ame</p>

                                    </div>




                                </div>




                                <div className=" gap-[28px]   lg:hidden">

                                    <div className='flex gap-5'>
                                        <img src={client1} className=" lg:w-[224px] w-[97px] h-[125px]   " alt="" />

                                        <div className="">
                                            <div className='mt-[80px]'>
                                                <h1 className="text-white text-lg lg:text-[24px] font-semibold">Mr. Adam smith</h1>
                                                <p className="text-[#fff] text-[12px] ">CEO at ABC Company</p>
                                            </div>

                                            <div className=" relative -top-[120px] left-[120px]">
                                                <img src={quatations} className="w-[45px] h-[32px] lg:w-[108px] lg:h-[82px] " alt="" />
                                            </div>



                                        </div>
                                    </div>

                                    <p className="mt-[34px] NormalPara text-[14px]  lg:text-lg  ">Lorem ipsum dolor sit
                                        amet,consect adipis elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,eros   dolor interdum nulla, ut commodo diam libero vuere. Lorem ipsum dolor sit ame
                                    </p>

                                </div>






                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" lg:w-[750px]">

                            <div className="bg-[#212121] p-5 lg:p-[30px] mx-auto lg:w-[750px] w-[393px] flex justify-center items-center rounded-[10px]">

                                {/* laptop */}
                                <div className="lg:flex gap-[28px]  h-[290px] hidden">

                                    <img src={client1} className=" lg:w-[224px]  " alt="" />




                                    <div className="w-[438px]  mt-[20px]">
                                        <h1 className="text-white text-[24px] font-semibold">Mr. Adam smith</h1>
                                        <p className="text-[#fff] ">CEO at ABC Company</p>

                                        <div className="flex justify-end relative -top-[10px]">
                                            <img src={quatations} className="w-[108px] h-[82px] " alt="" />
                                        </div>

                                        <p className="mt-[34px] NormalPara text-lg relative -top-[75px]">Lorem ipsum dolor sit
                                            amet,
                                            consect adipis elit. Suspend
                                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,
                                            eros
                                            dolor
                                            interdum nulla, ut commodo diam libero vuere. Lorem ipsum dolor sit ame</p>

                                    </div>




                                </div>




                                <div className=" gap-[28px]   lg:hidden">

                                    <div className='flex gap-5'>
                                        <img src={client1} className=" lg:w-[224px] w-[97px] h-[125px]   " alt="" />

                                        <div className="">
                                            <div className='mt-[80px]'>
                                                <h1 className="text-white text-lg lg:text-[24px] font-semibold">Mr. Adam smith</h1>
                                                <p className="text-[#fff] text-[12px] ">CEO at ABC Company</p>
                                            </div>

                                            <div className=" relative -top-[120px] left-[120px]">
                                                <img src={quatations} className="w-[45px] h-[32px] lg:w-[108px] lg:h-[82px] " alt="" />
                                            </div>



                                        </div>
                                    </div>

                                    <p className="mt-[34px] NormalPara text-[14px]  lg:text-lg  ">Lorem ipsum dolor sit
                                        amet,consect adipis elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,eros   dolor interdum nulla, ut commodo diam libero vuere. Lorem ipsum dolor sit ame
                                    </p>

                                </div>






                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className=" lg:w-[750px]">

                            <div className="bg-[#212121] p-5 lg:p-[30px] mx-auto lg:w-[750px] w-[393px] flex justify-center items-center rounded-[10px]">

                                {/* laptop */}
                                <div className="lg:flex gap-[28px]  h-[290px] hidden">

                                    <img src={client1} className=" lg:w-[224px]  " alt="" />




                                    <div className="w-[438px]  mt-[20px]">
                                        <h1 className="text-white text-[24px] font-semibold">Mr. Adam smith</h1>
                                        <p className="text-[#fff] ">CEO at ABC Company</p>

                                        <div className="flex justify-end relative -top-[10px]">
                                            <img src={quatations} className="w-[108px] h-[82px] " alt="" />
                                        </div>

                                        <p className="mt-[34px] NormalPara text-lg relative -top-[75px]">Lorem ipsum dolor sit
                                            amet,
                                            consect adipis elit. Suspend
                                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,
                                            eros
                                            dolor
                                            interdum nulla, ut commodo diam libero vuere. Lorem ipsum dolor sit ame</p>

                                    </div>




                                </div>




                                <div className=" gap-[28px]   lg:hidden">

                                    <div className='flex gap-5'>
                                        <img src={client1} className=" lg:w-[224px] w-[97px] h-[125px]   " alt="" />

                                        <div className="">
                                            <div className='mt-[80px]'>
                                                <h1 className="text-white text-lg lg:text-[24px] font-semibold">Mr. Adam smith</h1>
                                                <p className="text-[#fff] text-[12px] ">CEO at ABC Company</p>
                                            </div>

                                            <div className=" relative -top-[120px] left-[120px]">
                                                <img src={quatations} className="w-[45px] h-[32px] lg:w-[108px] lg:h-[82px] " alt="" />
                                            </div>



                                        </div>
                                    </div>

                                    <p className="mt-[34px] NormalPara text-[14px]  lg:text-lg  ">Lorem ipsum dolor sit
                                        amet,consect adipis elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,eros   dolor interdum nulla, ut commodo diam libero vuere. Lorem ipsum dolor sit ame
                                    </p>

                                </div>






                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" lg:w-[750px]">

                            <div className="bg-[#212121] p-5 lg:p-[30px] mx-auto lg:w-[750px] w-[393px] flex justify-center items-center rounded-[10px]">

                                {/* laptop */}
                                <div className="lg:flex gap-[28px]  h-[290px] hidden">

                                    <img src={client1} className=" lg:w-[224px]  " alt="" />




                                    <div className="w-[438px]  mt-[20px]">
                                        <h1 className="text-white text-[24px] font-semibold">Mr. Adam smith</h1>
                                        <p className="text-[#fff] ">CEO at ABC Company</p>

                                        <div className="flex justify-end relative -top-[10px]">
                                            <img src={quatations} className="w-[108px] h-[82px] " alt="" />
                                        </div>

                                        <p className="mt-[34px] NormalPara text-lg relative -top-[75px]">Lorem ipsum dolor sit
                                            amet,
                                            consect adipis elit. Suspend
                                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,
                                            eros
                                            dolor
                                            interdum nulla, ut commodo diam libero vuere. Lorem ipsum dolor sit ame</p>

                                    </div>




                                </div>




                                <div className=" gap-[28px]   lg:hidden">

                                    <div className='flex gap-5'>
                                        <img src={client1} className=" lg:w-[224px] w-[97px] h-[125px]   " alt="" />

                                        <div className="">
                                            <div className='mt-[80px]'>
                                                <h1 className="text-white text-lg lg:text-[24px] font-semibold">Mr. Adam smith</h1>
                                                <p className="text-[#fff] text-[12px] ">CEO at ABC Company</p>
                                            </div>

                                            <div className=" relative -top-[120px] left-[120px]">
                                                <img src={quatations} className="w-[45px] h-[32px] lg:w-[108px] lg:h-[82px] " alt="" />
                                            </div>



                                        </div>
                                    </div>

                                    <p className="mt-[34px] NormalPara text-[14px]  lg:text-lg  ">Lorem ipsum dolor sit
                                        amet,consect adipis elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,eros   dolor interdum nulla, ut commodo diam libero vuere. Lorem ipsum dolor sit ame
                                    </p>

                                </div>






                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" lg:w-[750px]">

                            <div className="bg-[#212121] p-5 lg:p-[30px] mx-auto lg:w-[750px] w-[393px] flex justify-center items-center rounded-[10px]">

                                {/* laptop */}
                                <div className="lg:flex gap-[28px]  h-[290px] hidden">

                                    <img src={client1} className=" lg:w-[224px]  " alt="" />




                                    <div className="w-[438px]  mt-[20px]">
                                        <h1 className="text-white text-[24px] font-semibold">Mr. Adam smith</h1>
                                        <p className="text-[#fff] ">CEO at ABC Company</p>

                                        <div className="flex justify-end relative -top-[10px]">
                                            <img src={quatations} className="w-[108px] h-[82px] " alt="" />
                                        </div>

                                        <p className="mt-[34px] NormalPara text-lg relative -top-[75px]">Lorem ipsum dolor sit
                                            amet,
                                            consect adipis elit. Suspend
                                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,
                                            eros
                                            dolor
                                            interdum nulla, ut commodo diam libero vuere. Lorem ipsum dolor sit ame</p>

                                    </div>




                                </div>




                                <div className=" gap-[28px]   lg:hidden">

                                    <div className='flex gap-5'>
                                        <img src={client1} className=" lg:w-[224px] w-[97px] h-[125px]   " alt="" />

                                        <div className="">
                                            <div className='mt-[80px]'>
                                                <h1 className="text-white text-lg lg:text-[24px] font-semibold">Mr. Adam smith</h1>
                                                <p className="text-[#fff] text-[12px] ">CEO at ABC Company</p>
                                            </div>

                                            <div className=" relative -top-[120px] left-[120px]">
                                                <img src={quatations} className="w-[45px] h-[32px] lg:w-[108px] lg:h-[82px] " alt="" />
                                            </div>



                                        </div>
                                    </div>

                                    <p className="mt-[34px] NormalPara text-[14px]  lg:text-lg  ">Lorem ipsum dolor sit
                                        amet,consect adipis elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,eros   dolor interdum nulla, ut commodo diam libero vuere. Lorem ipsum dolor sit ame
                                    </p>

                                </div>






                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>












            {/* View all */}

            <div className="lg:flex justify-center lg:p-0 p-5 lg:static relative -top-[220px]">

                <div
                    className="w-full lg:w-[153px] h-[48px] lg:h-[60px] mt-[50px] text-[#000] cursor-pointer flex justify-center gap-[10px] items-center  font-semibold  btn_primary">

                    <p> View all</p>
                    <img src={right_arrow} className="w-[20px] h-[20px] flex items-center mt-[2px]" alt="" />

                </div>
            </div>




            <div className="container mx-auto flex justify-center lg:static relative -top-[250px]">
                <div className="rounded-[10px]  bg-[#212121] w-[393px] container  lg:px-[253px] mt-[150px] lg:py-[90px] py-[50px] px-[23px]">
                    <div className="lg:w-[664px] mx-auto lg:text-center">
                        <h1 className="text-[27px] lg:text-[48px] w-[287px] lg:w-auto text-center font-semibold text-[#fff]  ">Lets create your next level project together</h1>
                        <p className=" text-[14px] lg:text-[20px] text-[#fff] lg:w-[516px] mx-auto mt-[18px] lg:mt-[30px]">Build Your site for free and take  as long as you need (That’s right, on trial here)</p>





                        <div className="flex justify-center mt-[50px]">
                            <div
                                className="w-[176px] lg:w-[189px] h-[48px] lg:h-[60px]  text-[#000] cursor-pointer flex justify-center gap-[10px] items-center  font-semibold  btn_primary">

                                <p> Get in touch</p>
                                <img src={right_arrow} className="w-[20px] h-[20px] flex items-center mt-[2px]"
                                    alt="" />

                            </div>
                        </div>
                    </div>

                </div>
            </div>







            {/* Footer  */}


            <footer className="container mx-auto lg:mt-[150px]">

                <hr className="borDer lg:block hidden" />



                <div className="lg:flex hidden justify-between pt-[18px]  pb-[10.6px] ">
                    <h1 className="Logo font-semibold text-[34px] lg:block hidden">LOGO</h1>
                    <div className="text-[#999]  mx-auto flex justify-center gap-[16px] ">
                        <button className=" text-[14px]"><span>About</span></button>
                        <button className=" text-[14px]"><span>Templates</span></button>
                        <button className=" text-[14px]"><span>Features</span></button>
                        <button className=" text-[14px]"><span>Pricing</span></button>
                        <button className=" text-[14px]"><span>Wall of love</span></button>
                        <button className=" text-[14px]"><span>FAQ</span></button>



                    </div>

                    <div className="text-[#999] flex justify-center  gap-[16px] ">
                        <button className=" text-[14px]"><span>Terms of Use</span></button>
                        <button className=" text-[14px]"><span>Privacy Policy</span></button>




                    </div>





                </div>


                {/* Mobile */}


                <div className='lg:hidden block -mt-[120px] '>
                    <hr className="borDer" />
                    <h1 className="Logo font-semibold text-[34px] block lg:hidden">LOGO</h1>

                    <div className='flex gap-[84px] mt-[30px] mb-[10px]'>
                        <div className="text-[#999]   flex flex-col  gap-[16px] ">
                            <a className=" text-[14px]"><span>About</span></a>
                            <a className=" text-[14px]"><span>Templates</span></a>
                            <a className=" text-[14px]"><span>Features</span></a>
                            <a className=" text-[14px]"><span>Pricing</span></a>
                            <a className=" text-[14px]"><span>Wall of love</span></a>
                            <a className=" text-[14px]"><span>FAQ</span></a>



                        </div>

                        <div className="text-[#999] flex flex-col   gap-[16px] ">
                            <a className=" text-[14px]"><span>Terms of Use</span></a>
                            <a className=" text-[14px]"><span>Privacy Policy</span></a>




                        </div>
                    </div>
                </div>
                <hr className="borDer" />


                {/* Laptop */}

                <div className="mt-[40px] hidden lg:flex justify-between lg:pb-[60px]">
                    <p className="text-[#fff] text-lg lg:text-[14px] ">
                        All the information on this website is published in good faith and for general information purpose only.
                    </p>

                    <div className="flex gap-5 ">
                        <img src={icon1} className="w-5 h-5" alt="" />
                        <img src={icon2} className="w-5 h-5" alt="" />
                        <img src={icon3} className="w-5 h-5" alt="" />
                        <img src={icon4} className="w-5 h-5" alt="" />
                        <img src={icon5} className="w-5 h-5" alt="" />
                    </div>
                </div>

                {/* Mobile */}

                <div className="mt-[40px] lg:hidden  lg:pb-[60px] ">


                    <div className="flex gap-5 ">
                        <img src={icon1} className="w-5 h-5" alt="" />
                        <img src={icon2} className="w-5 h-5" alt="" />
                        <img src={icon3} className="w-5 h-5" alt="" />
                        <img src={icon4} className="w-5 h-5" alt="" />
                        <img src={icon5} className="w-5 h-5" alt="" />
                    </div>

                    <p className="text-[#fff] mt-5 lg:text-[20px] text-[14px] pb-5 lg:pb-0 ">
                        All the information on this website is published in good faith and for general information purpose only.
                    </p>
                </div>


            </footer>











        </>
    );
};
export default Homepage;