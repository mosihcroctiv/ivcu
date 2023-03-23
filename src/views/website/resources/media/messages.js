import Footer from "../../../../components/website/Footer";
import Navbar from "../../../../components/website/Navbar";
import cpa1 from '../../../../assets/images/cpa1.png';
import flier1 from '../../../../assets/images/flier3.png'
import flier2 from '../../../../assets/images/flier1.png'
import flier3 from '../../../../assets/images/flier2.png'

const Messages = ()=>{

    return(
        <>
        <Navbar/>
        <div className="h-[450px]" style={{backgroundImage:`url(${cpa1})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div className="bg-[#1D2954] h-full bg-opacity-80 text-white">
                <div className="text-center text-white px-[5px] md:px-[50px] lg:px-[102px]">
                    <p className="text-[24px] md:text-[32px] font-semibold pt-40 md:pt-20">Media-{'Messages'}</p>
                    <p className="pt-5 md:pt-10 md:w-[80%] lg:w-[70%] m-auto text-[18px] md:text-[24px]"></p>
                    <p className="text-center">Sunday service</p>
                </div>
            </div>
        </div>
        <div className="px-[20px] md:px-[50px] lg:px-[102px] py-20">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <a href="/resources/messages/id" className="mb-5 cursor-pointer m-auto">
                    <div className="flex">
                        <div className="w-[200px] h-[200px] z-[100] flier1" style={{backgroundImage:`url(${flier1})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                        </div>
                    </div>
                    <p className="text-center mt-4">11-03-2023</p>
                </a>
                <a href="/resources/messages/id" className="mb-5 cursor-pointer m-auto">
                    <div className="flex">
                        <div className="w-[200px] h-[200px] z-[100] flier1" style={{backgroundImage:`url(${flier1})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                        </div>
                    </div>
                    <p className="text-center mt-4">11-03-2023</p>
                </a>
                <a href="/resources/messages/id" className="mb-5 cursor-pointer m-auto">
                    <div className="flex">
                        <div className="w-[200px] h-[200px] z-[100] flier1" style={{backgroundImage:`url(${flier1})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                        </div>
                    </div>
                    <p className="text-center mt-4">11-03-2023</p>
                </a>
                <a href="/resources/messages/id" className="mb-5 cursor-pointer m-auto">
                    <div className="flex">
                        <div className="w-[200px] h-[200px] z-[100] flier1" style={{backgroundImage:`url(${flier1})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                        </div>
                    </div>
                    <p className="text-center mt-4">11-03-2023</p>
                </a>
                <a href="/resources/messages/id" className="mb-5 cursor-pointer m-auto">
                    <div className="flex">
                        <div className="w-[200px] h-[200px] z-[100] flier1" style={{backgroundImage:`url(${flier1})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                        </div>
                    </div>
                    <p className="text-center mt-4">11-03-2023</p>
                </a>
                <a href="/resources/messages/id" className="mb-5 cursor-pointer m-auto">
                    <div className="flex">
                        <div className="w-[200px] h-[200px] z-[100] flier1" style={{backgroundImage:`url(${flier1})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                        </div>
                    </div>
                    <p className="text-center mt-4">11-03-2023</p>
                </a>
                <a href="/resources/messages/id" className="mb-5 cursor-pointer m-auto">
                    <div className="flex">
                        <div className="w-[200px] h-[200px] z-[100] flier1" style={{backgroundImage:`url(${flier1})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                        </div>
                    </div>
                    <p className="text-center mt-4">11-03-2023</p>
                </a>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Messages;