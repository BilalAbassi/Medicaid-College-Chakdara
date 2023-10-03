import React from "react";
import { BsPlayFill } from "react-icons/bs";
const HowToApply = () => {
  return (
    <section className="HowToApply text-black">
      {/* Title Container */}
      <div className="TITLE text-[#2A4356] text-center py-10">
        <p className=" font-extralight text-sm md:font-light lg:font-extralight xl:text-base">
          THERE ARE MANY WAYS TO LEARN{" "}
        </p>
        <h1 className=" text-2xl font-bold md:text-3xl lg:text-4xl">
          HOW TO APPLY
        </h1>
      </div>
      {/* Icons Main Container */}
      <div className="ICONS space-y-8 md:flex md:space-y-0 xl:justify-center xl:space-x-10">
        {/* Icon 1 Container */}
        <div className="ICON-1 flex flex-col justify-center items-center space-y-5 ">
          <div className="relative bg-[#41B25A] hover:bg-red-500 transition ease-in duration-300 py-10 px-10 rounded-full w-fit">
            <img className=" w-14 h-14" src="./regis.webp" alt="" />
            <span className=" py-1 px-[10px] rounded-full absolute top-1 right-1 bg-[#2C97EA] text-sm text-white font-bold md:after:content-[''] md:after:flex md:after:bg-[url('../public/line-bottom.webp')] md:after:absolute md:after:top-5 md:after:left-6 md:after:bg-no-repeat md:after:h-40 md:after:w-96 xl:after:w-96">
              1
            </span>
          </div>
          <div className="Icon-TEXT text-center space-y-3">
            <h1 className=" text-lg font-bold">REGISTRATION</h1>
            <p className="  text-center text-sm text-gray-400 xl:w-[290px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        {/* Icon 2 Container */}
        <div className="ICON-1 flex flex-col justify-center items-center space-y-5">
          <div className="relative bg-red-500 hover:bg-[#41B25A] transition ease-in duration-300 py-10 px-10 rounded-full w-fit">
            <img className=" w-14 h-14" src="./get-start-ico.webp" alt="" />
            <span className=" py-1 px-[10px] rounded-full absolute top-1 right-1 bg-[#2C97EA] text-sm text-white font-bold md:after:content-[''] md:after:flex md:after:bg-[url('../public/line.webp')] md:after:absolute md:after:-top-5 md:after:left-7 md:after:bg-no-repeat md:after:h-40 md:after:w-96">
              2
            </span>
          </div>
          <div className="Icon-TEXT text-center space-y-3">
            <h1 className=" text-lg font-bold">DOCUMENTATION</h1>
            <p className="  text-center text-sm text-gray-400 xl:w-[290px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        {/* Icon 3 Container */}
        <div className="ICON-1 flex flex-col justify-center items-center space-y-5">
          <div className="relative bg-[#41B25A] hover:bg-red-500 transition ease-in duration-300 py-10 px-10 rounded-full w-fit">
            <img className=" w-14 h-14" src="./doc-ico.webp" alt="" />
            <span className=" py-1 px-[10px] rounded-full absolute top-1 right-1 bg-[#2C97EA] text-sm text-white font-bold">
              3
            </span>
          </div>
          <div className="Icon-TEXT text-center space-y-3">
            <h1 className=" text-lg font-bold">GET STARTED NOW</h1>
            <p className="  text-center text-sm text-gray-400 xl:w-[290px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
      </div>
      {/* Button Container */}
      <div className="BUTTON flex space-x-5 items-center justify-center pt-20">
        <hr className=" border-[1px] border-solid text-gray-600 w-1/4 md:w-1/3" />
        <div className="flex px-2 py-3 md:px-4 rounded-md cursor-pointer bg-[#41B25A] hover:bg-red-500 transition ease-in duration-300 gap-3 justify-center">
          <button className=" text-xs md:text-sm text-white font-bold ">
            APPLY NOW
          </button>
          <div>
            <BsPlayFill className=" text-lg text-[#FF9600] px-1 py-1 bg-gray-300 rounded-full flex items-center" />
          </div>
        </div>
        <hr className=" border-[1px] border-solid text-gray-600 w-1/4 md:w-1/3" />
      </div>
    </section>
  );
};

export default HowToApply;
