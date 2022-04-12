import React from "react";
import jeans from "../../public/assets/jeans.png";
import denim from "../../public/assets/denim.png";
import hometex from "../../public/assets/hometex.png";
import printedfab from "../../public/assets/Printed-Fabrics.png";
import shirtFab from "../../public/assets/Shirting-Facrics.png";
import yarn from "../../public/assets/yarn.png";
import imgYarn from "../../public/assets/imgYarn.png";
import imgFab from "../../public/assets/imgfab.png";
import imgDie from "../../public/assets/imgdie.png";
import imgCloths from "../../public/assets/imgCloths.png";
import { CgShapeZigzag } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import CardCounter from "../elements/CardCounter";
import { Fade } from "react-reveal";

const numberData = [
  { number: 37500, title: "Tons of yarn", image: imgYarn },
  { number: 9000, title: "Tons of dyed fabric", image: imgDie },
  { number: 17000, title: "Tons of fabrics", image: imgFab },
  { number: 14500, title: "Tons ready-made cloths", image: imgCloths },
];

const categoryContent = [
  { image: jeans, title: "Jeans" },
  { image: denim, title: "Denim" },
  { image: shirtFab, title: "Shirting Fabrics" },
  { image: printedfab, title: "Printed Fabrics" },
  { image: hometex, title: "Home Textile" },
  { image: yarn, title: "Yarn" },
];

const renderedCards = categoryContent.map((card, i) => {
  return (
    <Fade up key={i}>
      <div className="relative mx-auto w-80 h-52">
        <Image src={card.image} layout="fill" objectFit="cover" />
        <p className="absolute text-lg font-semibold text-gray-50 bottom-16 left-3">
          {card.title}
        </p>
        <Link href="/">
          <a className="absolute px-6 py-1 font-semibold transition-all border rounded-lg text-gray-50 bottom-6 left-3 border-gray-50 hover:bg-slate-50 hover:text-gray-900">
            View all
          </a>
        </Link>
      </div>
    </Fade>
  );
});

const renderedData = numberData.map((number, i) => {
  return (
    <div
      key={i}
      className="flex-1 gap-1 px-3 py-2 shadow-xl bg-blue-primary/10 rounded-xl"
    >
      <div className="flex items-center gap-3 ">
        <div className="relative w-10 h-10">
          <Image alt={number.title} src={number.image} objectFit="cover" />
        </div>
        <CardCounter number={number.number} />
      </div>
      <p className="">{number.title}</p>
    </div>
  );
});

const ProductCategory = () => {
  return (
    <div className="container py-10 mx-auto">
      <Fade up>
        <h3 className="text-2xl font-bold text-center">Product categories</h3>
        <CgShapeZigzag className="mx-auto mb-5 -mt-3 text-5xl" />
      </Fade>
      <div className="flex flex-wrap justify-center gap-3 mx-auto max-w-7xl">
        {renderedCards}
      </div>
      <div className="mx-auto mt-5 transition-none border-2 rounded-lg cursor-pointer max-w-fit border-blue-primary hover:bg-blue-primary ">
        <p className="px-3 py-1 transition-all text-blue-primary hover:text-gray-50">
          Download PDF
        </p>
      </div>

      {/* numbered data */}

      <div className="grid grid-cols-2 gap-2 px-2 my-16 md:flex">
        {renderedData}
      </div>
    </div>
  );
};

export default ProductCategory;
