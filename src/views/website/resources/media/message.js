import Footer from "../../../../components/website/Footer";
import Navbar from "../../../../components/website/Navbar";
import cpa1 from '../../../../assets/images/cpa1.png';
import flier1 from '../../../../assets/images/flier3.png'
import flier2 from '../../../../assets/images/flier1.png'
import flier3 from '../../../../assets/images/flier2.png'

const Message = ()=>{

    return(
        <>
        <Navbar/>
        <div className="px-[20px] md:px-[50px] lg:px-[102px] py-20">
            <div className="grid md:grid-cols-2">
                <div className="w-[300px] h-[300px] m-auto" style={{backgroundImage:`url(${flier1})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                </div>
                <div className="mt-5 md:mt-0">
                    <p className="text-[32px] font-semibold text-center md:text-left">Summary</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Non libero urna aliquam eget sit habitasse ligula. Molestie purus malesuada ullamcorper interdum elit. Nec malesuada sit scelerisque tristique mauris dolor in. A elit congue cursus tellus. Tincidunt leo mauris molestie suspendisse. At donec risus sit enim dui sit lectus nunc blandit. Faucibus sem eu metus ipsum sed. Libero morbi mattis a ac. Venenatis nunc commodo eros morbi pellentesque fermentum est arcu turpis.
                    </p>
                    <button className="btn bg-secondary mt-3">
                        Download
                    </button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Message;