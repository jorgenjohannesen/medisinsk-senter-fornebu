import * as React from 'react'
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'

const BookingDialog = ({ isOpen, onDismiss }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onDismiss}>
      <DialogOverlay className="fixed inset-0 bg-black opacity-30 z-20" />
      <DialogContent className="fixed bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg p-16 z-30 w-2/3 lg:w-7/12">
        <DialogTitle className="text-4xl text-primary">
          Bestill time
        </DialogTitle>
        <DialogDescription className="mt-2 text-base mb-6 w-3/4">
          Du blir nå videresendt til helsenorge.no. Der kan du se og booke alle
          våre tilgjengelige timer.
        </DialogDescription>
        <a
          href="https://helsenorge.no"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant={'outline'}
            onClick={undefined}
            className="fixed bg-primary text-base text-white hover:bg-primary-600 hover:text-white w-72"
            size={'lg'}
          >
            Bestill time på helsenorge.no
            <img className="h-4 ml-2 w-6" src="/arrow.svg" alt="arrow" />
          </Button>
        </a>
        <DialogTitle className="text-4xl text-primary mt-28">
          Haster det?
        </DialogTitle>
        <DialogDescription className="mt-4 text-base w-3/4">
          Trenger du umiddelbar hjelp, eller ikke finner noen ledig timer på
          helsenorge.no kan du bestille hastetime hos oss direkte over telefon
        </DialogDescription>
        <DialogDescription className="mt-4 text-primary text-base font-bold">
          Bestill hastetime over telefon:{' '}
          <span className="text-red">+47 675 90 636</span>
        </DialogDescription>
        <DialogClose
          className="absolute top-2 right-2 m-4 text-2xl"
          onClick={onDismiss}
        >
          <span className="sr-only">Lukk</span>
          <img className="h-4 ml-2 w-6" src="/close.svg" alt="close" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export default BookingDialog
