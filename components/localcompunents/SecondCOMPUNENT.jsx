"use client"
import React from 'react'
import { motion } from 'framer-motion';
import {PiSuitcaseSimpleBold} from "react-icons/pi"
const SecondCOMPUNENT = () => {
  return (
    <div>
      {/* For Md */}
    <motion.div 
    
    initial={{y:-100}}
    className='md:flex justify-center z-50 hidden lg:hidden relative'>

<div className='md:flex gap-1 '>
<div
   
   className="relative lg:w-80  md:w-60 md:h-[200px] shrink-0 overflow-hidden 
    bg-white bg-[url('../public/h11.jpg')] bg-cover -z-10"
 >
                       <div className="absolute inset-0 bg-green-600 opacity-90  -z-10"></div>
                       <div className='text-white z-10 p-9  '>
                         <div className='ml-4'><img src='./apply-online-ico.webp' className='w-[50px] h-[50px]'/>
</div>
                         
                         
                         <h3 className='text-white text-[20px] mt-1 text-bold uppercase'>APPLY ONLINE</h3>
                         <p className='text-[14px]'>Lorem dad daa a2 dd ada </p>
                         
                         
                         </div>


 
 </div>
{/* 2 */}
<div
   
    className="relative lg:w-80  md:w-60 md:h-[200px] shrink-0 overflow-hidden 
     bg-white bg-[url('../public/h11.jpg')] bg-cover -z-10"
  >
                        <div className="absolute inset-0 bg-red-600 opacity-90  -z-10"></div>
                        
                        <div className='text-white z-10 p-6   '>
                          <div className='ml-4'><PiSuitcaseSimpleBold className='w-[50px] h-[67px] text-white'/>
</div>
                          
                          
                          <h3 className='text-white text-[18px] font-bold uppercase ml-4'>Jobs</h3>
                          <p className='text-[14px] ml-4'>Lorem dad daa a2 dd ada </p>
                          
                          
                          </div>


  
  </div>
  {/* 3 */}
  <div
   
    className="relative lg:w-80  md:w-60 md:h-[200px] shrink-0 overflow-hidden 
     bg-white bg-[url('../public/h11.jpg')] bg-cover -z-10"
  >
                        <div className="absolute inset-0 bg-green-600 opacity-90  -z-10"></div>
                        <div className='text-white z-10 p-9 '>
                          <div className='ml-4'><img src='./certification-ico.webp' className='w-[44px] h-[54px]'/>
</div>
                          
                          
                          <h3 className='text-white text-[20px] mt-1 text-bold uppercase'>Certification</h3>
                          <p className='text-[14px]'>Lorem dad daa a2 dd ada </p>
                          
                          
                          </div>


  
  </div>
        </div>
  
    </motion.div>

    {/* For Lg */}
    <motion.div 
    
    initial={{y:-90}}
    className=' justify-center z-50 hidden lg:flex xl:hidden relative'>

<div className='md:flex gap-1 '>
<div
   
   className="relative lg:w-80  shrink-0 overflow-hidden 
    bg-white bg-[url('../public/h11.jpg')] bg-cover -z-10"
 >
                       <div className="absolute inset-0 bg-green-600 opacity-90  -z-10"></div>
                       <div className='text-white z-10 p-9  '>
                         <div className=' flex items-center gap-4'><img src='./apply-online-ico.webp' 
                         className='w-[70px] h-[70px]'/>
                         <h3 className='text-white text-[25px] mt-1 text-bold uppercase'>APPLY ONLINE</h3>

</div>
                         
                         
                         <p className='text-[14px] ml-16'>Lorem Ipsum is simply dummy text of...</p>
                         
                         
                         </div>


 
 </div>
{/* 2 */}
<div
   
    className="relative w-80   shrink-0 overflow-hidden 
     bg-white bg-[url('../public/h11.jpg')] bg-cover -z-10"
  >
                        <div className="absolute inset-0 bg-red-600 opacity-90  -z-10"></div>
                        <div className='text-white z-10 p-9  '>
                          <div className='flex items-center gap-4'>
                          <PiSuitcaseSimpleBold className='w-[80px] h-[80px]'/>
                          <h3 className='text-white text-[30px] text-bold uppercase'>Jobs</h3>

</div>
                          
                          
    
<p className='text-[14px] ml-20'>Lorem Ipsum is simply dummy text of...</p>                          
                          
                          </div>


  
  </div>
  {/* 3 */}
  <div
   
    className="relative lg:w-80  md:w-60 md:h-[200px] shrink-0 overflow-hidden 
     bg-white bg-[url('../public/h11.jpg')] bg-cover -z-10"
  >
                        <div className="absolute inset-0 bg-green-600 opacity-90  -z-10"></div>
                        <div className='text-white z-10 p-9  '>
                         <div className=' flex items-center gap-4'><img src='./certification-ico.webp' 
                         className='w-[80px] h-[80px]'/>
                         <h3 className='text-white text-[25px]  text-bold uppercase'>CERTIFICATION</h3>

</div>
                         
                         
                         <p className='text-[14px] ml-[70px]'>Lorem Ipsum is simply dummy text of...</p>
                         
                         
                         </div>


  
  </div>
        </div>
  
    </motion.div>
    {/* For Xl */}
    <motion.div 
    
    initial={{y:-80}}
    className=' justify-center z-50 hidden xl:flex relative'>

<div className='md:flex gap-1 '>
<div
   
   className="relative w-96 shrink-0 overflow-hidden 
    bg-white bg-[url('../public/h11.jpg')] bg-cover -z-10"
 >
                       <div className="absolute inset-0 bg-green-600 opacity-90  -z-10"></div>
                       <div className='text-white z-10 p-9  '>
                         <div className=' flex items-center gap-4'><img src='./apply-online-ico.webp' 
                         className='w-[90px] h-[90px]'/>
                         <h3 className='text-white text-[25px] mt-1 text-bold uppercase'>APPLY ONLINE</h3>

</div>
                         
                         
                         <p className='text-[14px] ml-[110px]'>Lorem Ipsum is simply dummy text of...</p>
                         
                         
                         </div>



 
 </div>
{/* 2 */}
<div
   
    className="relative w-96 overflow-hidden 
     bg-white bg-[url('../public/h11.jpg')] bg-cover -z-10"
  >
                        <div className="absolute inset-0 bg-red-600 opacity-90  -z-10"></div>
                        <div className='text-white z-10 p-9  '>
                         <div className=' flex items-center gap-4'>
                         <PiSuitcaseSimpleBold className='w-[80px] h-[80px]'/>

                         <h3 className='text-white text-[25px] mt-1 text-bold uppercase'>JOBS</h3>

</div>
                         
                         
                         <p className='text-[14px] ml-[100px]'>Lorem Ipsum is simply dummy text of...</p>
                         
                         
                         </div>

                       

  
  </div>
  {/* 3 */}
  <div
   
    className="relative w-96
     bg-white bg-[url('../public/h11.jpg')] bg-cover -z-10"
  >
                        <div className="absolute inset-0 bg-green-600 opacity-90  -z-10"></div>
                        <div className='text-white z-10 p-9  '>
                         <div className=' flex items-center gap-4'><img src='./certification-ico.webp' 
                         className='w-[60px] h-[80px]'/>
                         <h3 className='text-white text-[25px] mt-1 text-bold uppercase'>CERTIFICATION</h3>

</div>
                         
                         
                         <p className='text-[14px] ml-[90px]'>Lorem Ipsum is simply dummy text of...</p>
                         
                         
                         </div>
                        


  
  </div>
        </div>
  
    </motion.div>
    {/* For Mobile */}
    <motion.div 
    
    initial={{y:-50}}
    className=' justify-center  grid grid-cols-1 md:hidden relative'>

<div className='md:flex gap-1 '>
<div
   
   className="relative  shrink-0 overflow-hidden 
    bg-white bg-[url('../public/h11.jpg')] bg-cover -z-10"
 >
                       <div className="absolute inset-0 bg-green-600 opacity-90  -z-10"></div>
                       <div className='text-white z-10 p-9  '>
                         <div className=' flex items-center gap-4'><img src='./apply-online-ico.webp' 
                         className='w-[90px] h-[90px]'/>
                         <h3 className='text-white text-[30px] mt-1 text-bold uppercase '>APPLY ONLINE</h3>

</div>
                         
                         
                         
                         
                         </div>


 
 </div>
{/* 2 */}
<div
   
    className="relative  overflow-hidden 
     bg-white bg-[url('../public/h11.jpg')] bg-cover -z-10 shadow-2xl"
  >
                        <div className="absolute inset-0 bg-red-600 opacity-95  -z-10"></div>
                        <div className='text-white z-10 p-9  '>
                         <div className=' flex items-center gap-4'><PiSuitcaseSimpleBold
                         className='w-[90px] h-[90px]'/>
                         <h3 className='text-white text-[30px] mt-1 text-bold uppercase'>JOBS</h3>

</div>
                         
                         
                         
                         
                         </div>


  
  </div>
  {/* 3 */}
  <div
   
    className="relative 
     bg-white bg-[url('../public/h11.jpg')] bg-cover -z-10"
  >
                        <div className="absolute inset-0 bg-green-600 opacity-90  -z-10"></div>

                        <div className='text-white z-10 p-9  '>
                         <div className=' flex items-center gap-4'><img src='./certification-ico.webp' 
                         className='w-[80px] h-[90px]'/>
                         <h3 className='text-white text-[30px] mt-1 text-bold uppercase '>Certification</h3>

</div>
                         
                         
                         
                         
                         </div>
                       


  
  </div>
        </div>
  
    </motion.div>
    </div>
    

  
   
);
};


export default SecondCOMPUNENT