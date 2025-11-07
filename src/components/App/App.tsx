import { useRef } from "react"
import bgHeader from "../../assets/bgHeader.png"
import { AboutMe } from "../AboutMe/AboutMe"
import { Certificate } from "../Certificate/Certificate"
import { Header } from "../Header/Header"
import Menu from "../Menu/Menu"
import { Project } from "../Project/Project"
import { Skills } from "../Skills/Skills"
import { ProfessionalExperience } from "../ProfessionalExperience/ProfessionalExperience"

function App() {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const certificateRef = useRef<HTMLDivElement | null>(null);
  const ProfessionalExperienceRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

 const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};
  return (
    <>
      <div className="bg-cover bg-center h-screen  pt-5"
        style={{ backgroundImage: `url(${bgHeader})` }}>
        <Menu
          scrollToAboutMe={() => scrollToSection(aboutMeRef)}
          scrollToSkills={() => scrollToSection(skillsRef)}
          scrollToCertificate={() => scrollToSection(certificateRef)}
          scrollToProfessionalExperience={() => scrollToSection(ProfessionalExperienceRef)}
          scrollToProject={() => scrollToSection(projectRef)}
          
        />
        <Header />
      </div>
      <div className="flex flex-col gap-10 bg-[#f4f5f7]">

        <AboutMe sectionRef={aboutMeRef} />
        <Skills sectionRef={skillsRef} />
        <Certificate sectionRef={certificateRef} />
        <ProfessionalExperience sectionRef={ProfessionalExperienceRef} />
        <Project sectionRef={projectRef} />
      </div>


    </>
  )
}

export default App
