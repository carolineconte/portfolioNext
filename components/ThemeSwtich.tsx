'use client'
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type ITheme = 'light' | 'dark'

export const ThemeSwtich = () => {

  const [theme, setTheme] = useState<ITheme>('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as ITheme
    if (localTheme) {
      setTheme(localTheme)

      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    } else if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] shadow-xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all
    border-black dark:bg-gray-950 dark:border-blue-50 border z-[999] border-opacity-20"
      onClick={toggleTheme}
    >
      {
        theme === 'light' ? <BsSun /> : <BsMoon />
      }
    </button>
  )
}
