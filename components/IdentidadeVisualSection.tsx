'use client'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
//Components
import Project from './ProjectCard';
//Data
import { designsData } from '@/lib/data'
import { useTranslation } from 'react-i18next';
import SectionTitleBg from './section-title-bg';

export default function DesignSection() {
  const { t } = useTranslation('design');
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

    <section id='projects' ref={ref} className='scroll-mt-28 mb-28 w-full max-w-[1500px]' onClick={() => setMobileNavOpen(false)}>
      <SectionTitleBg>Design</SectionTitleBg>
      <div className='justify-center flex flex-wrap gap-5'>
        {
          [...designsData].reverse().map((project, i) => (
            <Project key={i} title={project.title} imageUrl={project.imageUrl} />
          ))
        }
      </div>
    </section>
  )
}

type ProjectsProps = typeof designsData[number];
