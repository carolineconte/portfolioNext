import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '../i18n'
import About from '@/components/About';

import { Header } from '@/components/header'
import { ContactSection } from "@/components/ContactSection";
import { Skills } from "@/components/Skills";
import { Intro } from "@/components/intro";
import ProjectsSection from "@/components/projectsSection";
import SectionDivider from "@/components/section-divider";
import LanguageChanger from "@/components/LanguageSwtich";
import { Footer } from '@/components/Footer'


const i18nNamespaces = ['header','intro','about','contact','projects'];

export default async function Home({params: { locale }}: any) {

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className='flex flex-col items-center w-full'>
      <Header />
        <LanguageChanger />
        <Intro />
        <SectionDivider />
        <About />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <Skills />
        <ContactSection />
        <Footer />
      </main>
    </TranslationsProvider>
  )
}
