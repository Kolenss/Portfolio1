import Image from "next/image";
import barong from '../assets/barong.png'
import formal from '../assets/formal.png'
import Bold from "./boldText";


export default function Aboutme(){
    return(
        <div className=" flex flex-col justify-center items-center p-[15px] gap-[20px] md:flex-row md:w-3/4"> 
            <div className="rounded-3xl overflow-hidden p-4 bg-gray-100 dark:bg-gray-800">
                <Image src={ formal } alt="formal photo" width={ 700 } className="rounded-2xl"/>
            </div>
            <div className=" w-9/10 ">
                <div className="flex flex-row text-[35px] md:text-[60px] items-center justify-center gap-[10px]">                
                    <h1 className=" font-extrabold text-outline-black">About </h1> 
                    <Bold boldText={' Me'}/>
                </div>
                <div className="p-[10px] md:text-[20px] text-zinc-600 dark:text-zinc-300 font-sans">
                <a className="">Hi! I’m Collins Maglasang, a Computer Engineering graduate who enjoys creating apps and exploring new technologies. Most of my projects and experience so far have focused on frontend development, and I enjoy building clean, interactive interfaces that are easy for people to use.
                    <br></br><br></br>
                        Through my capstone project and internships, I gained experience connecting hardware with software — working with Bluetooth devices, sensors, and real-time data integration between applications and embedded systems. I also completed internships in web development and AI engineering, where I worked with modern development tools and software technologies. I enjoy tackling technical challenges, experimenting with new technologies, and continuously learning as I build projects.
                    <br></br><br></br>
                        Outside of coding, I like staying active and exploring hobbies that keep me creative and energized. My goal is to continue growing as a software developer and AI engineer, build projects I’m proud of, and create applications that are both functional and user-friendly.

                    </a>
                </div>
                </div>
            </div>
        );
}