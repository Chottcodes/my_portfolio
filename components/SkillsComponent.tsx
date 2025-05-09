"use client"
import Image from "next/image";
import React from "react";
import cardData from "../data/cardData.json";
import { motion } from "framer-motion";

const SkillsComponent = () => {
  return (
    <div className="w-full h-full">
      <div className="h-[20%] w-full text-[40px] flex justify-center items-center text-[#EAE3C9]">
        <h2>Technical Skills</h2>
      </div>
      <main className="h-[80%] w-full flex">
        <motion.div animate={{x: ["0%","-50%"]}} transition={{repeat:Infinity, ease:'linear', duration:10}} className="h-full w-[50%] flex justify-between items-center gap-7  relative">
          {[...cardData,...cardData,...cardData].map((data, index) => (
            <Image
              key={index}
              src={data.imageUrl}
              width={1000}
              height={1000}
              alt={""}
              className=" object-contain w-[75px] h-[75px] hover:w-[100px] hover:h-[100px]"
            />
       
          ))}
        </motion.div>
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
