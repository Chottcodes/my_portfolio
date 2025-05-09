"use client";
import Image from "next/image";
import React from "react";


const SkillsComponent = ({ image,name }: { image: string ; name:string}) => {
  return (
    <div className="w-full h-full ">
     <main className="h-[80%] w-full flex justify-center">
        <div className="h-full w-[90%] flex flex-col justify-between items-center gap-7 relative rounded-lg pt-3 border border-[#EAE3C9]/20 ">
          <Image
            src={image}
            width={1000}
            height={1000}
            alt={""}
            className=" object-contain lg:w-[65px] lg:h-[65px] hover:w-[75px] hover:h-[75px]"
          />
          <p className="text-[#EAE3C9]/90">{name}</p>
        </div>
      </main>
    </div>
  );
};

export default SkillsComponent;
