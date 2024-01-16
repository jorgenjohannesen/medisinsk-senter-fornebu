import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '~/context/LanguageContext'
import HamburgerMenu from './HamburgerMenu'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

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
  const { language, toggleLanguage } = useLanguage()
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
  const handleHamburgerClick = () => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen)
  }

  const closeHamburgerMenu = () => {
    setHamburgerMenuOpen(false)
  }

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

  return (
    <>
      <style>
        {`
          @media (max-width: 1000px) {
            .custom-nav {
              display: none;
            }
            .right-nav {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 12px;
            }
            .custom-hamburger {
              display: block;
              order: 2;
              margin-left: 8px;
            }
            .important-info-text {
              display: none;
            }
            .important-info-button {
              order: 1;
            }
            .bell-icon {
              height: 1.5rem;
            }
            .language-flag {
              display: none;
            }
          }
          @media (min-width: 1001px) {
            .custom-nav {
              display: flex;
            }
            .right-nav {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .custom-hamburger {
              display: none;
            }
            .important-info-button {
              position: fixed; 
              right: 30px;
              top: 32px;
              width: 12rem;
            }
            .bell-icon {
              height: 1.5rem;
            }
            .language-flag {
              margin-right: 212px;
            }
          }
        `}
      </style>
      <div>
        <header className="relative z-10 bg-white border-b border-[#ced2d9] m-0 p-0">
          <div className="flex justify-between items-center h-28 py-0 px-[var(--space-1)] m-0">
            <div
              className="flex items-center lg:ml-8 ml-4 cursor-pointer"
              onClick={handleLogoClick}
            >
              <img
                className="md:h-20 h-12 lg:mr-8 mr-4"
                src="/logo.svg"
                alt="logo"
              />
              <div className="flex flex-col md:text-base text-xs">
                <div>MEDISINSK</div>
                <div>SENTER</div>
                <div>FORNEBU</div>
              </div>
            </div>
            <div className="custom-nav space-x-9 text-xl">
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
            <div className="right-nav lg:mr-8 mr-4">
              <img
                className="language-flag h-6 w-6 object-fill rounded-sm"
                src={language === 'no' ? '/flag_no.png' : '/flag_en.png'}
                alt="Norwegian flag"
                onClick={toggleLanguage}
              />
              <Button
                variant={'default'}
                onClick={() =>
                  handleButtonClick('important', onImportantInfoClick)
                }
                className="important-info-button md:h-[47px] h-[37px] px-2 md:py-2 md:px-4 z-20 bg-red text-white hover:bg-red-600 hover:text-white"
                size={'lg'}
              >
                <img
                  className="md:h-[24px] h-[20px]"
                  src="/bell.svg"
                  alt="bell"
                />
                <span className="important-info-text ml-2">
                  {language === 'no'
                    ? 'Viktig informasjon'
                    : 'Important information'}
                </span>
              </Button>

              <DropdownMenu
                open={isHamburgerMenuOpen}
                onOpenChange={setHamburgerMenuOpen}
              >
                <DropdownMenuTrigger asChild>
                  <div
                    className="custom-hamburger cursor-pointer"
                    onClick={handleHamburgerClick}
                  >
                    <img className="h-8" src="/hamburger.svg" alt="menu" />
                  </div>
                </DropdownMenuTrigger>

                <HamburgerMenu
                  onHomeClick={onHomeClick}
                  onServicesClick={onServicesClick}
                  onEmployeesClick={onEmployeesClick}
                  onContactClick={onContactClick}
                  onImportantInfoClick={onImportantInfoClick}
                  toggleLanguage={toggleLanguage}
                  language={language}
                  onClose={closeHamburgerMenu}
                />
              </DropdownMenu>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer bg-secondary md:h-28 ">
          <div className="flex flex-col md:flex-row md:justify-around md:gap-y-0 gap-y-4 items-center h-full w-full px-4 md:p-0 p-6">
            <div className="flex flex-col md:flex-row gap-x-1 md:w-max w-64">
              <strong>
                {language === 'no' ? 'Åpningstider: ' : 'Opening hours: '}
              </strong>
              {contactInfo.openingHours}
            </div>
            <div className="flex flex-col md:flex-row gap-x-1 md:w-max w-64">
              <strong>{language === 'no' ? 'Telefon: ' : 'Phone: '}</strong>
              {contactInfo.phone}
            </div>
            <div className="flex flex-col md:flex-row gap-x-1 md:w-max w-64">
              <strong> {language === 'no' ? 'Adresse: ' : 'Address: '}</strong>
              {contactInfo.address}
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
