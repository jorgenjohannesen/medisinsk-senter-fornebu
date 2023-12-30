import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { useLanguage } from '~/context/LanguageContext'

export default function Navbar({
  onHomeClick,
  onServicesClick,
  onEmployeesClick,
  onContactClick,
  onImportantInfoClick,
  children,
  contactInformation,
}) {
  const [activeButton, setActiveButton] = useState('home')

  const handleButtonClick = (buttonName: string, onClickFunction: any) => {
    setActiveButton(buttonName)
    if (buttonName !== 'important') {
      onHomeClick()
    }
    if (onClickFunction) {
      onClickFunction(true)
    }
  }

  const handleLogoClick = () => {
    setActiveButton('home')
    onHomeClick()
  }

  const contactInfo = contactInformation[0]

  const { language, toggleLanguage } = useLanguage()

  return (
    <div>
      <header className="relative z-10 bg-white border-b border-[#ced2d9] m-0 p-0">
        <div className="flex justify-between items-center h-28 py-0 px-[var(--space-1)] m-0">
          <div
            className="flex items-center ml-8 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img className="h-20 mr-4" src="/logo.svg" alt="logo" />
            <div className="flex flex-col">
              <div>Medisinsk</div>
              <div>Senter</div>
              <div>Fornebu</div>
            </div>
          </div>
          <div className="flex flex-row space-x-9 text-xl">
            <Button
              variant={'link'}
              onClick={() => handleButtonClick('home', onHomeClick)}
              className={`border-b-2 pb-1 text-xl ${
                activeButton === 'home'
                  ? 'border-current'
                  : 'border-transparent'
              }`}
            >
              {language === 'no' ? 'Hjem' : 'Home'}
            </Button>
            <Button
              variant={'link'}
              onClick={() => handleButtonClick('services', onServicesClick)}
              className={`border-b-2 pb-1 text-xl ${
                activeButton === 'services'
                  ? 'border-current'
                  : 'border-transparent'
              }`}
            >
              {language === 'no' ? 'Tjenester' : 'Services'}
            </Button>
            <Button
              variant={'link'}
              onClick={() => handleButtonClick('employees', onEmployeesClick)}
              className={`border-b-2 pb-1 text-xl ${
                activeButton === 'employees'
                  ? 'border-current'
                  : 'border-transparent'
              }`}
            >
              {language === 'no' ? 'Ansatte' : 'Employees'}
            </Button>
            <Button
              variant={'link'}
              onClick={() => handleButtonClick('contact', onContactClick)}
              className={`border-b-2 pb-1 text-xl ${
                activeButton === 'contact'
                  ? 'border-current'
                  : 'border-transparent'
              }`}
            >
              {language === 'no' ? 'Kontakt' : 'Contact'}
            </Button>
          </div>
          <div className="mr-8"> {} </div>
          <img
            className="h-6 w-6 object-fill mr-60 rounded-sm"
            src={language === 'no' ? '/flag_no.png' : '/flag_en.png'}
            alt="Norwegian flag"
            onClick={toggleLanguage}
          />
        </div>
      </header>
      <Button
        variant={'default'}
        onClick={() => handleButtonClick('important', onImportantInfoClick)}
        className="fixed right-8 top-8 z-20 bg-red text-white hover:bg-red-600 hover:text-white w-48"
        size={'lg'}
      >
        <img className="h-6 mr-2" src="/bell.svg" alt="bell" />
        {language === 'no' ? 'Viktig informasjon' : 'Important information'}
      </Button>
      <main>{children}</main>
      <footer className="footer bg-secondary h-28">
        <div className="flex justify-around items-center h-full w-full px-4">
          <div>
            <strong>
              {language === 'no' ? 'Åpningstider: ' : 'Opening hours: '}
            </strong>
            {contactInfo.openingHours}
          </div>
          <div>
            <strong>{language === 'no' ? 'Telefon: ' : 'Phone: '}</strong>{' '}
            {contactInfo.phone}
          </div>
          <div>
            <strong> {language === 'no' ? 'Adresse: ' : 'Address: '}</strong>
            {contactInfo.address}
          </div>
        </div>
      </footer>
    </div>
  )
}
