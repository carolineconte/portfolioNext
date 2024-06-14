'use client'
//Hooks
import React, { useState } from 'react'
import Link from 'next/link';
//data
import { useTranslation } from 'react-i18next';
//Context
import { useActiveSectionContext } from '@/context/active-section-context';
//icons
import MenuIcon from '@/components/svg/MenuIcon'

export const Header = () => {

  const { t } = useTranslation();
  const links = ['home', 'about', 'projects', 'skills', 'contact']
  const { activeSection, setActiveSection, setMobileNavOpen, mobileNavOpen } = useActiveSectionContext();

  // const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      <header className="md:hidden  w-full z-[999]">
        <div className="w-full bg-white/50 fixed backdrop-blur-[0.2rem] text-right  pt-2 px-6 top-0 border-b border-slate-300 dark:bg-gray-950/90 dark:border-blue-900/80">
          <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
            <MenuIcon />
          </button>
        </div>

        <div onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className={mobileNavOpen ? 'z-50 fixed dark:bg-gray-950 bg-white bg-opacity-30  right-0 left-0 pb-4 ' : 'hidden'}>
          <nav className='fixed w-full top-[2rem] left-1/2 -translate-x-1/2 flex-wrap py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>

            <ul className='sm:px-5 py-2 text-[.9rem] bg-dark-blue/60 font-medium backdrop-blur-[0.5rem] border border-black border-opacity-20
              sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:bg-gray-950/70 dark:border-slate-900/80' >
              {links.map((nameSection, i) => (
                <li key={nameSection} className='h-3/4 flex items-center justify-center'>
                  <Link href={`#${links[i]}`}
                    className={`${activeSection === nameSection ? 'bg-black bg-opacity-50 dark:bg-gray-200/15' : ''}
                flex w-full relative items-center justify-center px-5 py-2 text-[1rem]
                hover:text-gray-950 transition text-white/80 dark:hover:text-gray-200`}
                    onClick={() => setActiveSection(links[i])}>
                    {t(nameSection)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </header>

      {/* Menu large screen */}
      <header className='z-[999] hidden sm:block'>
        <nav className='fixed  top-[1rem] left-1/2 -translate-x-1/2 flex-wrap py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
          <ul className='flex w-[90%] items-center justify-center sm:px-5 py-2 text-[.9rem] font-medium text-gray-900 
        bg-white/50  bg-opacity-30 backdrop-blur-[0.5rem] border border-black border-opacity-20 shadow-xl rounded-full
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
    </>
  )
}
