'use client'
import React, { useEffect } from 'react'
import SectionTitle from './section-title'
import { useInView } from 'react-intersection-observer'
//Context
import { useActiveSectionContext } from '@/context/active-section-context';
//data
import { useTranslation } from 'react-i18next';

export default function About() {

  const { t } = useTranslation('about');
  const { setActiveSection } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('about')
    }
  }, [inView, setActiveSection])

  return (
    <section id='about' ref={ref}
      className='scroll-mt-28 mb-28 max-w-[60rem] text-center leading-8 text-slate-900 text-[1.1rem] sm:mb-24'>
      <SectionTitle>{t('about:title')}</SectionTitle>
      <p className='font-bold  text-[1.3rem] text-fuchsia-900'>{t('about:paragraph1')}</p>
      <p className='mt-3'>{t('about:paragraph2')}</p>
      <p className='mt-3'>{t('about:paragraph3')}</p>
      <p className='mt-3'>{t('about:paragraph4')}</p>
      <p className='mt-3'>{t('about:paragraph5')}</p>
    </section>
  )
}
