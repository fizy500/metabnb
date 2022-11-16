import React from "react";
import Footer from "../Components/Footer";
import Setting from "../Assets/setting-5.svg";
import data2 from "../data";
import Cards2 from "../Components/PlaceCard";

export default function PlaceToStay() {
  const DataTwo = data2.map((item) => {
    return <Cards2 key={item.id} {...item} />;
  });
  return (
    <>
      <main className="w-full font-Red-Rose">
        <section className=" grid grid-rows-1 justify-center items-center space-y-8 py-5  w-full px-4">
          <div className="overflow-auto grid grid-cols-1 border border-solid border-[#B4B4B4] rounded-lg  lg:border-none w-full  ">
            <div className="grid grid-cols-9 font-normal  text-xl text-[#434343]  px-3 ">
              <button className="active:border-b-2 border-red-400 px-2">
                Restaurant
              </button>
              <button className="active:border-b-2 border-red-400 px-2">
                Cottage
              </button>
              <button className="active:border-b-2 border-red-400 px-2 w-fit">
                Castle
              </button>
              <button>fantast city</button>
              <button>beach</button>
              <button>Carbins</button>
              <button>Off-grid</button>
              <button>Farm</button>
              <button className="border border-solid border-[#B4B4B4] rounded-lg  text-base text-[#333333] flex justify-between px-2 py-2 space-x-1  w-fit">
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
