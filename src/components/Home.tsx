import { useState } from 'react'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '~/context/LanguageContext'

import BookingDialog from './BookingDialog'
import GeneralDialog from './GeneralDialog'
import NotificationSlideshow from './NotificationCard'

export default function Home({
  notifications,
  onHomeClick,
  onImportantInfoClick,
}) {
  const [isBookingModalOpen, setBookingModalOpen] = useState(false)
  const [isPrescriptionRenewalModalOpen, setPrescriptionRenewalModalOpen] =
    useState(false)
  const [isEConsultationModalOpen, setEConsultationModalOpen] = useState(false)
  const { language } = useLanguage()

  return (
    <div className="bg-secondary flex flex-col p-y-16">
      <div className="md:mt-32 mt-10">
        <div className="lg:text-5xl md:text-4xl text-2xl md:mb-20 mb-8 text-primary self-start w-full md:px-40 px-6">
          <div>
            {language === 'no' ? 'Velkommen til' : 'Welcome to'}{' '}
            <span>Medisinsk senter Fornebu</span>
          </div>
          <div className="md:mt-6 mt-4">
            {language === 'no'
              ? 'Hvordan kan vi hjelpe deg?'
              : 'How can we help you?'}
          </div>
        </div>
        <div className="flex flex-col gap-12 w-full lg:px-40 md:px-36 px-4 mb-12 lg:flex-row">
          <a
            className="text-center flex-1 cursor-pointer"
            onClick={() => setBookingModalOpen(true)}
          >
            <Card className="bg-white border border-primary">
              <CardHeader>
                <div className="flex flex-row items-center">
                  <img
                    className="md:h-12 h-8 mr-8"
                    src="/calender-outline.svg"
                    alt="calender"
                  />
                  <CardTitle className="text-lg md:text-2xl">
                    {language === 'no' ? 'Bestill time' : 'Book an appointment'}
                  </CardTitle>
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
            <Card className="bg-white border border-primary">
              <CardHeader className="flex flex-row items-center">
                <img
                  className="md:h-12 h-8 mr-8"
                  src="/document-pill.svg"
                  alt="document"
                />
                <CardTitle className="text-lg md:text-2xl">
                  {language === 'no' ? 'Bestill resept' : 'Renew prescription'}
                </CardTitle>
              </CardHeader>
            </Card>
          </a>
          <GeneralDialog
            isOpen={isPrescriptionRenewalModalOpen}
            onDismiss={() => setPrescriptionRenewalModalOpen(false)}
            dialogTitle={'Forny resept'}
            dialogDescription={
              language === 'no'
                ? 'Trykk på knappen under for å bli sendt til helsenorge.no, der kan du fornye din resept'
                : 'Press the button below to be redirected to helsenorge.no, here you can renew your prescription'
            }
            buttonText={
              language === 'no'
                ? 'Forny resept på helsenorge.no'
                : 'Renew prescription on helsenorge.no'
            }
            href={'https://helsenorge.no'}
          />
          <a
            className="text-center flex-1 cursor-pointer"
            onClick={() => setEConsultationModalOpen(true)}
          >
            <Card className="bg-white border border-primary">
              <CardHeader className="flex flex-row items-center">
                <img
                  className="md:h-12 h-8 mr-8"
                  src="/customer-service.svg"
                  alt="document"
                />
                <CardTitle className="md:text-2xl text-lg">
                  {language === 'no'
                    ? 'Start e-konsultasjon'
                    : 'Start e-consultation'}
                </CardTitle>
              </CardHeader>
            </Card>
          </a>
          <GeneralDialog
            isOpen={isEConsultationModalOpen}
            onDismiss={() => setEConsultationModalOpen(false)}
            dialogTitle={
              language === 'no'
                ? 'Start e-konsultasjon'
                : 'Start e-consultation'
            }
            dialogDescription={
              language === 'no'
                ? 'Trykk på knappen under for å bli sendt til helsenorge.no, der kan du starte din e-konsultasjon'
                : 'Press the button below to be redirected to helsenorge.no, there you can start your e-consultation'
            }
            buttonText={
              language === 'no'
                ? 'Start e-konsultasjon'
                : 'Start e-consultation'
            }
            href={'https://helsenorge.no'}
          />
        </div>
        <div className="flex items-center justify-center lg:px-40 px-0 w-full pb-8 lg:pb-0">
          <NotificationSlideshow
            notifications={notifications}
            onImportantInfoClick={onImportantInfoClick}
            onHomeClick={onHomeClick}
          />
        </div>
      </div>
    </div>
  )
}
