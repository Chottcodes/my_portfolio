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
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center relative p-4">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 h-full relative mb-6 md:mb-0">
        <Image
          src={"/assets/images/portrait.jpg"}
          width={1000}
          height={1000}
          alt={"portrait image"}
          className="object-cover w-full h-full filter brightness-80 rounded-lg"
        />
        <div
          className="absolute bottom-0 right-0 h-full w-[15%] bg-[#151515] hidden md:block"
          style={{
            background: "linear-gradient(to left, #151515 50%, transparent 100%)",
          }}
        ></div>
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center text-center text-[#EAE3C9] gap-4">
        <h1 className="text-[48px] md:text-[100px] m-0 leading-none font-bold">Chris Hott</h1>
        <Code className="w-6 h-6" />
        <p className="text-[24px] md:text-[50px] m-0 leading-tight">Software Engineer</p>
        <p className="w-[90%] max-w-[400px] text-[14px] md:text-[15px] m-0 leading-snug">
          Passionate developer committed to crafting clean, efficient, and scalable code.
        </p>

        {/* Social Icons */}
        <div className="flex justify-evenly items-center gap-6 mt-2">
          <a
            href="https://www.linkedin.com/in/christopher-wells-hott-600188306"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="text-[#EAE3C9] w-6 h-6 hover:text-blue-500" />
          </a>
          <a
            href="https://github.com/Chottcodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="text-[#EAE3C9] w-6 h-6 hover:text-blue-500" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 text-sm sm:text-base">
          {/* Email - click to copy */}
          <div
            onClick={handleCopyEmail}
            className="flex items-center gap-2 cursor-pointer group"
            title="Click to copy email"
          >
            <Mail className="text-[#EAE3C9] w-5 h-5 group-hover:text-blue-500" />
            <p className="group-hover:underline break-all">cwellshott@gmail.com</p>
            {emailCopied && (
              <span className="text-green-400 text-xs">Copied!</span>
            )}
          </div>

        
          <div className="flex items-center gap-2">
            <Phone className="text-[#EAE3C9] w-5 h-5" />
            <p>209-329-9737</p>
          </div>
        </div>


        <div className="mt-6">
          <a
            href="/file/Revised_Resume.pdf"
            download
            className="w-[180px] h-[60px] border border-[#EAE3C9] rounded-[25px] duration-200 ease-in-out hover:w-[185px] hover:h-[70px] flex justify-center items-center text-[#EAE3C9]"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImageComponent;
