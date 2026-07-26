import AboutMe from "./components/home/about-me";
import Contact from "./components/home/contact";
import EducationSkills from "./components/home/education-skills";
import ExperienceSec from "./components/home/experience-sec";
import HeroSection from "./components/home/hero-section";
import ContactBar from "./components/home/hero-section/contact-bar";
import LatestWork from "./components/home/Projects";


const Page = () => {
  return (
    <main>
      <HeroSection />
      <ContactBar />
      <AboutMe />
      <ExperienceSec />
      <EducationSkills />
      <LatestWork />
     
      <Contact />
    </main>
  );
};

export default Page;