"use client";
import Image from "next/image";
import React from "react";

const SkillsComponent = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className="min-w-[120px]  sm:min-w-[160px] md:w-full h-full px-2">
      <div className="h-[90%] w-full flex justify-center">
        <div
          className="h-full w-full flex flex-col justify-between items-center gap-3 sm:gap-5 lg:gap-7 
                      relative rounded-lg pt-3 pb-2
                      border border-[#EAE3C9]/20 
                      transition-all duration-300 ease-in-out
                      hover:border-[#EAE3C9]/40 hover:shadow-md hover:shadow-[#EAE3C9]/10"
        >
          <div
            className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[65px] lg:h-[65px]
                         transition-transform duration-300 ease-in-out
                         hover:scale-110"
          >
            <Image
              src={image}
              fill
              alt={`${name} icon`}
              className="object-contain"
              sizes="(max-width: 480px) 40px, 
                     (max-width: 640px) 48px, 
                     (max-width: 768px) 64px, 
                     65px"
            />
          </div>

          <p
            className="text-[#EAE3C9]/90 text-xs  lg:text-lg
                        w-full text-center px-2 truncate"
          >
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
