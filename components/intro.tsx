"use client";
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'
import Link from 'next/link';
//Styles
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { MdFileDownload } from "react-icons/md";
//Context
import { useActiveSectionContext } from '@/context/active-section-context';
//Data
import { useTranslation } from 'react-i18next';

export const Intro = () => {

  const { t } = useTranslation('intro');

  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('home')
    }
  }, [inView, setActiveSection])

  return (
    <section ref={ref} id='home' className='scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center mb-8'>
        <Image src='/profile.png' alt='Profile image' width='192' height='192' quality='95' priority={true}
          className=' h-72 w-60 rounded-full object-cover border-[0.35rem] border-white dark:border-blue-50/80 shadow-xl'
        />
      </div>

      <div className='relative'>
        <h2 className='text-center mb-5 text-4xl mt-2 font-bold'>Hello World!</h2>
      </div>

      <h1 className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] text-slate-600 dark:text-white/80'>
        {t('intro:line1')}
        <br />
        {t('intro:line2')}
        <br /><br />
        <span className='font-bold text-2xl text-fuchsia-900 dark:text-[#6e61ff]'>{t('intro:line3')}</span>
      </h1>

      <div className='flex  mb-28 gap-3 flex-col sm:flex-row justify-center items-center px-4 text-lg font-medium wrapper'>

        <Link href='#contact' onClick={() => setActiveSection('Contattami')}
          className='group btnDarkStyle borderBlack btnAnimation dark:border-blue-50/80 '>
          {t('intro:contact')}<IoIosArrowDroprightCircle className='group-hover:translate-x-4 transition' />
        </Link>

        <Link href={t('intro:file')} download target="_blank"
          className='group btnDarkStyle borderBlack btnAnimation dark:border-blue-50/80'>
          {t('intro:download')}
          <MdFileDownload className='group-hover:animate-bounce transition opacity-60' />
        </Link>

        <div className='group linkTip'>
          <div className='tipStyle'>/carolineconte</div>
          <a href='https://github.com/carolineconte' target='_blank'
            className='iconContacts btnLightStyle borderBlack dark:border-blue-50/80'>
            <FaGithub />
          </a>
        </div>

        <div className='group linkTip'>
          <div className='tipStyle'>in/caroline-contedasilva/</div>
          <a href='https://www.linkedin.com/in/caroline-contedasilva/' target='_blank'
            className='iconContacts btnLightStyle borderBlack dark:border-blue-50/80'>
            <TfiLinkedin />
          </a>
        </div>

      </div>

    </section>
  )
}
