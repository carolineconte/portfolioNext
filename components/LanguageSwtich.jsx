'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { useEffect, useState } from 'react';
import English from './svg/English';
import Portuguese from './svg/Portuguese';
import Italian from './svg/Italian';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [newLocale, setNewLocale] = useState(currentLocale)


  useEffect(()=>{
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }
    router.refresh();
  },[newLocale])

  return (
    <div className="fixed flex-col gap-3 bottom-16 md:bottom-20 right-5 bg-white w-[2.5rem] md:w-[3rem] py-2 md:py-3 bg-opacity-50 backdrop-blur-[0.5rem] border border-black border-opacity-20 shadow-xl rounded-full flex items-center justify-center 
    dark:bg-gray-950 dark:border-blue-50 z-[999] ">

      <button onClick={() => setNewLocale('en')}
        className={`${newLocale == 'en' ? 'hidden' : ''} w-[1.5rem] h-[1.5rem]  md:w-[2.5rem] md:h-[2.5rem] cursor-pointer z-50 active:scale-105 hover:scale-[1.15] transition-all`} >
       <English />
      </button>

      <button onClick={() => setNewLocale('pt')}
        className={`${newLocale == 'pt' ? 'hidden' : ''} w-[1.5rem] h-[1.5rem]  md:w-[2.5rem] md:h-[2.5rem] cursor-pointer z-50 active:scale-105 hover:scale-[1.15] transition-all`}>
        <Portuguese />
      </button>

      <button onClick={() => setNewLocale('it')}
        className={`${newLocale == 'it' ? 'hidden' : ''} w-[1.5rem] h-[1.5rem]  md:w-[2.5rem] md:h-[2.5rem] cursor-pointer z-50 active:scale-105 hover:scale-[1.15] transition-all`}>
        <Italian />
      </button>
    </div>
  );
}

