
import Image from 'next/image';
import c from '../assets/c.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import cp from '../assets/c++.png'
import nextjs from '../assets/next-js.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import ts from '../assets/typescript.png'

import Languagecard from '@/components/languageCard'


export default function Languages(){
    return(
        <div className='flex flex-col justify-center items-center gap-[20px]'>
            <h1 className='text-[50px] font-extrabold'>My Skills</h1>
            <div className='w-full grid grid-cols-2 md:grid-cols-5 md:gap-[50px] md:gap-x-[90px] justify-items-center px-[25px] gap-6'>
                <Languagecard language={ 'HTML' } languageimg={ html }/>
                <Languagecard language={ 'CSS' } languageimg={ css }/>
                <Languagecard language={ 'Javascript' } languageimg={ js }/>
                <Languagecard language={ 'C' } languageimg={ c }/>
                <Languagecard language={ 'C++' } languageimg={ cp }/>
                <Languagecard language={ 'Next.js' } languageimg={ nextjs }/>
                <Languagecard language={ 'Tailwind Css' } languageimg={ tailwind }/>
                <Languagecard language={ 'React' } languageimg={ react }/>
                <Languagecard language={ 'Typescript' } languageimg={ ts }/>
            </div>
        </div>
    );
}