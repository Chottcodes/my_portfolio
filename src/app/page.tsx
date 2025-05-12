import AboutMeComponent from "../../components/AboutMeComponent";
import FadeInSection from "../../components/FadeInSection";
import HeroImageComponent from "../../components/HeroImageComponent";
import ProjectComponent from "../../components/Project";
import SkillsComponent from "../../components/SkillsComponent";
import cardData from "../../data/cardData.json";
import projectData from "../../data/projectsData.json";

export default function Home() {
  return (
    <div className="h-[100dvh] overflow-y-auto bg-black custom-scrollbar">
      <FadeInSection className="w-full h-full lg:h-[80%] bg-[#151515] ">
        <HeroImageComponent />
      </FadeInSection>
      
      <FadeInSection className="w-full h-auto flex justify-center">
        <AboutMeComponent />
      </FadeInSection>
      
      <FadeInSection className="w-full py-8 md:py-12 flex flex-col justify-evenly items-center">
        <div className="w-full mb-6 md:mb-8 flex justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EAE3C9] to-[#EAE3C9]/70 bg-clip-text text-transparent tracking-wide">
            Technical Skills
          </h2>
        </div>
        <div className="w-full lg:w-[80%] px-4 overflow-x-auto custom-scrollbar">
          <div className="flex gap-4 pb-2">
            {cardData.map((data, index) => (
              <SkillsComponent
                key={index}
                image={data.imageUrl}
                name={data.name}
              />
            ))}
          </div>
        </div>
      </FadeInSection>
      
      <FadeInSection className="w-full py-10 md:py-16 flex flex-col items-center">
        <div className="w-full mb-8 md:mb-12 flex justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EAE3C9] to-[#EAE3C9]/70 bg-clip-text text-transparent tracking-wide">
            Projects
          </h2>
        </div>

        <div className="w-full max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectData.map((data, index) => (
              <ProjectComponent key={index} {...data} />
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}