import React from "react";
import tw from "tailwind-styled-components";

const Title = tw.h1`font-bold text-2xl`;
const Container = tw.div`container max-w-5xl mx-auto px-4 py-12`;

const awards = () => {
  return (
    <Container>
      <Title>Awards & Recognition</Title>
      <div className="space-y-2 text-sm md:space-y-8">
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
  );
};

export default awards;
