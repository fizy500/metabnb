import React from "react";
import Footer from "../Components/Footer";
import Setting from "../Assets/setting-5.svg";
import data2 from "../data2";
import Cards2 from "../Components/PlaceCard";

export default function PlaceToStay() {
  const DataTwo = data2.map((item) => {
    return <Cards2 key={item.id} {...item} />;
  });
  return (
    <>
      <main className="w-full font-Red-Rose">
        <section className=" grid grid-rows-1 justify-center items-center space-y-8 py-5  w-full px-4">
          <div className="overflow-auto grid grid-cols-1 border border-solid border-[#B4B4B4] rounded-lg  lg:border-none w-full py-2 px-4  ">
            <div className="flex lg:justify-between flex-shrink-0 space-x-5 lg:space-x-0 font-normal  text-xl text-[#434343]  px-4 text-center ">
              <button className="active:border-b-2 border-red-400 px-2 ">
                Restaurant
              </button>
              <button className="active:border-b-2 border-red-400 px-2 ">
                Cottage
              </button>
              <button className="active:border-b-2 border-red-400 px-2">
                Castle
              </button>
              <button className="active:border-b-2 border-red-400 px-2 no-wrap flex-nowrap">fantast city</button>
              <button className="active:border-b-2 border-red-400 px-2 ">beach</button>
              <button className="active:border-b-2 border-red-400 px-2 ">Carbins</button>
              <button className="active:border-b-2 border-red-400 px-8 bg-red-900 flex justify-center items-center ">Off-grid</button>
              <button className="active:border-b-2 border-red-400 px-2 ">Farm</button>
              <button className="border border-solid border-[#B4B4B4] rounded-lg  text-base text-[#333333] flex justify-between flex-shrink-0 px-2 py-2 space-x-1  w-fit">
                <p>Location</p>
                <img src={Setting} alt="" />
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7  justify-items-center items-center">
            {DataTwo}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
