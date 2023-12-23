import { useState } from 'react'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'

import BookingDialog from './BookingDialog'
import NotificationSlideshow from './NotificationCard'
import GeneralDialog from './GeneralDialog'

export default function Home() {
  const [isBookingModalOpen, setBookingModalOpen] = useState(false)
  const [isPrescriptionRenewalModalOpen, setPrescriptionRenewalModalOpen] =
    useState(false)
  const [isEConsultationModalOpen, setEConsultationModalOpen] = useState(false)

  return (
    <div className="h-screen bg-secondary flex flex-col">
      <div className="mt-32">
        <div className="text-5xl mb-20 font-medium text-primary self-start w-full px-40">
          <div>
            Velkommen til{' '}
            <span className="text-red">Medisinsk senter Fornebu</span>
          </div>
          <div className="mt-6">Hvordan kan vi hjelpe deg?</div>
        </div>
        <div className="flex gap-12 w-full px-40 mb-12">
          <a
            className="text-center flex-1 cursor-pointer"
            onClick={() => setBookingModalOpen(true)}
          >
            <Card className="bg-white">
              <CardHeader>
                <div className="flex flex-row items-center">
                  <img
                    className="h-12 mr-8"
                    src="/calender-outline.svg"
                    alt="calender"
                  />
                  <CardTitle>Bestill time</CardTitle>
                </div>
              </CardHeader>
            </Card>
          </a>
          <BookingDialog
            isOpen={isBookingModalOpen}
            onDismiss={() => setBookingModalOpen(false)}
          />
          <a
            className="text-center flex-1 cursor-pointer"
            onClick={() => setPrescriptionRenewalModalOpen(true)}
          >
            <Card className="bg-white border-none">
              <CardHeader className="flex flex-row items-center">
                <img
                  className="h-12 mr-8"
                  src="/document-pill.svg"
                  alt="document"
                />
                <CardTitle>Forny resept</CardTitle>
              </CardHeader>
            </Card>
          </a>
          <GeneralDialog
            isOpen={isPrescriptionRenewalModalOpen}
            onDismiss={() => setPrescriptionRenewalModalOpen(false)}
            dialogTitle={'Forny resept'}
            dialogDescription={
              'Du blir nå videresendt til helsenorge.no. Der kan du fornye din resept NB: Det er kun våre fastlegepasienter som kan fornye respet gjennom helsenorge'
            }
            buttonText={'Forny resept på helsenorge.no'}
            href={'https://helsenorge.no'}
          />
          <a
            className="text-center flex-1 cursor-pointer"
            onClick={() => setEConsultationModalOpen(true)}
          >
            <Card className="bg-white border-none">
              <CardHeader className="flex flex-row items-center">
                <img
                  className="h-12 mr-8"
                  src="/customer-service.svg"
                  alt="document"
                />
                <CardTitle>Start e-konsultasjon</CardTitle>
              </CardHeader>
            </Card>
          </a>
          <GeneralDialog
            isOpen={isEConsultationModalOpen}
            onDismiss={() => setEConsultationModalOpen(false)}
            dialogTitle={'Start e-konsultasjon'}
            dialogDescription={
              'Du blir nå videresendt til helsenorge.no. Der kan du starte din e-konsultasjon'
            }
            buttonText={'Start e-konsultasjon på helsenorge.no'}
            href={'https://helsenorge.no'}
          />
        </div>
        <div className="flex items-center justify-center px-40">
          <NotificationSlideshow />
        </div>
      </div>
    </div>
  )
}
