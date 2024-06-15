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
//data
import { useTranslation } from 'react-i18next';
import MediaIcons from './MediaIcons';

export const ContactSection = () => {

  const { setActiveSection, setMobileNavOpen } = useActiveSectionContext();
  const { t } = useTranslation('about');

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('contact')
    }
  }, [inView, setActiveSection])

  const handleCopyClick = (text: string) => {
    clipboardCopy(text);
    toast.success('indirizzo e-mail copiato correttamente');
  };

  return (
    <motion.section id='contact' ref={ref} onClick={() => setMobileNavOpen(false)}
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='scroll-mt-28 px-5 mb-20 sm:mb-28 w-[min(100%,40rem)] text-center'>

      <SectionTitle> {t('contact:title')}</SectionTitle>

      <p className='mt-6 dark:text-white/80 w-full '>
        {t('contact:text')}
        <span className='underline w-fit hover:cursor-pointer p-2 hover:bg-white/10 rounded-xl'
          onClick={() => handleCopyClick('carolinecontee@gmail.com')}>
          carolinecontee@gmail.com
          <IoMdCopy className='inline-block text-xs -mt-3' />
        </span>
        {t('contact:text2')}
      </p>

      <form className='mt-10 flex flex-col gap-2' action={async (formData) => {
        const { data, error } = await sendEmail(formData)
        if (error) {
          toast.error(error)
          return;
        }

        toast.success(t('contact:success'))
      }}>
        <input className='inputStyle borderBlack inputStyleDark'
          type="text"
          placeholder={t('contact:name')}
          required
          name='senderName' />
        <input className='inputStyle borderBlack inputStyleDark'
          type="email" placeholder={t('contact:email')}
          required
          name='senderEmail' />
        <textarea className='h-52 my-3 rounded borderBlack p-4 inputStyleDark resize-none'
          placeholder={t('contact:message')} required
          name='message' />
        <div className='flex flex-wrap gap-3 justify-between items-center w-full'>
          <SubmitBtn text={t('contact:btn')} />
          <div className='wrapper-contact '>
          <MediaIcons />
          </div>
        </div>
      </form>

    </motion.section>
  )
}
