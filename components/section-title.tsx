import React from 'react'
type Props = {
  children: React.ReactNode
}
export default function SectionTitle({children} : Props) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 mt-8 text-center md:mb-2 md:mt-4'>
      {children}
    </h2>
  )
}
