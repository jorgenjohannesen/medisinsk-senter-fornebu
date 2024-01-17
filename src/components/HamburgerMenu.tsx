import React from 'react'
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const HamburgerMenu = ({
  onHomeClick,
  onServicesClick,
  onEmployeesClick,
  onContactClick,
  onImportantInfoClick,
  toggleLanguage,
  language,
  onClose,
}) => {
  return (
    <DropdownMenuContent className="p-4 bg-white w-54 mt-5 nav:hidden">
      <div className="flex justify-end top-2 right-8 p-2">
        <img
          className="h-4 ml-2 w-6 cursor-pointer"
          src="/close.svg"
          alt="close"
          onClick={onClose}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-4">
        <DropdownMenuItem onSelect={onImportantInfoClick} className="mt-10">
          <Button
            variant={'default'}
            className="z-20 w-46 bg-red text-white hover:bg-red-600 hover:text-white"
          >
            <img className="bell-icon" src="/bell.svg" alt="bell" />
            <span className="ml-2">
              {language === 'no'
                ? 'Viktig informasjon'
                : 'Important information'}
            </span>
          </Button>
        </DropdownMenuItem>
        <div className="flex flex-col gap-y-4 mr-12">
          <DropdownMenuItem
            onSelect={onHomeClick}
            className="cursor-pointer text-base text-primary"
          >
            Hjem
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={onServicesClick}
            className="cursor-pointer text-base text-primary text-primary"
          >
            Tjenester
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={onEmployeesClick}
            className="cursor-pointer text-base text-primary"
          >
            Ansatte
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={onContactClick}
            className="cursor-pointer mb-36 text-base text-primary"
          >
            Kontakt
          </DropdownMenuItem>
        </div>
      </div>
      <DropdownMenuItem
        onSelect={toggleLanguage}
        className="cursor-pointer justify-end"
      >
        <img
          className="h-6 w-6 object-fill rounded-sm"
          src={language === 'no' ? '/flag_no.png' : '/flag_en.png'}
          alt="Norwegian flag"
        />
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}

export default HamburgerMenu
