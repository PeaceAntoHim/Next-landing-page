import Hero from "../components/Hero";
import SectionProfile from "../components/SectionProfile";
import SectionSkills from "../components/SectionSkills";
import SectionProjects from "../components/SectionProjects";
import SectionContact from "../components/SectionContact";

export default function Home() {
  return (
      <>  
          <Hero />
          <SectionProfile />
          <SectionSkills />
          <SectionProjects />
          <SectionContact />
      </>
    )
}
