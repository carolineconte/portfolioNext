
import './globals.css'
import { Montserrat } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import { ThemeSwtich } from '@/components/ThemeSwtich'
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import LanguageChanger from '@/components/LanguageSwtich'
import initTranslations from '../i18n'
import TranslationsProvider from '@/components/TranslationsProvider';
import { Header } from '@/components/header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Caroline Conte | Personal Portfolio',
  description: 'Caroline is a Junior full-stack developer',
}

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

const i18nNamespaces = ['header', 'intro', 'about', 'contact', 'projects','raffinate'];


export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: any
}) {

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)} className='!scroll-smooth'>

      <body className={`${montserrat.className} bg-light text-gray-950 pt-10 sm:pt-6
      dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}>

          <ActiveSectionContextProvider>
          <Header />

            {children}
          </ActiveSectionContextProvider>
          <Toaster position='top-right' />
          <ThemeSwtich />
          <LanguageChanger />
        </TranslationsProvider>
      </body>
    </html>
  )
}
