import Logo from  '../../assets/images/logo.png'
import '../../index.css'
import {MdOutlineWhatsapp} from 'react-icons/md'
import {FiSend} from 'react-icons/fi'
import { useState } from 'react';
import Yt from '../../assets/images/social media/mixlr.png'
import Ig from '../../assets/images/social media/instagram.png'
import Tl from '../../assets/images/social media/telegram.png'
import Gmail from '../../assets/images/social media/gmail.png'
import bg from '../../assets/images/contact-img.png'
import {SiInstagram} from 'react-icons/si'
import {TbBrandTelegram} from 'react-icons/tb'

const Contact = () => {
     
    return(
        <div id='contact' className='' style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 bg-black bg-opacity-90 w-full text-white px-[20px] md:px-[10px] lg:px-[102px]'>
                <div className='flex justify-center'>
                    <div className='text-center sm:text-left mt-10 text-[16px]'>
                        <p className='text-[32px] font-semibold mb-8'>Contact Us</p>
                        <div className='mb-5'>
                            <p className='font-semibold text-[20px] mb-1'>Location</p>
                            <p>University of Ibadan <br />Chapel Of The Resurrection</p>
                        </div>
                        <div className='mb-5'>
                            <p className='font-semibold text-[20px] mb-1'>Phone Number</p>
                            <p>+234 904455323</p>
                        </div>
                        <div className='mb-5'>
                            <p className='font-semibold text-[24px] mb-1'>Social Media</p>
                            <div className='flex m-auto sm:m-0 justify-between w-[100px]'>
                                <a href="/">
                                    <img className='w-[20px]' src={Ig} alt="" />
                                </a>
                                <a href="/">
                                    <img className='w-[20px]' src={Tl} alt="" />
                                </a>
                                <a href="/">
                                    <img className='w-[20px]' src={Yt} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border border-[#BFBFBF] mt-5 sm:hidden' />
                <div className='flex justify-center'>
                    <div className='mt-10'>
                        <p className='text-center sm:text-left text-[32px] font-semibold mb-8'>Send a Message</p>
                        <div>
                            <input className='m-auto sm:m-0 block w-[250px] xl:w-[300px]' type="text" placeholder='Full Name' />
                            <input className='m-auto sm:m-0 block w-[250px] xl:w-[300px]' type="email" placeholder='Email Address' />
                            <textarea className='m-auto sm:m-0 block w-[250px] xl:w-[300px]' name="" placeholder='Message'></textarea>
                        </div>
                        <div className='mt-10 mb-5 flex justify-start'>
                            <a href='#contact' className='btn-sm m-auto sm:m-0 bg-secondary flex items-center'>
                                <img className='w-[20px]' src={Gmail} alt="" />
                                <span className='ml-1'>Send Message</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center sm:col-span-2 md:col-span-1'>
                    <div className='mt-10'>
                        <p className='text-center sm:text-left text-[32px] font-semibold mb-6'>Meet on Whatsapp</p>
                        <div className='mb-5 flex justify-start'>
                            <a href='#contact' className='btn-sm m-auto md:m-0 bg-secondary flex items-center'>
                                <MdOutlineWhatsapp size={25}/>
                                <span className='ml-1'>Send Message</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;