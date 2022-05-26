import React from "react";
import { Chrono } from "react-chrono";
import { aboutItems, History } from "../../lib/data";
import { GoMilestone } from "react-icons/go";
import Image from "next/image";
import historyy from "../../public/assets/history.jpg";

const history = () => {
  return (
    <div>
      <div className="w-full relative h-[300px]">
        <Image src={historyy} objectFit="cover" layout="fill" alt="history" />
      </div>
      <div className="container px-4 py-12 mx-auto">
        <h1 className="">{History.sub1}</h1>
        <h1 className="my-4">{History.sub2}</h1>
        <ul>
          {History.list.map((h, i) => {
            return (
              <div key={i} className="flex items-center gap-2">
                <GoMilestone />
                <li key={i}>{h}</li>
              </div>
            );
          })}
        </ul>
      </div>
      <div
        style={{
          maxWidth: "500px",
          marginInline: "auto",
          overflowX: "hidden",
          padding: "40px 0",
        }}
      >
        <Chrono
          cardHeight={100}
          fontSizes={{
            cardSubtitle: "2rem",
            cardText: "0.8rem",
            cardTitle: "1rem",
          }}
          heme={{
            primary: "red",
            secondary: "blue",
            cardBgColor: "blue",
            cardForeColor: "violet",
            titleColor: "red",
          }}
          hideControls
          items={aboutItems}
          slideShow
          borderLessCards
        />
      </div>
    </div>
  );
};

export default history;
