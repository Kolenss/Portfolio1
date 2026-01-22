import Image from "next/image";

export default function Projectcard({ title, projectimg, projectdesc }){
    return(
        <div className="flex flex-row justify-center shrink-0 md:w-auto gap-[30px] ">
            <div className="shrink-0 items-center justify-center flex">
                <Image src={ projectimg } alt="title" height={400} className="rounded-[10px]"/>
            </div>
            <div className="md:w-1/2 md:px-[20px] md:w-[700px] md:flex md:flex-col md:gap-[40px]">
                <h1 className="text-white font-bold text-[25px] md:text-[40px]">{ title }</h1>
                <a className=" text-zinc-200 md:text-[20px]">{ projectdesc }</a>
            </div>
        </div>
    );
}