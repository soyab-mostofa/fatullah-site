import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
const Title = tw.h1`font-bold text-2xl text-center`;
const Container = tw.div`container max-w-4xl mx-auto px-4 mb-8 py-6 md:py-12,
d`;
import awardsimg from "../../public/assets/awards.png";
import { CgShapeZigzag } from "react-icons/cg";
const awards = () => {
  return (
    <>
      <div className=" relative h-[350px] md:mx-12 lg:mx-20 mx-auto mb-4">
        <Image src={awardsimg} objectFit="cover" layout="fill" alt="leader" />
      </div>
      <Container>
        <Title>Awards & Recognition</Title>
        <div className="space-y-2 text-sm md:space-y-8">
          <CgShapeZigzag className="mx-auto mb-5 -mt-3 text-5xl" />
          <p>
            <span className="font-bold">
              &quot;OCCUPATIONAL HEALTH & SAFETY GOOD PRACTICE AWARD-2018”
            </span>
            received from Peoples Republic of Bangladesh (Ministry of Labor &
            Employment) in May’2019.
          </p>
          <p>
            We are very cautious on safety measures with required safety
            precautions of the works and workers also conducting Drill and
            maintaining the Logbook regularly.
          </p>
          <p>
            <span className="font-bold">
              ENVIRONMENT-FRIENDLY USGBC CERTIFICATION:
            </span>
            - The LEED (Leadership in Energy and Environmental Design)
            certification of USGBC (U.S Green Building Council) is under
            processing.
          </p>
        </div>
      </Container>
    </>
  );
};

export default awards;
