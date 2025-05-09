import Image from "next/image";
import React from "react";
import cardData from "../data/cardData.json";

const SkillsComponent = () => {
  return (
    <div className="w-full h-full">
      <div className="h-[20%] w-full text-[40px] flex justify-center items-center text-[#EAE3C9]">
        <h2>Technical Skills</h2>
      </div>
      <main className="h-[80%] w-full flex">
        <div className="h-full w-[50%] flex justify-evenly items-center relative">
          {cardData.map((data, index) => (
            <Image
              key={index}
              src={data.imageUrl}
              width={1000}
              height={1000}
              alt={""}
              className=" object-contain w-[75px] h-[75px]"
            />
          ))}
        </div>
        <div className="w-[50%] h-full relative">
          <Image
            src={"/assets/images/codingImage.jpg"}
            alt={""}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </main>
    </div>
  );
};

export default SkillsComponent;
