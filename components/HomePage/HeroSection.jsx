import React from "react";
import styled from "styled-components";
import heroBg from "../../public/assets/hero-bg.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-[700px] -mt-36">
      <div className="flex flex-col items-center justify-center gap-16">
        <h2 className="z-10 max-w-lg mt-48 text-3xl font-bold text-center text-gray-50">
          Welcome to Fatullah Fabrics Limited. A complete solution of Knit and
          Woven Fabrics in Bangladesh.
        </h2>
        <div className="z-10 space-x-3">
          <button className="px-5 py-2 text-gray-900 border bg-slate-50 border-gray-50">
            In details
          </button>
          <button className="px-5 py-2 border border-gray-50 text-gray-50">
            Contact us
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full ">
        <Image
          src={heroBg}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          alt="hero "
        />
        <div className="absolute w-full h-full bg-gradient-to-tr from-blue-primary/70 to-amber-400/30 filter backdrop-blur-sm" />
      </div>
    </div>
  );
};

export default HeroSection;
