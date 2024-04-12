'use client'
//Hooks
import React, { createContext, useContext, useState } from 'react'

type SectionName = string;
type Props = { children: React.ReactNode };

type ActiveSectionContextType = {
  activeSection: SectionName,
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
  mobileNavOpen:boolean,
  setMobileNavOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({ children }: Props) {

  const [activeSection, setActiveSection] = useState<SectionName>('')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection,mobileNavOpen, setMobileNavOpen }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      'useActiveSection must be used within as provider'
    )
  }

  return context
}