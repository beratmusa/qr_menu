"use client";
import Arrow1 from "@/lottie/Arrow-1.json";
import Lottie from "lottie-react";

const LandingPage = () => {
  return (
    <div className="bg-splashBackground">
      <div className="flex flex-col h-lvh justify-between">
        <div className="brand w-full text-center text-4xl p-5 text-color_2 font-salsa">
          MARKA LOGOSU
        </div>
        <div className="images flex justify-center items-center">
          {/* <div className="shape bg-color_1 h-96 w-56 rounded-full mt-14"></div> */}
          <img className="h-96" src="/image-background.svg" alt="" />
          <img className="absolute mb-16" src="/icee.png" alt="" />
        </div>
        <div className="down-arrow flex justify-center mb-5">
          <Lottie animationData={Arrow1} style={{ width: 35, height: 100 }} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
