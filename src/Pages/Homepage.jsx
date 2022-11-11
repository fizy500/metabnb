import React from "react";
import HeaderDesktop from "../Components/HeaderDesktop";
import Image from "../Assets/image.svg";
import Cards from "../Components/Cards";

export default function Home() {
  return (
    <section className="">
      <HeaderDesktop />
      <div className="flex">
        <div>
          <h2 className="font-normal  text-[56px] text-[#434343]">
            Rent a <span className="text-[#A02279] font-bold">Place</span> away
            from
            <span className="text-[#A02279] font-bold"> Home</span> in the
            <span className="text-[#A02279] font-bold"> Metaverse</span>
          </h2>
          <p className=" text-2xl font-normal text-[#434343]">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form action="">
            <input type="text" placeholder="search" />
          </form>
        </div>
        <div className="flex w-fit border-2 border-solid border-green-500 p-5">
          <div className="flex flex-col">
            <img src={Image} alt="" />
            <img src={Image} alt="" />
          </div>
          <div className="flex flex-col">
            <img src={Image} alt="" />
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
