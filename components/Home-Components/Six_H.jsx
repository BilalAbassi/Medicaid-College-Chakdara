"use client"
import React,{useState} from 'react';
import CountUp from 'react-countup'; 
import ScrollTrigger from 'react-scroll-trigger';

const Six_H = () => {
  const [counter,setcounter]=useState(false)

  return (
    <div>
      <ScrollTrigger onEnter={()=>setcounter(true)} onExit={()=>{setcounter(false)}}>

    <div  className={` min-h-[50vh] relative bg-[url('../public/why-choose-bg.webp')] bg-cover
    
    -z-10  over overflow-hidden md:min-h-[40vh] xl:min-h-[70vh]`}>
      <div className="absolute inset-0 bg-[#17a43b] opacity-[0.8] -z-10 "></div>

      <div className='py-8 mx-5'>
        <h2 className='text-center text-sm text-gray-50 xl:text-xl'>THE NUMBERS SAY IT ALL  </h2>
        <h2 className=' text-center text-white text-2xl font-[Roboto - 400] xl:text-5xl'>WHY CHOOSE US</h2>
        </div>


<ul className='text-center grid grid-cols-2 md:grid-cols-4 lg:flex  lg:justify-center lg:gap-12


text-[#fff] gap-4 '>

  <li className='border-[#94d3a4] md:border-r flex flex-col justify-center items-center text-md lg:px-6    '>
    
    <div className=''>
<img src='./practical-ico.webp' className='md:w-24'/>


    </div>
    <p className='text-xl md:text-2xl xl:text-4xl font-[Roboto - 400] xl:py-1'>
      {counter && <CountUp start={0} end={36} duration={2} delay={0}/> }
      </p>

    <div className='md:text-lg'>Certified Courses</div>



  </li>
  <li className='border-[#94d3a4] md:border-r flex flex-col justify-center items-center text-md  lg:px-6   '>
    
    <div className=''>
    <img src='./practical-ico.webp' className='md:w-24'/>


    </div>
    <p className='text-xl md:text-2xl xl:text-4xl font-[Roboto - 400] xl:py-1'>
    {counter && <CountUp start={200000} end={220000} duration={2} delay={0}/> }

   
      
      </p>

    <div className='md:text-lg'>Students Enrolled </div>



  </li>
  <li className='border-[#94d3a4] md:border-r flex flex-col justify-center items-center text-md   lg:px-6  '>
    
    <div className=''>
    <img src='./practical-ico.webp' className='md:w-24'/>


    </div>
    <p className='text-xl md:text-2xl xl:text-4xl font-[Roboto - 400] xl:py-1' >
    {counter && <CountUp start={0} end={95} duration={2} delay={0}/> }%



    </p>

    <div className='md:text-lg'>Passing to Universities</div>



  </li>
  <li className='border-[#94d3a4]  flex flex-col justify-center items-center text-md   lg:px-6  '>
    
    <div className=''>
    <img src='./practical-ico.webp' className='md:w-24'/>


    </div>
    <p className='text-xl md:text-2xl xl:text-4xl font-[Roboto - 400] xl:py-1'>
      
    {counter && <CountUp start={0} end={100} duration={2} delay={0}/> }

      
      %</p>

    <div className='md:text-lg'>Satisfied Parents</div>



  </li>
  
  
</ul>
      



 
 







</div>

</ScrollTrigger>
    </div>
  )
}

export default Six_H