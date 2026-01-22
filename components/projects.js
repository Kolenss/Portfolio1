import Projectcard from '@/components/projectcard'
import { projects } from "../assets/descriptions.js";


export default function Projects(){
    return(
        <div className="flex flex-col justify-center items-center py-[30px] p-[15px] gap-[20px] w-full md:w-full bg-black md:py-[50px]">    
            <h1 className="font-extrabold text-white text-[35px] md:text-[50px]">My Projects</h1> 
            {projects.map((proj, index) => (
                <Projectcard 
                    key={index}
                    title={proj.title}
                    projectimg={proj.image}
                    projectdesc={proj.description}
                />
            ))}
            
        </div>
        );
}