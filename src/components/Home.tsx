import { useState } from 'react'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '~/context/LanguageContext'

import BookingDialog from './BookingDialog'
import NotificationSlideshow from './NotificationCard'

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false)
  const { language } = useLanguage()

  return (
    <div className="h-screen bg-secondary flex flex-col">
      <div className="mt-32">
        <div className="text-5xl mb-20 font-medium text-primary self-start w-full px-40">
          <div>
            {language === 'no' ? 'Velkommen til' : 'Welcome to'}{' '}
            <span className="text-red">Medisinsk senter Fornebu</span>
          </div>
          <div className="mt-6">
            {language === 'no'
              ? 'Hvordan kan vi hjelpe deg?'
              : 'How can we help you?'}
          </div>
        </div>
        <div className="flex gap-12 w-full px-40 mb-12">
          <a
            className="text-center flex-1 cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <Card className="bg-white">
              <CardHeader>
                <div className="flex flex-row items-center">
                  <img
                    className="h-12 mr-8"
                    src="/calender-outline.svg"
                    alt="calender"
                  />
                  <CardTitle>
                    {language === 'no' ? 'Bestill time' : 'Book an appointment'}
                  </CardTitle>
                </div>
              </CardHeader>
            </Card>
          </a>
          <BookingDialog
            isOpen={isModalOpen}
            onDismiss={() => setModalOpen(false)}
          />
          <a
            href="https://helsenorge.no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center flex-1"
          >
            <Card className="bg-white border-none">
              <CardHeader className="flex flex-row items-center">
                <img
                  className="h-12 mr-8"
                  src="/document-pill.svg"
                  alt="document"
                />
                <CardTitle>
                  {language === 'no' ? 'Bestill resept' : 'Renew prescription'}
                </CardTitle>
              </CardHeader>
            </Card>
          </a>
          <a
            href="https://helsenorge.no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center flex-1"
          >
            <Card className="bg-white border-none">
              <CardHeader className="flex flex-row items-center">
                <img
                  className="h-12 mr-8"
                  src="/customer-service.svg"
                  alt="document"
                />
                <CardTitle>
                  {language === 'no'
                    ? 'Start e-konsultasjon'
                    : 'Start e-consultation'}
                </CardTitle>
              </CardHeader>
            </Card>
          </a>
        </div>
        <div className="flex items-center justify-center px-40">
          <NotificationSlideshow />
        </div>
      </div>
    </div>
  )
}
