import Bold from './boldText'

export default function Experience(){
    return(
        <div className="w-full bg-black text-white flex flex-col justify-center items-center p-[20px] md:py-[50px] md:gap-[40px] text-center"> 
            <div className='text-3xl p-[15px] md:text-[40px]'>
                <Bold boldText={ 'My Experiences' }/>
            </div>
            <div className='w-[280px] md:w-1/2 md:py-[30px] border rounded-[5px] p-[20px] g-6 border-amber-100 text-start text-[25px]'>
                <Bold boldText={'Right Apps Inc.'}/> <br/><br/>
                <a className="text-[20px]"> Worked on frontend UI development using Next.js, focusing on
                                consistent light/dark themes, reusable components, user-friendly input
                                fields, and clear dashboard navigation </a>
            </div>
            </div>
    );
}