import About from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { Skills } from "@/components/Skills";
import { Intro } from "@/components/intro";
import ProjectsSection from "@/components/projectsSection";
import SectionDivider from "@/components/section-divider";

export default function Home() {

  return (
    <main className='flex flex-col items-center w-full'>
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <Skills />
      <ContactSection />
    </main>
  )
}
