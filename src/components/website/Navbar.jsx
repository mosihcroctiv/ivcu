import Logo from  '../../assets/images/logo.png'
import '../../index.css'
import {MdMenuOpen, MdClose, MdOutlineClose} from 'react-icons/md'
import {RxCaretDown, RxCaretUp} from 'react-icons/rx'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [showdropdown, setShowdropdown] = useState(false)
    const location = useLocation()

    const handleShow = () =>{
        setShow(!show)
    }

    const handleShowdropdown = () =>{
        setShowdropdown(!showdropdown)
    }
     
    return(
        <>
        <div className='flex justify-between items-center px-[20px] md:px-[50px] lg:px-[102px] py-[15px] bg-white z-[1000] sticky top-0'>
            <div className='w-[60px]'>
                <a href="/">
                    <img className='' src={Logo} alt="" />
                </a>
            </div>
            <div className='hidden md:block text-[16px] font-semibold w-[50%]'>
                <ul className='flex justify-between items-center text-deepBlue'>
                    <a href="/">
                        <li className={location.pathname==='/' ? 'nav-item active':'nav-item'}>
                            Home
                        </li>
                    </a>
                    <a href="/departments">
                        <li className={location.pathname==='/departments' ? 'nav-item active':'nav-item'}>
                            Departments
                        </li>
                    </a>
                    <div>
                        <div className='cursor-pointer' onClick={handleShowdropdown}>
                            <li className={location.pathname==='/resources/messages' || location.pathname==='/resources/gallery' ? 'nav-item flex items-center active':'nav-item flex items-center'}>
                                <span>Resources</span>
                                {!showdropdown && <RxCaretDown className='mt-1' size={25}/>}
                                {showdropdown && <RxCaretUp className='mt-1' size={25}/>}
                            </li>
                        </div>
                        <ul className={showdropdown? 'absolute top-[80px] text-[15px] bg-white p-4':'hidden'}>
                            <a href="/resources/messages">
                                <li className={location.pathname==='/resources/messages' ? 'nav-item pb-3 flex items-center active':'nav-item pb-3 flex items-center'}>Messages</li>
                            </a>
                            <a href="/resources/gallery">
                                <li className={location.pathname==='/resources/gallery' ? 'nav-item flex items-center active':'nav-item flex items-center'}>Gallery</li>
                            </a>
                        </ul>
                    </div>
                    <a href="/about">
                        <li className={location.pathname==='/about' ? 'nav-item active':'nav-item'}>
                            About Us
                        </li>
                    </a>
                </ul>
            </div>
            <div className='hidden md:flex'>
                <a href='/support' className='btn bg-primary'>
                    Support Us
                </a>
            </div>
            <div className={show ? 'hidden':'cursor-pointer text-primary md:hidden'} onClick={handleShow}>
                <MdMenuOpen size={35}/>
            </div>
            <div className={show ? 'cursor-pointer text-primary mt-2':'hidden'} onClick={handleShow}>
                <MdOutlineClose size={35}/>
            </div>
        </div>
        <div className={show ? 'side-nav fixed left-0 top-0 w-full h-screen sm:w-[250px] bg-white flex justify-between px-[20px] pt-[10px] drop-shadow-lg md:hidden ease-in duration-300':'side-nav absolute left-[-250px] top-0 w-[50px] h-screen bg-white flex justify-between px-[20px] pt-[10px] ease-out duration-300'}>
            <div className='w-full'>
                <div className="logo mb-[15px] w-[100px]">
                    <a href='/'>
                        <img className='' src={Logo} alt="" />
                    </a>
                </div>
                <div className='text-[16px] font-semibold mt-[50px]'>
                    <ul className=''>
                        <a href="/">
                            <li className={location.pathname==='/' ? 'nav-item pb-5 active':'nav-item pb-5'}>
                                Home
                            </li>
                        </a>
                        <a href="/departments">
                            <li className={location.pathname==='/departments' ? 'nav-item pb-3 active':'nav-item pb-3'}>
                                Departments
                            </li>
                        </a>
                        <div className='pb-3'>
                            <div className='cursor-pointer' onClick={handleShowdropdown} >
                                <li className={location.pathname==='/resources/messages' || location.pathname==='/resources/gallery' ? 'nav-item pb-3 flex items-center active':'nav-item pb-3 flex items-center'}>
                                    <span>Resources</span>
                                    {!showdropdown && <RxCaretDown className='mt-1' size={25}/>}
                                    {showdropdown && <RxCaretUp className='mt-1' size={25}/>}
                                </li>
                            </div>
                            <ul className={showdropdown? 'ml-5 text-[15px]':'hidden'}>
                                <a href="/resources/messages">
                                    <li className={location.pathname==='/resources/messages' ? 'nav-item pb-3 flex items-center active':'nav-item pb-3 flex items-center'}>Messages</li>
                                </a>
                                <a href="/resources/gallery">
                                    <li className={location.pathname==='/resources/gallery' ? 'nav-item flex items-center active':'nav-item flex items-center'}>Gallery</li>
                                </a>
                            </ul>
                        </div>
                        <a href="/about">
                            <li className={location.pathname==='/about' ? 'nav-item pb-5 active':'nav-item pb-5'}>
                                About Us
                            </li>
                        </a>
                    </ul>
                </div>
                <div className='mt-[10px]'>
                    <a href='/support' className='btn bg-primary'>
                        Support Us
                    </a>
                </div>
                <div className='mt-5 text-secondary absolute bottom-8'>
                    <p>IVCU&copy; all rights reserved</p>
                </div>
            </div>
            <div className='sm:hidden text-primary mt-[17px] cursor-pointer' onClick={handleShow}>
                <MdClose size={35}/>
            </div>
        </div>
        </>
    )
};

export default Navbar;