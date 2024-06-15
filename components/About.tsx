'use client'
import React, { useEffect } from 'react'
import SectionTitle from './section-title'
import { useInView } from 'react-intersection-observer'
//Context
import { useActiveSectionContext } from '@/context/active-section-context';
//data
import { useTranslation } from 'react-i18next';
import Planet from './svg/Planet';
import Pisces from './svg/Pisces';
import Image from 'next/image';
import Cristo from './svg/Cristo';
import CodeIcon from './svg/Code';
import Music from './svg/Music';
import Balao from './svg/Balao';
import Coracao from './svg/Coracao';
import Computer from './svg/Computer';
import Ticket from './svg/Ticket';

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

      <div className='absolute top-0 md:right-0 md:top-[50%] lg:top-[40%] lg:right-5'>
        <Pisces />
        <Planet />
      </div>
      <Ticket />
      <div className='absolute top-12 right-6 lg:top-[25%] lg:right-[20%] opacity-25'>
        <Cristo />
      </div>
      <CodeIcon />
      <Music />
      <SectionTitle>{t('about:title')}</SectionTitle>
      <p className='font-bold font-["saudagar"] text-[1.5rem] lg:text-[2rem]'>{t('about:saudacao')}</p>
      <p className='font-bold font-["saudagar"] text-[1.4rem] lg:text-[2rem] lg:mb-5 lg:mt-3'>{t('about:paragraph1')}</p>
      <p className='mt-3 lg:w-[80%] lg:mb-5'>{t('about:paragraph2')}</p>
      <p className='mt-3 md:w-[95%] lg:w-[75%] lg:mb-5'>{t('about:paragraph3')}</p>
      <p className='mt-3 md:w-[85%] lg:w-[80%] xl:w-[70%] lg:mb-5'>{t('about:paragraph4')}</p>
      <p className='mt-3 w-[70%] md:w-[100%] lg:mb-5'>{t('about:paragraph5')}</p>
      <p className='mt-3 mb-20 w-[65%] lg:mb-24'>{t('about:paragraph6')}</p>

      <div className='absolute bottom-20 right-[50%] md:right-[35%] lg:bottom-24'>
        <Balao/>
        <Coracao/>
      </div>
      <Computer />

      <Image src='/cachorros.png' width={230} height={100} alt='' className='absolute -bottom-5  z-40 right-[30%] lg:w-[300px]' />
      <Image src='/fotoAbout.png' width={250} height={100} alt='' className='absolute -bottom-2 -right-16 md:-right-5 lg:w-[400px]' />
    </section>
  )
}
