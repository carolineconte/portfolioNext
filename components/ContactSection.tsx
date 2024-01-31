'use client'
//Hooks
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
import clipboardCopy from 'clipboard-copy';
import toast from 'react-hot-toast';
import { IoMdCopy } from "react-icons/io";

//Context
import { useActiveSectionContext } from '@/context/active-section-context';
//Components
import SectionTitle from './section-title';
import { sendEmail } from '@/actions/sendEmail';
import { SubmitBtn } from './SubmitBtn';


export const ContactSection = () => {

  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('Contact')
    }
  }, [inView, setActiveSection])

  const handleCopyClick = (text: string) => {
    clipboardCopy(text);
    toast.success('indirizzo e-mail copiato correttamente');
  };

  return (
    <motion.section id='contact' ref={ref}
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,40rem)] text-center'>

      <SectionTitle>Contattami</SectionTitle>

      <p className='text-gray-700 -mt-6 dark:text-white/80 w-full '>
        Contattami direttamente all&apos;indirizzo 
        <span className='underline w-fit hover:cursor-pointer p-2 hover:bg-white/10 rounded-xl'
        onClick={() => handleCopyClick('carolinecontee@gmail.com')}>
          carolinecontee@gmail.com 
          <IoMdCopy className='inline-block text-xs -mt-3'/>
          </span> 
          o tramite questo modulo.
      </p>

      <form className='mt-10 flex flex-col gap-2' action={async (formData) => {
        const { data, error } = await sendEmail(formData)
        if (error) {
          toast.error(error)
          return;
        }

        toast.success('Email inviata correttamente!')

      }}>
        <input className='inputStyle borderBlack inputStyleDark' type="text" placeholder='Nome:' required
          name='senderName' />
        <input className='inputStyle borderBlack inputStyleDark' type="email" placeholder='Email:' required
          name='senderEmail' />
        <textarea className='h-52 my-3 rounded-lg borderBlack p-4 inputStyleDark' placeholder='Message:' required
          name='message'>

        </textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
