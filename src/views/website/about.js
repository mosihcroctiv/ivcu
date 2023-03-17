import Footer from "../../components/website/Footer";
import Navbar from "../../components/website/Navbar";
import Exco from '../../assets/images/Excos/Exco.png';
import instagram from '../../assets/images/social media/instagram.png';
import facebook from '../../assets/images/social media/facebook.png';
import whatsapp from '../../assets/images/social media/whatsapp.png'

const About = () =>{

    return(
        <>
        <Navbar/>
        <div className="mt-20 px-[20px] md:px-[50px] lg:px-[102px]">
            <p className="text-[24px] sm:text-[34px] text-center font-semibold mb-5">About Us</p>
            <p className="text-[14px] sm:text-[16px] text-center">
                Lorem ipsum dolor sit amet consectetur. Nibh est lectus a dui nibh lacus diam semper risus. Sed et dignissim neque fames. Diam ultrices dictum rhoncus mattis donec imperdiet ut amet. Egestas sit porttitor sit lorem nibh in elementum pulvinar purus. Scelerisque sollicitudin venenatis malesuada mattis. Enim netus eget in commodo. Augue odio purus velit feugiat diam posuere sagittis. Ut blandit vitae ut ultricies etiam tincidunt sollicitudin donec mauris. Tortor viverra praesent libero magnis. Lorem ipsum dolor sit amet consectetur. Nibh est lectus a dui nibh lacus diam semper risus. Sed et dignissim neque fames. Diam ultrices dictum rhoncus mattis donec imperdiet ut amet. Egestas sit porttitor sit lorem nibh in elementum pulvinar purus. Scelerisque sollicitudin venenatis malesuada mattis. Enim netus eget in commodo. Augue odio purus velit feugiat diam posuere sagittis. Ut blandit vitae ut ultricies etiam tincidunt sollicitudin donec mauris. Tortor viverra praesent libero magnis.
            </p>
        </div>
        <div className="mt-40 mb-20 px-[20px] md:px-[50px] lg:px-[102px]">
            <p className="text-[24px] sm:text-[34px] text-center font-semibold mb-5">Our Mission</p>
            <p className="text-[14px] sm:text-[16px] text-center">
                Lorem ipsum dolor sit amet consectetur. Nibh est lectus a dui nibh lacus diam semper risus. Sed et dignissim neque fames. Diam ultrices dictum rhoncus mattis donec imperdiet ut amet. Egestas sit porttitor sit lorem nibh in elementum pulvinar purus. Scelerisque sollicitudin venenatis malesuada mattis. Enim netus eget in commodo. Augue odio purus velit feugiat diam posuere sagittis. Ut blandit vitae ut ultricies etiam tincidunt sollicitudin donec mauris. Tortor viverra praesent libero magnis. Lorem ipsum dolor sit amet consectetur. Nibh est lectus a dui nibh lacus diam semper risus. Sed et dignissim neque fames. Diam ultrices dictum rhoncus mattis donec imperdiet ut amet. Egestas sit porttitor sit lorem nibh in elementum pulvinar purus. Scelerisque sollicitudin venenatis malesuada mattis. Enim netus eget in commodo. Augue odio purus velit feugiat diam posuere sagittis. Ut blandit vitae ut ultricies etiam tincidunt sollicitudin donec mauris. Tortor viverra praesent libero magnis.
            </p>
        </div>
        <div className='bg-primary text-5 text-white px-[20px] md:px-[50px] lg:px-[102px] pt-5 pb-20'>
            <p className="text-center font-bold text-[24px] sm:text-[40px] my-5">IVCU Family Song</p>
            <div className="text-center">
                I've found a place <br/>
                Where the word of truth is lived <br/>
                I've found a family <br/>
                Where love and warmth abound<br/>
                <br/>
                IVCU! Jesus People!<br/>
                God's still building us, equipping us for His course<br/>

                IVCU! What a heritage<br/>
                In love and truth, power and excellence<br/>

                From glory to glory<br/>
                We're getting better<br/>
                We're moving higher<br/>
                We're getting stronger<br/>
                <br/>
                This is who we are<br/>
                Inspired<br/>
                Vessels<br/>
                Consecrated<br/>
                <br/>
                This is who we are<br/>
                Inspired<br/>
                Vessels<br/>
                Consecrated<br/>
                Undaunted<br/>
            </div>
        </div>
        <div className="pt-20 px-[20px] md:px-[50px] lg:px-[102px] text-center">
            <p className="text-[24px] sm:text-[34px] font-semibold mb-10">Current Executives</p>
            <div>
                <p className="text-[18px] sm:text-[24px] font-semibold mb-5">Central Executives</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="mb-5">
                        <div className="flex justify-center">
                            <img src={Exco}/>
                        </div>
                        <div className="text-center mt-3">
                            <p className="text-[16px] sm:text-[20px] font-semibold">President</p>
                            <p className="">Olusegun Joshua</p>
                            <div className="flex justify-center">
                                <img src={facebook} className='w-[30px] h-[30px]'/>
                                <img src={whatsapp} className='w-[30px] h-[30px]'/>
                                <img src={instagram} className='w-[30px] h-[30px]'/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="flex justify-center">
                            <img src={Exco}/>
                        </div>
                        <div className="text-center mt-3">
                            <p className="text-[16px] sm:text-[20px] font-semibold">President</p>
                            <p className="">Olusegun Joshua</p>
                            <div className="flex justify-center">
                                <img src={facebook} className='w-[30px] h-[30px]'/>
                                <img src={whatsapp} className='w-[30px] h-[30px]'/>
                                <img src={instagram} className='w-[30px] h-[30px]'/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="flex justify-center">
                            <img src={Exco}/>
                        </div>
                        <div className="text-center mt-3">
                            <p className="text-[16px] sm:text-[20px] font-semibold">President</p>
                            <p className="">Olusegun Joshua</p>
                            <div className="flex justify-center">
                                <img src={facebook} className='w-[30px] h-[30px]'/>
                                <img src={whatsapp} className='w-[30px] h-[30px]'/>
                                <img src={instagram} className='w-[30px] h-[30px]'/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="flex justify-center">
                            <img src={Exco}/>
                        </div>
                        <div className="text-center mt-3">
                            <p className="text-[16px] sm:text-[20px] font-semibold">President</p>
                            <p className="">Olusegun Joshua</p>
                            <div className="flex justify-center">
                                <img src={facebook} className='w-[30px] h-[30px]'/>
                                <img src={whatsapp} className='w-[30px] h-[30px]'/>
                                <img src={instagram} className='w-[30px] h-[30px]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-[18px] sm:text-[24px] font-semibold mt-10 mb-5">General Executives</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="mb-5">
                        <div className="flex justify-center">
                            <img src={Exco}/>
                        </div>
                        <div className="text-center mt-3">
                            <p className="text-[16px] sm:text-[20px] font-semibold">President</p>
                            <p className="">Olusegun Joshua</p>
                            <div className="flex justify-center">
                                <img src={facebook} className='w-[30px] h-[30px]'/>
                                <img src={whatsapp} className='w-[30px] h-[30px]'/>
                                <img src={instagram} className='w-[30px] h-[30px]'/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="flex justify-center">
                            <img src={Exco}/>
                        </div>
                        <div className="text-center mt-3">
                            <p className="text-[16px] sm:text-[20px] font-semibold">President</p>
                            <p className="">Olusegun Joshua</p>
                            <div className="flex justify-center">
                                <img src={facebook} className='w-[30px] h-[30px]'/>
                                <img src={whatsapp} className='w-[30px] h-[30px]'/>
                                <img src={instagram} className='w-[30px] h-[30px]'/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="flex justify-center">
                            <img src={Exco}/>
                        </div>
                        <div className="text-center mt-3">
                            <p className="text-[16px] sm:text-[20px] font-semibold">President</p>
                            <p className="">Olusegun Joshua</p>
                            <div className="flex justify-center">
                                <img src={facebook} className='w-[30px] h-[30px]'/>
                                <img src={whatsapp} className='w-[30px] h-[30px]'/>
                                <img src={instagram} className='w-[30px] h-[30px]'/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="flex justify-center">
                            <img src={Exco}/>
                        </div>
                        <div className="text-center mt-3">
                            <p className="text-[16px] sm:text-[20px] font-semibold">President</p>
                            <p className="">Olusegun Joshua</p>
                            <div className="flex justify-center">
                                <img src={facebook} className='w-[30px] h-[30px]'/>
                                <img src={whatsapp} className='w-[30px] h-[30px]'/>
                                <img src={instagram} className='w-[30px] h-[30px]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default About;