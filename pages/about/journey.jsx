import React from "react";
import { aboutData } from "../../lib/data";
import tw from "tailwind-styled-components";
const H1 = tw.h1`text-2xl font-bold text-center md:text-left my-4`;
const P = tw.p`text-sm my-2 leading-5`;
const Container = tw.div`max-w-5xl container my-8 mx-auto px-4`;
const ListItem = tw.li`text-sm`;

const journey = () => {
  return (
    <div>
      <Container>
        <H1>{aboutData.section1.heading}</H1>
        <P>{aboutData.section1.sub1}</P>
        <P>{aboutData.section1.sub2}</P>
      </Container>
    </div>
  );
};

export default journey;
