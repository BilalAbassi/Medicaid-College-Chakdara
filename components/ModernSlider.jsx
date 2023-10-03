import React from "react";
import { BsBook } from "react-icons/bs";
import { LuClock9 } from "react-icons/lu";
import { BiBookBookmark } from "react-icons/bi";
import { MdPeopleOutline } from "react-icons/md";

import ModernSliderTable2 from "./ModernSliderTable2";
const ModernSlider = () => {
  return (
    <div className=" bg-[#ebeff3] pt-[3em]">
      <div className=" p-2">
        <div className="grid grid-cols-4 text-[#a4b1bc] pl-3 border-b-2">
          <div className=" pb-3">
            <BsBook className="text-[40px]" />
            <h1 className="text-[11px] w-[10vw]">MODERN CURRICULAM</h1>
          </div>
          <div className="pb-3">
            <LuClock9 className="text-[40px]" />
            <h1 className="text-[11px] w-[10vw]">FEE SCHEDULE</h1>
          </div>
          <div className="pb-3">
            <BiBookBookmark className="text-[40px]" />
            <h1 className="text-[11px] w-[15vw]">SEMESTER I TO IV</h1>
          </div>
          <div className="pb-3">
            <MdPeopleOutline className="text-[40px]" />
            <h1 className="text-[11px]">MAIN TEACHERS</h1>
          </div>
        </div>
        <ModernSliderTable2 />
      </div>
    </div>
  );
};

export default ModernSlider;
