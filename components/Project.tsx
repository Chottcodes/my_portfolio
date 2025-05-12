import Image from "next/image";
import React from "react";
import { Project } from "../interface/interface";
import { Github } from "lucide-react";

const ProjectComponent = (props: Project) => {
  return (
    <div className="w-full h-full border-1 border-[#EAE3C9] rounded-2xl overflow-hidden">
      {/* Image   */}
      <div className=" lg:h-[60%] w-full ">
        <a
          href={props.vercel}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={props.projectImage || "/assets/images/placeholder.png"}
            alt={"Desktop"}
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />{" "}
        </a>
      </div>
      {/* my Content section       */}
      <div className="h-[25%] w-full flex flex-col justify-evenly items-center">
        <div className=" w-full h-[20%] flex justify-center items-center gap-5 text-[#EAE3C9]">
          <h2 className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-[#EAE3C9] to-[#EAE3C9]/70 bg-clip-text text-transparent tracking-wide">
            {props.name}
          </h2>
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="lg:w-[20px] lg:h-[20px] hover:lg:w-[30px] hover:lg:h-[30px] cursor-pointer" />
          </a>
        </div>
        <p className="text-[#EAE3C9] text-lg text-center ">
          {props.description}
        </p>
      </div>
      {/* Skills needed for the project */}
      <div className="w-full h-[20%] flex justify-evenly items-center ">
        {props.skills.map((skill, index) => (
          <div key={index} className="flex justify-center items-center ">
            <Image
              src={skill.skillImage || "/assets/images/placeholder.png"}
              alt="skills icon"
              height={100}
              width={100}
              className="object-contain lg:h-[30px] lg:w-[30px] hover:lg:w-[40px] hover:lg:h-[40px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
