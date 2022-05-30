import React from "react";
import { aboutData } from "../../lib/data";
import tw from "tailwind-styled-components";
import Image from "next/image";
const H1 = tw.h1`text-2xl font-bold text-center md:text-left my-4`;
import { CgShapeZigzag } from "react-icons/cg";

const P = tw.p`text-sm my-2 leading-5`;
const Container = tw.div`max-w-5xl container my-8 mx-auto px-4 pt-2 pb-8`;
const ListItem = tw.li`text-sm`;
import journeyimg from "../../public/assets/journey.png";
const journey = () => {
  return (
    <div>
      <div className="w-full relative h-[300px]">
        <Image src={journeyimg} objectFit="cover" layout="fill" alt="leader" />
      </div>
      <Container>
        <H1>{aboutData.section1.heading}</H1>
        <CgShapeZigzag className="mx-auto mb-5 -mt-3 text-5xl" />
        <P>{aboutData.section1.sub1}</P>
        <P>{aboutData.section1.sub2}</P>
      </Container>
    </div>
  );
};

export default journey;
