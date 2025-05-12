import AboutMeComponent from "../../components/AboutMeComponent";
import FadeInSection from "../../components/FadeInSection";
import HeroImageComponent from "../../components/HeroImageComponent";
import ProjectComponent from "../../components/Project";
import SkillsComponent from "../../components/SkillsComponent";
import cardData from "../../data/cardData.json";
import projectData from "../../data/projectsData.json";

export default function Home() {
  return (
    <div className="h-[100dvh] overflow-y-auto  bg-black">
      <FadeInSection className="w-full h-[80%] bg-[#151515] ">
        <HeroImageComponent />
      </FadeInSection>
      <FadeInSection className="w-full h-auto flex justify-center">
        <AboutMeComponent />
      </FadeInSection>
      <FadeInSection className="w-full h-[300px] flex flex-col justify-evenly items-center ">
        <div className="w-full h-[50%] flex justify-center items-center text-[30px]">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EAE3C9] to-[#EAE3C9]/70 bg-clip-text text-transparent tracking-wide">
            Technical Skills
          </h2>
        </div>
        <div className="w-[80%] h-[50%] flex justify-center items-center m-auto mt-5 ">
          {cardData.map((data, index) => (
            <div className="w-[80%] flex items-stretch" key={index}>
              <SkillsComponent image={data.imageUrl} name={data.name} />
            </div>
          ))}
        </div>
      </FadeInSection>
      <FadeInSection className="w-full h-[750px] flex flex-col justify-evenly items-center pb-5 pt-5">
        <div className="w-full h-[30%] flex justify-center items-center text-[30px]">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EAE3C9] to-[#EAE3C9]/70 bg-clip-text text-transparent tracking-wide">
            Projects
          </h2>
        </div>

        <FadeInSection className="w-[80%] h-[90%] flex justify-evenly items-center gap-5">
          {projectData.map((data, index) => (
            <ProjectComponent key={index} {...data} />
          ))}
        </FadeInSection>
      </FadeInSection>
    </div>
  );
}
