'use client'
import React, { useEffect } from 'react'
import SectionTitle from './section-title'
import { useInView } from 'react-intersection-observer'
//Context
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {

  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('Profilo')
    }
  }, [inView, setActiveSection])


  return (
    <section id='about' ref={ref}
      className='scroll-mt-28 mb-28 max-w-[50rem] text-center leading-8 sm:mb-24'>
      <SectionTitle>Profilo</SectionTitle>
      <p className='mb-3'>
        Durante quest&apos;anno, mi sono completamente dedicata all&apos;apprendimento
        dello sviluppo di siti web e ora sto cercando l&apos;opportunità di avviare la mia
        carriera in questo campo. <br></br>
        <span className='italic'>
          Guardo al futuro con eccitazione, pronta ad abbracciare nuove opportunità e a
          continuare a superare le sfide con coraggio e determinazione.
        </span>
      </p>
    </section>
  )
}
