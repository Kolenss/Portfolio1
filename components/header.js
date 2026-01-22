
import HeaderText from './headerText'
import cLogo from '../assets/cLogo.png'
import Image from 'next/image'
import { useState } from 'react'
 
export default function Header({setOpen}) {
  return (
    <div className="bg-white dark:bg-black fixed grid grid-cols-2 md:h-[80px] md:flex-row md:flex justify-between items-center w-full px-[25px] py-[10px] md:justify-center md:gap-[150px]">
      <div className='flex flex-row items-center gap-[10px] md:text-[30px] cursor-pointer'>
          <Image src={ cLogo } alt='Logo' className='w-[40px]'/>
          <a className='font-extrabold ' href='#top'>Personal</a>
      </div>
      <div className='hidden md:flex flex-row w-1/3 justify-between'>
        <HeaderText title={"About Me"} target={'about'}/>
        <HeaderText title={"Skills"} target={'skills'}/>
        <HeaderText title={"Project"} target={'projects'}/>
        <HeaderText title={"Contact Me"} target={'contact'}/>
      </div>
      <div className='md:hidden text-2xl flex justify-end'>
        <button onClick={ setOpen }>☰</button>
      </div>
      <div className='hidden justify-end md:flex'>
        <a href='/resume.pdf' target='blank' rel='noopener noreferrer'>
          <button className='cursor-pointer border text-white bg-black text-[20px] py-[8px] px-[25px] rounded-[10px] font-bold'>Resume</button>
        </a>
      </div>
      
    </div>
  )
}