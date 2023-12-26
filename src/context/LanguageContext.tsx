// LanguageContext.tsx

import React, { createContext, ReactNode, useContext, useState } from 'react'

interface ILanguageContext {
  language: string
  toggleLanguage: () => void
}

const LanguageContext = createContext<ILanguageContext | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>('no')

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'no' ? 'en' : 'no'))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): ILanguageContext => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
