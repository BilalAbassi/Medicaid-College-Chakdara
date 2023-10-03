import React from "react";
import { BsPlayFill } from "react-icons/bs";

const Card = ({ title }) => {
  return (
    <section className="px-10">
      <div className=" w-[189px] h-[274px]">
        <div
          className={` bg-[url('../public/course-img4.webp')] shadow-lg rounded-s bg-cover`}
        >
          <div className="bg-[#235A7F]/70 contrast-110 backdrop-brightness-75 w-[189px] h-[209px] text-white flex flex-col py-10 px-6 space-y-4">
            <h1 className=" text-lg font-bold leading-5">{title}</h1>
            <p className=" text-xs">
              A comprehensive study of modern business...
            </p>
            <div className=" text-[11px] font-bold bg-[#FF9600] py-1 px-1 w-fit">
              FEES: <span className="text-sm font-bold ml-1"> $230</span>
            </div>
          </div>
        </div>

        <div className=" flex items-center">
          <div className="bg-[#16A43B] leading-4 text-white font-bold px-10 py-4">
            <h1>2 YEAR</h1>
            <p className=" text-xs">COURSES</p>
          </div>
          <div className=" bg-[#169333] w-full flex justify-center py-[17px] ">
            <BsPlayFill className=" text-3xl text-[#169333] px-1 py-1 bg-gray-300 hover:bg-gray-500 rounded-full cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
