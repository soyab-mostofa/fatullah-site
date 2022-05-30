import Image from "next/image";
import React from "react";
import { Chrono } from "react-chrono";
import tw from "tailwind-styled-components";
import { MdTimeline } from "react-icons/md";
import { aboutData } from "../../lib/data";
import { CgShapeZigzag } from "react-icons/cg";

const H1 = tw.h1`text-2xl font-bold text-center md:text-left my-4`;
const P = tw.p`text-sm my-2 leading-5`;
const Container = tw.div`max-w-5xl container mx-auto px-2`;
const ListItem = tw.li`text-sm`;

const about = () => {
  return (
    <div>
      {/* cover image */}
      <div className="relative top-0 w-full h-96 after:bg-blue-primary/30 after:absolute after:h-full after:w-full">
        <Image
          layout="fill"
          alt="about"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1552710307-537199cd41c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>
      {/* cover image */}
      <Container>
        <div className="max-w-md mx-auto my-4">
          <H1>{aboutData.aboutUs.heading}</H1>
          <CgShapeZigzag className="mx-auto mb-5 -mt-3 text-5xl" />

          {/* data */}
          <P>{aboutData.aboutUs.sub1}</P>
          <P>{aboutData.aboutUs.sub2}</P>
        </div>
      </Container>
    </div>
  );
};

export default about;
