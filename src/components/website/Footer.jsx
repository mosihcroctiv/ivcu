import Logo from  '../../assets/images/logo.png'
import '../../index.css'
import {MdMenuOpen, MdClose, MdOutlineClose} from 'react-icons/md'
import {SiInstagram} from 'react-icons/si'
import {TbBrandTelegram} from 'react-icons/tb'
import { useState } from 'react';
import Mx from '../../assets/images/social media/mixlr.png'

const Footer = () => {
     
    return(
        <div className='footer w-full bg-deepBlue pt-[60px] pb-[20px] px-[20px] md:px-[50px] lg:px-[102px]'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 text-white text-[20px]'>
                <div className='w-[150px] mb-10'>
                    <img src={Logo} alt="" />
                </div>
                <div className='mb-10'>
                    <p className='font-semibold mb-5'>Location</p>
                    <p className='text-primary text-[15px]'>University Of Ibadan,<br /> Chapel Of The Resurrection</p>
                </div>
                <div className='mb-10'>
                    <p className='font-semibold mb-5'>Sevice Time</p>
                    <ul className='text-primary text-[15px]'>
                        <li className='mb-2'>Sunday: 1pm<br/>Wednesday: 6pm</li>
                    </ul>
                </div>
                <div className='mb-10'>
                    <p className='font-semibold mb-5'>Social Media</p>
                    <div className='flex justify-between w-[100px]'>
                        <SiInstagram/>
                        <TbBrandTelegram/>
                        <img src={Mx} alt="" />
                    </div>
                </div>
            </div>
            <div className='text-[13px]'>
                <p className='text-[#4B4B4B] md:text-center'>© 2023 IVCU | All Rights Reserved | Designed By <span className='text-primary'>IVCU</span></p>
            </div>
        </div>
    )
};

export default Footer;