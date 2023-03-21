import Footer from "../../components/website/Footer";
import Navbar from "../../components/website/Navbar";
import cpa1 from '../../assets/images/cpa1.png';
import events from '../../assets/images/events.png'
import { MdOutlineWhatsapp } from "react-icons/md";
import { RxInstagramLogo } from "react-icons/rx";
import { SiLinkedin } from "react-icons/si";

const Departments = ()=>{

    return(
        <>
        {/* <div className="sticky top-0"> */}
        <Navbar/>
        {/* </div> */}
        <div className="h-[450px]" style={{backgroundImage:`url(${cpa1})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div className="bg-[#1D2954] h-full bg-opacity-80 text-white">
                <div className="text-center text-white px-[5px] md:px-[50px] lg:px-[102px]">
                    <p className="text-[24px] md:text-[32px] font-semibold pt-40 md:pt-20">Department</p>
                    <p className="pt-5 md:pt-10 md:w-[80%] lg:w-[70%] m-auto text-[18px] md:text-[24px]">For as the body is one and has many members, but all the members of that one body, being many, are one body, so also is Christ.</p>
                    <p className="text-center">1 Corinthians 12:12</p>
                </div>
            </div>
        </div>
        <div className="py-10 px-[10px] md:px-[50px] lg:px-[102px]">
            <p className="text-[24px] m-auto mt-20 text-center mb-10 md:w-[70%]">
            These are the different department of the body of Christ in the Ibadan Varsity Christian Union (IVCU)
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                    <div className="bg-white rounded-[10px] p-5 mb-5">
                        <p className="text-primary text-[24px] font-semibold mb-2">Children Evangelism Group</p>
                        <p className="text-[14px]"> 
                            The Children Evangelism Group (CEG) is about reaching out to Children in the community of University of Ibadan through Bible clubs gatherings on Saturdays. 
                            In Bible clubs, we teach God's word and pray with the Children through various means.
                            We've seen God come through!
                            We also reach out to Children outside the community of University of Ibadan through Village Outreaches and visits to Orphanages.
                            Children are God's heritage. They are God's arrows!
                        </p>
                        <p className="text-primary mt-2 text-[20px]">Leader:</p>
                        <p className="text-[16px]">Leader's name</p>
                        <p className="text-primary mt-2 text-[20px]">Socials:</p>
                        <div className="flex gap-2">
                            <RxInstagramLogo className="cursor-pointer"/>
                            <MdOutlineWhatsapp className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="bg-white rounded-[10px] p-5 mb-5">
                        <p className="text-primary text-[24px] font-semibold mb-2">Children Evangelism Group</p>
                        <p className="text-[14px]"> 
                            The Abadina Bible Study Fellowship unit of the IVCU is an evangelical unit that caters primarily for the Abadina community in the university of Ibadan.  Reaching out to members of the community with the gospel of Christ, organising bible study sessions for members of the community (children, youth and adults) as well as ministering to the physical needs of members of the community where needed, are some of the activities that ABSF engages in.
                        </p>
                        <p className="text-primary mt-2 text-[20px]">Leader:</p>
                        <p className="text-[16px]">Leader's name</p>
                        <p className="text-primary mt-2 text-[20px]">Socials:</p>
                        <div className="flex gap-2">
                            <RxInstagramLogo className="cursor-pointer"/>
                            <MdOutlineWhatsapp className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="bg-white rounded-[10px] p-5 mb-5">
                        <p className="text-primary text-[24px] font-semibold mb-2">Children Evangelism Group</p>
                        <p className="text-[14px]"> 
                            The Children Evangelism Group (CEG) is about reaching out to Children in the community of University of Ibadan through Bible clubs gatherings on Saturdays. 
                            In Bible clubs, we teach God's word and pray with the Children through various means.
                            We've seen God come through!
                            We also reach out to Children outside the community of University of Ibadan through Village Outreaches and visits to Orphanages.
                            Children are God's heritage. They are God's arrows!
                        </p>
                        <p className="text-primary mt-2 text-[20px]">Leader:</p>
                        <p className="text-[16px]">Leader's name</p>
                        <p className="text-primary mt-2 text-[20px]">Socials:</p>
                        <div className="flex gap-2">
                            <RxInstagramLogo className="cursor-pointer"/>
                            <MdOutlineWhatsapp className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="bg-white rounded-[10px] p-5 mb-5">
                        <p className="text-primary text-[24px] font-semibold mb-2">Children Evangelism Group</p>
                        <p className="text-[14px]"> 
                            The Children Evangelism Group (CEG) is about reaching out to Children in the community of University of Ibadan through Bible clubs gatherings on Saturdays. 
                            In Bible clubs, we teach God's word and pray with the Children through various means.
                            We've seen God come through!
                            We also reach out to Children outside the community of University of Ibadan through Village Outreaches and visits to Orphanages.
                            Children are God's heritage. They are God's arrows!
                        </p>
                        <p className="text-primary mt-2 text-[20px]">Leader:</p>
                        <p className="text-[16px]">Leader's name</p>
                        <p className="text-primary mt-2 text-[20px]">Socials:</p>
                        <div className="flex gap-2">
                            <RxInstagramLogo className="cursor-pointer"/>
                            <MdOutlineWhatsapp className="cursor-pointer"/>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-white rounded-[10px] p-5 mb-5">
                        <p className="text-primary text-[24px] font-semibold mb-2">Children Evangelism Group</p>
                        <p className="text-[14px]"> 
                            The Royal Theatre Family is the Drama Unit of the Ibadan Varsity Christian Union. It is tasked with the responsibility of creating Drama Ministrations, and full-length or short evangelistic playlets.
                        </p>
                        <p className="text-primary mt-2 text-[20px]">Leader:</p>
                        <p className="text-[16px]">Leader's name</p>
                        <p className="text-primary mt-2 text-[20px]">Socials:</p>
                        <div className="flex gap-2">
                            <RxInstagramLogo className="cursor-pointer"/>
                            <MdOutlineWhatsapp className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="bg-white rounded-[10px] p-5 mb-5">
                        <p className="text-primary text-[24px] font-semibold mb-2">Children Evangelism Group</p>
                        <p className="text-[14px]"> 
                            The Abadina Bible Study Fellowship unit of the IVCU is an evangelical unit that caters primarily for the Abadina community in the university of Ibadan.  Reaching out to members of the community with the gospel of Christ, organising bible study sessions for members of the community (children, youth and adults) as well as ministering to the physical needs of members of the community where needed, are some of the activities that ABSF engages in.
                        </p>
                        <p className="text-primary mt-2 text-[20px]">Leader:</p>
                        <p className="text-[16px]">Leader's name</p>
                        <p className="text-primary mt-2 text-[20px]">Socials:</p>
                        <div className="flex gap-2">
                            <RxInstagramLogo className="cursor-pointer"/>
                            <MdOutlineWhatsapp className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="bg-white rounded-[10px] p-5 mb-5">
                        <p className="text-primary text-[24px] font-semibold mb-2">Children Evangelism Group</p>
                        <p className="text-[14px]"> 
                            The Children Evangelism Group (CEG) is about reaching out to Children in the community of University of Ibadan through Bible clubs gatherings on Saturdays. 
                            In Bible clubs, we teach God's word and pray with the Children through various means.
                            We've seen God come through!
                            We also reach out to Children outside the community of University of Ibadan through Village Outreaches and visits to Orphanages.
                            Children are God's heritage. They are God's arrows!
                        </p>
                        <p className="text-primary mt-2 text-[20px]">Leader:</p>
                        <p className="text-[16px]">Leader's name</p>
                        <p className="text-primary mt-2 text-[20px]">Socials:</p>
                        <div className="flex gap-2">
                            <RxInstagramLogo className="cursor-pointer"/>
                            <MdOutlineWhatsapp className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="bg-white rounded-[10px] p-5 mb-5">
                        <p className="text-primary text-[24px] font-semibold mb-2">Children Evangelism Group</p>
                        <p className="text-[14px]"> 
                            The Children Evangelism Group (CEG) is about reaching out to Children in the community of University of Ibadan through Bible clubs gatherings on Saturdays. 
                            In Bible clubs, we teach God's word and pray with the Children through various means.
                            We've seen God come through!
                            We also reach out to Children outside the community of University of Ibadan through Village Outreaches and visits to Orphanages.
                            Children are God's heritage. They are God's arrows!
                        </p>
                        <p className="text-primary mt-2 text-[20px]">Leader:</p>
                        <p className="text-[16px]">Leader's name</p>
                        <p className="text-primary mt-2 text-[20px]">Socials:</p>
                        <div className="flex gap-2">
                            <RxInstagramLogo className="cursor-pointer"/>
                            <MdOutlineWhatsapp className="cursor-pointer"/>
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-2 lg:col-span-1">
                    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-1 sm:gap-5">
                    <div className="bg-white rounded-[10px] p-5 mb-5">
                        <p className="text-primary text-[24px] font-semibold mb-2">Children Evangelism Group</p>
                        <p className="text-[14px]"> 
                            The Children Evangelism Group (CEG) is about reaching out to Children in the community of University of Ibadan through Bible clubs gatherings on Saturdays. 
                            In Bible clubs, we teach God's word and pray with the Children through various means.
                            We've seen God come through!
                            We also reach out to Children outside the community of University of Ibadan through Village Outreaches and visits to Orphanages.
                            Children are God's heritage. They are God's arrows!
                        </p>
                        <p className="text-primary mt-2 text-[20px]">Leader:</p>
                        <p className="text-[16px]">Leader's name</p>
                        <p className="text-primary mt-2 text-[20px]">Socials:</p>
                        <div className="flex gap-2">
                            <RxInstagramLogo className="cursor-pointer"/>
                            <MdOutlineWhatsapp className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="bg-white rounded-[10px] p-5 mb-5">
                        <p className="text-primary text-[24px] font-semibold mb-2">Children Evangelism Group</p>
                        <p className="text-[14px]"> 
                            The Abadina Bible Study Fellowship unit of the IVCU is an evangelical unit that caters primarily for the Abadina community in the university of Ibadan.  Reaching out to members of the community with the gospel of Christ, organising bible study sessions for members of the community (children, youth and adults) as well as ministering to the physical needs of members of the community where needed, are some of the activities that ABSF engages in.
                        </p>
                        <p className="text-primary mt-2 text-[20px]">Leader:</p>
                        <p className="text-[16px]">Leader's name</p>
                        <p className="text-primary mt-2 text-[20px]">Socials:</p>
                        <div className="flex gap-2">
                            <RxInstagramLogo className="cursor-pointer"/>
                            <MdOutlineWhatsapp className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="bg-white rounded-[10px] p-5 mb-5">
                        <p className="text-primary text-[24px] font-semibold mb-2">Children Evangelism Group</p>
                        <p className="text-[14px]"> 
                            The Children Evangelism Group (CEG) is about reaching out to Children in the community of University of Ibadan through Bible clubs gatherings on Saturdays. 
                            In Bible clubs, we teach God's word and pray with the Children through various means.
                            We've seen God come through!
                            We also reach out to Children outside the community of University of Ibadan through Village Outreaches and visits to Orphanages.
                            Children are God's heritage. They are God's arrows!
                        </p>
                        <p className="text-primary mt-2 text-[20px]">Leader:</p>
                        <p className="text-[16px]">Leader's name</p>
                        <p className="text-primary mt-2 text-[20px]">Socials:</p>
                        <div className="flex gap-2">
                            <RxInstagramLogo className="cursor-pointer"/>
                            <MdOutlineWhatsapp className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="bg-white rounded-[10px] p-5 mb-5">
                        <p className="text-primary text-[24px] font-semibold mb-2">Children Evangelism Group</p>
                        <p className="text-[14px]"> 
                            The Children Evangelism Group (CEG) is about reaching out to Children in the community of University of Ibadan through Bible clubs gatherings on Saturdays. 
                            In Bible clubs, we teach God's word and pray with the Children through various means.
                            We've seen God come through!
                            We also reach out to Children outside the community of University of Ibadan through Village Outreaches and visits to Orphanages.
                            Children are God's heritage. They are God's arrows!
                        </p>
                        <p className="text-primary mt-2 text-[20px]">Leader:</p>
                        <p className="text-[16px]">Leader's name</p>
                        <p className="text-primary mt-2 text-[20px]">Socials:</p>
                        <div className="flex gap-2">
                            <RxInstagramLogo className="cursor-pointer"/>
                            <MdOutlineWhatsapp className="cursor-pointer"/>
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

export default Departments;