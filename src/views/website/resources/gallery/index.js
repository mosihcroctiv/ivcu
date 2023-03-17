import Footer from "../../../../components/website/Footer";
import Navbar from "../../../../components/website/Navbar";
import cpa1 from '../../../../assets/images/cpa1.png';
import events from '../../../../assets/images/events.png'

const Gallery = ()=>{

    return(
        <>
        <Navbar/>
        <div className="h-[450px]" style={{backgroundImage:`url(${cpa1})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div className="bg-[#1D2954] h-full bg-opacity-80 text-white">
                <div className="text-center text-white px-[5px] md:px-[50px] lg:px-[102px]">
                    <p className="text-[24px] md:text-[32px] font-semibold pt-40 md:pt-20">Gallery</p>
                    <p className="pt-5 md:pt-10 md:w-[80%] lg:w-[70%] m-auto text-[18px] md:text-[24px]">Capturing every moment in the presence of God, creating history for those to come. A point of reference to remind those to come about the things God has done.</p>
                </div>
            </div>
        </div>
        <div className="py-10 px-[5px] md:px-[50px] lg:px-[30px]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                <a href="/resources/gallery/more" className="flex justify-center mb-5">
                    <div className="w-[300px] h-[300px]" style={{backgroundImage:`url(${events})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                        <div className='w-full h-full' style={{background: 'linear-gradient(107.07deg, #EB6464 4.84%, rgba(54, 69, 204, 0.7) 102.07%)'}}>
                            <div className="text-white m-auto pt-20 w-[70%]">
                                <p className="text-[40px] font-semibold">Sunday Service</p>
                            </div>
                        </div>
                    </div>
                </a>
                <div className="flex justify-center mb-5">
                    <div className="w-[300px] h-[300px]" style={{backgroundImage:`url(${events})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                        <div className='w-full h-full' style={{background: 'linear-gradient(107.07deg, #EB6464 4.84%, rgba(54, 69, 204, 0.7) 102.07%)'}}>
                            <div className="text-white m-auto pt-20 w-[70%]">
                                <p className="text-[40px] font-semibold">Sunday Service</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-5">
                    <div className="w-[300px] h-[300px]" style={{backgroundImage:`url(${events})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                        <div className='w-full h-full' style={{background: 'linear-gradient(107.07deg, #EB6464 4.84%, rgba(54, 69, 204, 0.7) 102.07%)'}}>
                            <div className="text-white m-auto pt-20 w-[70%]">
                                <p className="text-[40px] font-semibold">Sunday Service</p>
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

export default Gallery;