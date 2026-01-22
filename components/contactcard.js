import Image from "next/image";
import Link from "next/link";

export default function ContactCard({ contactimg, contactlink }){
    return(
        <div className="dark:bg-white w-[50px] h-[50px] border border-[2px] rounded-[10px] p-[5px]">
            <Link href={ `${contactlink}` } target="blank">
                <Image src={ contactimg } alt="contactimg"/>
            </Link>
        </div>
    );
}