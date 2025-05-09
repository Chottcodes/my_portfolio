
import AboutMeComponent from "../../components/AboutMeComponent";
import HeroImageComponent from "../../components/HeroImageComponent";
import SkillsComponent from "../../components/SkillsComponent";


export default function Home() {
  return (
   <div className="h-[100dvh] overflow-y-auto  bg-black"> 
    <header className="w-full h-[80%] bg-[#151515] ">
      <HeroImageComponent/>
    </header>
      <div className="w-full h-auto flex justify-center">
        <AboutMeComponent/>
      </div>
    <div className="w-full h-[400px] ">
      <SkillsComponent/>
    </div>
    <div className="w-full h-[450px]">
      

    </div>
   </div>
  );
}
