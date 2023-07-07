import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="py-big w-full bg-lime-700" id="hero">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <article className="flex flex-col gap-8 items-start">
          <h1
            className="font-Header  text-white text-7xl lg:text-8xl md:leading-relaxed"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Welcome to Alpha2.0
          </h1>
          <p className="text-xl" data-aos="fade-right" data-aos-duration="500">
            In the captivating realm of cryptocurrencies, picture Alpha2.0 as
            the alpha wolf of the digital pack, embodying strength, influence,
            and an untamed spirit. Just like the alpha wolf leads its pack with
            confidence and authority, Alpha2.0 takes charge in the crypto
            jungle, guiding other tokens and setting the trend.
          </p>
          <a
            href=""
            className=" px-8 py-4 bg-white rounded shadow text-lime-700 uppercase font-Header"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            join community
          </a>
        </article>
        <article className=" relative flex justify-center items-center">
          <img
            src={Logo}
            alt=""
            className="z-10"
            data-aos="zoom-out"
            data-aos-duration="1500"
          />
          <div className="w-[362.47px] h-[349.75px] absolute bg-lime-300 rounded-full blur-[100px] animate-pulse" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
