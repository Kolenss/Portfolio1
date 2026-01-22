import Image from "next/image";
import cLogo from '../assets/cLogo.png'
import Bold from "./boldText";


export default function Footer(){
    return(
        <footer className="bg-black w-full md:flex md:justify-center">
            <div className="p-[20px] flex flex-col gap-3  md:flex md:flex-row md:w-3/5 md:justify-between md:items-center">
                <div className="text-white text-[25px] flex gap-4 flex-row items-center">
                    <Image src={ cLogo } alt="C Logo" width={50}></Image>
                    <Bold boldText={ 'Chip Collins' } />
                </div>
                <div className="text-white text-[20px] p-[10px]">
                    <a>Developed by Collins Maglasang</a>
                </div>
            </div>
        </footer>
    );
}