import React from "react";

import wd from "../public/assets/category/wd.jpg";
import kg from "../public/assets/category/knit-garments.png";
import knit from "../public/assets/category/knit.png";
import knitting from "../public/assets/category/Knitting.jpg";
import sp from "../public/assets/category/rotary-screen-printing.jpg";
import { Container, H1 } from "../lib/styles";
import Image from "next/image";
import Link from "next/link";
import { CgShapeZigzag } from "react-icons/cg";

const industryData = [
  {
    image: wd,
    title: "Woven Dyeing",
    capacity: 150000,
    unit: "yards per day",
    link: "/Woven-Dyeing.pdf",
    content: [
      "The Woven dyeing division of Fatullah Fabrics exclusively in woven dyeing high-quality colors and makes excellent woven products that are valuable required in the market.",
      "With ultramodern woven dyeing facilities and skilled staff, 1, 50,000 yards of woven fabrics are produced per Day, consequent in the company's production its mark in the woven products industry.",
    ],
  },
  {
    image: kg,
    title: "knitting",
    capacity: 6,
    unit: "tons per day",
    link: "/Knit-Garments.pdf",
    content: [
      "We are among the great knitting industries of Bangladesh and manufacture the most excellent quality fabrics for our clients. Over the years our quality products and standing have produced a strong business relation with our clients. We use the latest technology, energy-efficient machinery, and environment-friendly production to deliver excellent quality to our clients.",
    ],
  },
  {
    image: knit,
    title: "Knit Dyeing",
    capacity: 150000,
    unit: "yards per day",
    link: "/Knit-Dyeing.pdf",
    content: [
      "Our onsite lab makes quality color, in the lowest time, as per our customer requirements. We deliver excellent products, and our growing customer is dependent on us. That&#39;s why we encourage making ourselves give our best.",
    ],
  },
  {
    image: knitting,
    title: "Knit Garments",
    capacity: 24000,
    unit: "pieces per day",
    link: "/Knitting.pdf",
    content: [
      "Many hardworking and skilled persons have been working in Fatullah Fabrics garment factories who work to make top-notch excellent products. These products are exported to different parts of the world.",
    ],
  },
  {
    image: sp,
    title: "Knit Screen Printing",
    capacity: 24000,
    unit: "pieces per day",
    link: "/Knit-Screen-Printing.pdf",
    content: [
      "The addition of screen printing unit has helped us attend to more buyer demands on-site by eliminating errors. The high quality chemicals used for printing ensures buyer satisfaction and reduces production lead time.",
    ],
  },
];

const Industries = () => {
  return (
    <>
      <H1 className="my-8">Industries</H1>

      {industryData.map((data, i) => (
        <div
          key={i}
          className="items-center justify-center mb-8 last:mb-0 md:flex md:gap-4 odd:bg-blue-primary odd:text-neutral-50"
        >
          <div className="px-2 py-8 md:max-w-sm">
            <p className="container mb-4 text-xl font-semibold tracking-wider uppercase">
              {data.title}
            </p>
            {data.content.map((content, i) => (
              <p key={i} className="py-4 text-sm ">
                {content}
              </p>
            ))}
            <Link href={data.link} passHref>
              <a
                className={`px-6 mt-4 py-2 text-sm font-semibold tracking-widest uppercase border-2 ${
                  i % 2 === 0
                    ? "text-neutral-900 border-neutral-900 "
                    : "text-neutral-50 border-neutral-50 "
                }`}
              >
                Download pdf
              </a>
            </Link>
          </div>
          <div className="w-full relative h-[300px] md:m-4 md:max-w-md">
            <Image
              src={data.image}
              objectFit="cover"
              layout="fill"
              alt="history"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Industries;
