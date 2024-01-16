import { PortableText } from '@portabletext/react'
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

const ServiceDialog = ({
  isOpen,
  onDismiss,
  dialogTitle,
  dialogDescription,
  buttonText = 'Send oss en henvendelse',
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onDismiss}>
      <DialogOverlay className="fixed inset-0 bg-black opacity-30 z-50" />
      <DialogContent className="fixed bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg md:p-16 p-8 z-50 lg:2/3 w-5/6 lg:w-1/2 max-h-[85vh] overflow-y-auto">
        <DialogTitle className="md:text-4xl text-2xl text-primary mb-4">
          {dialogTitle}
        </DialogTitle>
        <DialogDescription className="mt-2 text-base mb-6 w-full prose">
          <PortableText value={dialogDescription} />
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

export default ServiceDialog
