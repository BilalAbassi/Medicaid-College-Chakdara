"use client"

import Link from 'next/link'
import React,{useState} from 'react'
import {BiSolidToggleRight} from "react-icons/bi"

const Footer = () => {
  const [open,setopen]=useState(true)
  const [open2,setopen2]=useState(true)
  const [open3,setopen3]=useState(true)


  return (
    <div className=' md:min-h-[50vh] lg:min=h=[55vh] bg-[#234A66] pb-8 md:pb-0 font-[Roboto] font-normal '>
    <div className='   md:flex  lg:gap-8 lg:block '>
{/* First Main */}
<div className='md:flex lg:grid lg:grid-cols-4 '>
  {/* 1 */}
  <div className=' border-b md:border-none pb-4 md:pb-0 border-blue-400  '>
<h3 className='flex items-center justify-between text-white p-2 px-8 md:px-4 pt-10   '>
  <p className='text-[20px] xl:text-[16] font-bold'>About US</p> 

  <BiSolidToggleRight className='inline md:hidden' onClick={()=>{setopen(!open)}}/>



</h3>
<div >
  <ul className={`text-[#8eb6d6] px-8 md:px-4 ${open ? "block":"hidden"}  `}>
    
      <Link href="/"> <li className='md:mb-1 md:text-[12px]  xl:text-[14px]'> Edumart Group of Institutions</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[12px]  xl:text-[14px]'> Our Institutes and Universities</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[12px]  xl:text-[14px]'> Management Team</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[12px]  xl:text-[14px]'> Approval and Recognition</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[12px]  xl:text-[14px]'> Evaluation & Assessments</li></Link>

    

  </ul>
</div>


  </div>
  {/* 2 */}
  <div className=' border-b md:border-none pb-4 md:pb-0 border-blue-400 md:pl-4 '>
<h3 className='flex items-center justify-between text-white p-2 px-8 md:px-0 pt-10   '>
  <p className='text-[20px] font-bold xl:text-[16px]'>COURSES</p> 
  <BiSolidToggleRight className='inline md:hidden' onClick={()=>{setopen2(!open2)}}/>

</h3>
<div >
  <ul className={`text-[#8eb6d6] px-8 md:px-0 ${open2 ? "block":"hidden"}  `}>
    
      <Link href="/"> <li className='md:mb-1 md:text-[12px]  xl:text-[14px]'> Health And Technology</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[12px]  xl:text-[14px]'> BS Emergency</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[12px]  xl:text-[14px]'> Pathlogy</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[12px]  xl:text-[14px]'> Faculty of Science</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[12px]  xl:text-[14px]'> DIT</li></Link>

    

  </ul>
</div>


  </div>
  {/* 3 */}
  <div className=' border-b md:border-none pb-4 md:pb-0 border-blue-400 md:pl-2  '>
<h3 className='flex items-center justify-between text-white p-2 px-8 md:px-0 pt-10   '>
  <p className='text-[20px] xl:text-[16px] font-bold uppercase'> WHY Medicaid College <br/>
Chakdara</p> 
<BiSolidToggleRight className='inline md:hidden' onClick={()=>{setopen3(!open3)}}/>

</h3>
<div >
  <ul className={`text-[#8eb6d6] px-8 md:px-0 ${open3 ? "block":"hidden"}  `} >
    
      <Link href="/"> <li className='md:mb-1 md:text-[12px] xl:text-[14px]'> Edumart Group of Institutions</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[12px]  xl:text-[14px]'> Our Institutes and Universities</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[12px]  xl:text-[14px]'> Management Team</li></Link>


    

  </ul>
</div>


  </div>
  {/* 4 */}
 
 
 {/* First End */}
  <div className='pt-4  md:pt-8 xl:pt-6 lg:pt-3  px-6  md:px-0  text-[#8eb6d6]  lg:mr-10'>
   
      <img src='./Logo.jpeg' className='md:w-14 md:h-14 w-20 h-20 md:mb-2 rounded-full  xl:mb-2  lg:mt-2 xl:mt-0'/>
      
      
    
<div><span className='text-white text-bold md:text-[15px] text-[20px] xl:text-[24px]'>Medicaid College Chakdara</span>
 <p className='md:text-[15px] '>All rights reserved © 2022</p> </div>
<ul className='flex pt-2 text-xs gap-4 md:gap-1 xl:gap-4'>
  <Link href='/'><li className='md:text-[10px] lg:text-[9px]  xl:text-[10px]'>TERMS OF USE </li> </Link>
  <Link href='/'><li className='md:text-[10px] lg:text-[9px] xl:text-[10px]'>PRIVACY POLICY </li></Link>
  <Link href='/'><li className='md:text-[10px] lg:text-[9px] xl:text-[10px] md:mr-4'>GENERIC</li> </Link>


</ul>


  </div>
</div>


      
    </div>
    </div>
  )
}

export default Footer