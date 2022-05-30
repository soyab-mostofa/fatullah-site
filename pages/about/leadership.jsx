import Image from "next/image";
import React from "react";
import { Leadership } from "../../lib/data";
import { Container, H1, P } from "../../lib/styles";
import leader from "../../public/assets/leadership.jpg";
import leaderart from "../../public/assets/leadership-illustration.png";
import { CgShapeZigzag } from "react-icons/cg";

const leadership = () => {
  return (
    <div>
      <div className="max-w-md relative h-[280px] mx-auto mb-4">
        <Image src={leaderart} objectFit="cover" layout="fill" alt="leader" />
      </div>
      <Container>
        <H1>Our Leadership</H1>
        <CgShapeZigzag className="mx-auto mb-5 -mt-3 text-5xl" />
        <P className="mx-8">{leadership.title}</P>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {Leadership.people.map((people, i) => {
            return (
              <div
                className="max-w-sm px-4 py-6 mb-4 border-2 border-blue-primary rounded-xl"
                key={i}
              >
                <p className="mb-2 text-xl font-semibold font-xl">
                  {people[0]}
                </p>
                <p className="text-sm">{people[1]}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default leadership;
