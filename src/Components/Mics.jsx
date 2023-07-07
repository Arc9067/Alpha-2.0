import React from "react";
import mic from "../assets/mic.png";

const Mics = () => {
  return (
    <section className="py-small bg-lime-700 w-full" id="tokenomics">
      <div className="container flex justify-center items-center flex-col ">
        <h1
          className="font-sans2 font-black text-5xl break-all text-green-100 lg:text-9xl uppercase"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          tokenomics
        </h1>
        <div className="w-full grid gap-14 justify-between items-center lg:grid-cols-2 mt-14">
          <article className="flex font-medium flex-col gap-6 items-start text-center">
            <img src={mic} alt="" data-aos="zoom-in" data-aos-duration="400" />
            <div
              className="text-white text-2xl text-start"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              Total Supply: 1, 000, 000, 000
            </div>
            <div
              className="text-white text-2xl text-start"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              Token Will Be Locked & Renounced.
            </div>
            <div
              className="text-white text-2xl text-start"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              10% for Marketing & Partnerships
            </div>
            <div
              className="text-white text-2xl text-start"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              90% supply in Liquidity Pool
            </div>
          </article>
          <article className="flex flex-col gap-7 items-center justify-center font-wendyOne ">
            <div
              data-aos="fade-right"
              data-aos-duration="600"
              className=" h-[90px] px-[29px] py-7 bg-white rounded-lg flex-col justify-start items-start gap-2.5 inline-flex"
            >
              <div className="justify-start items-start gap-[43px] inline-flex">
                <div className="text-lime-700 text-[24px] font-semibold leading-loose">
                  Marketing
                </div>
                <div className="justify-start items-center gap-3 flex">
                  <div className="text-lime-700 text-[24px] font-semibold leading-loose">
                    10%
                  </div>
                  <div className="w-[25px] h-[25px] relative bg-lime-500 rounded" />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="600"
              className=" h-[90px] px-[29px] py-7 bg-white rounded-lg flex-col justify-start items-start gap-2.5 inline-flex"
            >
              <div className="justify-start items-start gap-[43px] inline-flex">
                <div className="text-lime-700 text-[24px] font-semibold leading-loose">
                  Buy Tax
                </div>
                <div className="justify-start items-center gap-3 flex">
                  <div className="text-lime-700 text-[24px] font-semibold leading-loose">
                    1%
                  </div>
                  <div className="w-[25px] h-[25px] relative bg-lime-500 rounded" />
                </div>
              </div>
            </div>{" "}
            <div
              data-aos="fade-right"
              data-aos-duration="600"
              className=" h-[90px] px-[29px] py-7 bg-white rounded-lg flex-col justify-start items-start gap-2.5 inline-flex"
            >
              <div className="justify-start items-start gap-[43px] inline-flex">
                <div className="text-lime-700 text-[24px] font-semibold leading-loose">
                  Sell Tax
                </div>
                <div className="justify-start items-center gap-3 flex">
                  <div className="text-lime-700 text-[24px] font-semibold leading-loose">
                    1%
                  </div>
                  <div className="w-[25px] h-[25px] relative bg-lime-500 rounded" />
                </div>
              </div>
            </div>{" "}
          </article>
        </div>{" "}
      </div>
    </section>
  );
};

export default Mics;
