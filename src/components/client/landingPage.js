"use client";
import Arrow1 from "@/lottie/Arrow-1.json";
import Lottie from "lottie-react";

const LandingPage = () => {
  return (
    <div className="bg-splashBackground">
      <div className="flex flex-col h-lvh justify-between">
        <div className="brand w-full text-center text-4xl max-[375px]:text-3xl p-5 mt-2 text-color_2 font-ubuntu">
          MARKA LOGOSU
        </div>
        <div className="images flex justify-center items-center">
          {/* <div className="shape bg-color_1 h-96 w-56 rounded-full mt-14"></div> */}
          <img
            className="h-96 max-[375px]:h-80"
            src="/image-background.svg"
            alt=""
          />
          <img
            className="absolute mb-16 h-96 max-[375px]:h-80"
            src="/icee.png"
            alt=""
          />
        </div>
        <div className="down-arrow flex justify-center mb-10 flex-col items-center">
          <p className="mb-3 mr-4 font-ubuntu text-color_2 text-xl max-[375px]:text-lg">
            MENÜ
          </p>
          <Lottie animationData={Arrow1} style={{ width: 85, height: 135 }} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
