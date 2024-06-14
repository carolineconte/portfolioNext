'use client'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
//Components
import Project from './ProjectCard';
//Data
import { projectsData } from '@/lib/data'
import { useTranslation } from 'react-i18next';
import SectionTitleBg from './section-title-bg';

export default function ProjectsSection() {
  const { t } = useTranslation('projects');
  const { setActiveSection, setMobileNavOpen } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.5
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('projects')
    }
  }, [inView, setActiveSection])


  return (

    <section id='projects' ref={ref} className='scroll-mt-28 w-full max-w-[1500px]' onClick={() => setMobileNavOpen(false)}>
      <SectionTitleBg>Sites & Landing Pages</SectionTitleBg>
      <div className='justify-center flex flex-wrap gap-5 my-5'>
        {
          [...projectsData].reverse().map((project, i) => (
            <Project key={i} {...project} />
          ))
        }
      </div>
    </section>
  )
}

type ProjectsProps = typeof projectsData[number];
