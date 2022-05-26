import React from "react";
import styled from "styled-components";
import heroBg from "../../public/assets/herobg.png";
import { motion } from "framer-motion";

const HeroContainer = styled.section`
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  margin-top: -130px;
  padding-top: 130px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroSection = () => {
  return (
    <HeroContainer background={heroBg.src}>
      <div className="flex flex-col items-center justify-center gap-16">
        <h2 className="text-3xl font-bold text-center text-gray-50">
          Welcome to Fatullah Fabrics Limited. A complete solution of Knit and
          Woven Fabrics in Bangladesh.
        </h2>
        <div className="space-x-3">
          <button className="px-5 py-2 text-gray-900 border bg-slate-50 border-gray-50">
            In details
          </button>
          <button className="px-5 py-2 border border-gray-50 text-gray-50">
            Contact us
          </button>
        </div>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;
