import React from "react";
import LogoHouse from "../Assets/logoHouse.svg";
import LogoWord from "../Assets/logoWord.svg";

export default function HeaderDesktop() {
  return (
    <header className="flex justify-between  w-full py-6 px-14">
      <div className="flex items-baseline space-x-2">
        <img src={LogoHouse} alt="" />
        <img src={LogoWord} alt="" />
      </div>
      <div className="flex space-x-6">
        <a
          href="www.airbnb.com"
          className="text-xl font-normal text-[#434343] "
        >
          Home
        </a>
        <a
          href="www.airbnb.com"
          className="text-xl font-normal text-[#434343] "
        >
          Place to stay
        </a>
        <a
          href="www.airbnb.com"
          className="text-xl font-normal text-[#434343] "
        >
          NFTs
        </a>

        <a
          href="www.airbnb.com"
          className="text-xl font-normal text-[#434343] "
        >
          Community
        </a>
      </div>
      <div>
        <button className="bg-[#A02279] text-white font-normal text-base py-2 px-8 rounded-[10px]">
          Connect wallet
        </button>
      </div>
    </header>
  );
}
