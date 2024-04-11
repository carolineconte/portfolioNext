'use client'
import React, { useEffect } from 'react'
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
//Data
import { skillsData } from '@/lib/data'
//Components
import SectionTitle from './section-title'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i
    }
  })
}

export const Skills = () => {

  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.5
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('Skills')
    }
  }, [inView, setActiveSection])

  return (
    <section ref={ref} id='Skills'
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
      <SectionTitle>Skills</SectionTitle>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {
          skillsData.map((skill, i) => (
            <motion.li key={skill} variants={fadeInAnimationVariants}
              initial='initial' whileInView='animate'
              viewport={{ once: true }} custom={i}
              className='bg-white border border-black/[0.1] rounded-xl px-5 py-3
              dark:bg-white/10 dark:text-white/80'
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}
