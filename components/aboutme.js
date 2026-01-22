import Image from "next/image";
import clipart2 from '../assets/clipart2.jpg'
import Bold from "./boldText";


export default function Aboutme(){
    return(
        <div className=" flex flex-col justify-center items-center p-[15px] gap-[20px] md:flex-row md:w-3/4"> 
            <Image src={ clipart2 } alt="clip art 2" width={ 700 }/>
            <div className=" w-9/10 ">
                <div className="flex flex-row text-[35px] md:text-[60px] items-center justify-center gap-[10px]">                
                    <h1 className=" font-extrabold text-outline-black">About </h1> 
                    <Bold boldText={' Me'}/>
                </div>
                <div className="p-[10px] md:text-[20px] text-zinc-600 dark:text-zinc-300 font-sans">
                <a className="">Hi! I’m Collins Maglasang, a computer engineering student who enjoys creating apps and exploring new technologies. Most of my projects so far have focused on frontend development, and I love building clean, interactive interfaces that are easy for people to use.
                            Recently, through our capstone project, I’ve been learning more about connecting hardware with software — working with Bluetooth devices and moving data between sensors and apps. It’s been exciting to see how the app interacts with real-world devices and how the frontend connects with live data. I enjoy tackling these challenges, experimenting with new technologies, and learning as I go.
                            Outside of coding, I like staying active and exploring hobbies that keep me creative and energized. My goal is to keep growing as a developer, build projects I’m proud of, and keep learning new ways to make apps both functional and user-friendly.</a>
                </div>
                </div>
            </div>
        );
}