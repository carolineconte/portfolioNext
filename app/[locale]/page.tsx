import About from '@/components/About';

import { ContactSection } from "@/components/ContactSection";
import { Skills } from "@/components/Skills";
import { Intro } from "@/components/intro";
import ProjectsSection from "@/components/projectsSection";
import { Footer } from '@/components/Footer'
import DesignSection from '@/components/IdentidadeVisualSection';


export default async function Home({ params: { locale } }: any) {

  return (
      <main className='flex flex-col items-center w-full'>
        <Intro />
        <About />
        <ProjectsSection />
        <DesignSection />
        <Skills />
        <ContactSection />
        <Footer />
      </main>
  )
}
