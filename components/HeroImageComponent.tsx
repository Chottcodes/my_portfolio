import Image from "next/image";
import React from "react";

const HeroImageComponent = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="w-[50%] h-full relative">
        <Image
          src={"/assets/images/portrait.jpg"}
          width={1000}
          height={1000}
          alt={"portrait image"}
          className="object-cover w-full h-full filter brightness-80"
        />
        <div
          className="absolute bottom-0 right-0 h-full w-[10%] bg-[#151515]"
          style={{
            background: "linear-gradient(to left, #151515 50%, transparent 100%)",
          }}
        ></div>
      </div>
      <div className="w-[50%] h-full flex flex-col justify-center items-center text-center text-[#EAE3C9]">
        <h1 id="Title" className="text-[100px] m-0 leading-none">
          Chris Hott
        </h1>
        <p className="text-[50px] m-0 leading-tight">Software Engineer</p>
        <p className="w-[400px] text-[15px] m-0 leading-snug">
          Passionate developer committed to crafting clean, efficient, and
          scalable code.
        </p>
      </div>
      <div className="w-full h-full absolute bottom-0 bg-black/15"></div>
    </div>
  );
};

export default HeroImageComponent;
