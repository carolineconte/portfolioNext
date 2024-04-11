'use client'
//Hooks
import React from 'react'
import Link from 'next/link';
//data
import { useTranslation } from 'react-i18next';
//Context
import { useActiveSectionContext } from '@/context/active-section-context';

export const Header = () => {

  const { t } = useTranslation();
  const links = ['home', 'about', 'projects', 'skills', 'contact']
  const { activeSection, setActiveSection } = useActiveSectionContext();
  

  return (
    <header className='z-[999]'>

      <nav className=' fixed top-[1rem] left-1/2 -translate-x-1/2 flex-wrap py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>

        <ul className='flex items-center justify-center px-5 py-2 text-[.9rem] font-medium text-gray-900 
        bg-white  bg-opacity-30 backdrop-blur-[0.5rem] border border-black border-opacity-20 shadow-xl rounded-full
        sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:bg-gray-950 dark:border-blue-50/80' >
          {links.map((nameSection, i) => (
            <li key={nameSection} className='h-3/4 flex items-center justify-center'>
              <Link href={`#${links[i]}`}
                className={`${activeSection === nameSection ? 'bg-black bg-opacity-15 dark:bg-gray-200/15' : ''}
                flex w-full relative items-center justify-center px-5 py-2 rounded-full text-[1rem]
                hover:text-gray-950 transition 
                dark:text-white/80 dark:hover:text-gray-200`}
                onClick={() => setActiveSection(links[i])}>
                {t(nameSection)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
