import AboutMeComponent from "../../components/AboutMeComponent";
import HeroImageComponent from "../../components/HeroImageComponent";
import ProjectComponent from "../../components/Project";
import SkillsComponent from "../../components/SkillsComponent";
import cardData from "../../data/cardData.json";

export default function Home() {
  return (
    <div className="h-[100dvh] overflow-y-auto  bg-black">
      <header className="w-full h-[80%] bg-[#151515] ">
        <HeroImageComponent />
      </header>
      <div className="w-full h-auto flex justify-center">
        <AboutMeComponent />
      </div>
      <div className="w-full h-[400px] ">
        <div className="w-full h-[10%] flex justify-center items-center text-[30px]">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EAE3C9] to-[#EAE3C9]/70 bg-clip-text text-transparent tracking-wide">
            Technical Skills
          </h2>
        </div>
        <div className="w-[90%] h-[50%] flex justify-center items-center m-auto mt-5">
          {cardData.map((data, index) => (
            <SkillsComponent image={data.imageUrl} name={data.name} key={index} />
          ))}
        </div>
      </div>
      <div className="w-full h-[450px]">
        <ProjectComponent />
      </div>
    </div>
  );
}
