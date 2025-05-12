import React from "react";
import { Code, Music, Bike } from "lucide-react";

export default function AboutMeComponent() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-[#EAE3C9] py-12 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-[#EAE3C9]/10 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-l from-[#EAE3C9]/10 to-transparent rounded-full blur-xl"></div>

      <div className="max-w-3xl w-full bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 border border-[#EAE3C9]/20 relative z-10">
        {/* Glass effect decorative corner */}
        <div className="absolute -top-2 -right-2 w-20 h-20 bg-[#EAE3C9]/5 rounded-full blur-md"></div>

        <header className="mb-8 text-center relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[#EAE3C9]/60 to-transparent"></div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EAE3C9] to-[#EAE3C9]/70 bg-clip-text text-transparent tracking-wide">
            About Me
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#EAE3C9]/60 to-transparent mx-auto mt-4 rounded-full"></div>
        </header>

        <div className="text-base md:text-lg lg:text-xl leading-relaxed space-y-6">
          <div className="flex items-start space-x-3">
            <Code className="text-[#EAE3C9]/70 mt-1 flex-shrink-0" size={20} />
            <p className="text-[#EAE3C9]/90">
              Hi, Im{" "}
              <span className="text-[#EAE3C9] font-medium">Chris Hott</span>, a
              full-stack developer with a year of hands-on coding experience. I
              specialize in building modern web applications using{" "}
              <span className="text-[#EAE3C9] font-medium">
                Next.js (React), TypeScript, and C#
              </span>
              , and I thrive in collaborative environments as a strong team
              player and communicator.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <Bike className="text-[#EAE3C9]/70 mt-1 flex-shrink-0" size={20} />
            <p className="text-[#EAE3C9]/90">
              Im currently leading the development of {' '}
              <span className="text-[#EAE3C9] font-medium italic">
               Lets Ride
              </span>{" "}
                a GPS powered app designed for motorcycle riders  overseeing
              both frontend and backend development.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <Music className="text-[#EAE3C9]/70 mt-1 flex-shrink-0" size={20} />
            <p className="text-[#EAE3C9]/90">
              Outside of coding, Im also a passionate musician with a love for
              creating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
