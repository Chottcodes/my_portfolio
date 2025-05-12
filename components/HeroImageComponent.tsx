"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Linkedin, Github, Mail, Code, Phone } from "lucide-react";

const HeroImageComponent = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("cwellshott@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center relative p-2 sm:p-4">
      {/* Left Side Image */}
      <div className="w-full h-[300px] md:h-[450px] lg:h-full lg:w-1/2 relative mb-6 lg:mb-0">
        <Image
          src={"/assets/images/portrait.jpg"}
          width={1000}
          height={1000}
          alt={"portrait image"}
          className="object-cover w-full h-full filter brightness-80 rounded-lg"
          priority
        />
        <div
          className="absolute bottom-0 right-0 h-full w-[15%] bg-[#151515] hidden lg:block"
          style={{
            background:
              "linear-gradient(to left, #151515 50%, transparent 100%)",
          }}
        ></div>
      </div>

      {/* Right Side Content */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center text-center text-[#EAE3C9] gap-2 sm:gap-3 md:gap-4">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl m-0 leading-none font-bold">
          Chris Hott
        </h1>

        <Code className="w-5 h-5 sm:w-6 sm:h-6" />

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl m-0 leading-tight">
          Software Engineer
        </p>

        <p className="w-[90%] max-w-[400px] text-xs sm:text-sm md:text-base m-0 leading-snug px-2 sm:px-4">
          Passionate developer committed to crafting clean, efficient, and
          scalable code.
        </p>

        {/* Social Icons */}
        <div className="flex justify-evenly items-center gap-4 sm:gap-6 mt-2 sm:mt-3">
          <a
            href="https://www.linkedin.com/in/christopher-wells-hott-600188306"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Linkedin className="text-[#EAE3C9] w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-500 transition-colors duration-200" />
          </a>
          <a
            href="https://github.com/Chottcodes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Github className="text-[#EAE3C9] w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-500 transition-colors duration-200" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col xs:flex-row justify-center items-center flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base">
          {/* Email - click to copy */}
          <div
            onClick={handleCopyEmail}
            className="flex items-center gap-2 cursor-pointer group relative"
            title="Click to copy email"
          >
            <Mail className="text-[#EAE3C9] w-4 h-4 sm:w-5 sm:h-5 group-hover:text-blue-500 transition-colors duration-200" />
            <p className="group-hover:underline break-all">
              cwellshott@gmail.com
            </p>
            {emailCopied && (
              <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-green-400 text-xs whitespace-nowrap">
                Copied!
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Phone className="text-[#EAE3C9] w-4 h-4 sm:w-5 sm:h-5" />
            <p>209-329-9737</p>
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <a
            href="/file/Revised_Resume.pdf"
            download
            className="w-[150px] h-[45px] sm:w-[180px] sm:h-[55px] md:w-[180px] md:h-[60px] 
                      border border-[#EAE3C9] rounded-[25px] 
                      flex justify-center items-center text-[#EAE3C9]
                      text-sm sm:text-base
                      transition-all duration-200 ease-in-out 
                      hover:bg-[#EAE3C9]/10 hover:scale-105
                      focus:outline-none focus:ring-2 focus:ring-[#EAE3C9]/50"
            aria-label="Download Resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImageComponent;
