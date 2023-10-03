import Image from "next/image";
import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillSkype,
} from "react-icons/ai";
const Teachersdetail = () => {
  return (
    <div className="bg-[#F3F6F8]">
      <div className="md:pt-[1.5rem] xl:pt-[3rem]">
        <p className="font-['texgyreadventorbold'] text-[14px] text-center pt-[2.5rem] text-[#7A7A7A]">
          THERE ARE MANNY WAYS TO LEARN
        </p>
        <p className="text-[26px] text-center font-bold text-[#2a4356] md:text-[30px] xl:text-[36px]">
          BROWSE BY TEACHER
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xl:pl-[5em] xl:pr-[5em]">
        <div className=" mt-[4em] md:border-r-2 ">
          <div className="text-center">
            <div className="flex justify-center">
              <Image src={"/teacher1.webp"} width={100} height={100} />
            </div>
            <div className="mt-6">
              <p className="text-[14px] font-bold text-[#414a4f]">
                BRUNO ACSELRAD
              </p>
              <p className="text-[12px] text-[#7A7A7A]">Math Teacher</p>
              <div className="text-center">
                <p className="text-[12px] leading-[22px] pt-4 p-8 text-[#7A7A7A] lg:p-10 lg:pt-4  xl:p-12 xl:pt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
              </div>
            </div>
            <div className="flex justify-center mb-4 ">
              <button>
                <AiFillTwitterCircle className=" text-[#00A0D1] hover:text-black text-[25px] xl:text-[30px] xl:mr-2" />
              </button>
              <button>
                <AiFillLinkedin className="text-[#0E76A8] hover:text-black text-[25px] xl:text-[30px] xl:mr-2 " />
              </button>
              <button>
                <AiFillSkype className="text-[#00AFF0] hover:text-black text-[25px] xl:text-[30px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-[4em] md:border-r-2 ">
          <div className="flex justify-center">
            <Image src={"/teacher2.webp"} width={100} height={100} />
          </div>
          <div className="mt-6">
            <p className="text-[14px] font-bold text-[#414a4f]">
              BRUNO ACSELRAD
            </p>
            <p className="text-[12px] text-[#7A7A7A]">Senior Lecturer</p>
            <div className="text-center">
              <p className="text-[12px] leading-[22px] pt-4 p-8 text-[#7A7A7A] lg:p-10 lg:pt-4  xl:p-12 xl:pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
            </div>
          </div>
          <div className="flex justify-center ">
            <button>
              <AiFillTwitterCircle className=" text-[#00A0D1] hover:text-black text-[25px] xl:text-[30px] xl:mr-2" />
            </button>
            <button>
              <AiFillLinkedin className="text-[#0E76A8] hover:text-black text-[25px] xl:text-[30px] xl:mr-2" />
            </button>
            <button>
              <AiFillSkype className="text-[#00AFF0] hover:text-black text-[25px] xl:text-[30px]" />
            </button>
          </div>
        </div>
        <div className=" mt-[4em] md:border-r-2 ">
          <div className=" text-center">
            <div className="flex justify-center">
              <Image src={"/teacher2.webp"} width={100} height={100} />
            </div>
            <div className="mt-6">
              <p className="text-[14px] font-bold text-[#414a4f]">
                BRUNO ACSELRAD
              </p>
              <p className="text-[12px] text-[#7A7A7A]">Professor</p>
              <div className="text-center">
                <p className="text-[12px] leading-[22px] pt-4 p-8 text-[#7A7A7A] lg:p-10 lg:pt-4  xl:p-12 xl:pt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
              </div>
            </div>
            <div className="flex justify-center ">
              <button>
                <AiFillTwitterCircle className=" text-[#00A0D1] hover:text-black text-[25px] xl:text-[30px] xl:mr-2" />
              </button>
              <button>
                <AiFillLinkedin className="text-[#0E76A8] hover:text-black text-[25px] xl:text-[30px] xl:mr-2" />
              </button>
              <button>
                <AiFillSkype className="text-[#00AFF0] hover:text-black text-[25px] xl:text-[30px]" />
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-[4em]">
          <div className=" text-center ">
            <div className="flex justify-center">
              <Image src={"/teacher1.webp"} width={100} height={100} />
            </div>
            <div className="mt-6">
              <p className="text-[14px] font-bold text-[#414a4f]">
                BRUNO ACSELRAD
              </p>
              <p className="text-[12px] text-[#7A7A7A]">Math Teacher</p>
              <div className="text-center">
                <p className="text-[12px] leading-[22px] pt-4 p-8 text-[#7A7A7A] lg:p-10 lg:pt-4 xl:p-12 xl:pt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <button>
                <AiFillTwitterCircle className=" text-[#00A0D1] hover:text-black text-[25px] xl:text-[30px] xl:mr-2" />
              </button>
              <button>
                <AiFillLinkedin className="text-[#0E76A8] hover:text-black text-[25px] xl:text-[30px] xl:mr-2" />
              </button>
              <button>
                <AiFillSkype className="text-[#00AFF0] hover:text-black text-[25px] xl:text-[30px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachersdetail;
