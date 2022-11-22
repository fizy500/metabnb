import React from "react";
// import ReactDom from "react"
import Cross from "../Assets/Cross.svg";
import Meta2 from "../Assets/Meta.svg";
import Wallet from "../Assets/WalletConnect.svg";
import Direction from "../Assets/Direction.svg";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  if (!open === false) {
    document.body.style.overflow = "hidden";
  }
  else if (open === true && onclick === true) {
    document.body.style.overflow = "block";
  }
  return (
    <div
      className="w-[100vw] h-full bg-[rgba(0,0,0,0.5)] bg-opacity-25 backdrop-blur-sm fixed inset-0  z-[1000] lg:max-w-full  flex justify-center items-center  "
      onClick={onClose}
    >
      <div
        className="bg-white rounded-md w-[95%] lg:w-[50%] py-10  left-[50%] top-[40%] "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className=" border-b border-solid border-[]">
          <div className="flex justify-between px-5 py-2">
            <p className="font-bold text-[#333333] text-2xl ">Connect Wallet</p>
            <button onClick={onClose}>
              <img src={Cross} alt="" className="" />
            </button>
          </div>
        </div>
        <p className="px-5 py-3">Choose your preferred wallet:</p>
        <div className="px-5 space-y-3">
          <div className="flex justify-between px-2 py-1 border border-solid border-[#CFD8DC] rounded-xl">
            <img src={Meta2} alt="" className="" />
            <img src={Direction} alt="" className="" />
          </div>

          <div className="flex justify-between px-2 py-1 border border-solid border-[#CFD8DC] rounded-xl">
            <img src={Wallet} alt="" className="" />
            <img src={Direction} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
