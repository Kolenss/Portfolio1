import Image from "next/image";


export default function Languagecard({ language, languageimg }){
    return(
        <div className="cursor-pointer w-[150px] h-[160px] flex flex-col justify-center items-center border rounded-[10px] py-[10px] gap-[5px]">
            <div className="h-3/4">
                <Image src={ languageimg } alt={ language } className="" width={ 100 }/>
            </div>
            <div className=" flex-1 w-full text-center font-extrabold ">
                { language }
            </div>
        </div>
    );
}