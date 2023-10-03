import React from "react";
import Card from "./Card";

const Cards_Background = () => {
  return (
    <section className="">
      <div className="OUTER-CONTAINER relative bg-[url('../public/cources-bg.webp')] bg-no-repeat bg-center bg-cover h-[3800px] md:h-[2200px] py-10 lg:h-[1300px] lg:w-full -z-50">
        <div className=" absolute inset-0 bg-[#54595F]/40 backdrop-brightness-50 text-white -z-40">
          <div className="TITLE-CONTAIINER z-50 flex flex-col space-y-5 mt-10 mx-5 md:flex-row md:justify-center md:space-y-0 md:space-x-10 md:mx-10 lg:flex lg:justify-evenly lg:items-center xl:justify-center xl:gap-x-9 ">
            <div className="HEADING">
              <h1 className="text-sm font-thin lg:text-sm">
                {" "}
                UNIQUE FEATURES OF OUR PROGRAMS{" "}
              </h1>
              <h1 className=" text-xl font-bold md:text-3xl md:flex-wrap lg:text-4xl ">
                WHAT DO YOU WANT TO STUDY?
              </h1>
            </div>
            <div className="LIST-FILTER space-y-6 lg:space-y-8">
              <div className=" flex text-sm space-x-8 justify-start font-semibold md:flex md:flex-col md:space-x-0 md:space-y-5 md:text-base md:items-center lg:font-bold lg:justify-center lg:flex-row lg:space-y-0 lg:space-x-4 xl:space-x-8">
                <p className="cursor-pointer"> ALL </p>
                <p className="cursor-pointer"> BCA </p>
                <p className="cursor-pointer"> MBA </p>
                <p className="cursor-pointer"> MCA </p>
              </div>
              <hr className=" border-[1.5px] border-solid border-white w-[300px] md:w-[80px] lg:w-[200px] xl:w-[300px] " />
            </div>
          </div>
          <div className="BODY-CONTAINER z-50 py-10 flex justify-center flex-col items-center space-y-10 md:space-y-10 lg:space-y-14 xl:mx-28">
            <div className="GRID-1 space-y-5 md:space-y-0 md:grid md:grid-cols-3 md:gap-y-5 lg:grid lg:grid-cols-4">
              <div className="flex">
                <Card
                  title=" 
              ONLINE
              MBA GENERAL"
                />
                <hr className="border-[1px] border-solid text-gray-600 h-full" />
              </div>
              <div className="flex">
                <Card
                  title=" 
              ONLINE
              MBA GENERAL"
                />
                <hr className="border-[1px]  text-gray-600 h-full" />
              </div>
              <div className="flex">
                <Card
                  title=" 
              ONLINE
              MBA GENERAL"
                />
                <hr className=" border-[1px] text-gray-600 h-full" />
              </div>

              <div className="flex">
                <Card
                  title=" 
              ONLINE
              MBA GENERAL"
                />
                <hr className="border-[1px] text-gray-600 h-full xl:hidden" />
              </div>
            </div>
            <hr className=" hidden lg:block text-gray-600 lg:w-[96%] lg:my-20" />
            <div className="GRID-2 space-y-5 md:space-y-0 md:gap-y-5 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
              <div className="flex">
                <Card
                  title=" 
              ONLINE
              MBA GENERAL"
                />
                <hr className=" border-[1px] text-gray-600 h-full" />
              </div>
              <div className="flex">
                <Card
                  title=" 
              ONLINE
              MBA GENERAL"
                />
                <hr className="border-[1px]  text-gray-600 h-full" />
              </div>
              <div className="flex">
                <Card
                  title=" 
              ONLINE
              MBA GENERAL"
                />
                <hr className=" border-[1px] text-gray-600 h-full" />
              </div>

              <div className="flex">
                <Card
                  title=" 
              ONLINE
              MBA GENERAL"
                />
                <hr className=" hidden lg:block border-[1px] text-gray-600 h-full xl:hidden" />
              </div>
            </div>
            <hr className="  text-gray-600 lg:w-[96%] lg:my-20" />
            <div className="GRID-3 space-y-5 md:space-y-0 md:gap-y-5 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
              <div className="flex">
                <Card
                  title=" 
              ONLINE
              MBA GENERAL"
                />
                <hr className=" border-[1px] text-gray-600 h-full" />
              </div>
              <div className="flex">
                <Card
                  title=" 
              ONLINE
              MBA GENERAL"
                />
                <hr className="border-[1px]  text-gray-600 h-full" />
              </div>
              <div className="flex">
                <Card
                  title=" 
              ONLINE
              MBA GENERAL"
                />
                <hr className=" border-[1px] text-gray-600 h-full" />
              </div>

              <div className="flex">
                <Card
                  title=" 
              ONLINE
              MBA GENERAL"
                />
                <hr className=" border-[1px] text-gray-600 h-full xl:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards_Background;
