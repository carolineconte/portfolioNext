'use client'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
//Components
import Project from './ProjectCard';
import SectionTitle from './section-title'
//Data
import { projectsData } from '@/lib/data'
import { useTranslation } from 'react-i18next';

export default function ProjectsSection() {
  const { t } = useTranslation('projects');
  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold:0.5
  });
 
  useEffect(() => {
    if (inView) {
      setActiveSection('projects')
    }
  }, [inView, setActiveSection])


  return (

    <section id='projects' ref={ref} className='scroll-mt-28 mb-28'>
     <SectionTitle>{t('projects:title')}</SectionTitle>
      <div className='justify-center'>
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
