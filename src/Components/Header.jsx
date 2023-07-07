import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import HeaderLogo from "../assets/headerLogo.png";

const Header = () => {
  const scroll = new LocomotiveScroll();
  return (
    <header className="py-3 container  absolute top-0 w-full">
      <nav className="flex overflow-hidden  md:justify-between lg:justify-start items-center p-4 bg-lime-800 rounded-lg gap-10">
        <a
          href=""
          className="uppercase  w-[8rem] text-3xl hover:text-black"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img src={HeaderLogo} alt="" />
        </a>

        <ul
          className="hidden lg:flex gap-9 items-center ml-auto font-sans font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <li
            className="text-xl cursor-pointer capitalize hover:text-black  transition"
            onClick={() => {
              scroll.scrollTo(document.querySelector("#hero"));
            }}
          >
            home
          </li>
          <li
            className="text-xl cursor-pointer capitalize hover:text-black  transition"
            onClick={() => {
              scroll.scrollTo(document.querySelector("#about"));
            }}
          >
            about
          </li>

          <li
            className="text-xl cursor-pointer capitalize hover:text-black  transition"
            onClick={() => {
              scroll.scrollTo(document.querySelector("#tokenomics"));
            }}
          >
            tokenomics
          </li>
        </ul>
        <a
          href=""
          className="md:block hidden px-8 py-4 bg-white rounded shadow text-amber-600 uppercase font-sans2 font-bold"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          buy now
        </a>
      </nav>
    </header>
  );
};

export default Header;
