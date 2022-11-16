import React from "react";
import Star from "../Assets/Star.svg";

export default function Cards(props) {
  return (
    <div className=" w-fit border-2 border-solid border-[#D7D7D7] rounded-[15px]  p-3 mb-5 md:mb-0 ">
      <div className="">
        <img src={props.image} alt="" className="w-full" />
        <div className="grid grid-cols-2 justify-between items-baseline space-y-3  ">
          <div>
            <p className="text-xs font-normal text-[#434343]">Desert king</p>
            <p className="text-xs font-normal text-[#434343]">2345km away</p>
          </div>
          <div>
            <p className="font-bold text-xs text-[#434343] text-right">
              1MBT per night
            </p>
            <p className="text-xs font-normal text-[#434343]">
              available for 2weeks stay
            </p>
          </div>
        </div>
        <div className="flex space-x-2 mt-2">
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
        </div>
      </div>
    </div>
  );
}
