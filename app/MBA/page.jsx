import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { TfiWorld } from "react-icons/tfi";
import { FcDocument } from "react-icons/fc";
import { TiTickOutline } from "react-icons/ti";
import { GoStopwatch } from "react-icons/go";
import { BsJournalText } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import ModernSlider from "@/Components/ModernSlider";
const page = () => {
  return (
    <div>
      <div className=" bg-[url('../public/bg.webp')] bg-cover bg-opacity-8 relative -z-10 h-[55vh] md:h-[50vh] md:flex lg:h-[50vh] xl:h-[45vh]">
        <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
        <div className="pt-6 md:pl-3 lg:pt-9 lg:pl-10 xl:pl-[8em]">
          <h2 className=" font-bold text-[28px] text-white pl-4 md:text-[42px] md:pt-5 lg:text-[42px] ">
            MBA OPERTAIONS
          </h2>
          <p className=" w-[80vw] pl-4 text-sm text-white md:w-[50vw] md:text-[16px] lg:text-[16px] lg:w-[40vw] xl:w-[30vw] xl:mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="md:ml-[6em] md:mt-[3em] lg:ml-[14em] xl:ml-[30em]">
          <button className="mt-8">
            <div className="flex md:w-[225px] lg:w-[250px] xl:w-[270px]">
              <div className="bg-[#56d348] w-[48vw] h-[12vh] ml-4 flex md:w-[23vw] md:h-[14vh] lg:h-[14vh] xl:h-[12vh] xl:w-[25vw]">
                <div className="flex">
                  <TfiWorld className="text-white text-[35px] mt-4 ml-6 md:mt-5 lg:mt-7 xl:mt-6" />
                  <p className="w-[20vw] text-white font-bold mt-3 md:w-[13vw] md:mt-4 lg:w-[10vw] lg:mt-5 xl:w-[7vw] xl:mt-4">
                    APPLY ONLINE
                  </p>
                </div>
              </div>
              <div className="bg-[#2d741f] h-[12vh] w-[10vw] md:w-[5vw] md:h-[14vh] lg:h-[14vh] xl:h-[12vh] xl:w-[6vw]">
                <LiaGreaterThanSolid className="absolute text-white mt-6 ml-3 md:mt-8 lg:mt-9 xl:ml-4 xl:mt-8" />
              </div>
            </div>
          </button>

          <div className="mt-5 ml-3">
            <button>
              <div className="flex ">
                <FcDocument className="text-[40px]" />
                <div className="mt-1 ml-0 p-0">
                  <p className=" m-0 p-0 text-white text-[11px] font-['texgyreadventorbold'] ml-[-4.5em]">
                    DOWNLOAD:
                  </p>
                  <p className="ml-2 p-0 text-[13px] text-white">
                    COURSE BROCHURE
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div>{/* <Image src={"/bg.jpg"} width={100} height={100}/> */}</div>
      </div>
      <section
        id="OnlineSkilledCourses"
        className=" py-10 px-1 lg:h-[500px] lg:mx-10 xl:mx-40"
      >
        {/* Outer Container for ImagesDiv & DescriptionDiv */}
        <div className="OuterContainer flex flex-col ml-3 lg:items-start lg:flex lg:flex-row lg:space-x-8 ">
          {/*ImagesDiv Starts */}
          <div className="order-1 HeroDiv py-4 space-y-3 lg:w-[40%] ">
            <div className="">
              <img
                className=" hidden w-[410px] h-[280px] md:w-[720px] md:h-[450px] lg:w-[400px] lg:h-[220px] xl:w-[457px] xl:h-[280px] "
                src="../course_video_img.jpg"
                alt=""
              />
            </div>
            <div className="mr-3">
              <form action="" className="bg-[#2C97EA] text-white p-5 ">
                <h1 className="text-[24px] font-bold">ENQUIRE NOW</h1>
                <input
                  type="text"
                  placeholder="NAME"
                  className="bg-[#60B1F0] text-white w-[100%] border-2 border-white p-2 mt-5 text-[12px] placeholder:text-white mb-3"
                />
                <div className="md:flex">
                  <input
                    type="text"
                    placeholder="EMAIL"
                    className="bg-[#60B1F0] text-white w-[100%] border-2 border-white p-2 text-[12px] placeholder:text-white mt-0 mb-3"
                  />
                  <input
                    type="text"
                    placeholder="PHONE"
                    className="bg-[#60B1F0] text-white w-[100%] border-2 border-white p-2 text-[12px] placeholder:text-white mt-0 mb-5 md:mb-3 md:ml-1"
                  />
                </div>
                <div className="md:flex">
                  <input
                    type="text"
                    placeholder="PLACE"
                    className="bg-[#60B1F0] text-white w-[100%] border-2 border-white p-2 text-[12px] placeholder:text-white mt-0 mb-3"
                  />
                  <input
                    type="text"
                    placeholder="COURSE"
                    className="bg-[#60B1F0] text-white w-[100%] border-2 border-white p-2 text-[12px] placeholder:text-white mt-0 md:mb-3 md:ml-1"
                  />
                </div>
              </form>
              <div>
                <button className="bg-[#FF9600] w-[100%] p-3 text-white hover:bg-[#17A43B]">
                  EQUIRE NOW
                </button>
              </div>
            </div>
          </div>

          {/*DescriptionDiv Starts */}
          <div className="DescriptionDiv w-[95vw] pr-2 md:mx-4 flex flex-col justify-center  lg:w-[60%] lg:h-[500px] lg:items-start lg:justify-start xl:mt-5">
            <h1 className=" text-[24px] md:text-[30px] md:pt-4 md:pb-3 lg:text-[36px] text-[#353434] font-bold">
              COURSE DESCRIPTION
            </h1>
            <p className=" text-gray-400 text-sm py-4 md:text-[14px] lg:text-[14px] leading-6 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
              <br />
              <br />
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </p>
          </div>
          <div className="items-center w-[95vw] pr-[1em] md:mx-4">
            <div className="flex">
              <h1 className="text-[18px]">CERTIFICATION</h1>
              <hr className="w-[50vw] ml-5 mt-3 md:w-[70vw]" />
            </div>
            <p className=" w-[92vw] text-[14px] text-[#999999] pt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          <div className="pt-[1.5em] pb-[2em] w-[95vw] pr-2 md:mx-4">
            <div className="md:flex">
              <div className="flex border-b-2 border-dotted p-3 pl-0 w-[92vw] ">
                <TiTickOutline className=" text-[25px] text-[#2C97EA]" />
                <p className="text-[#7a7a7a] text-[13px]">
                  Lorem Ipsum is simply dummy text of the
                </p>
              </div>
              <div className="flex border-b-2 border-dotted p-3 pl-0 w-[92vw] ">
                <TiTickOutline className=" text-[25px] text-[#2C97EA]" />
                <p className="text-[#7a7a7a] text-[13px]">
                  Lorem Ipsum is simply dummy
                </p>
              </div>
            </div>
            <div className="md:flex">
              <div className="flex border-b-2 border-dotted p-3 pl-0 w-[92vw] md:border-none">
                <TiTickOutline className=" text-[25px] text-[#2C97EA]" />
                <p className="text-[#7a7a7a] text-[13px]">
                  Lorem Ipsum is simply dummy
                </p>
              </div>
              <div className="flex border-b-2 border-dotted p-3 pl-0 w-[92vw] md:border-none">
                <TiTickOutline className=" text-[25px] text-[#2C97EA]" />
                <p className="text-[#7a7a7a] text-[13px]">
                  Lorem Ipsum is simply dummy text of the
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 border-[1px] mr-2 mt-[3em]">
            <div className="flex p-4">
              <div className="bg-[#edf1f4] rounded-[3em] p-2 h-[11vh]">
                <GoStopwatch className="text-[40px] text-[#79a2c2]" />
              </div>
              <div className="m-2 ml-3">
                <h1 className="text-[14px] text-[#8F9BA1]">DURATION:</h1>
                <p className="text-[18px] text-[#4F4A4A]">2 YEAR</p>
              </div>
            </div>
            <hr className="mr-2 ml-2" />
            <div className="flex p-4">
              <div className="bg-[#edf1f4] rounded-[3em] p-2 h-[10vh]">
                <BsJournalText className="text-[37px] text-[#79a2c2]" />
              </div>
              <div className="m-2 ml-3">
                <h1 className="text-[14px] text-[#8F9BA1]">ELIGIBILITY:</h1>
                <p className="text-[18px] text-[#4F4A4A]">
                  GRADUATION/DBA/
                  <br />
                  DIPLOMA/EQUILAVENT
                </p>
              </div>
            </div>
            <hr className="mr-2 ml-2" />
            <div className="flex p-4 pb-2">
              <div>
                <p className="text-[14px] text-[#8F9BA1]">COURSE FEE:</p>
                <p className="text-[#17A43B] text-[36px]">$2500</p>
              </div>
              <button className="bg-[#FF9600] p-3 rounded-[0.25rem] m-3 ml-[2em] text-white text-[14px]  hover:bg-[#2C97EA] md:ml-[2em] lg:ml-[2.7em] xl:ml-[6.5rem]">
                <div className="flex items-center">
                  <p>APPLY NOW</p>
                  <AiFillPlayCircle className="text-[#dbdbdc]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ModernSlider />
    </div>
  );
};

export default page;
