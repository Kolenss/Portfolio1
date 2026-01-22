
import HeaderText from "./headerText"
import CLogo from '../assets/cLogo.png'
import Image from "next/image"

export default function SideBar({handleClose, open}){
    return(
        <div className={`
            md:hidden fixed top-0 left-0 z-50 w-3/5 h-full bg-white dark:bg-black transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}
        `}>
            <div className="h-[100px]  flex flex-row justify-between p-[20px] items-center gap-3 ">
                <Image src={CLogo} alt="C logo" width={50}></Image>
                <a className="text-[25px] font-bold">Collins</a>
                <button onClick={ handleClose }>X</button>
            </div>
            <div className="p-[20px] text-[20px] flex flex-col gap-[50px] ">
                <HeaderText title={"About Me"} target={'about'} onClick={handleClose}/>
                <HeaderText title={"Skills"} target={'skills'} onClick={handleClose}/>
                <HeaderText title={"Project"} target={'projects'} onClick={handleClose}/>
                <HeaderText title={"Contact Me"} target={'contact'} onClick={handleClose}/>
            </div>
            <div className=" h-1/2 flex items-end justify-center"> 
                <a href='/resume.pdf' target='blank' rel='noopener noreferrer' className=" w-full flex justify-center p-[20px]">
                    <button className='w-full cursor-pointer text-white bg-black dark:bg-white dark:text-black text-[20px] py-[8px] px-[25px] rounded-[10px] font-bold'>Resume</button>
                </a>
            </div>
        </div>
    )
}