import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from '@radix-ui/react-dialog'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { useLanguage } from '~/context/LanguageContext'

const BookingDialog = ({ isOpen, onDismiss }) => {
  const { language } = useLanguage()

  return (
    <Dialog open={isOpen} onOpenChange={onDismiss}>
      <DialogOverlay className="fixed inset-0 bg-black opacity-30 z-50" />
      <DialogContent className="fixed bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg md:p-16 p-8 z-50 lg:2/3 w-5/6 lg:w-7/12 max-h-[85vh] overflow-y-auto">
        <DialogTitle className="md:text-4xl text-2xl text-primary">
          {language === 'no' ? 'Bestill time' : 'Book an appointment'}
        </DialogTitle>
        <DialogDescription className="mt-2 text-base mb-6 w-3/4">
          {language === 'no'
            ? 'Trykk på knappen under for å bli sendt til helsenorge.no, her kan du se og booke alle våre tilgjengelige timer.'
            : 'Press the button below to be redirected to helsenorge.no, here you can see and book all our available hours'}
        </DialogDescription>
        <a
          href="https://helsenorge.no"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant={'outline'}
            onClick={undefined}
            className="bg-primary md:text-base text-sm text-white hover:bg-primary-600 hover:text-white md:w-72 w-48"
          >
            {language === 'no'
              ? 'Bestill time på helsenorge.no'
              : 'Book appointment on helsenorge.no'}
            <img
              className="h-4 ml-2 w-6 md:block hidden"
              src="/arrow.svg"
              alt="arrow"
            />
          </Button>
        </a>
        <DialogTitle className="md:text-4xl text-2xl text-primary mt-9">
          {language === 'no' ? 'Haster det?' : 'Need immediate help?'}
        </DialogTitle>
        <DialogDescription className="mt-4 text-base w-3/4">
          {language === 'no'
            ? 'Trenger du umiddelbar hjelp, eller ikke finner noen ledig timer på helsenorge.no kan du bestille hastetime hos oss direkte over telefon'
            : 'Need immediate help, or can’t find any available appointments on helsenorge.no? You can book an appointment with us directly over the phone.'}
        </DialogDescription>
        <DialogDescription className="mt-4 text-primary text-base font-bold">
          {language === 'no'
            ? 'Bestill hastetime over telefon:'
            : 'Book an appointment over the phone:'}{' '}
          <span className="text-red">+47 675 90 636</span>
        </DialogDescription>
        <DialogClose
          className="absolute top-2 right-2 m-4 text-2xl"
          onClick={onDismiss}
        >
          <span className="sr-only">
            {language === 'no' ? 'Lukk' : 'Close'}
          </span>
          <img className="h-4 ml-2 w-6" src="/close.svg" alt="close" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export default BookingDialog
