import React from "react";
import { CgShapeZigzag } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import CardCounter from "../elements/CardCounter";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import wd from "../../public/assets/category/wd.jpg";
import kg from "../../public/assets/category/knit-garments.png";
import knit from "../../public/assets/category/knit.png";
import knitting from "../../public/assets/category/Knitting.jpg";
import sp from "../../public/assets/category/rotary-screen-printing.jpg";
import { Fade } from "react-reveal";

const ProductionContents = [
  {
    image: wd,
    title: "Woven Dyeing",
    capacity: 150000,
    unit: "yards per day",
    link: "/Woven-Dyeing.pdf",
  },
  {
    image: kg,
    title: "knitting",
    capacity: 6,
    unit: "tons per day",
    link: "/Knit-Garments.pdf",
  },
  {
    image: knit,
    title: "Knit Dyeing",
    capacity: 150000,
    unit: "yards per day",
    link: "/Knit-Dyeing.pdf",
  },
  {
    image: knitting,
    title: "Knit Garments",
    capacity: 24000,
    unit: "pieces per day",
    link: "/Knitting.pdf",
  },
  {
    image: sp,
    title: "Knit Screen Printing",
    capacity: 24000,
    unit: "pieces per day",
    link: "/Knit-Screen-Printing.pdf",
  },
];

const ProductCategory = () => {
  return (
    <div className="container max-w-5xl py-10 mx-auto">
      <Fade up>
        <h3 className="text-2xl font-bold text-center">Product categories</h3>
        <CgShapeZigzag className="mx-auto mb-5 -mt-3 text-5xl" />
      </Fade>
      <div className="mx-4 md:grid md:grid-cols-2 md:gap-4">
        {ProductionContents.map((content, i) => (
          <div
            key={i}
            className="relative w-full max-w-md px-2 py-24 mx-auto mb-2"
          >
            <div className="absolute top-0 left-0 z-10 h-full p-4 text-sm bg-blue-primary/70 w-44 backdrop-blur-sm text-neutral-50">
              <h5 className="font-bold">{content.title}</h5>

              <div className="my-4 text-xl font-bold text-amber-400">
                <CountUp end={content.capacity} />
              </div>
              <p className="mb-4 font-semibold">{content.unit}</p>
              <Link href={content.link} passHref>
                <a className="font-semibold text-amber-100">Download pdf</a>
              </Link>
            </div>
            <Image
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              src={content.image}
              alt={content.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
