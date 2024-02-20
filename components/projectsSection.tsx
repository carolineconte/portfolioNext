'use client'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
//Components
import Project from './ProjectCard';
import SectionTitle from './section-title'
//Data
import { projectsData } from '@/lib/data'

export default function ProjectsSection() {

  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold:0.5
  });
 
  useEffect(() => {
    if (inView) {
      setActiveSection('Progetti')
    }
  }, [inView, setActiveSection])


  return (

    <section id='projects' ref={ref} className='scroll-mt-28 mb-28 mx-auto'>
      <SectionTitle>Progetti</SectionTitle>
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
