import React from "react";
import { ImMakeGroup } from "react-icons/im";
import { SiMaterialdesign } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import Image from "next/image";
import cap from "../../public/assets/cap.png";
import { CgShapeZigzag } from "react-icons/cg";
import { Fade } from "react-reveal";

const cardDetails = [
  {
    icon: ImMakeGroup,
    title: "We Manufacture",
    content:
      "Our product range includes basic and fashion T-shirts, Polo-shirts, Sweat-shirts, Legging, Sportswear, Sleeping-suits, Slips, etc. for Men, Women, and Children (Kids and Babies).",
  },
  {
    icon: SiMaterialdesign,
    title: "We Design Fabric",
    content:
      "Choose from many fabrics and design your. Create and print only the fabric you need with no minimum order.",
  },
  {
    icon: GrTechnology,
    title: "We Engineer",
    content:
      "We carry an enormous inventory of all the things you need to complete your project: notions, patterns and trims.",
  },
];

const renderedCards = cardDetails.map((card, index) => {
  return (
    <Fade up key={index}>
      <div
        className={`border border-blue-primary/50 py-8 px-5 shadow-lg max-w-sm mx-auto  ${
          index === 1 ? "bg-blue-primary text-gray-50" : "bg-slate-50"
        } `}
      >
        <card.icon
          className={`text-3xl  ${
            index === 1 ? " text-gray-50" : "text-blue-900"
          }`}
        />
        <h4 className="my-3 text-xl font-bold">{card.title}</h4>
        <p className="text-sm">{card.content}</p>
      </div>
    </Fade>
  );
});

const HeroCards = () => {
  return (
    <div className="container max-w-5xl px-5 mx-auto">
      <div className="max-w-5xl mx-auto -mt-10 space-y-5 md:grid md:space-y-0 md:grid-cols-3 md:gap-3">
        {renderedCards}
      </div>
      <Fade>
        <div className="my-10 md:grid md:grid-cols-2">
          <div className="relative w-full h-64 max-w-md mx-auto">
            <Image
              src={cap}
              objectFit="cover"
              layout="fill"
              all="machine"
              alt="machine"
            />
          </div>
          <div className="md:mt-10">
            <h3 className="text-xl font-bold">Our capabilities</h3>
            <p className="text-sm">
              Stop by today; our talented staff will be happy to help you find
              what you’re searching for!
            </p>
            <CgShapeZigzag className="text-5xl" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HeroCards;
