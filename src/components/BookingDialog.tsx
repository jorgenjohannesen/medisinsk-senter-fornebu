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
      <DialogContent className="fixed bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg p-16 z-50 w-2/3 lg:w-7/12">
        <DialogTitle className="text-4xl text-primary">
          {language === 'no' ? 'Bestill time' : 'Book an appointment'}
        </DialogTitle>
        <DialogDescription className="mt-2 text-base mb-6 w-3/4">
          {language === 'no'
            ? 'Du blir nå videresendt til helsenorge.no. Der kan du se og booke alle våre tilgjengelige timer.'
            : 'You will now be redirected to helsenorge.no. There you can see and book all our available hours.'}
        </DialogDescription>
        <a
          href="https://helsenorge.no"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant={'outline'}
            onClick={undefined}
            className="bg-primary text-base text-white hover:bg-primary-600 hover:text-white w-72"
          >
            {language === 'no'
              ? 'Bestill time på helsenorge.no'
              : 'Book appointment on helsenorge.no'}
            <img className="h-4 ml-2 w-6" src="/arrow.svg" alt="arrow" />
          </Button>
        </a>
        <DialogTitle className="text-4xl text-primary mt-9">
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
