import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { TfiWorld } from "react-icons/tfi";
import { FcDocument } from "react-icons/fc";

const page = () => {
  return (
    <div>
      <div className=" bg-[url('../public/bg.webp')] bg-cover bg-opacity-8 relative -z-10 h-[55vh] md:h-[50vh] md:flex lg:h-[52vh] xl:h-[45vh]">
        <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
        <div className="pt-6 md:pl-3 lg:pt-9 lg:pl-10 xl:pl-[6em]">
          <h2 className=" font-bold text-[28px] text-white pl-4 font-['texgyreadventorbold'] md:text-[42px] md:pt-5  lg:text-[42px] ">
            CONTACT US
          </h2>
          <p className=" pl-4 pr-2 text-[14px] text-white md:w-[60vw] md:text-[16px] lg:text-[16px] lg:w-[42vw] xl:w-[32vw] xl:mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="md:ml-[1.5em] md:mt-[3em] lg:ml-[14em] xl:ml-[27em]">
          <button className="mt-8 w-[270px] lg:h-[12vh]">
            <div className="flex md:w-[225px] lg:w-[250px] xl:w-[270px]">
              <div className="bg-[#56d348] w-[55vw] h-[12vh] ml-4 flex md:w-[23vw] md:h-[14vh] xl:h-[12vh] xl:w-[25vw]">
                <div className="flex">
                  <TfiWorld className="text-white text-[35px] mt-4 ml-6 md:mt-5 lg:mt-6 xl:mt-6" />
                  <p className="w-[36px] text-white font-bold mt-3 pl-8 md:w-[13vw] md:mt-4 md:pl-0 lg:w-[10vw] lg:mt-4 xl:w-[7vw] xl:mt-4">
                    APPLY ONLINE
                  </p>
                </div>
              </div>
              <div className="bg-[#2d741f] h-[12vh] w-[12.5vw] md:w-[5vw] md:h-[14vh]  xl:h-[12vh] xl:w-[6vw]">
                <LiaGreaterThanSolid className="absolute text-white mt-6 ml-4 md:ml-3 md:mt-8 lg:mt-8 xl:ml-4 xl:mt-8" />
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="lg:ml-3 xl:p-[3em] xl:pr-0 xl:pl-[4em] xl:pb-0">
        <div className="md:flex">
          <div className="m-3">
            <input
              type="text"
              placeholder="FIRST NAME"
              className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] placeholder-black border-b-[1px] md:w-[45vw] md:m-4 md:mr-0 xl:w-[40vw]"
            />
          </div>
          <div className="m-3">
            <input
              type="text"
              placeholder="LAST NAME"
              className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] placeholder-black border-b-[1px] md:w-[45vw] md:m-4 md:mr-0 md:ml-0 xl:w-[42vw]"
            />
          </div>
        </div>
        <div className="md:flex ">
          <div className="m-3 md:mt-0">
            <input
              type="text"
              placeholder="COMPANY"
              className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] placeholder-black border-b-[1px] md:w-[45vw] md:m-4 md:mr-0 xl:w-[40vw]"
            />
          </div>
          <div className="m-3 md:mt-0">
            <input
              type="text"
              placeholder="PHONE NUMBER"
              className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] placeholder-black border-b-[1px] md:w-[45vw] md:m-4 md:mr-0 md:ml-0 xl:w-[42vw]"
            />
          </div>
        </div>
        <div className="md:flex">
          <div className="m-3 md:mt-0">
            <input
              type="text"
              placeholder="BUISNESS EMAIL"
              className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] placeholder-black border-b-[1px] md:w-[45vw] md:m-4 md:mr-0 xl:w-[40vw]"
            />
          </div>
          <div className="m-3 md:mt-0">
            <input
              type="text"
              placeholder="JOB TITLE"
              className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] placeholder-black border-b-[1px] md:w-[45vw] md:m-4 md:mr-0 md:ml-0 xl:w-[42vw]"
            />
          </div>
        </div>
      </div>
      <button className="bg-[#FF9600] p-3 rounded-[0.25rem] m-3 text-white text-[14px] hover:bg-[#2C97EA] md:ml-[2em] lg:ml-[2.7em] xl:ml-[6.5rem]">
        <div>APPLY NOW</div>
      </button>
    </div>
  );
};

export default page;
