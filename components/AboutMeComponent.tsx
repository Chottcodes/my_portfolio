import Image from "next/image";
import React from "react";

export const AboutMeComponent = () => {
  return (
    <div
      className="w-full h-full flex flex-col justify-evenly items-center  text-[#EAE3C9] "
    >
      <header className="h-[20%] w-full flex justify-center items-center ">
        <h2 className="pt-5 text-[40px]">About Me</h2>
      </header>
      <div className="h-[60%] w-[60%] text-[20px] text-center ">
        <p>
          Hi,I'm Chris Hott, a full-stack developer with a year of hands-on
          coding experience.I specialize in building modern web applications
          using Next.js (React),TypeScript, and C#, and I thrive in
          collaborative enviroments as a strong team player and communicator.
          I'm currently leading the development of Let's Ride, a social app for
          motorcycle riders, where I manage both frontend and backend efforts.
          Outside of coding,I'm also a passionate musician.
        </p>
      </div>
    </div>
  );
};
