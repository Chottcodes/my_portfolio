import Image from "next/image";
import React from "react";
import { Github } from "lucide-react";

// Assuming this is your Project interface
interface Skill {
  skillImage: string;
  name?: string;
}

interface Project {
  name: string;
  description: string;
  projectImage: string;
  github: string;
  vercel: string;
  skills: Skill[];
}

const ProjectComponent = (props: Project) => {
  return (
    <div className="w-full h-full border border-[#EAE3C9]/30 rounded-2xl overflow-hidden 
                    shadow-md hover:shadow-lg hover:shadow-[#EAE3C9]/10 hover:border-[#EAE3C9]/50
                    transition-all duration-300 flex flex-col">
      {/* Image Section */}
      <div className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 relative">
        <a
          href={props.vercel}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full block"
          aria-label={`Visit ${props.name} project`}
        >
          <Image
            src={props.projectImage || "/assets/images/placeholder.png"}
            alt={`${props.name} project screenshot`}
            fill
            className="object-contain object-center hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </a>
      </div>

      {/* Content Section */}
      <div className="flex-grow px-3 sm:px-4 py-3 sm:py-4 flex flex-col">
        {/* Project Title and GitHub Link */}
        <div className="w-full flex justify-between items-center mb-2 sm:mb-3">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#EAE3C9] to-[#EAE3C9]/70 bg-clip-text text-transparent tracking-wide
                         truncate max-w-[85%]">
            {props.name}
          </h2>
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-125"
            aria-label={`${props.name} GitHub repository`}
          >
            <Github className="w-5 h-5 xs:w-6 xs:h-6 text-[#EAE3C9]/90 hover:text-[#EAE3C9]" />
          </a>
        </div>

        {/* Project Description */}
        <p className="text-[#EAE3C9]/90 text-xs xs:text-sm sm:text-base mb-auto line-clamp-3 sm:line-clamp-4">
          {props.description}
        </p>
      </div>

      {/* Skills Section */}
      <div className="w-full py-3 px-2 flex justify-evenly items-center flex-wrap gap-2 bg-[#0D0D0D]/30 border-t border-[#EAE3C9]/10">
        {props.skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex justify-center items-center transition-transform duration-300 hover:scale-110"
            title={skill.name || ""}
          >
            <div className="relative w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8">
              <Image
                src={skill.skillImage || "/assets/images/placeholder.png"}
                alt={skill.name || "Skill icon"}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 24px, 32px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;