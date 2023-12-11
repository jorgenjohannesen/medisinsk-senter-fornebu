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

  const handleButtonClick = (buttonName, onClickFunction) => {
    setActiveButton(buttonName)
    onClickFunction()
  }

  return (
    <div>
      <header className="relative z-10 bg-white border-b border-[#ced2d9] m-0 p-0">
        <div className="flex justify-between items-center h-28 py-0 px-[var(--space-1)] m-0">
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
                activeButton === 'home'
                  ? 'border-current'
                  : 'border-transparent'
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
          <div className="mr-8"> {/* Placeholder for button spacing */} </div>
        </div>
      </header>
      <Button
        variant={'outline'}
        onClick={undefined}
        className="fixed right-8 top-8 z-50 bg-red text-white hover:bg-red-600 hover:text-white w-48"
        size={'lg'}
      >
        <img className="h-6 mr-2" src="/bell.svg" alt="bell" />
        Viktig informasjon
      </Button>
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
