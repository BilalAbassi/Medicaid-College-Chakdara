"use client"
import React from 'react'
import { useState } from "react";




import {IoIosArrowDown} from "react-icons/io"
import {BsSearch} from "react-icons/bs"

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);


  return (
    <nav className='bg-[#17A43B] hidden md:flex '>
      <ul className='text-white font-bold flex h-auto align-baseline md:text-sm lg:gap-6 xl:mx-12 '>

        <li className='border-r p-3 lg:p-4 lg:ml-8 lg:py-4 lg:px-3  xl:p-5 lg:text-[15px]'>HOME</li>

        <li  className='border-r p-3 lg:py-4 lg:px-3  xl:p-5  lg:text-[15px]'>ABOUT</li>
        <li  className='border-r p-3 lg:py-4 lg:px-3  xl:p-5  lg:text-[15px]'>

          {/*start*/} <div onMouseLeave={() => setOpen(false)} className="relative">
         <button
          onMouseOver={() => setOpen(true)}
           className="flex "
         >
           <span className="   flex items-center ">ACADEMICS <IoIosArrowDown/></span>
         </button>
         <ul
           className={`absolute right-0 w-44 py-2 pt-8 transition delay-300 left-4 shadow-2xl items-center text-black z-50 bg-white ${
             open ? "block" : "hidden"
           }`}
         >
          
           <li className="flex w-full items-center px-2 py-2 text-sm  transition ease-in-out delay-150 focus:text-red-600 cursor-pointer
            hover:bg-green-600 border-b  hover:text-white">
             Health Technology 
           </li>
           <li className="flex w-full items-center px-2 py-2 text-sm  transition ease-in-out delay-150  hover:bg-green-600 border-b hover:text-white">
             BS Emergency
           </li>
           <li className="flex w-full items-center px-2 py-2 text-sm  transition ease-in-out delay-150  hover:bg-green-600 border-b  hover:text-white">
             Faculty of Science
           </li>
           <li className="flex w-full items-center px-2 py-2 text-sm  transition ease-in-out delay-150  hover:bg-green-600 border-b hover:text-white">
             Pathology
           </li>
           <li className="flex w-full items-center px-2 py-2 text-sm  transition ease-in-out delay-150  hover:bg-green-600 border-b  hover:text-white">
             DIT
           </li>
         </ul>
       </div>
    

 {/*End*/}

          
          
          
          
           </li>
        <li  className='border-r p-3 lg:py-4 lg:px-3  xl:p-5  lg:text-[15px]'>GALLERY</li>
        <li  className='border-r p-3 lg:py-4 lg:px-3  xl:p-5  lg:text-[15px]'>
          

 <div onMouseLeave={() => setOpen1(false)} className="relative">
         <button           onMouseOver={() => setOpen1(true)}
          className="flex "
        >
          <span className="  flex items-center ">PAGES <IoIosArrowDown/></span>
        </button>
        <ul
          className={`absolute right-0 w-36 py-2 pt-4 left-1 shadow-xl items-center z-50 text-black bg-white ${
            open1 ? "block" : "hidden"
          }`}
        >
          <li className="flex w-full items-center px-6 py-2 text-sm  transition ease-in-out delay-150  hover:bg-green-600  hover:text-white">
            Latest News
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  transition ease-in-out delay-150  hover:bg-green-600  hover:text-white">
            Blog
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  transition ease-in-out delay-150  hover:bg-green-600  hover:text-white">
            Blog Details
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  transition ease-in-out delay-150  hover:bg-green-600  hover:text-white">
            Testimonials
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  transition ease-in-out delay-150  hover:bg-green-600  hover:text-white">
            Private Policy
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  transition ease-in-out delay-150  hover:bg-green-600  hover:text-white">
            Terms of use
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  transition ease-in-out delay-150  hover:bg-green-600  hover:text-white">
            generic Ui
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  transition ease-in-out delay-150  hover:bg-green-600  hover:text-white">
            FAQ
          </li>
         
        </ul>
      </div>
          
          
          
          
          </li>
        <li className='p-3 lg:py-4 lg:px-2 xl:p-5  lg:text-[15px] '>CONTACT</li>

        <div className='bg-green-500 flex  items-center  lg:px-8 p-2 text-white text-sm'>
 <input placeholder='SEARCH NOW' className='bg-green-500 lg:p-3 lg:px-10 p-2 text-left  border-b  font-normal text-white  w-full 

  outline-none '/>
 <BsSearch size={23} className='lg:mb-1 inline '/>

 </div>
   
</ul>

    </nav>
  )
}

export default Navbar








