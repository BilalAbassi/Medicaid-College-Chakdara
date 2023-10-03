import React from "react";

const OnlineCourses = () => {
  return (
    <section
      id="OnlineSkilledCourses"
      className=" py-10 px-1 lg:h-[500px] lg:mx-10 xl:mx-40"
    >
      {/* Outer Container for ImagesDiv & DescriptionDiv */}
      <div className="OuterContainer w-full flex flex-col items-center lg:items-start lg:flex lg:flex-row lg:space-x-8 ">
        {/*ImagesDiv Starts */}
        <div className="HeroDiv py-4 space-y-3 lg:w-[40%] ">
          <div className="">
            <img
              className=" w-[410px] h-[280px] md:w-[720px] md:h-[450px] lg:w-[400px] lg:h-[220px] xl:w-[457px] xl:h-[280px] "
              src="../course_video_img.webp"
              alt=""
            />
          </div>
          <div className="CardContainer flex flex-col space-y-1 md:grid-cols-2 md:grid md:space-x-1 md:space-y-0 xl:flex xl:flex-row xl:gap-1 ">
            <div className="  bg-red-500 flex items-center justify-center text-white py-6 px-7 space-x-3 md:justify-start  hover:bg-[#41B25A] transition ease-in-out duration-300 lg:justify-start lg:px-3 lg:py-4 xl:px-9 xl:justify-center xl:py-4 xl:w-fit ">
              <img src="./download.webp" alt="" />
              <div className="">
                <p className=" text-xs font-bold">DOWNLOAD</p>
                <p className=" text-lg lg:text-sm font-bold">PROSPECTUS</p>
              </div>
            </div>

            <div className="  bg-[#41B25A] flex items-center justify-center md:justify-start text-white py-6 px-7 space-x-3 hover:bg-red-500 transition ease-in-out duration-300 lg:justify-start lg:px-3 lg:py-4 xl:px-9 xl:justify-center xl:py-4 xl:w-fit">
              <img src="./certifi.webp" alt="" />
              <div className="">
                <p className=" text-xs font-bold">DOWNLOAD</p>
                <p className=" text-lg lg:text-sm font-bold">CERTIFICATION</p>
              </div>
            </div>
          </div>
        </div>
        {/*DescriptionDiv Starts */}
        <div className="DescriptionDiv mx-2 md:mx-4 flex flex-col justify-center lg:w-[60%] lg:h-[500px] lg:items-start lg:justify-start xl:mt-5">
          <h1 className=" text-[24px] lg:text-[36px] text-[#353434] font-bold">
            ONLINE SKILLED COURSES
          </h1>
          <p className=" text-gray-400 text-sm py-4 lg:text-[14px] leading-6 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;
