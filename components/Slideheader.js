"use client";
import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { TfiWorld } from "react-icons/tfi";
import { FcDocument } from "react-icons/fc";
const Slideheader = () => {
  return (
    <div className=" bg-[url('../public/bg.webp')] bg-cover bg-opacity-8 relative -z-10 h-[55vh] md:h-[50vh] md:flex lg:h-[40vh] xl:h-[40vh]">
      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
      <div className="pt-6 md:pl-3 lg:pt-9 lg:pl-10 xl:pl-[8em]">
        <h2 className=" font-bold text-[28px] text-white pl-4 font-['texgyreadventorbold'] md:text-[42px] md:pt-5  lg:text-[42px] ">
          SKILLED COURSES
        </h2>
        <p className=" w-[80vw] pl-4 text-sm text-white md:w-[50vw] md:text-[16px] lg:text-[16px] lg:w-[40vw] xl:w-[30vw] xl:mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="md:ml-[6em] md:mt-[3em] lg:ml-[14em] xl:ml-[30em]">
        <button className="mt-8">
          <div className="flex md:w-[225px] lg:w-[250px] xl:w-[250px]">
            <div className="bg-[#41B25A] cursor-pointer w-[48vw] h-[12vh] ml-4 flex md:w-[23vw] md:h-[14vh] lg:h-[12vh] xl:h-[12vh] xl:w-[25vw]">
              <div className="flex">
                <TfiWorld className="text-white text-[35px] mt-4 ml-6 md:mt-5 lg:mt-7 xl:mt-6" />
                <p className="w-[20vw] text-white font-bold mt-3 md:w-[13vw] md:mt-4 lg:w-[10vw] lg:mt-5 xl:w-[7vw] xl:mt-4">
                  APPLY ONLINE
                </p>
              </div>
            </div>
            <div className="bg-[#2b803d] h-[12vh] w-[10vw] md:w-[5vw] md:h-[14vh] lg:h-[12vh] xl:h-[12vh] xl:w-[6vw]">
              <LiaGreaterThanSolid className="absolute text-white mt-6 ml-3 md:mt-8 lg:mt-9 xl:ml-4 xl:mt-8" />
            </div>
          </div>
        </button>

        <div className="mt-5 ml-3">
          <button>
            <div className="flex ">
              <FcDocument className="text-[40px]" />
              <p className="mt-3 text-white font-bold text-sm font-['texgyreadventorbold']">
                DOWNLOAD PROSPECTUS
              </p>
            </div>
          </button>
        </div>
      </div>
      <div>{/* <Image src={"/bg.jpg"} width={100} height={100}/> */}</div>
    </div>
  );
};

export default Slideheader;
