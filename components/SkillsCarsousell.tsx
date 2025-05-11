"use client";
import React from "react";
import SkillsComponent from "./SkillsComponent";
import cardData from "../data/cardData.json"; // adjust path if needed

const SkillsCarousel = () => {
  
  const repeatedData = [...cardData, ...cardData];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex  scroll-carousel">
        {repeatedData.map((data, index) => (
          <div key={index} className="w-[30%] h-[140px] flex-shrink-0">
            <SkillsComponent image={data.imageUrl} name={data.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
