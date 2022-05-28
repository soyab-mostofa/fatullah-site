import React from 'react';
import tw from 'tailwind-styled-components';
import { GiBulletImpacts } from 'react-icons/gi';
import { Impacts } from '../../lib/data';
const H1 = tw.h1`text-2xl font-bold text-center md:text-left my-4`;
const P = tw.p`text-sm my-2 capitalize leading-5`;
const Container = tw.div`max-w-5xl container mx-auto px-2`;
import solar from '../../public/assets/solar.jpg';
import healthcare from '../../public/assets/healthcare.jpg';
import Image from 'next/image';

const impacts = () => {
  return (
    <Container>
      <div className="relative top-0 w-full h-96 after:bg-blue-primary/30 after:absolute after:h-full after:w-full">
        <Image
          placeholder="blur"
          layout="fill"
          alt="about"
          objectFit="cover"
          src={solar}
        />
      </div>

      <H1>{Impacts.environment.title}</H1>
      {Impacts.environment.impacts.map((I, i) => {
        return (
          <div key={i} className="flex items-center gap-2">
            <GiBulletImpacts />
            <P>{I.toLocaleLowerCase()}</P>
          </div>
        );
      })}
      <div className="flex flex-col items-center gap-4 mt-8 md:flex-row">
        <div className="self-start grow">
          <H1>{Impacts.worker.title}</H1>
          {Impacts.worker.facilities.map((I, i) => {
            return (
              <div key={i} className="flex items-center gap-2">
                <GiBulletImpacts />
                <P>{I.toLocaleLowerCase()}</P>
              </div>
            );
          })}
        </div>
        <div className="relative top-0 w-full m-8 md:basis-2/4 h-96 after:bg-blue-primary/30 after:absolute after:h-full after:w-full">
          <Image
            layout="fill"
            alt="about"
            placeholder="blur"
            objectFit="cover"
            src={healthcare}
          />
        </div>
      </div>
    </Container>
  );
};

export default impacts;
