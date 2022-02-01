import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import SectionSkills from "../components/SectionSkills";
import SectionProjects from "../components/SectionProjects";

export default function Home() {
  return (
      <>  
          <Hero />
          <ProfileSection />
          <SectionSkills />
          <SectionProjects />
      </>
    )
}
