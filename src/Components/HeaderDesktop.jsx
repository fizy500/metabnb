import { useState } from "react";
import LogoHouse from "../Assets/logoHouse.svg";
import LogoWord from "../Assets/logoWord.svg";
import Modal from "./Modal";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <header>
        <div className="px-4 py-4 text-white flex  justify-between bg-violet-400  lg:bg-white lg:px-10 font-Red-Rose">
          <Modal open={isOpen} />
          <ul className="flex items-baseline space-x-2">
            <li>
              <img src={LogoHouse} alt="" />
            </li>
            <li>
              {" "}
              <img src={LogoWord} alt="" />
            </li>
          </ul>
          <div
            className={
              toggleMenu
                ? "md:flex  md:pt-0 pt-10 w-full md:w-auto"
                : "hidden md:flex "
            }
            id="menu"
          >
            <ul className="lg:space-x-5">
              <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                <a
                  href="/"
                  className="text-xl font-normal text-white lg:text-[#434343] "
                >
                  Home
                </a>
              </li>
              <li className="dropdown md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3 relative">
                <a
                  href="/Place"
                  className="text-xl font-normal text-white lg:text-[#434343] "
                >
                  Place to stay
                </a>
              </li>
              <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                <a
                  href="/UnderConstuction"
                  className="text-xl font-normal text-white lg:text-[#434343] "
                >
                  NFTs
                </a>
              </li>
              <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                <a
                  href="/UnderConstuction"
                  className="text-xl font-normal text-white lg:text-[#434343] "
                >
                  Community
                </a>
              </li>
            </ul>

            <ul className="block lg:hidden mt-2">
              <li>
                <button
                  className="bg-[#A02279] text-white font-normal  text-sm py-2 px-8 rounded-[10px]"
                  onClick={() => setIsOpen(true)}
                >
                  Connect wallet
                </button>
              </li>
            </ul>
          </div>

          <ul className="hidden lg:block">
            <li>
              <button
                className="bg-[#A02279] text-white font-normal text-base py-2 px-8 rounded-[10px]"
                onClick={() => setIsOpen(true)}
              >
                Connect wallet
              </button>
            </li>
          </ul>

          <div className="cursor-pointer md:hidden">
            <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
            <label
              class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
              for="menu-btn"
            >
              <span
                onClick={handleToggle}
                class="navicon bg-white-darkest flex items-center relative"
              ></span>
            </label>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
