'use client';
import React, { useRef } from 'react'
import { motion, useTransform } from "framer-motion"
import { useScroll } from 'framer-motion';
import { StaticImageData } from 'next/image';
//data
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

interface Project {
  title: string;
  imageUrl: string;
}

function Project({ imageUrl }: Project) {

  const ref = useRef<HTMLDivElement>(null)
  const { t } = useTranslation('projects');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 0.5']
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 0.7], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 0.7], [0.8, 1])

  return (
    <motion.div
      className=''
      ref={ref} style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
    >
      <section className='relative p-3 my-3 rounded-lg bg-dark-blue border border-blue-5 overflow-hidden transition dark:bg-white/10'>
        <div>
          <div
            className={`w-[90vw] h-[40vh] bg- md:w-[45vw] lg:w-[25vw] xl:w-[15vw] rounded shadow scroll-bg-image border-2 border-light`}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
      </section>
    </motion.div>
  )
}

export default Project