import React from "react";
// import HeaderDesktop from "../Components/HeaderDesktop";
import Hero from "../Assets/Herogroup.svg";
import MbToken from "../Assets/mbToken.svg";
import MetaMask from "../Assets/metamask.svg";
import OpenSea from "../Assets/opensea.svg";
import Cards from "../Components/Cards";
import data from "../data";
import Footer from "../Components/Footer";
import Frame from "../Assets/Frame.svg";

export default function Home() {
  const Data = data.map((item) => {
    return <Cards key={item.id} {...item} />;
  });
  return (
    <main className="lg:max-w-full z-[-2] w-full  ">
      <div className="grid md:grid-cols-2 justify-items-center items-center px-10 py-7">
        <div className=" col-span-1">
          <div className="  py-10 space-y-2">
            <h2 className="font-normal text-[36px]  md:text-[56px] text-[#434343]">
              Rent a <span className="text-[#A02279] font-bold">Place </span>
              away from
              <span className="text-[#A02279] font-bold"> Home</span> in the
              <span className="text-[#A02279] font-bold"> Metaverse</span>
            </h2>
            <p className=" text-2xl font-normal text-[#434343]">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <form
              action=""
              className="flex flex-col space-y-3 md:space-y-0 md:flex-row items-baseline w-full  "
            >
              <input
                type="text"
                placeholder="Search for location"
                className="py-3 px-1  text-sm font-normal outline-none md:border-r-0 border-[1px] border-solid border-[#A3A3A3]
                rounded-md
                 md:rounded-l-md placeholder-[#B8B8B8] w-full"
              />
              <button className="bg-[#A02279] py-3 px-20 rounded-md  md:rounded-r-md font-normal text-base text-white w-full md:w-fit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className=" col-span-1">
          <img src={Hero} alt="" />
        </div>
      </div>

      <div
        className="bg-[#A02279]  flex justify-center items-center py-2 md:
      px-5 "
      >
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center md:space-x-5 lg:space-x-[15rem] ">
          <img src={MbToken} alt="" className="p-3 md:p-0" />
          <img src={MetaMask} alt="" className="p-3 md:p-0" />
          <img src={OpenSea} alt="" className="p-3 md:p-0" />
        </div>
      </div>
      <section className=" grid grid-rows-1 justify-center items-center space-y-8 py-5">
        <h2 className="font-bold text-2xl  md:text-5xl text-black text-center">
          Inspiration for your next adventure
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10  justify-items-center items-center">
          {Data}
          {/* <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards /> */}
        </div>
      </section>
      <div className="bg-[#A02279] w-full">
        <div className="grid md:grid-cols-2 justify-items-center items-center px-10 py-5 ">
          <div className=" col-span-1 ">
            <div className="flex flex-col space-y-8 w-fit">
              <p className="font-bold text-white text-2xl  md:text-5xl">
                Metabnb NFTs
              </p>
              <p className="font-normal text-xl  text-white  w-fit">
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our cutomer access to loads of our exclusive services.
              </p>
              <div>
                <button className="bg-white text-[#A02279] rounded-lg py-2 px-5">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className=" col-span-1 ">
            {/* <RotatedImages /> */}
            <img src={Frame} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
