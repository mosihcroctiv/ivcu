import Footer from "../../../../components/website/Footer";
import Navbar from "../../../../components/website/Navbar";
import cpa1 from '../../../../assets/images/cpa1.png';
import events from '../../../../assets/images/events.png'

const GalleryMore = ()=>{

    return(
        <>
        <Navbar/>
        <div className="h-[450px]" style={{backgroundImage:`url(${cpa1})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div className="bg-[#1D2954] h-full bg-opacity-80 text-white">
                <div className="text-center text-white px-[5px] md:px-[50px] lg:px-[102px]">
                    <p className="text-[18px] sm:text-[20px] font-semibold pt-40">Gallery</p>
                    <p className="text-[32px] sm:text-[40px] font-bold pt-3">Brothers and sisters weekend</p>
                </div>
            </div>
        </div>
        <div className="py-10 px-[5px] md:px-[50px] lg:px-[30px]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex justify-center mb-10">
                    <div>
                        <div className="w-[250px] h-[250px]" style={{backgroundImage:`url(${events})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                            <div className='w-full h-full' style={{background: 'linear-gradient(107.07deg, #EB6464 4.84%, rgba(54, 69, 204, 0.7) 102.07%)'}}>
                                <div className="text-white m-auto pt-20 w-[70%]">
                                    <p className="text-[30px] font-semibold">Sunday Service</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            <a href="linktocloud" className="btn bg-deepBlue">Feb-16-2023</a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-10">
                    <div>
                        <div className="w-[250px] h-[250px]" style={{backgroundImage:`url(${events})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                            <div className='w-full h-full' style={{background: 'linear-gradient(107.07deg, #EB6464 4.84%, rgba(54, 69, 204, 0.7) 102.07%)'}}>
                                <div className="text-white m-auto pt-20 w-[70%]">
                                    <p className="text-[30px] font-semibold">Sunday Service</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            <a href="linktocloud" className="btn bg-deepBlue">Feb-16-2023</a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-10">
                    <div>
                        <div className="w-[250px] h-[250px]" style={{backgroundImage:`url(${events})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                            <div className='w-full h-full' style={{background: 'linear-gradient(107.07deg, #EB6464 4.84%, rgba(54, 69, 204, 0.7) 102.07%)'}}>
                                <div className="text-white m-auto pt-20 w-[70%]">
                                    <p className="text-[30px] font-semibold">Sunday Service</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            <a href="linktocloud" className="btn bg-deepBlue">Feb-16-2023</a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-10">
                    <div>
                        <div className="w-[250px] h-[250px]" style={{backgroundImage:`url(${events})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                            <div className='w-full h-full' style={{background: 'linear-gradient(107.07deg, #EB6464 4.84%, rgba(54, 69, 204, 0.7) 102.07%)'}}>
                                <div className="text-white m-auto pt-20 w-[70%]">
                                    <p className="text-[30px] font-semibold">Sunday Service</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            <a href="linktocloud" className="btn bg-deepBlue">Feb-16-2023</a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-10">
                    <div>
                        <div className="w-[250px] h-[250px]" style={{backgroundImage:`url(${events})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                            <div className='w-full h-full' style={{background: 'linear-gradient(107.07deg, #EB6464 4.84%, rgba(54, 69, 204, 0.7) 102.07%)'}}>
                                <div className="text-white m-auto pt-20 w-[70%]">
                                    <p className="text-[30px] font-semibold">Sunday Service</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            <a href="linktocloud" className="btn bg-deepBlue">Feb-16-2023</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default GalleryMore;