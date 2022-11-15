import { useState } from "react";
import LogoHouse from "../Assets/logoHouse.svg";
import LogoWord from "../Assets/logoWord.svg";
import Modal from "./Modal";

export default function HeaderDesktop() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <header className="w-full">
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div className="flex justify-between py-6 px-10">
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
          <a href="/Place" className="text-xl font-normal text-[#434343] ">
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
          <button
            className="bg-[#A02279] text-white font-normal text-base py-2 px-8 rounded-[10px]"
            onClick={() => setOpenModal(true)}
          >
            Connect wallet
          </button>
        </div>
      </div>
    </header>
  );
}
