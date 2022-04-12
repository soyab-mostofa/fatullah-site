import React from "react";
import bg from "../../public/assets/standard.png";
import styled from "styled-components";
import { Fade } from "react-reveal";

const Container = styled.section`
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  height: 300px;
  justify-content: space-around;
  p {
    font-size: 2rem;
  }
`;

const Standards = () => {
  return (
    <Fade up>
      <Container className="mb-10 sm:flex text-gray-50" background={bg.src}>
        <div className="self-end flex-1 p-4 ">
          <p>01</p> <h5>World Class Technology</h5>
        </div>
        <div className="relative flex flex-1 p-4">
          <div className="self-end flex-1">
            <p>02</p> <h5>Quality Standard</h5>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-slate-50/40 blur-2xl" />
          <div className="absolute top-0 left-0 w-full h-full bg-slate-50/40" />
        </div>
        <div className="self-end flex-1 p-4">
          <p>03</p> <h5>Productive capacity</h5>
        </div>
      </Container>
    </Fade>
  );
};

export default Standards;
