import React from "react";
import ParticleDesign from "./ParticleDesign";

const Landing = () => {
  return (
    <div className="w-full h-screen bg-banner-bg bg-no-repeat bg-center text-white">
      <div className="flex flex-col gap-y-8 justify-center items-center h-full">
        <p className="text-[60px] font-bold font-sans text-center capitalize tracking-wide">
          Unlock{" "}
          <span className="uppercase text-[70px] headlineColor font-extrabold">
            the secrets
          </span>{" "}
          of <br />
          crypto markets
        </p>
        <p className="text-center text-md w-[600px]">
          With CryptoAnalytica, stay ahead of the game and make smarter
          investments - giving you the edge to succeed in volatile markets.
        </p>
        <div className="mt-8">
          <button
            type="button"
            class="flex backgroundStarted transform hover:scale-110 hover:shadow-md hover:transition-colors hover:duration-300 hover:ease-in-out hover:shadow-[#d8aef8] border-orange-600 outline-orange-600 rounded-[20px] px-8 py-2.5 mb-4 w-[250px]"
          >
            <span class="text-lg font-medium tracking-wide text-white text-center flex justify-center w-full gap-2">
              Get started
            </span>
          </button>
        </div>
      </div>
      <div className="w-full h-screen absolute top-0 left-0">
        <ParticleDesign />
      </div>
    </div>
  );
};

export default Landing;
