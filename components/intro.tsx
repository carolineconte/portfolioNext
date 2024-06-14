"use client";
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'
import Link from 'next/link';
//Styles
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaBoxArchive } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { TbBrandUpwork } from "react-icons/tb";


//Context
import { useActiveSectionContext } from '@/context/active-section-context';
//Data
import { useTranslation } from 'react-i18next';
import Quotes from './svg/Quotes';
import MediaIcons from './MediaIcons';

export const Intro = () => {

  const { t } = useTranslation('intro');

  const { setActiveSection, setMobileNavOpen } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('home')
    }
  }, [inView, setActiveSection])

  return (
    <section ref={ref} id='home' onClick={() => setMobileNavOpen(false)}
      className='relative p-5 scroll-mt-[100rem] bg-dark-blue max-w-[1200px] overflow-hidden
     sm:rounded-lg sm:mb-0 md:mx-5 md:mt-10'>

      <div className='absolute inset-0 w-full h-full opacity-15 z-30'>
        <img src="/Textures.png" alt="" className='w-full h-full object-cover' />
      </div>

      <div className='absolute top-2 left-1 sm:top-5 lg:left-24'>
        <h2 className='heroTitle'>Port</h2>
      </div>

      <div className='max-md:hidden absolute z-20 sm:-bottom-5 sm:right-2'>
        <h2 className='heroTitle'>Folio</h2>
      </div>

      <div className='absolute max-md:rotate-90 top-[50%] max-md:left-[45%] text-[.7em] w-full 
      md:top-10 md:right-5 md:w-[300px] lg:top-18 lg:right-18 xl:top-24 xl:right-24'>
        <Quotes />
        <cite className='text-light-blue/80'>
          A web não é apenas uma ferramenta de comunicação, é uma experiência.
          <span className='text-light'> Tim Berners-Lee</span>
        </cite>
      </div>

      <div className='flex flex-col mt-[90px] sm:flex-row sm:mt-[150px]'>

        <div className='wrapper-contact gap-1 flex z-30 items-end justify-end
       sm:flex-col sm:pb-6 sm:justify-end xl:w-[180px]'>
          <MediaIcons />
        </div>

        <div className='max-md:relative grow flex z-10 -mt-10 md:-mt-20 lg:mt-0'>
          <Image src='/fotoHero.png' alt='Profile image'
            width='192' height='192' quality='95' priority={true}
            className='object-cover px-5 md:h-[530px] lg:h-[597px] w-full sm:p-0 sm:object-contain' />
          <div className='absolute right-2 -bottom-5 z-20 md:hidden'>
            <h2 className='heroTitle'>Folio</h2>
          </div>
        </div>

        <div className='flex flex-col items-end text-light text-center lg:mt-14 md:pl-[1em] md:w-[55%] xl:pl-[4em] xl:w-[46%]'>
          <h2 className='uppercase text-[1.5em] bg-light-blue w-full md:text-[2em] lg:text-[2.5em]'>
            {t('intro:line1')}
          </h2>

          <h1 className='uppercase leading-5 mt-2 text-justify px-5 font-extralight sm:px-0 sm:text-lg sm:mt-5 sm:text-left'>
            {t('intro:line2')}
          </h1>

          <Link href='#projects' className=' hidden items-center justify-center  w-[50%] lg:flex heroBtn group self-start mt-5 border-medium-blue bg-medium-blue hover:border-orange'>
            <span className='text-orange group-hover:animate-wiggle text-xl lg:text-3xl'><FaBoxArchive /></span>
            {t('intro:work')}
          </Link>

          <Link href='#contact'

 className=' hidden lg:flex heroBtn w-[50%] group lg:mr-10 max-lg:mt-5 bg-orange border-orange hover:border-light-blue'>
            <span className='text-light-blue group-hover:animate-wiggle text-xl lg:text-4xl'>
              <MdEmail />
            </span>
            {t('intro:contact')}
          </Link>

          <div className='lg:hidden flex w-full mt-5 justify-center'>
            <button className='heroBtn flex group border-medium-blue bg-medium-blue hover:border-orange'>
              <span className='text-orange group-hover:animate-wiggle text-xl lg:text-3xl'><FaBoxArchive /></span>
              {t('intro:work')}
            </button>

            <button className='heroBtn group flex bg-orange border-orange hover:border-light-blue'>
              <span className='text-light-blue group-hover:animate-wiggle text-xl lg:text-4xl'>
                <MdEmail />
              </span>
              {t('intro:contact')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
