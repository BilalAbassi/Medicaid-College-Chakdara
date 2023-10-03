import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
const ModernSliderTable2 = () => {
  return (
    <div className="overflow-x-scroll bg-white mt-3 ">
      <table className="w-[170%]">
        <thead className="bg-[#e9f4fd] ">
          <tr>
            <th className="border-2 text-start p-3 pl-[2em] text-[14px] text-[#4e5d52]  w-[43%]">
              FEES
            </th>
            <th className="border-2 text-start p-3 pl-[2em] text-[14px] text-[#4e5d52] ">
              AMOUNT
            </th>
          </tr>
        </thead>
        <tr>
          <th className="text-[11px] border-2 text-start p-3">
            <div className="flex">
              <FaGreaterThan className="mt-1 text-[10px] text-[#ff9600]" />
              <div className="pl-3 ">
                <p className="text-[#707c82]">ONE TIME PAYMENT</p>
              </div>
            </div>
          </th>
          <th className="text-[12px] border-2 text-start p-3 w-[30vw]">
            <div className="flex">
              <FaGreaterThan className="mt-1 text-[10px] text-[#ff9600]" />
              <div className="pl-3 ">
                <p className="text-[#707c82] text-[18px] ">$2500</p>
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th className="text-[11px] border-2 text-start p-3">
            <div className="flex">
              <FaGreaterThan className="mt-1 text-[10px] text-[#ff9600]" />
              <div className="pl-3">
                <p className="text-[#707c82] ">SHORT TERM INSTALLMENT PLAN</p>
              </div>
            </div>
          </th>
          <th className="text-[12px] border-2 text-start p-3">
            <div className="flex">
              <FaGreaterThan className="mt-1 text-[10px] text-[#ff9600]" />
              <div className="pl-3">
                <p className="text-[#707c82] text-[18px]">$2700</p>
              </div>
            </div>
            <div className="flex border-b-2 border-dotted p-2 pl-0  ">
              <AiFillPlayCircle className=" text-[18px] text-[#2C97EA]" />
              <p className="text-[#707c82] text-[12px] ">
                Lorem Ipsum is simply dummy text of the
              </p>
            </div>
            <div className="flex p-2 pl-0">
              <AiFillPlayCircle className=" text-[18px] text-[#2C97EA]" />
              <p className="text-[#707c82] text-[12px]">
                Lorem Ipsum is simply dummy
              </p>
            </div>
          </th>
        </tr>
        <tr>
          <th className="text-[11px] border-2 text-start p-3">
            <div className="flex">
              <FaGreaterThan className="mt-1 text-[10px] text-[#ff9600]" />
              <div className="pl-3 ">
                <p className="text-[#707c82]">SHORT TERM INSTALLMENT PLAN</p>
              </div>
            </div>
          </th>
          <th className="text-[12px] border-2 text-start p-3">
            <div className="flex">
              <FaGreaterThan className="mt-1 text-[10px] text-[#ff9600]" />
              <div className="pl-3">
                <p className="text-[#707c82] text-[18px]">$3000</p>
              </div>
            </div>
            <div className="flex border-b-2 border-dotted p-2 pl-0">
              <AiFillPlayCircle className=" text-[18px] text-[#2C97EA]" />
              <p className="text-[#707c82] text-[12px] ">
                Lorem Ipsum is simply dummy text of the
              </p>
            </div>
            <div className="flex p-2 pl-0">
              <AiFillPlayCircle className=" text-[18px] text-[#2C97EA]" />
              <p className="text-[#707c82] text-[12px]">
                Lorem Ipsum is simply dummy
              </p>
            </div>
          </th>
        </tr>
      </table>
    </div>
  );
};

export default ModernSliderTable2;
