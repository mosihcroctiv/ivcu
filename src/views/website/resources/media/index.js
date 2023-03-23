import Footer from "../../../../components/website/Footer";
import Navbar from "../../../../components/website/Navbar";
import cpa1 from '../../../../assets/images/cpa1.png';
import flier1 from '../../../../assets/images/flier3.png'
import flier2 from '../../../../assets/images/flier1.png'
import flier3 from '../../../../assets/images/flier2.png'

const Media = ()=>{

    return(
        <>
        <Navbar/>
        <div className="h-[450px]" style={{backgroundImage:`url(${cpa1})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div className="bg-[#1D2954] h-full bg-opacity-80 text-white">
                <div className="text-center text-white px-[5px] md:px-[50px] lg:px-[102px]">
                    <p className="text-[24px] md:text-[32px] font-semibold pt-40 md:pt-20">Media</p>
                    <p className="pt-5 md:pt-10 md:w-[80%] lg:w-[70%] m-auto text-[18px] md:text-[24px]">This Book of the Law shall not depart from your mouth, but you shall read [and meditate on] it day and night, so that you may be careful to do [everything] in accordance with all that is written in it; for then you will make your way prosperous, and then you will be successful.</p>
                    <p className="text-center">Joshua 1 : 8</p>
                </div>
            </div>
        </div>
        <div className="px-[20px] md:px-[50px] lg:px-[102px] py-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                <a href="/resources/messages/more" className="media mb-5 cursor-pointer m-auto">
                    <div className="flex">
                        <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] md:ml-[50px] z-[100] flier1" style={{backgroundImage:`url(${flier1})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                        </div>
                        <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] ml-[-230px] md:ml-[-270px] z-[90] flier2" style={{backgroundImage:`url(${flier2})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                        </div>
                        <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] ml-[-230px] md:ml-[-270px] z-[80] flier3" style={{backgroundImage:`url(${flier3})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                        </div>
                    </div>
                    <p className="text-center mt-4">Sunday Service</p>
                </a>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Media;