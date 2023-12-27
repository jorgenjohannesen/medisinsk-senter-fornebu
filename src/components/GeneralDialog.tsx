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

const GeneralDialog = ({
  isOpen,
  onDismiss,
  dialogTitle,
  dialogDescription,
  buttonText,
  href,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onDismiss}>
      <DialogOverlay className="fixed inset-0 bg-black opacity-30 z-50" />
      <DialogContent className="fixed bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg p-16 z-50 w-2/3 lg:w-7/12">
        <DialogTitle className="text-4xl text-primary">
          {dialogTitle}
        </DialogTitle>
        <DialogDescription className="mt-2 text-base mb-6 w-3/4">
          {dialogDescription}
        </DialogDescription>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Button
            variant={'outline'}
            onClick={undefined}
            className="bg-primary text-base text-white hover:bg-primary-600 hover:text-white"
            size={'lg'}
          >
            {buttonText}
            <img className="h-4 ml-2 w-6" src="/arrow.svg" alt="arrow" />
          </Button>
        </a>
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

export default GeneralDialog
