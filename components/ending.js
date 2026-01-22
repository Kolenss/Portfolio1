import Image from "next/image";
import Bold from "./boldText";
import Link from "next/link";

export default function Ending(){
    return(
        <div className="flex flex-col h-auto p-[15px] py-[25px] gap-[40px] md:justify-center">
            <div className="text-[35px] md:text-[45px]">
                <Bold boldText={`Let's `}/>
                <a className="font-extrabold text-outline-black">Talk</a>
                <Bold boldText={' For Something Special'}/>
            </div>
            <div>
                <a className="text-zinc-400 dark:text-zinc-300 text-[20px]">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</a>
            </div>
            <div className="font-extrabold text-[20px]">
                <Link href={ 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQnfPvwHRWhRhvNxvKkJdTTmsMhWSXWMrjfhFBrmMVhpzjhqKjRxWRdPmcFCPGJtXgGrZB' } target="blank">collinsgt12374@gmail.com</Link><br/>
                <a>09398975547</a>
            </div>
        </div>
    );
}