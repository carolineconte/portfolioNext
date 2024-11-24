'use client'
import React, { useEffect } from 'react'
import SectionTitle from './section-title'
import { useInView } from 'react-intersection-observer'
//Context
import { useActiveSectionContext } from '@/context/active-section-context';
//data
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function About() {

  const { t } = useTranslation('about');
  const { setActiveSection, setMobileNavOpen } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('about')
    }
  }, [inView, setActiveSection])

  return (
    <section id='about' ref={ref} onClick={() => setMobileNavOpen(false)}
      className='relative scroll-mt-28 max-w-[1200px] p-5 overflow-hidden pb-16 leading-8 dark:text-white/80 
      sm:mb-24 border-2 md:rounded-lg md:m-5 border-dark-blue lg:text-xl lg:mt-10 lg:font-light'>

      <SectionTitle>{t('about:title')}</SectionTitle>
      <p className='font-bold font-["saudagar"] text-[1.5rem] lg:text-[2rem]'>{t('about:saudacao')}</p>
      <p className='font-bold font-["saudagar"] text-[1.4rem] lg:text-[2rem] lg:mb-5 lg:mt-3'>{t('about:paragraph1')}</p>
      <p className='mt-3 lg:w-[80%] lg:mb-5'>{t('about:paragraph2')}</p>
      <p className='mt-3 md:w-[95%] lg:w-[75%] lg:mb-5'>{t('about:paragraph3')}</p>
      <p className='mt-3 md:w-[85%] lg:w-[80%] xl:w-[70%] lg:mb-5'>{t('about:paragraph4')}</p>
      <p className='mt-3 w-[70%] md:w-[100%] lg:mb-5'>{t('about:paragraph5')}</p>
      <p className='mt-3 mb-20 w-[65%] lg:mb-24'>{t('about:paragraph6')}</p>

      <Image src='/fotoAbout.png' width={250} height={100} alt='' className='absolute -bottom-2 -right-16 md:-right-5 lg:w-[400px]' />
    </section>
  )
}
