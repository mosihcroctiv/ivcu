import Navbar from "../../components/website/Navbar";
import hero_img1 from '../../assets/images/home-bg.png'
import hero_img2 from '../../assets/images/home-bg1.png'
import hero_img3 from '../../assets/images/home-bg2.png'
import hero_img4 from '../../assets/images/home-bg3.png'
import Logo from  '../../assets/images/logo.png'
import {GiClothJar} from 'react-icons/gi'
import {BsFire} from 'react-icons/bs'
import {FaStarOfDavid} from 'react-icons/fa'
import { useEffect, useState } from "react";
import Footer from "../../components/website/Footer";
import Contact from "../../components/website/Contact";

const Index = () => {

    const [hero_img, setHeroimg] = useState(hero_img1)

    let imgs = [hero_img1, hero_img2, hero_img3, hero_img4]
   
    return(
        <>
        <div className="sticky z-[1]">
        <Navbar/>
        </div>
        
        <div className="hero">
            <div className="w-full h-[595px] overflow-hidden border" style={{backgroundImage:`url(${hero_img})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
            </div>
            <div className="absolute top-0 text-center text-white w-full h-full z-[0] bg-[#04131B] bg-opacity-90">
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
        <div className="pt-[70px] text-deepBlue px-[20px] md:px-[50px] lg:px-[102px]">
            <img className="m-auto" src={Logo} alt="" />
            <p className="text-center text-[24px] md:text-[32px] font-semibold mt-5 mb-3">About  Ibadan Varsity Christian Union</p>
            <p className="text-[16px] md:text-[20px] text-center m-auto lg:w-[80%]">Lorem ipsum dolor sit amet consectetur. Nisl ut cras leo sodales at cursus dui. Lectus faucibus arcu enim a enim lectus massa in. Elementum congue quis a augue. Sit sagittis aliquet orci viverra odio nulla aenean cras vitae. Purus egestas mattis mattis leo morbi. Turpis sit mattis sit sed. Sapien fringilla metus velit euismod arcu. Ac et convallis sit nulla enim id adipiscing. Mi ut sit ipsum id tempor egestas pellentesque sit mattis. Vitae aenean posuere orci sagittis nulla congue eu ullamcorper. Diam eu lectus quam ut cras. Lacus bibendum gravida sed non ultricies pellentesque in. Aliquam posuere adipiscing felis consequat facilisis ac volutpat. Ut adipiscing sagittis nam at egestas suspendisse feugiat. Tortor pharetra amet pellentesque egestas sapien.</p>
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