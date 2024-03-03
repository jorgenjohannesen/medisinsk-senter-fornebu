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
      <div className="font-medium md:text-3xl text-2xl md:pt-2 pt-0 text-primary lg:px-44 md:px-20 px-4 text-left self-start md:w-3/4 w-full">
        {language === 'no'
          ? 'I tillegg til vår fastlegekonsultasjon kan vi også hjelpe med en rekke andre tjenester'
          : 'In addition to our general practitioner consultation, we can also help with a number of other services'}{' '}
      </div>
      <div className="p-4 md:mt-16 mt-4 cards-container grid grid-cols-1 lg:grid-cols-2 md:gap-8 gap-4 mx-auto lg:w-1/2 w-full md:px-24 lg:px-0 md:pb-28 pb-16">
        {services.map((service) => (
          <Card
            key={service.name}
            className="bg-white text-card-foreground rounded-md border border-primary cursor-pointer shadow-lg md:h-[68px] h-[56px] flex justify-center"
            onClick={() => handleCardClick(service)}
          >
            <CardContent className="flex justify-center items-center p-6">
              <CardTitle className="md:text-2xl text-base font-normal leading-none tracking-tight">
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
