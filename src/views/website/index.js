import Navbar from "../../components/website/Navbar";
import hero_img1 from '../../assets/images/home-bg.png'
import hero_img2 from '../../assets/images/home-bg1.png'
import hero_img3 from '../../assets/images/home-bg2.png'
import hero_img4 from '../../assets/images/home-bg3.png'
import events from '../../assets/images/events.png'
import bbc from '../../assets/images/bbc.png'
import af from '../../assets/images/af.png'
import cpa1 from '../../assets/images/cpa1.png'
import Logo from  '../../assets/images/logo.png'
import {GiClothJar} from 'react-icons/gi'
import {BsFire} from 'react-icons/bs'
import {FaStarOfDavid} from 'react-icons/fa'
import {ImQuotesLeft} from 'react-icons/im'
import { useEffect, useState } from "react";
import Footer from "../../components/website/Footer";
import Contact from "../../components/website/Contact";

const Index = () => {

    const [hero_img, setHeroimg] = useState(hero_img1)

    let imgs = [hero_img1, hero_img2, hero_img3, hero_img4]
   
    return(
        <>
        <div className="sticky top-0 z-[1]">
        <Navbar/>
        </div>
        
        <div className="hero">
            <div className="w-full h-[595px] overflow-hidden border" style={{backgroundImage:`url(${hero_img})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
            </div>
            <div className="absolute top-0 text-center text-white w-full h-[678px] z-[0] bg-[#04131B] bg-opacity-90">
                <div className="m-auto mt-[100px]">
                    <p className="text-[230px] text-primary font-bold">IVCU</p>
                    <p className="font-bold text-[48px]">Ibadan Varsity Christian Union</p>
                    <p className="font-bold text-[24px] mb-1">NIFES</p>
                    <div className="w-[194px] bg-[#D9D9D9] bg-opacity-20 text-[24px] p-5 font-bold m-auto">
                        <span>Jesus People</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-primary text-5 text-white px-[20px] md:px-[50px] lg:px-[102px] pt-5 pb-20'>
            <p className="text-center font-bold text-[40px] mb-5">Who we are</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center">
                <div className="m-auto border border-white rounded-[10px] p-6 flex items-center gap-1 w-[250px] md:w-[300px] lg:w-[250px] xl:w-[300px] mb-5">
                    <GiClothJar/>
                    <span>Inspired Vessels</span>
                </div>
                <div className="m-auto border border-white rounded-[10px] p-6 flex items-center gap-1 w-[250px] md:w-[300px] lg:w-[250px] xl:w-[300px] mb-5">
                    <BsFire/>
                    <span>Consecrated</span>
                </div>
                <div className="m-auto border border-white rounded-[10px] p-6 flex items-center gap-1 w-[250px] md:w-[300px] lg:w-[250px] xl:w-[300px] mb-5 sm:col-span-2 lg:col-span-1">
                    <FaStarOfDavid/>
                    <span>Undaunted</span>
                </div>
            </div>
        </div>
        <div className="pt-[70px] text-deepBlue px-[20px] md:px-[50px] lg:px-[102px] pb-10">
            <img className="m-auto" src={Logo} alt="" />
            <p className="text-center text-[24px] md:text-[32px] font-semibold mt-5 mb-3">About  Ibadan Varsity Christian Union</p>
            <p className="text-[16px] md:text-[20px] text-center m-auto lg:w-[80%]">Lorem ipsum dolor sit amet consectetur. Nisl ut cras leo sodales at cursus dui. Lectus faucibus arcu enim a enim lectus massa in. Elementum congue quis a augue. Sit sagittis aliquet orci viverra odio nulla aenean cras vitae. Purus egestas mattis mattis leo morbi. Turpis sit mattis sit sed. Sapien fringilla metus velit euismod arcu. Ac et convallis sit nulla enim id adipiscing. Mi ut sit ipsum id tempor egestas pellentesque sit mattis. Vitae aenean posuere orci sagittis nulla congue eu ullamcorper. Diam eu lectus quam ut cras. Lacus bibendum gravida sed non ultricies pellentesque in. Aliquam posuere adipiscing felis consequat facilisis ac volutpat. Ut adipiscing sagittis nam at egestas suspendisse feugiat. Tortor pharetra amet pellentesque egestas sapien.</p>

            <div className="flex justify-center pt-5">
            <a className="m-auto border border-primary text-deepBlue rounded-[45px] font-semibold px-10 py-3" href="/about">Learn More</a>
            </div>
        </div>
        {/* <div className="pt-[70px]">
            <p className="text-center m-auto text-[32px] text-deepBlue font-semibold">Events and Programs</p>
            <div className="relative border border-primary gap-1 overflow-hidden">
                <div className="w-[350px] h-[350px]" style={{backgroundImage:`url(${events})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                    <div className='w-full h-full' style={{background: 'linear-gradient(107.07deg, #EB6464 4.84%, rgba(54, 69, 204, 0.7) 102.07%)'}}>
                        <div className="text-white m-auto pt-20 w-[70%]">
                            <p className="text-[32px] font-semibold">Brothers & Sister Weekend</p>
                            <p className="text-[13px]">8:00am |Saturday| January 29th 2023</p>
                        </div>
                    </div>
                </div>
                <div className="w-[350px] h-[350px]" style={{backgroundImage:`url(${events})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                    <div className='w-full h-full' style={{background: 'linear-gradient(107.07deg, #EB6464 4.84%, rgba(54, 69, 204, 0.7) 102.07%)'}}>
                        <div className="text-white m-auto pt-20 w-[70%]">
                            <p className="text-[32px] font-semibold">Brothers & Sister Weekend</p>
                            <p className="text-[13px]">8:00am |Saturday| January 29th 2023</p>
                        </div>
                    </div>
                </div>
                <div className="w-[350px] h-[350px]" style={{backgroundImage:`url(${events})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                    <div className='w-full h-full' style={{background: 'linear-gradient(107.07deg, #EB6464 4.84%, rgba(54, 69, 204, 0.7) 102.07%)'}}>
                        <div className="text-white m-auto pt-20 w-[70%]">
                            <p className="text-[32px] font-semibold">Brothers & Sister Weekend</p>
                            <p className="text-[13px]">8:00am |Saturday| January 29th 2023</p>
                        </div>
                    </div>
                </div>
                <div className="w-[350px] h-[350px]" style={{backgroundImage:`url(${events})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                    <div className='w-full h-full' style={{background: 'linear-gradient(107.07deg, #EB6464 4.84%, rgba(54, 69, 204, 0.7) 102.07%)'}}>
                        <div className="text-white m-auto pt-20 w-[70%]">
                            <p className="text-[32px] font-semibold">Brothers & Sister Weekend</p>
                            <p className="text-[13px]">8:00am |Saturday| January 29th 2023</p>
                        </div>
                    </div>
                </div>
                <div className="w-[350px] h-[350px]" style={{backgroundImage:`url(${events})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                    <div className='w-full h-full' style={{background: 'linear-gradient(107.07deg, #EB6464 4.84%, rgba(54, 69, 204, 0.7) 102.07%)'}}>
                        <div className="text-white m-auto pt-20 w-[70%]">
                            <p className="text-[32px] font-semibold">Brothers & Sister Weekend</p>
                            <p className="text-[13px]">8:00am |Saturday| January 29th 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div className="bg-primary text-5 text-white px-[5px] md:px-[50px] lg:px-[102px] py-10 sm:py-20">
            <div className="grid sm:grid-cols-2 text-white">
                <div className=" flex justify-center pb-5 sm:pb-0">
                    <p className="text-center m-auto w-[70%]">Coming together to fellowship and share in the grace that Christ has given.</p>
                </div>
                <div className="flex justify-center border-t-2 sm:border-t-0 sm:border-l-2 border-white">
                    <div className="mt-5">
                        <ImQuotesLeft className="ml-5 sm:ml-10" size={50}/>
                        <p className="text-center m-auto w-[80%] sm:w-[70%]">Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.
                        <br/>
                        Hebrew 10:25
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[450px]" style={{backgroundImage:`url(${cpa1})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div className="bg-black h-full bg-opacity-80 text-white">
                <div className="grid sm:grid-cols-2 text-center sm:text-left px-[5px] md:px-[50px] lg:px-[102px] pb-10">
                    <div className="m-auto pt-[60px] sm:pt-20">
                        <p className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-semibold">SUNDAY: 1PM</p>
                        <p className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-semibold">WEDNESDAY: 6PM</p>
                        <div className="p-2 bg-[#0025a7]">
                            <span className="text-[12px] sm:text-[16px]">First Wednesday of the month: Prayer and Fasting</span>
                        </div>
                        <div className="h-3 sm:h-5"></div>
                        <span className="text-[12px] sm:text-[16px] p-2 bg-[#2048D9]">Other Wednesdays: Bible Study</span> 
                        <div className="h-3 sm:h-5"></div>
                        <div className="p-2 bg-[#456EFF]">
                            <span className="text-[12px] sm:text-[16px]">Last Wednesday of the month: Holy Communion</span>
                        </div>
                        <div className="h-3 sm:h-0"></div>
                    </div>
                    <div className="m-auto mt-10 sm:mt-auto">
                        <p className="text-[16px] sm:text-[16px]">Location:</p>
                        <p className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-semibold">CHAPEL OF <br />RESURRECTION</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-[5px] md:px-[20px] lg:px-[50px] py-10 sm:py-20">
            <div className="grid grid-cols-2">
                <div className="flex justify-center mb-10">
                    <div className="w-[450px]">
                        <img className="w-full" src={bbc} alt="" />
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="w-[430px]">
                        <p className="text-[32px] font-semibold">BASIC BIBLE CLASS</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Feugiat vestibulum in id ultricies vulputate sapien eget. Cursus commodo eget eget convallis. Lorem nunc odio tellus id accumsan cursus nibh. Tempus tortor eget amet volutpat in in. Lectus fames nibh habitant nec purus vel aliquet sit eget. Posuere tempor nulla fringilla risus lorem varius quam sollicitudin. Lacus a ut non tortor sollicitudin tellus pharetra ac. Viverra blandit non risus bibendum. Diam risus odio nulla tellus blandit semper elementum non.</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="w-[430px] text-right">
                        <p className="text-[32px] font-semibold">ALUMINI FAMILY</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Feugiat vestibulum in id ultricies vulputate sapien eget. Cursus commodo eget eget convallis. Lorem nunc odio tellus id accumsan cursus nibh. Tempus tortor eget amet volutpat in in. Lectus fames nibh habitant nec purus vel aliquet sit eget. Posuere tempor nulla fringilla risus lorem varius quam sollicitudin. Lacus a ut non tortor sollicitudin tellus pharetra ac. Viverra blandit non risus bibendum. Diam risus odio nulla tellus blandit semper elementum non.</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-[450px] mt-[-100px]">
                        <img className="w-full" src={af} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Contact/>
        </div>
        <div>
            <Footer/>
        </div>
        </>
    )
};

export default Index;