"use client";
import React, { useEffect } from 'react'
import { motion } from "framer-motion"
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

export const Intro = () => {

  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('Home')
    }
  }, [inView, setActiveSection])

  return (
    <motion.section ref={ref} id='home' className='scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0'
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{
        type: "spring",
        stiffness: 10,
        delay: 0.1,
        duration: 0.7,
      }}
    >
      <div className='flex items-center justify-center'>
        <Image src='/profile.JPG' alt='Profile image' width='192' height='192' quality='95' priority={true}
          className='h-48 w-30 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
        />
      </div>

      <div className='relative'>
        <h2 className='text-center mb-10 text-4xl mt-2 font-bold'>Hello World!</h2>
        <motion.span
          className="absolute top-[-40px] left-1/2 text-4xl"
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.05,
            duration: 0.3,
          }}
        >
          👋
        </motion.span>
      </div>

      <h1 className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5]'>
        I&apos;m <strong>Caroline Conte</strong>.
        <br></br>sono una <strong className='font-bold'>sviluppatrice Fullstack</strong> con sede a Torino, in Italia.
        <br></br>Mi piace costruire bei siti.
        <br></br>Il mio focus è React (Next.js),
        Puoi dare un&apos;occhiata ai miei lavori qui sotto.
      </h1>

      <div className='flex  mb-28 gap-3 flex-col sm:flex-row justify-center items-center px-4 text-lg font-medium wrapper'>

        <Link href='#contact' onClick={() => setActiveSection('Contattami')}
          className='group btnDarkStyle borderBlack btnAnimation '>
          Contattami qui <IoIosArrowDroprightCircle className='group-hover:translate-x-4 transition' />
        </Link>

        <Link href='/CV.pdf' download
          className='group btnDarkStyle borderBlack btnAnimation '>
          Download CV
          <MdFileDownload className='group-hover:animate-bounce transition opacity-60' />
        </Link>

        <div className='group linkTip'>
          <div className='tipStyle'>/carolineconte</div>
          <a href='https://github.com/carolineconte' target='_blank'
            className='iconContacts btnLightStyle borderBlack'>
            <FaGithub />
          </a>
        </div>

        <div className='group linkTip'>
          <div className='tipStyle'>in/caroline-contedasilva/</div>
          <a href='https://www.linkedin.com/in/caroline-contedasilva/' target='_blank'
            className='iconContacts btnLightStyle borderBlack'>
            <TfiLinkedin />
          </a>
        </div>

      </div>

    </motion.section>
  )
}
