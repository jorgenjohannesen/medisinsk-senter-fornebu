import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLanguage } from '~/context/LanguageContext'

import HamburgerMenu from './HamburgerMenu'
import LanguagePicker from './LanguagePicker'

export default function Navbar({
  onHomeClick,
  onServicesClick,
  onEmployeesClick,
  onContactClick,
  onPriceClick,
  onImportantInfoClick,
  children,
  contactInformation,
}) {
  const [activeButton, setActiveButton] = useState('home')
  const { language, toggleLanguage } = useLanguage()
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
  const contactInfo = contactInformation[0]
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000 && isHamburgerMenuOpen) {
        closeHamburgerMenu()
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isHamburgerMenuOpen])

  return (
    <>
      <style>
        {`
          @media (max-width: 1100px) {
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
            }
          }
          @media (max-width: 768px) {
            .important-info-text {
              display: none;
            }
            .important-info-button {
              order: 1;
            }
            .bell-icon {
              height: 1.5rem;
            }
          }
          @media (min-width: 1100px) {
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
          }

        `}
      </style>
      <div>
        <header className="relative z-10 bg-white border-b border-[#ced2d9] m-0 p-0 h-[70px] md:h-auto">
          <div className="flex justify-between items-center h-[70px] md:h-28 py-0 px-[var(--space-1)] m-0">
            <div
              className="flex items-center lg:ml-8 ml-4 cursor-pointer"
              onClick={handleLogoClick}
            >
              <img
                className="md:h-[67.62px] h-[37.12px] w-[37.12px] md:w-[67.62px] lg:mr-4 mr-2"
                src="/logo.svg"
                alt="logo"
              />
              <div className="flex flex-col font-normal md:text-base text-[8.8px]">
                <div>MEDISINSK</div>
                <div>SENTER</div>
                <div>FORNEBU</div>
              </div>
            </div>
            <div className="custom-nav space-x-9 text-xl">
              <Button
                variant={'link'}
                onClick={() => handleButtonClick('home', onHomeClick)}
                className={'text-xl font-normal'}
              >
                {language === 'no' ? 'Hjem' : 'Home'}
              </Button>
              <Button
                variant={'link'}
                onClick={() => handleButtonClick('services', onServicesClick)}
                className={`text-xl font-normal`}
              >
                {language === 'no' ? 'Tjenester' : 'Services'}
              </Button>
              <Button
                variant={'link'}
                onClick={() => handleButtonClick('employees', onEmployeesClick)}
                className={`text-xl font-normal`}
              >
                {language === 'no' ? 'Ansatte' : 'Employees'}
              </Button>
              <Button
                variant={'link'}
                onClick={() => handleButtonClick('contact', onContactClick)}
                className={`text-xl font-normal`}
              >
                {language === 'no' ? 'Kontakt' : 'Contact'}
              </Button>
              <Button
                variant={'link'}
                onClick={() => handleButtonClick('price', onPriceClick)}
                className={`text-xl font-normal`}
              >
                {language === 'no' ? 'Priser' : 'Prices'}
              </Button>
            </div>
            <div className="right-nav lg:mr-180 mr-4 flex items-center gap-x-56">
              <div className="flex align-center justify-center">
                <LanguagePicker />
              </div>
              <div>
                <Button
                  variant={'default'}
                  onClick={() =>
                    handleButtonClick('important', onImportantInfoClick)
                  }
                  className="important-info-button rounded-sm md:h-[47px] h-[30px] w-[30px] md:w-[193px] px-2 md:py-2 md:px-4 z-20 bg-red text-white hover:bg-red-600 hover:text-white"
                  size={'lg'}
                >
                  <img
                    className="md:h-[24px] h-[16px] w-[16px] md:w-[20px]"
                    src="/bell.svg"
                    alt="bell"
                  />
                  <span className="important-info-text ml-2">
                    {language === 'no'
                      ? 'Viktig informasjon'
                      : 'Important information'}
                  </span>
                </Button>
              </div>
              <DropdownMenu
                open={isHamburgerMenuOpen}
                onOpenChange={setHamburgerMenuOpen}
              >
                <DropdownMenuTrigger asChild>
                  <div
                    className="custom-hamburger cursor-pointer"
                    onClick={handleHamburgerClick}
                  >
                    <img
                      className="md:h-[30px] h-[23px] md:w-[40px]"
                      src="/hamburger.svg"
                      alt="menu"
                    />
                  </div>
                </DropdownMenuTrigger>
                <HamburgerMenu
                  onHomeClick={onHomeClick}
                  onServicesClick={onServicesClick}
                  onEmployeesClick={onEmployeesClick}
                  onContactClick={onContactClick}
                  onPriceClick={onPriceClick}
                  onImportantInfoClick={onImportantInfoClick}
                  language={language}
                  onClose={closeHamburgerMenu}
                />
              </DropdownMenu>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer bg-secondary md:h-28">
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
