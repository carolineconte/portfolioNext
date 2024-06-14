import React from 'react'
type Props = {
  children: React.ReactNode
}
export default function SectionTitleBg({children} : Props) {
  return (
    <h2 className='text-3xl py-3 bg-dark-blue text-light font-medium capitalize mt-8 text-center md:py-5 md:mb-2 md:mt-4'>
      {children}
    </h2>
  )
}
