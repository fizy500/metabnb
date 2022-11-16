import React from "react";
import FooterLogo from "../Assets/footerlogo.svg";
import Facebook from "../Assets/facebook.svg";
import Instagram from "../Assets/instagram.svg";
import Twitter from "../Assets/twitter.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1E] py-4 px-10  justify-items-center font-Red-Rose">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center  md:space-x-20 ">
        <div className=" py-10">
          <div className="flex flex-col space-y-20">
            <img src={FooterLogo} alt="" className="" />
            <div className="flex space-x-3">
              <a href="">
                <img src={Facebook} alt="" />
              </a>
              <a href="">
                <img src={Instagram} alt="" />
              </a>
              <a href="">
                <img src={Twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="  py-10 ">
          <div className=" flex flex-col items-baseline space-y-3">
            <button className="font-bold text-lg text-white">Community</button>
            <button className="font-normal text-sm text-[#F1F3F9]">NFT</button>
            <button className="font-normal text-sm text-[#F1F3F9]">
              Tokens
            </button>
            <button className="font-normal text-sm text-[#F1F3F9]">
              Landlords
            </button>
            <button className="font-normal text-sm text-[#F1F3F9]">
              Discord
            </button>
          </div>
        </div>
        <div className="  py-10">
          <div className=" flex flex-col items-baseline space-y-3">
            <button className="font-bold text-lg text-white">Places</button>
            <button className="font-normal text-sm text-[#F1F3F9]">
              Castle
            </button>
            <button className="font-normal text-sm text-[#F1F3F9]">
              Farms{" "}
            </button>
            <button className="font-normal text-sm text-[#F1F3F9]">
              Beach
            </button>
            <button className="font-normal text-sm text-[#F1F3F9]">
              Learn more
            </button>
          </div>
        </div>
        <div className="  py-10">
          <div className=" flex flex-col items-baseline space-y-3">
            <button className="font-bold text-lg text-white">About us</button>
            <button className="font-normal text-sm text-[#F1F3F9] ">
              Road map
            </button>
            <button className="font-normal text-sm text-[#F1F3F9]">
              Creators{" "}
            </button>
            <button className="font-normal text-sm text-[#F1F3F9]">
              Career
            </button>
            <button className="font-normal text-sm text-[#F1F3F9]">
              Contact us
            </button>
          </div>
        </div>

       
      </div>
      <div className="row-span-4 mt-2  ">
        <p className="font-normal text-base text-[#F7F7F7]  ">
          &copy; 2022 Metabnb
        </p>
      </div>
      
    </footer>
  );
}
