import React from "react";
import logo from "../assets/logo2.png";

const About = () => {
  return (
    <section className="w-full py-small bg-gray-100 text-yellow-700" id="about">
      <div className="container flex justify-center items-center flex-col ">
        <h1
          className="font-Header text-6xl break-all text-center text-lime-700 lg:text-9xl uppercase"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          about alpha 2.0
        </h1>

        <section className="grid grid-cols-1 gap-16 lg:grid-cols-2 mt-12 justify-between items-center">
          <img src={logo} alt="" data-aos="zoom-out" data-aos-duration="1200" />

          <article className="flex flex-col gap-8 items-start">
            <h1
              className="font-Header text-4xl uppercase lg:text-6xl leading-[140%]"
              data-aos="zoom-in"
              data-aos-duration="900"
            > 
              the charismatic and fearless leader
            </h1>
            <p
              className="text-black leading-[32px]"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              With a loyal following howling at its every move. With a market
              presence as fierce as a wolf's howl and a value that grows like a
              pack's unity, Alpha2.0 paves the path towards innovation and
              prosperity, leaving a lasting legacy in the ever-evolving crypto
              wilderness.
            </p>
            <a
              href=""
              className=" px-8 py-4 bg-lime-700 rounded shadow text-white uppercase font-Header"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              telegram
            </a>
          </article>
        </section>
      </div>
    </section>
  );
};

export default About;
