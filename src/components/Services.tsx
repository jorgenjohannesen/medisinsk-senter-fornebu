import React, { useState } from 'react'

import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { useLanguage } from '~/context/LanguageContext'
import { Service } from '~/gql/graphql'

import ServiceDialog from './ServiceDialog'

export default function Services({ services }) {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const handleCardClick = (service: Service) => {
    setSelectedService(service)
  }
  const { language } = useLanguage()
  return (
    <div className="services-layout bg-white flex flex-col">
      <div
        className="lg:text-3xl md:text-3xl text-2xl header mb-10 md:pt-2 pt-6 text-primary lg:px-44 md:px-20 px-6 text-left self-start md:w-3/4 w-full"
        style={{ fontWeight: 400 }}
      >
        {language === 'no'
          ? 'I tillegg til vår fastlegekonsultasjon kan vi også hjelpe med en rekke andre tjenester'
          : 'In addition to our general practitioner consultation, we can also help with a number of other services'}{' '}
      </div>
      <div className="p-4 mt-16 cards-container grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto lg:w-1/2 w-full md:px-24 lg:px-0 pb-28">
        {services.map((service) => (
          <Card
            key={service.name}
            className="bg-white text-card-foreground shadow-lg rounded-md border border-primary cursor-pointer shadow-custom"
            onClick={() => handleCardClick(service)}
          >
            <CardContent className="flex justify-center items-center p-6">
              <CardTitle className="text-2xl font-base leading-none tracking-tight">
                {service.name}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedService && (
        <ServiceDialog
          isOpen={!!selectedService}
          onDismiss={() => setSelectedService(null)}
          dialogTitle={selectedService.name}
          dialogDescription={selectedService.descriptionRaw}
        />
      )}
    </div>
  )
}
