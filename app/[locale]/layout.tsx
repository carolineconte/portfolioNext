
import './globals.css'
import { Montserrat } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import { ThemeSwtich } from '@/components/ThemeSwtich'
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import LanguageChanger from '@/components/LanguageSwtich'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Caroline Conte | Personal Portfolio',
  description: 'Caroline is a Junior full-stack developer',
}

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params:any
}) {
  return (
    <html lang={locale} dir={dir(locale)} className='!scroll-smooth'>
      
      <body className={`${montserrat.className} bg-light text-gray-950 pt-10 sm:pt-6
      dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <ActiveSectionContextProvider>
          {children}
        </ActiveSectionContextProvider>
        <Toaster position='top-right' />
        <ThemeSwtich/>
      </body>
    </html>
  )
}
