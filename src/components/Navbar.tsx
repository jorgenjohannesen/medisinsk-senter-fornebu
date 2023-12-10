import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Navbar({
  onHomeClick,
  onServicesClick,
  onEmployeesClick,
  onContactClick,
  children,
}) {
  const [activeButton, setActiveButton] = useState('home')

  const handleButtonClick = (buttonName: string, onClickFunction: Function) => {
    setActiveButton(buttonName)
    onClickFunction()
  }

  return (
    <div>
      <header className="header flex justify-between items-center h-28 py-0 px-[var(--space-1)] border-b border-[#ced2d9] z-10 bg-white top-0 left-0 right-0">
        <div className="flex items-center ml-8">
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
              activeButton === 'home' ? 'border-current' : 'border-transparent'
            }`}
          >
            Hjem
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
            Tjenester
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
            Ansatte
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
            Kontakt
          </Button>
        </div>
        <div className="mr-8"></div>
      </header>
      <main>{children}</main>
      <footer className="footer bg-secondary h-28">
        <div className="flex justify-around items-center h-full w-full px-4">
          <div>
            <strong>Åpningstider</strong>: Mandag - Fredag 08:00 - 15:30
          </div>
          <div>
            <strong>Telefon</strong>: +47 675 90 636
          </div>
          <div>
            <strong>Adresse</strong>: Forneburingen 209, 1364 Fornebu
          </div>
        </div>
      </footer>
    </div>
  )
}
