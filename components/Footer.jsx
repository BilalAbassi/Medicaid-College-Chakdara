import Link from 'next/link'
import React from 'react'
import {BiSolidToggleRight} from "react-icons/bi"

const Footer = () => {
  return (
    <div className='min-h-[30vh]  bg-[#234A66] pb-8 md:pb-0 '>
    <div className='   md:flex  lg:gap-8 lg:block '>
{/* First Main */}
<div className='md:flex lg:grid lg:grid-cols-4 '>
  {/* 1 */}
  <div className=' border-b md:border-none pb-4 md:pb-0 border-blue-400  '>
<h3 className='flex items-center justify-between text-white p-2 px-8 md:px-4 pt-10   '>
  <p className='text-[20px] xl:text-[24px] font-bold'>About US</p> 
  <BiSolidToggleRight className='inline md:hidden'/>


</h3>
<div >
  <ul className='text-[#8eb6d6] px-8 md:px-4  '>
    
      <Link href="/"> <li className='md:mb-1 md:text-[14px]  xl:text-[18px]'> Edumart Group of Institutions</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[14px]  xl:text-[18px]'> Our Institutes and Universities</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[14px]  xl:text-[18px]'> Management Team</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[14px]  xl:text-[18px]'> Approval and Recognition</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[14px]  xl:text-[18px]'> Evaluation & Assessments</li></Link>

    

  </ul>
</div>


  </div>
  {/* 2 */}
  <div className=' border-b md:border-none pb-4 md:pb-0 border-blue-400 md:pl-4 '>
<h3 className='flex items-center justify-between text-white p-2 px-8 md:px-0 pt-10   '>
  <p className='text-[20px] font-bold xl:text-[24px]'>COURSES</p> 
  <BiSolidToggleRight className='inline md:hidden'/>


</h3>
<div >
  <ul className='text-[#8eb6d6] px-8 md:px-0 '>
    
      <Link href="/"> <li className='md:mb-1 md:text-[14px]  xl:text-[18px]'> Health And Technology</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[14px]  xl:text-[18px]'> BS Emergency</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[14px]  xl:text-[18px]'> Pathlogy</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[14px]  xl:text-[18px]'> Faculty of Science</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[14px]  xl:text-[18px]'> DIT</li></Link>

    

  </ul>
</div>


  </div>
  {/* 3 */}
  <div className=' border-b md:border-none pb-4 md:pb-0 border-blue-400 md:pl-2  '>
<h3 className='flex items-center justify-between text-white p-2 px-8 md:px-0 pt-10   '>
  <p className='text-[20px] xl:text-[24px] font-bold'>About US</p> 
  <BiSolidToggleRight className='inline md:hidden'/>


</h3>
<div >
  <ul className='text-[#8eb6d6] px-8 md:px-0  '>
    
      <Link href="/"> <li className='md:mb-1 md:text-[14px] xl:text-[18px]'> Edumart Group of Institutions</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[14px]  xl:text-[18px]'> Our Institutes and Universities</li></Link>
      <Link href="/"> <li className='md:mb-1 md:text-[14px]  xl:text-[18px]'> Management Team</li></Link>


    

  </ul>
</div>


  </div>
  {/* 4 */}
 
 
 {/* First End */}
  <div className='pt-4  md:pt-8 xl:pt-6 lg:pt-3  px-6  md:px-0  text-[#8eb6d6]  lg:mr-10'>
   
      <img src='./Logo.jpeg' className='md:w-14 md:h-14 w-20 h-20 md:mb-2 rounded-full xl:ml-16 xl:mb-2 md:ml-10'/>
      
      
    
<div><span className='text-white text-bold md:text-[15px] text-[20px] xl:text-[24px]'>Medicaid College Chakdara</span>
 <p className='md:text-[15px] '>All rights reserved © 2022</p> </div>
<ul className='flex pt-2 text-xs gap-4 md:gap-1'>
  <Link href='/'><li className='md:text-[10px] lg:text-[15px] xl:text-[12px]'>TERMS OF USE </li> </Link>
  <Link href='/'><li className='md:text-[10px] lg:text-[15px] xl:text-[12px]'>PRIVACY POLICY </li></Link>
  <Link href='/'><li className='md:text-[10px] lg:text-[15px] xl:text-[12px] md:mr-4'>GENERIC</li> </Link>


</ul>


  </div>
</div>

{/* End  */}
{/* <div className=' md:pt-10 md:px-0 md:mr-8   text-[#8eb6d6] md:block hidden lg:hidden'>
<img src='./Logo.jpeg' className=' md:w-12 md:h-12 rounded-full'/>
<div><span className='text-white text-bold'>Medicaid College Chakdara</span> <p>All rights reserved © 2022</p> </div>


<ul className='flex pt-2 c text-xs gap-4 md:gap-1 '>
  <Link href='/'><li className='md:text-[10px] lg:text-[10px] hover:text-red-600 '>TERMS OF USE </li> </Link>
  <Link href='/'><li className='md:text-[10px]'>PRIVACY POLICY </li></Link>
  <Link href='/'><li className='md:text-[10px] md:mr-4'>GENERIC</li> </Link>


</ul>


  </div> */}
      
    </div>
    </div>
  )
}

export default Footer