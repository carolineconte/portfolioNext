'use client';
import React, { useRef } from 'react'
import { motion, useTransform } from "framer-motion"
import { useScroll } from 'framer-motion';
import Image from 'next/image';
//Data
import { projectsData } from '@/lib/data';

type ProjectsProps = typeof projectsData[number];

function Project({ title, description, tags, imageUrl }: ProjectsProps) {

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div ref={ref} style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }}
      className="mb-3 sm:mb-8 last:mb-0 group"
    >
      <section className='relative rounded-lg bg-gray-100 max-w-[42rem] border border-blue-5 overflow-hidden 
    sm:pr-8 sm:h-[20rem]  
    hover:bg-gray-200 transition sm:group-even:pl-8
    dark:bg-white/10 dark:hover:bg-white/20 '>

        <div className='pt-4 pb-7 px-5 flex flex-col h-full sm:group-even:ml-[18rem]
      sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]'
        >
          <h3 className='text-2xl font-semibold dark:text-white'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 
          dark:text-white/80'>{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {
              tags.map((tag, i) => (
                <li className='dark:text-white/70 bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={i}>{tag}</li>
              ))
            }
          </ul>
        </div>
        <Image src={imageUrl} alt='project' quality={95}
          className='absolute hidden sm:block bottom-0 -right-40 w-[28.25rem] 
        rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 transition
        group-hover:scale-[1.2]
        group-hover:-translate-x-3 
        group-hover:translate-y-3
        group-hover:-rotate-2 

        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2 
        '></Image>
      </section>
    </motion.div>
  )
}

export default Project