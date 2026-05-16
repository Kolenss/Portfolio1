import Bold from "./boldText";



export default function Info(){
    return(
        <div className="flex flex-col items-start justify-center text-[25px] lg:text-4xl leading-6 md:gap-[30px]"> 
          <div className="gap-[5px] p-[5px] leading-normal min-w-auto">
            <a className="font-sans flex-wrap: wrap"> Hello I am </a> { <Bold boldText={' Chip Collins.'}/> } 
          </div>
          <div className="leading-normal">
            { <Bold boldText={'Fullstack'}/> } <a className="font-extrabold text-outline-black"> Developer</a>
          </div>
          <div className="leading-normal">
            <a className="font-sans">Based in </a>  { <Bold boldText={'Philippines.'}/> }
          </div>
        </div>
    );
}